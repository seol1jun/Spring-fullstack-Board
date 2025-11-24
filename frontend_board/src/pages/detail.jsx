import React, {useEffect, useState}from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./detail.css";

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState(null); //단일 게시물이기에 posts가 아닌 post임.

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`http://localhost:8080/board/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        setPost(res.data);
    })
    .catch((err) => {
        console.error("게시글 상세 조회 실패:", err);
        alert("게시글을 불러오는 데 실패했습니다.");
    });

}, [id]);


const handleDelte = () => {
  const confirmed = window.confirm("정말로 이 글을 삭제하시나요?");
  if (confirmed) {

    axios.delete(`http://localhost:8080/board/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(() => {
      alert(`ID ${id}번 글이 삭제되었습니다.`);
      window.location.href = "/";
    })
    .catch((err) => {
      console.error("삭제 실패:", err);
      alert("게시글 삭제에 실패했습니다.");
    });

  }
};


  if(!post) {
    return <p>불러오는 중</p>
  }

  return (
   <div className="detail-container">
    <h2 className="detail-title">글 상세 보기 (ID: {id})</h2>
    <div className="detail-card">
      <p><strong>제목: </strong>{post.title}</p>
      <p><strong>작성자: </strong>{post.name}</p>
      <p><strong>내용: </strong>{post.content}</p>
    </div>
    <div className="detail-buttons">
      <Link to={`/update/${id}`} className="edit-button">수정하기</Link>
      <button onClick={handleDelte} className="delete-button">삭제하기</button>
    </div>
   </div>
  );
}
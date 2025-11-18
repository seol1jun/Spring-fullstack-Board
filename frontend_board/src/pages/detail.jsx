import React, {useEffect, useState}from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./detail.css";

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState(null); //단일 게시물이기에 posts가 아닌 post임.

  useEffect(() => { //얘로 서버에서 내용을 가져옴, useEffect는 페이지가 처음 열릴 때 한 번만 실행됨
    axios.get(`http://localhost:8080/board/${id}`) //get의 api에게 요청을 보내서 데이터를 가져옴
    .then((res) => {
        setPost(res.data);
    })
    .catch((err) => {
        console.error("게시글 목록 조회 실패:", err);
        alert("게시글 목록을 불러오는 데 실패했습니다.");
    })
  }, []);

  const handleDelte = () => {
    const confirmed = window.confirm("정말로 이 글을 삭제하시나요?");
    if (confirmed) {
      axios.delete(`http://localhost:8080/${id}`)
      .then(() => {
        alert(`ID ${id}번 글이 삭제되었습니다.`);
        window.location.href = "/" //nevigate 써도 되지않나? 나중에 한 번 써보기
      })
      .catch ((err) => {
        console.error("삭제 실패:", err);
        alert("게시글 삭제에 실패했습니다.");
      })
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
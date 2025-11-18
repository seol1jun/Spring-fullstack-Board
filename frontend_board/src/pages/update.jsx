import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate  } from "react-router-dom";
import axios from "axios";
import "./update.css";

export default function Update() {

  const { id } = useParams(); //내용을 받아오기 위해 useParams사용
  const nevigate = useNavigate();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => { //얘로 서버에서 내용을 가져옴, useEffect는 페이지가 처음 열릴 때 한 번만 실행됨
    axios.get(`http://localhost:8080/board/${id}`) //get의 api에게 요청을 보내서 데이터를 가져옴
    .then((res) => {
        const post = res.data;
        setTitle(post.title)
        setName(post.name)
        setContent(post.content)
    })
    .catch((err) => {
        console.error("게시글 목록 조회 실패:", err);
        alert("게시글 목록을 불러오는 데 실패했습니다.");
    })
  }, [id]);

  const handleSubmit = async (e) => { //수정하기 버튼을 눌렀을 때 수정이 되어야함. 처음에 create에서 데이터를 보내는 것과 같이 동일하게 설정해줌.
    e.preventDefault(); //미리 새로고침 방지하기위해 설정

    try{
      await axios.patch("http://localhost:8080/board", {
        id: parseInt(id), //현재 문자열을 숫자로 변경
        title,
        content,
        name
      })
      alert("게시글이 성공적으로 수정되었습니다.");
      nevigate(`/board/${id}`);
    } catch(error) {
      console.error("실패:", error);
      alert("게시글 수정이 실패되었습니다.");
    }
  }

  return (
    <div className="update-container">
      <h2 className="update-title">글 수정하기 (ID : {id})</h2>
      <form className="update-form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="수정할 제목"
        className="update-input"
        value = {title}
        onChange = {(e) => setTitle(e.target.value)} //얘를 통해서 사용자 입력을 상태에 반영해야함
        /> <br/>
        <textarea
        placeholder="수정할 내용"
        className="update-textarea"
        value = {content}
        onChange = {(e) => setContent(e.target.value)} //얘를 통해서 사용자 입력을 상태에 반영해야함
        /> <br/>
        <button type="submit" className="update-button">수정하기</button>
      </form>
    </div>
  );
}
import React, { useState } from "react";
import axios from "axios";
import "./create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => { //제출을 하는 버튼에 들어갈 핸들함수를 만들어줌.
    e.preventDefault(); //새로고침을 막기 위한 함수
    try{ //post는 백엔드로 데이터를 전송하기 위해서 설정해줌.
        const response = await axios.post("http://localhost:8080/create", {title: title, name: name, content: content}) 
        console.log("성공: ", response.data);
        alert("게시글이 작성되었습니다.");

        setTitle(""); //다 만들어졌기에 다시 초기 세팅을 null로 해줌
        setName("");
        setContent("");
    } catch(error) {
        console.error("실패: ", error);
        alert("게시글 작성에 실패하였습니다.");
    }
  }
  return (
    <div className="create-container">
      <h2 className="create-title">글 작성</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          className="create-input"
          value = {title}
          onChange={(e) => setTitle(e.target.value)}
          /> <br/>
          <input
          type="text"
          placeholder="작성자"
          className="create-input"
          value = {name}
          onChange={(e) => setName(e.target.value)}
          /> <br/>
          <textarea
          placeholder="내용"
          className="create-textarea"
          />
          <button type="submit" className="create-button">작성하기</button>
          value = {content}
          onChange={(e) => setContent(e.target.value)}
      </form>
    </div>
  );
}
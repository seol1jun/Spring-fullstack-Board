import React from "react";
import { useParams } from "react-router-dom";
import "./update.css";

export default function Update() {
  const { id } = useParams(); //내용을 받아오기 위해 useParams사용

  return (
    <div className="update-container">
      <h2 className="update-title">글 수정하기 (ID : {id})</h2>
      <form className="update-form">
        <input
        type="text"
        placeholder="수정할 제목"
        className="update-input"
        /> <br/>
        <textarea
        placeholder="수정할 내용"
        className="update-textarea"
        /> <br/>
        <button type="submit" className="update-button">수정하기</button>
      </form>
    </div>
  );
}
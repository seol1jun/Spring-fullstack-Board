import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./create.css";

export default function Create() {

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8080/create",
        {
          title,
          name,
          content
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("성공:", response.data);
      alert("게시글이 작성되었습니다.");
      navigate("/");

      setTitle("");
      setName("");
      setContent("");

    } catch (error) {
      console.error("실패:", error);
      alert("게시글 작성에 실패했습니다.");
    }
  };

  return (
    <div className="create-container">
      <h2 className="create-title">글 작성</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          className="create-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="작성자"
          className="create-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="내용"
          className="create-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="create-button">작성하기</button>
      </form>
    </div>
  );
}

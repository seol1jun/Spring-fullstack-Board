import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"; // 로그인 페이지와 같은 디자인 재사용

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/auth/signup", {
        username,
        password
      });

      alert("회원가입 완료! 로그인 해주세요.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("회원가입 실패! ");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">회원가입</h2>

        <form className="login-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="아이디"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="비밀번호"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

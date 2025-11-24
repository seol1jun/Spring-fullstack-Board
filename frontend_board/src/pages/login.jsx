import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username,
        password
      });

      const token = res.data.token;
      localStorage.setItem("token", token);  // 저장

      alert("로그인 성공!");
      navigate("/");   // 홈으로 이동

    } catch (error) {
      alert("로그인 실패 (아이디와 비밀번호를 확인하세요.)");
    }
  };

  return (
    <div className="login-page">
        <div className="login-container">
        <h2 className="login-title">Board Service 로그인</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            />
            <input 
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            />
            <button type="submit" className="login-button">로그인</button>
        </form>
        <div className="signup-link-wrapper">
          <p>계정이 없으신가요?</p>
          <Link to="/signup" className="signup-link">회원가입 하기</Link>
        </div>
        </div>
    </div>
  );
}

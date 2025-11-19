import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  // 로그아웃 기능
  const handleLogout = () => {
    localStorage.removeItem("token"); // JWT 삭제
    alert("로그아웃 되었습니다.");
    navigate("/login"); // 로그인 페이지로 이동
  };

  const isLoggedIn = !!localStorage.getItem("token"); // 토큰 존재 여부

  return (
    <nav className="header">
      <Link to="/" className="nav-link">게시판 홈</Link>
      <Link to="/create" className="nav-link">글 작성</Link>

      {isLoggedIn ? (
        <button className="logout-btn" onClick={handleLogout}>로그아웃</button>
      ) : (
        <Link to="/login" className="nav-link">로그인</Link>
      )}
    </nav>
  );
}

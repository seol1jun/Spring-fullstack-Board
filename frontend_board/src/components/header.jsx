import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/" className="nav-link">게시판 홈</Link>
      <Link to="/create" className="nav-link">글 작성</Link>
    </nav>
  );
}
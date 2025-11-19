import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 🔥 1) 로그인 토큰 확인
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return; // axios 요청 실행 안 함
    }

    // 🔥 2) 게시글 목록 불러오기
    axios
      .get("http://localhost:8080/board", {
        headers: {
          Authorization: `Bearer ${token}`, // JWT 넣기
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("게시글 목록 조회 실패:", err);
        alert("게시글을 불러오는 데 실패했습니다.");
      });
  }, [navigate]);

  return (
    <div className="home-container">
      <h2 className="home-title">게시판 목록</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/board/${post.id}`} className="post-link">
              <span className="post-title">{post.title}</span>
              <span className="post-author"> - {post.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

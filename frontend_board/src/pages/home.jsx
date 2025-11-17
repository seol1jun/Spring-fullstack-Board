import React, { useEffect, useState } from "react"; //내용을 가져와서 사용하기 위해서 useEffect, useState 사용
import "./home.css";
import { Link } from "react-router-dom";
import axios from "axios"; //데이터를 가져오기 위해서 import

export default function Home() {
  const [posts, setPosts] = useState([]); //게시글은 여러개이기 때문에 배열로 초기화, 백엔드에서 가져온 데이터는 이곳에 저장

  useEffect(() => { //얘로 서버에서 내용을 가져옴, useEffect는 페이지가 처음 열릴 때 한 번만 실행됨
    axios.get("http://localhost:8080//board") //get의 api에게 요청을 보내서 데이터를 가져옴
    .then((res) => {
        setPosts(res.data);
    })
    .catch((err) => {
        console.error("게시글 목록 조회 실패:", err);
        alert("게시글 목록을 불러오는 데 실패했습니다.");
    })
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">게시판 목록</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item"> {/* li = 리스트 형태라는 뜻 */}
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
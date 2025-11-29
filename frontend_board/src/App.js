import React from 'react'
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from './components/header'
import Home from "./pages/home";
import Create from "./pages/create";
import Detail from "./pages/detail";
import Update from "./pages/update";
import Login from "./pages/login";
import Signup from "./pages/signup";
import './App.css'

const App = () => {
  const location = useLocation();

  // 로그인 / 회원가입일 때는 헤더 숨김
  const hideHeader = location.pathname === "/login" || location.pathname === "/signup";

  // 로그인 여부 체크 (토큰이 존재하는지)
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        {/* "/" 접속 시: 로그인 X → login, 로그인 O → home */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} 
        />

        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create/>}/>
        <Route path="/board/:id" element={<Detail/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;

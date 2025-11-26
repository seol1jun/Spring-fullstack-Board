import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

  // 로그인 페이지와 회원가입 페이지에서는 Header 숨기기
  const hideHeader = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/board/:id' element={<Detail/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;

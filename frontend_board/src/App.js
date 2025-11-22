import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/header'
import Home from "./pages/home";
import Create from "./pages/create";
import Detail from "./pages/detail";
import Update from "./pages/update";
import Login from "./pages/login";
import './App.css'

const App = () => {
  const location = useLocation();

  // 로그인 페이지에서는 Header 숨기기
  const hideHeader = location.pathname === "/login";

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/board/:id' element={<Detail/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;

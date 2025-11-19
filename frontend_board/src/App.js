import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/header'
import Home from "./pages/home";
import Create from "./pages/create";
import Detail from "./pages/detail";
import Update from "./pages/update";
import Login from "./pages/login";
import './App.css'


const App = () => {
  return (
    <div>
      <Header/>
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

export default App
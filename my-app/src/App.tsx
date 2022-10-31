import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Blog_Page from "./pages/Blog-Page/blogPage"
import Admin from "./pages/Admin/AdminPage"

function App() {
  return (
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/blog/:id" element={<Blog_Page/>}/>
    <Route path="/admin" element={<Admin/>}/>
    </Routes>
  );
}

export default App;

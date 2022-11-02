import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin/AdminPage";
import Navbar from "./components/Navbar";
import Edit from "./pages/Admin/pages/Edit";
import Create from "./pages/Admin/pages/Create";
import SingleBlog from "./pages/SingleBlog/SingleBlog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/single_blog/:id" element={<SingleBlog />} />
      </Routes>
    </>
  );
}

export default App;

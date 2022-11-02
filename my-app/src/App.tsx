import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Admin from "./pages/Admin/AdminPage"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/admin" element={<Admin/>}/>
    </Routes>
    </>
  );
}

export default App;

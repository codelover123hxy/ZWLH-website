import logo from './logo.svg';
import './App.css';
import './assets/styles/common.scss'
import React from 'react'
import router from './router';
import { BrowserRouter as Router, useRoutes, Routes, Route, Navigate, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    // <Router>
    <div className="App">
      <Navbar></Navbar>
      {/* <Routes>
        <Route path="/" element={ <Navigate to="/home" />}/>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/personalCenter" element={<PersonalCenter/>}></Route>
        <Route path="/knowledgeGraph" element={<KnowledgeGraph/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/course" element={<Course/>}></Route>
      </Routes> */}
      { useRoutes(router) }
      { 
         false &&
        <Footer></Footer>
      }
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import App from './App.js';
import Tasks from './Tasks.js'

function Navbar() {
  return (
    <BrowserRouter>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tasks">
              Tasks
            </Link>
          </li>
        </ul>
        <div className="content">
          <Routes>
            {/* <Route exact path="/" element={<App/>} /> */}
            <Route path="/tasks" element={<Tasks/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;

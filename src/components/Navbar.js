import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './Navbar.css';
import { App, Tasks } from './index.js';

function Navbar() {
  return (
    <BrowserRouter>
      <div className="nav">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/tasks">
              Tasks
            </NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;

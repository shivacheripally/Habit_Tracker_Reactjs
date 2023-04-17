import React from 'react';
import './Navbar.css';
import { Tasks, AddHabit, Home } from './index.js';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/addhabit">Add Habit</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

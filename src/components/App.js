import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Tasks, AddHabit, Navbar, Home } from './index.js';

function App() {

  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/addhabit" element={<AddHabit />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

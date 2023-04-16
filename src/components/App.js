import React,{useState} from "react";
import "./App.css";
import {Navbar} from './index.js';

function App() {
  const [value,setValue] = useState(false);

  return (
    <div>
      <Navbar />
      <h1>Habit Tracker</h1>
      <div className="add-page">
        <input type="text"/>
        <button>+ Add Habit</button>
      </div>
    </div>
  );
}

export default App;
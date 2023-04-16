import React,{useState} from "react";
import "./App.css";

function App() {
  const [value,setValue] = useState(false);

  return (
    <div>
      <h1>Habit Tracker</h1>
      <div className="add-page">
        <input type="text"/>
        <button>+ Add Habit</button>
      </div>
    </div>
  );
}

export default App;
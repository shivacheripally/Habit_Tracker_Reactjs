import React, { useState } from 'react';
import {Navbar} from './index.js';
import { data } from './index.js';
import './App.css';
function App() {
  const [value, setValue] = useState('');

  const takeInput = (input) => {
    setValue(input.target.value);
  }

  const submitValue = () => {
    data = [...data,value];
    setValue('');
  }

  return (
    <div>
      <Navbar />
      {/* <Tasks /> */}
      <h1>Habit Tracker</h1>
      <div className="add-page">
        <input onChange={takeInput} type="text" value={value}/>
        <button onClick={submitValue} type=''>+ Add Habit</button>
      </div>
    </div>
  );
}

export default App;

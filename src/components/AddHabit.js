import React, { useState } from 'react';
// import {data} from './index.js';

import './AddHabit.css';
function AddHabit() {
  const [value, setValue] = useState('');

  const takeInput = (input) => {
    setValue(input.target.value);
  }

  const submitValue = () => {
    // data = [...data,value];
    setValue('');
  }

  return (
    <div>
      <h1>Habit Tracker</h1>
      <div className="add-page">
        <input onChange={takeInput} type="text" value={value}/>
        <button onClick={submitValue} type=''>+ Add Habit</button>
      </div>
    </div>
  );
}

export default AddHabit;

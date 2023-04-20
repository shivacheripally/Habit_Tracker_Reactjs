import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {addHabit} from '../actions/index.js';
import {NONE} from '../actions/actionTypes';
import './AddHabit.css';
function AddHabit() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const takeInput = (input) => {
    setValue(input.target.value);
  }

  const habit = {
    title:"title",
    days : [
      {
        day: 1,
        status: NONE,
      },
      {
        day: 2,
        status: NONE,
      },
      {
        day: 3,
        status: NONE,
      },
      {
        day: 4,
        status: NONE,
      },
      {
        day: 5,
        status: NONE,
      },
      {
        day: 6,
        status: NONE,
      },
      {
        day: 7,
        status: NONE,
      },
    ],
  };

  // dispatch(addHabit(habit));


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

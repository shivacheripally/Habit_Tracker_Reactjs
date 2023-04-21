import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../actions/index.js';
import { DONE, NOTDONE, NOTSEEN } from '../actions/actionTypes';
import './AddHabit.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../actions/index.js';
import { DONE, NOTDONE, NOTSEEN } from '../actions/actionTypes';
import './AddHabit.css';

function AddHabit() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHabit = {
      title: value,
      days: [
        {
          day: 1,
          status: NOTDONE,
        },
        {
          day: 2,
          status: DONE,
        },
        {
          day: 3,
          status: NOTSEEN,
        },
      ],
    };
    
    dispatch(addHabit(newHabit));
    setValue('');
  }

  return (
    <div>
      <h1>Habit Tracker</h1>
      <div className="add-page">
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={(event) => setValue(event.target.value)} type="text"/>
          <button type="submit">
            + Add Habit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddHabit;


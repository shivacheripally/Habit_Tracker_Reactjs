import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../actions/index.js';
import { DONE, NOTDONE, NOTSEEN } from '../actions/actionTypes';
import './AddHabit.css';

function AddHabit() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const newHabit = {
  //     title: 'Read a book',
  //     days: [
  //       {
  //         day: 1,
  //         status: NOTDONE,
  //       },
  //       {
  //         day: 2,
  //         status: DONE,
  //       },
  //       {
  //         day: 3,
  //         status: NOTSEEN,
  //       },
  //     ],
  //   };
  //   dispatch(addHabit(newHabit));
  // }, [dispatch]);

  const takeInput = (input) => {
    setValue(input.target.value);
  };

  const submitValue = () => {
    setValue('');
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <div className="add-page">
        <input onChange={takeInput} type="text" value={value} />
        <button onClick={submitValue} type="">
          + Add Habit
        </button>
      </div>
    </div>
  );
}

export default AddHabit;

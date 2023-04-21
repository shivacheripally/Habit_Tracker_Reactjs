import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../actions/index";
import { useNavigate } from "react-router-dom";
import {days} from '../days.js';
import './AddHabit.css';

const AddHabits = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title) {
      const habit = {
        title,
        days
      };
      
      dispatch(addHabit(habit));
      navigate("/tasks");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-page">
        <input onChange={(event) => setTitle(event.target.value)}type="text"/>
        <button type="submit">+ Add Habit</button>
      </form>
    </div>
  );
};

export default AddHabits;

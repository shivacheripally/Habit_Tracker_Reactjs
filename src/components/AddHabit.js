import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../actions/index";
import { NONE } from "../actions/actionTypes";
import { useNavigate } from "react-router-dom";
import {days} from '../days.js';
import './AddHabit.css';

const AddHabits = () => {
  const dispatch = useDispatch();

  // hooks to set title and details of habit
  const [title, setTitle] = useState("");
  // const [details, setDetails] = useState("");

  // error states
  const [titleError, setTitleError] = useState(false);
  // const [detailsError, setDetailsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // set error state to false of text fields
    setTitleError(false);
    // setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    console.log("title",title);
    if (title) {
      const habit = {
        title,
        days
      };
      console.log(habit);
      dispatch(addHabit(habit));
      navigate("/");
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

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DONE, NOT_DONE, NONE } from '../actions/actionTypes';
import { updateStatus } from '../actions/index.js';
import './TaskView.css';

function TaskView(props) {
  const indexValue = props.menuVisibility.habitIndex;
  const dispatch = useDispatch();

  const days = props.habits[indexValue].days;
  const title = props.habits[indexValue].title;

  const [status, setStatus] = useState('');

  var isVisible = 'hide';

  const doneClick = (index) => {
    setStatus(DONE);
    dispatch(updateStatus(DONE, index, title));
  };

  const notDoneClick = (index) => {
    setStatus(NOT_DONE);
    dispatch(updateStatus(NOT_DONE, index, title));
  };

  const notSeenClick = (index) => {
    setStatus(NONE);
    dispatch(updateStatus(NONE, index, title));
  };

  const getStyleForStatus = (status, icon) => {
    let color;
    if (status === 'DONE') {
      if (icon === "check") color = 'green';
    } 
    else if (status === 'NOT_DONE') {
      if (icon === "xmark") color = 'red';
    } 
    else if (status === 'NONE') {
      if (icon === "dot") color = 'white';
    } 
    else {
      color = 'black';
    }
    return { color };
  };

  if (props.menuVisibility.visible) {
    isVisible = 'show';
  }
  return (
    <div id="menu" className={isVisible}>
      <button onMouseDown={() => props.clickEvent(indexValue)}>Close</button>
      <h1>{title}</h1>
      {days.map((day, index) => {
        return (
          <div className="day-box" key={`index-${index}`}>
            <p>DATE: {day.day}</p>
            <div className="icons">
              <span>
                <i
                  style={getStyleForStatus(day.status, "check")}
                  onClick={() => doneClick(index, day.status)}
                  className="fa-regular fa-circle-check"
                ></i>
              </span>
              <span>
                <i
                  style={getStyleForStatus(day.status,"xmark")}
                  onClick={() => notDoneClick(index, day.status)}
                  className="fa-regular fa-circle-xmark"
                ></i>
              </span>
              <span>
                <i
                  style={getStyleForStatus(day.status,"dot")}
                  onClick={() => notSeenClick(index, day.status)}
                  className="fa-regular fa-circle-dot"
                ></i>
              </span>
            </div>
            <p>STATUS: {day.status}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TaskView;

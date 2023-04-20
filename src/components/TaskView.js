import React, { useState } from 'react';
import { SevenDays } from './index.js';
import './TaskView.css';

function TaskView(props) {
  const { store } = props;
  
  const indexValue = props.menuVisibility.indexValue;

  const days = store.getState().state.habits[indexValue].days;
  
  var isVisible = 'hide';

  if (props.menuVisibility.visible) {
    isVisible = 'show';
  }
  return (
    <div id="menu" className={isVisible}>
      <button onMouseDown={() => {props.clickEvent(indexValue)}}>Close</button>
      {days.map((day) => {
        return (
          <div>
            <p>DATE: {day.day}</p>
            <p>STATUS: {day.status}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TaskView;

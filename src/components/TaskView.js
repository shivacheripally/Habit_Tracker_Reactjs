import React, { useState } from 'react';
import { SevenDays } from './index.js';
import './TaskView.css';

function TaskView(props) {
  const { store } = props;
  
  const state = store.getState().state;

  const indexValue = props.menuVisibility.indexValue;
  console.log(indexValue);
  const days = state.habits[indexValue].days;
  
  var isVisible = 'hide';

  if (props.menuVisibility.visible) {
    isVisible = 'show';
  }
  return (
    <div id="menu" className={isVisible}>
      <button onMouseDown={props.clickEvent}>Close</button>
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

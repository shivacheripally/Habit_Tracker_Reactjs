import React, { useState } from 'react';
import { SevenDays } from './index.js';
import { connect } from 'react-redux';
import './TaskView.css';

function TaskView(props) {
  const habits = props.habits.state.habits;
  
  const indexValue = props.menuVisibility.indexValue;

  const days = habits[indexValue].days;
  
  var isVisible = 'hide';

  if (props.menuVisibility.visible) {
    isVisible = 'show';
  }
  return (
    <div id="menu" className={isVisible}>
      <button onMouseDown={() => {props.clickEvent(indexValue)}}>Close</button>
      {days.map((day,index) => {
        return (
          <div key={`index-${index}`}>
            <p>DATE: {day.day}</p>
            <p>STATUS: {day.status}</p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    habits: state
  }
}

export default connect(mapStateToProps)(TaskView);

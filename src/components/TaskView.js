import React, { useState } from 'react';
import { SevenDays } from './index.js';
import { connect } from 'react-redux';
import './TaskView.css';

function TaskView(props) {

  const days = props.habit.days;
  
  var isVisible = 'hide';

  if (props.menuVisibility.visible) {
    isVisible = 'show';
  }
  return (
    <div id="menu" className={isVisible}>
      <button onMouseDown={props.clickEvent}>Close</button>
      {days.map((day,index) => {
        return (
          <div className="day-box" key={`index-${index}`}>
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

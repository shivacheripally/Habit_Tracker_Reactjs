import React, { useState } from 'react';
import { connect } from 'react-redux';
import './TaskView.css';

function TaskView(props) {
  // console.log(props.habit)
  const days = props.habit.days;
  
  var isVisible = 'hide';

  if (props.menuVisibility.visible) {
    isVisible = 'show';
  }
  return (
    <div id="menu" className={isVisible}>
      <button onMouseDown={props.clickEvent}>Close</button>
      <h1>{props.habit.title}</h1>
      {days.map((day,index) => {
        return (
          <div className="day-box" key={`index-${index}`}>
            <p>DATE: {day.day}</p>
            <div className="icons">
              <span><i className="fa-regular fa-circle-check"></i></span>
              <span><i class="fa-regular fa-circle-xmark"></i></span>
              <span><i class="fa-regular fa-circle-dot"></i></span>
            </div>
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

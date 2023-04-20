import React, { useState } from 'react';
import { SevenDays } from './index.js';
import { connect } from 'react-redux';
import './TaskView.css';

function TaskView(props) {
  const { habits } = props;
  
  
  // const indexValue = props.menuVisibility.indexValue;

  // const days = habits[indexValue].days;
  
  var isVisible = 'hide';

  if (props.menuVisibility.visible) {
    isVisible = 'show';
  }
  return (
    <div id="menu" className={isVisible}>
      <button onMouseDown={() => {props.clickEvent(indexValue)}}>Close</button>
      {/* {days.map((day) => {
        return (
          <div>
            <p>DATE: {day.day}</p>
            <p>STATUS: {day.status}</p>
          </div>
        );
      })} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps",state.state.habits);
  return{
    habits:state,
    days: state.state.habits[0].days
  }
}

export default connect(mapStateToProps)(TaskView);

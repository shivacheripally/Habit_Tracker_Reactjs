import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { DONE, NOT_DONE, NONE } from '../actions/actionTypes';
import { updateStatus } from '../actions/index.js';
import './TaskView.css';

function TaskView(props) {
  const dispatch = useDispatch();
  const days = props.habit.days;

  var isVisible = 'hide';

  const doneClick = (index, title) => {
    dispatch(updateStatus(DONE, index, title));
  };

  const notDoneClick = (index, title) => {
    dispatch(updateStatus(NOT_DONE, index, title));
  };

  const notSeenClick = (index, title) => {
    dispatch(updateStatus(NONE, index, title));
  };

  if (props.menuVisibility.visible) {
    isVisible = 'show';
  }
  return (
    <div id="menu" className={isVisible}>
      <button onMouseDown={props.clickEvent}>Close</button>
      <h1>{props.habit.title}</h1>
      {days.map((day, index) => {
        return (
          <div className="day-box" key={`index-${index}`}>
            <p>DATE: {day.day}</p>

            <div className="icons">
              <span>
                <i
                  style={{ color: day.color }}
                  onClick={() => doneClick(index, props.habit.title)}
                  className="fa-regular fa-circle-check"
                ></i>
              </span>
              <span>
                <i
                  onClick={() => notDoneClick(index, props.habit.title)}
                  className="fa-regular fa-circle-xmark"
                ></i>
              </span>
              <span>
                <i
                  onClick={() => notSeenClick(index, props.habit.title)}
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

const mapStateToProps = (state) => {
  return {
    habits: state,
  };
};

export default connect(mapStateToProps)(TaskView);

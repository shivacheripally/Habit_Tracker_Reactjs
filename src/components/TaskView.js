import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import {updateStatus} from '../actions/index.js';
import './TaskView.css';

function TaskView(props) {
  const dispatch = useDispatch();
  const days = props.habit.days;

  const [status,setStatus] = useState('NONE');
  
  console.log("day data",days);

  var isVisible = 'hide';

  const doneClick = (index,title) => {
    setStatus("DONE");
    dispatch(updateStatus("DONE",index,title))
  }

  const notDoneClick = () => {
    console.log("NOT DONE");
  }

  const notSeenClick = () => {
    console.log("NOT SEEN");
  }

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
            {/* <p>COLOR:{day.color}</p> */}
            <div className="icons">
              <span><i onClick={()=>doneClick(index,props.habit.title)} className="fa-regular fa-circle-check"></i></span>
              <span><i onClick={notDoneClick} className="fa-regular fa-circle-xmark"></i></span>
              <span><i onClick={notSeenClick} className="fa-regular fa-circle-dot"></i></span>
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

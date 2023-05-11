import React, { useState } from 'react';
import { TaskView } from './index.js';
import { connect } from 'react-redux';
import './Task.css';

function Tasks(props) {
  const habits = props.habits.habits;
  const [visible, setVisible] = useState(false);
  const [habitIndex,setHabitIndex] = useState(0);

  const handleClick = (value) => {
    setVisible(!visible);
    setHabitIndex(value);
  };

  return (
    <div className="task">
      <h1>Habits</h1>
      {habits.map((habit, index) => {
        return (
          <div  key={`index-${index}`}>
            <h2 onClick={()=>handleClick(index)}>{habit.title}</h2>
            <TaskView menuVisibility={{visible,habitIndex}} clickEvent={handleClick} habits={habits} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    habits: state
  }
}

export default connect(mapStateToProps)(Tasks);
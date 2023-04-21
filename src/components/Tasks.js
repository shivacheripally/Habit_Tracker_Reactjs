import React, { useState } from 'react';
import { TaskView } from './index.js';
import { connect } from 'react-redux';

function Tasks(props) {
  const habits = props.habits.habits;
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    setVisible(!visible);
  };

  return (
    <div>
      <h1>Tasks</h1>
      {habits.map((habit, index) => {
        return (
          <div>
            <h4 onClick={handleClick}>{habit.title}</h4>
            
            <TaskView habit={habit} key={`index-${index}`} menuVisibility={{visible}} clickEvent={handleClick} habits={habits} />
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
import React, { useState } from 'react';
import { TaskView } from './index.js';
import { connect } from 'react-redux';

function Tasks(props) {
  console.log("props",props.habits);
  const habits = props.habits;

  console.log("habits",habits);

  const [visible, setVisible] = useState(false);
  const [indexValue,setIndexValue] = useState(0);

  const handleClick = (value) => {
    setVisible(!visible);
    setIndexValue(value);
  };

  return (
    <div>
      <h1>Tasks</h1>
      {/* {console.log('Tasks',habits)} */}
      {/* {habits.map((habit, index) => {
        return (
          <div>
            <h4 onClick={()=>handleClick(index)}>{habit.title}</h4>
            
            <TaskView key={`index-${index}`} menuVisibility={{visible,indexValue}} clickEvent={handleClick} habits={habits} />
          </div>
        );
      })} */}
    </div>
  );
}

const mapStateToProps = (state)=>{
  // console.log("mapStateToProps",state);
  return{
    habits: state
  }
}

export default connect(mapStateToProps)(Tasks);
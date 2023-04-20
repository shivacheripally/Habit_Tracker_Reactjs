import React, { useState } from 'react';
import { TaskView } from './index.js';

function Tasks(props) {
  const { store } = props;
  
  const habits = store.getState().state.habits;
  // console.log("habits",habits);
  const [visible, setVisible] = useState(false);
  const [indexValue,setIndexValue] = useState(0);

  const handleClick = (e) => {
    setVisible(!visible);
    e.stopPropagation();
  };

  const manageValue = (value) => {
    setIndexValue(value);
  }

  return (
    <div>
      <h1>Tasks</h1>

      {habits.map((habit, index) => {
        // {console.log("habit",index)}
        return (
          <div>
            <h4 onClick={handleClick} onClick={(index)=>manageValue()}>{habit.title}</h4>
            <TaskView key={`index-${index}`} menuVisibility={{visible,indexValue}} clickEvent={handleClick} store={store} />
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;

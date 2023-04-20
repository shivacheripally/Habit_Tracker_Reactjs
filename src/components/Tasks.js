import React, { useState } from 'react';
import { TaskView } from './index.js';

function Tasks(props) {
  const { store } = props;
  
  const habits = store.getState().state.habits;
  
  const [visible, setVisible] = useState(false);
  const [indexValue,setIndexValue] = useState(0);

  const handleClick = (value) => {
    setVisible(!visible);
    setIndexValue(value);
  };

  return (
    <div>
      <h1>Tasks</h1>

      {habits.map((habit, index) => {
        return (
          <div>
            <h4 onClick={()=>handleClick(index)}>{habit.title}</h4>
            
            <TaskView key={`index-${index}`} menuVisibility={{visible,indexValue}} clickEvent={handleClick} store={store} />
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;

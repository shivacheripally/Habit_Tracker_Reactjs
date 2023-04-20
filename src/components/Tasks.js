import React,{useState} from 'react';
// import { TaskView } from './index.js';

function Tasks(props) {
  const {store} = props;

  const habits = store.getState().state.habits;
  // console.log("habits",habits);
  return (
    <div>
      <h1>Tasks</h1>

      {habits.map((habit,index) => {
        {console.log("habit",habit.title)}
        return (
          <div>
            <h4>{habit.title}</h4>
          </div>
        );
      })}

    </div>
  );
}

export default Tasks;
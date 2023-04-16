import React from 'react';
import { data } from './index.js';

function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>
      <div className="list">
        {data.map(taskData => 
          (<h4>{taskData}</h4>))}
      </div>
    </div>
  );
}

export default Tasks;
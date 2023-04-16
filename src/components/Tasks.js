import React from 'react';
import { data } from './index.js';

function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>
      <div className="list">
        {data.map((taskData,index) => 
          (<h4 key={index}>{taskData}</h4>))}
      </div>
    </div>
  );
}

export default Tasks;
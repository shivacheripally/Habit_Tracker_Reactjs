import React,{useState} from 'react';
import { data } from './index.js';

function Tasks() {
  const [state,setState] = useState(false);

  const handleClick = (index) => {
    setState(!state);
    console.log('index',index);
  }

  return (
    <div>
      <h1>Tasks</h1>
      <div className="list">
        {data.map((taskData,index) => 
          (<h4 onClick={()=>handleClick(index)} key={index}>{taskData}</h4>))}
      </div>
    </div>
  );
}

export default Tasks;
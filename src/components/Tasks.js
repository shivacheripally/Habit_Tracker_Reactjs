import React,{useState} from 'react';
import { data,TaskView } from './index.js';

function Tasks() {
  const [index,setIndex] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = (value) => {
    setIndex(value);
    setVisible(!visible);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskView index={index} menuVisibility={visible} clickEvent={handleClick}/>
      <div className="list">
        {data.map((taskData,index) => 
          (<h4 onClick={()=>handleClick(index)} key={index}>{taskData}</h4>))}
      </div>
    </div>
  );
}

export default Tasks;
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
      {data.map(item => (
        <div key={item.date}>
          <p>Date: {item.date}</p>
          <p>Status: {item.status}</p>
          <p>Color: {item.color}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Tasks;
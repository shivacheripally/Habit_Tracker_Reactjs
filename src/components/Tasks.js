import React,{useState} from 'react';
import { list,TaskView } from './index.js';

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
      {list.map(item => (
        <div key={item.date}>
          <h4>{item}</h4>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Tasks;
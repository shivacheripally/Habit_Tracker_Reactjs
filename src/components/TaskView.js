import React,{useState} from 'react';
import {data, SevenDays} from './index.js';
import "./TaskView.css";

function TaskView(props){
  var isVisible = "hide";
  var index = props.index;
  const [clicked,setClicked] = useState(false);

  const isClicked=(value)=>{
    setClicked(!clicked);
    console.log(value);
  }

  if(props.menuVisibility){
    isVisible = "show";
  }

  return(
     <div id="menu" className={isVisible}>
       <button onMouseDown={props.clickEvent}>Close</button>
       <h1>{data[index]}</h1>
       <SevenDays isClicked={isClicked}/>
     </div>
  );
}

export default TaskView;
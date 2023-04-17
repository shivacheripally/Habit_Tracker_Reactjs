import React from 'react';
import {data} from './index.js';
import "./TaskView.css";

function TaskView(props){
  var isVisible = "hide";
  var index = props.index;
  
  if(props.menuVisibility){
    isVisible = "show";
  }

  return(
     <div onMouseDown={props.clickEvent} id="menu" className={isVisible}>
       <h1>{data[index]}</h1>
     </div>
  );
}

export default TaskView;
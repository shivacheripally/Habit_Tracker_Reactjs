import React,{useState} from 'react';

function Hooks(initialValue){
  const [value,setValue] = useState(initialValue);
  
  onchange = (newValue)=>{
    return{
      value,
      setValue: newValue
    }
  }
}
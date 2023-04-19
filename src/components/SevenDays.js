import React, { useState, useEffect } from "react";
import data from '../data.js';
import './SevenDays.css';

console.log('seven days',data);
function SevenDays(props) {

  return (
    <div className='container'>
      {data.map((day, index) => (
        <div key={index} className='date-box'>
          
        </div>
      ))}
    </div>
  );
}

export default SevenDays;

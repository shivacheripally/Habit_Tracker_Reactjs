import React, { useState, useEffect } from "react";
import data from '../data.js';
import './SevenDays.css';

console.log(data);
function SevenDays(props) {

  return (
    <div>
      {data.map(item => (
        <div key={item.date}>
          <p>Date: {item.date}</p>
          <p>Status: {item.status}</p>
          <p>Color: {item.color}</p>
        </div>
      ))}
    </div>
  );
}

export default SevenDays;

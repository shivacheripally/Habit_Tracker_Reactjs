import React from 'react';
import {days,quotations} from '../days.js';

const currentDate = new Date();
const date = currentDate.getDate();
const day = currentDate.getDay();

// Define an array of day names
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day name based on the index obtained from getDay()
const dayName = daysOfWeek[day];

const todayQuote = quotations[day];
function Home() {
  return (
      <div style={{backgroundColor:"black"}}>
        <h1 style={{color:"white"}}>Welcome to Habit Tracker</h1>
        <h1 style={{color:"white"}}>{days[0].day}</h1>
        <h1 style={{color:"white"}}>{dayName}</h1>
        <h1 style={{color:"white"}}>{todayQuote}</h1>
      </div>
  );
}

export default Home;

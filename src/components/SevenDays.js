import React, { useState, useEffect } from "react";
import './SevenDays.css';
function SevenDays() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const daysArr = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today.getTime() - i * oneDay);
      daysArr.push(date.toISOString().substring(0, 10));
    }
    setDays(daysArr);
  }, []);

  return (
    <div>
      {days.map((day, index) => (
        <div className='date-box'>
          <div key={index}>{day}</div>
          <div className="icons">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SevenDays;

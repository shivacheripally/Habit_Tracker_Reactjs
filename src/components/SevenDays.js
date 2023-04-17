import React, { useState, useEffect } from "react";
import './SevenDays.css';
function SevenDays(props) {
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
    <div className='container'>
      {days.map((day, index) => (
        <div className='date-box'>
          <div key={index}>{day}</div>
          <div className="icons">
            <span onClick={(value)=>props.isClicked('done')}><i class="fa-solid fa-check"></i></span>
            <span onClick={(value)=>props.isClicked('notdone')}><i class="fa-solid fa-xmark"></i></span>
            <span onClick={(value)=>props.isClicked('notseen')}><i class="fa-regular fa-circle-dot"></i></span>
          </div>
          <div className='status'><span>Staus: Not Seen</span></div>
        </div>
      ))}
    </div>
  );
}

export default SevenDays;

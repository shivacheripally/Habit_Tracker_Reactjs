import React from 'react';

let data = [];

const today = new Date();
const oneDay = 24 * 60 * 60 * 1000;
const daysArr = [];

for (let i = 6; i >= 0; i--) {
  const date = new Date(today.getTime() - i * oneDay);
  daysArr.push(date.toISOString().substring(0, 10));
}

for(let i = daysArr.length-1;i >= 0;--i){
  const obj = {
    date: daysArr[i],
    status: "NOT SEEN",
    color: "white"
  }
  data.push(obj);
}
console.log(data);

export default data;

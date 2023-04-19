import React from 'react';

const today = new Date();
const oneDay = 24 * 60 * 60 * 1000;
const daysArr = [];

for (let i = 6; i >= 0; i--) {
  const date = new Date(today.getTime() - i * oneDay);
  daysArr.push(date.toISOString().substring(0, 10));
}

const data = daysArr.reverse().map(date => ({
  date,
  status: "NOT SEEN",
  color: "white"
}));


export default data;

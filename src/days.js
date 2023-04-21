import { NONE,COLOR } from './actions/actionTypes';

// Get current date
const today = new Date();

// Create array to store previous dates
export const previousDates = [];

// Loop through previous 6 days and push to array
for (let i = 0; i < 7; i++) {
  const previousDay = new Date(today);
  previousDay.setDate(today.getDate() - i);
  previousDates.push(
    `${previousDay.getDate().toString().padStart(2, '0')}/` +
    `${(previousDay.getMonth() + 1).toString().padStart(2, '0')}/` +
    `${previousDay.getFullYear().toString()}`
  );
}

export const days = [
  {
    day: previousDates[0],
    status: NONE,
    color: COLOR
  },
  {
    day: previousDates[1],
    status: NONE,
    color: COLOR
  },
  {
    day: previousDates[2],
    status: NONE,
    color: COLOR
  },
  {
    day: previousDates[3],
    status: NONE,
    color: COLOR
  },
  {
    day: previousDates[4],
    status: NONE,
    color: COLOR
  },
  {
    day: previousDates[5],
    status: NONE,
    color: COLOR
  },
  {
    day: previousDates[6],
    status: NONE,
    color: COLOR
  },
];

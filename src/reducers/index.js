import { ADD_HABIT, UPDATE_HABIT_STATUS,DONE, NOT_DONE, NONE } from '../actions/actionTypes';
import {days} from '../days.js';
console.log(days);
const initialState = {
  habits: [
    {
      title: 'Go to Gym',
      days: [
        {
          day: 1,
          status: DONE,
        },
        {
          day: 2,
          status: NOT_DONE,
        },
        {
          day: 3,
          status: NONE,
        },
        {
          day: 4,
          status: DONE,
        },
        {
          day: 5,
          status: NONE,
        },
        {
          day: 6,
          status: NOT_DONE,
        },
        {
          day: 7,
          status: NOT_DONE,
        }
      ]
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        habits: [...state.habits, action.payload],
      };

    // structure of habit array
    // habits = [title, description, consistency[day, status]]

    case UPDATE_HABIT_STATUS:
      // get index of title from habits array
      const idx = state.habits
        .map((e) => {
          return e.title;
        })
        .indexOf(action.title);

      // use day - 1 as index of consistency array and change status of habit
      if (action.payload === DONE) {
        state.habits[idx].consistency[action.day - 1].status = NOT_DONE;
      } else if (action.payload === NOT_DONE) {
        state.habits[idx].consistency[action.day - 1].status = NONE;
      } else if (action.payload === NONE) {
        state.habits[idx].consistency[action.day - 1].status = DONE;
      }
      return state;
    default:
      return state;
  }
};

export default reducer;

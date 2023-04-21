import { ADD_HABIT, UPDATE_HABIT_STATUS,DONE, COLOR,NOT_DONE, NONE } from '../actions/actionTypes';
import {days,previousDates} from '../days.js';

const initialState = {
  habits: [
    {
      title: 'Go to Gym',
      days : [
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

    case UPDATE_HABIT_STATUS:

      const titleIndex = state.habits.map((habit, index) => {
        if (habit.title === action.title) {
          return index;
        }
      }).filter(item => item !== undefined)[0];
      
      if(action.status === DONE){
        state.habits[titleIndex].days[action.dayIndex].status = DONE
      }
      else if(action.status === NOT_DONE){
        state.habits[titleIndex].days[action.dayIndex].status = NOT_DONE
      }
      else if(action.status === NONE){
        state.habits[titleIndex].days[action.dayIndex].status = NONE
      }
      return state;
    default:
      return state;
  }
};

export default reducer;

import { ADD_HABIT, UPDATE_HABIT_STATUS,DONE, NOT_DONE, NONE } from '../actions/actionTypes';
import {days} from '../days.js';
console.log(days);
const initialState = {
  habits: [
    {
      title: 'Go to Gym',
      days,
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
      console.log("action",action);

      const titleIndex = state.habits.map((habit, index) => {
        if (habit.title === action.title) {
          return index;
        }
      }).filter(item => item !== undefined)[0];

      console.log("titleIndex",titleIndex);
      
      if(action.status === DONE){
        state.habits[titleIndex].days[action.dayIndex].status = DONE
        console.log("if done",state.habits[titleIndex].days[action.dayIndex]);
      }
      return state;
    default:
      return state;
  }
};

export default reducer;

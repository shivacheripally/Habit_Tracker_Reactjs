import {DONE,NOT_DONE,NONE,ADD_HABIT} from './actionTypes';

export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};
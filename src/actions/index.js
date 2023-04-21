import {DONE,UPDATE_HABIT_STATUS,NOT_DONE,NONE,ADD_HABIT} from './actionTypes';

export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};

export const updateStatus = (status, dayIndex, title) => {
  return {
    type: UPDATE_HABIT_STATUS,
    status,
    dayIndex,
    title
  };
};
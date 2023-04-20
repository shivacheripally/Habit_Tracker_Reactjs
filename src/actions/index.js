import {DONE,NOTDONE,NOTSEEN,ADD_HABIT} from './actionTypes';

export function addHabit(newHabit){
  return({
    type: ADD_HABIT,
    newHabit
  });
}
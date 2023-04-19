import {DONE,NOTDONE,NOTSEEN} from './actionTypes';
import {list} from '../HabitsList';

{
  type: DONE
}

{
  type: NOTDONE
}

{
  type: NOTSEEN
}

export function addHabit(newHabit){
  return({
    type: 'ADD_HABIT',
    list : [...list,newHabit]
  });
}
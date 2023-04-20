import React from 'react';
import {DONE,NOTDONE,NOTSEEN,ADD_HABIT,UPDATE} from '../actions/actionTypes.js';

const initialStatus = {
  habits : [
    {
      title: "Go to gym",
      days: [
        {
          day:1,
          status:DONE
        },
        {
          day:2,
          status:DONE
        },
        {
          day:3,
          status:DONE
        }
      ]
    }
  ]
}

export default function Status(state = initialStatus,action){
  console.log("action",action.newHabit);
  switch(action.type){
    case ADD_HABIT:
    console.log("ADDHABIT",state);
    return{
      habits:[...state.habits,action.newHabit]
    }
    default:
    return {
      state
    }
  }
}
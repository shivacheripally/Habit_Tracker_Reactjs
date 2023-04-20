import React from 'react';
import {DONE,NOTDONE,NOTSEEN,ADDHABIT,UPDATE} from '../actions/actionTypes.js';

const initialStatus = {
  habits : [
    {
      title: "Go to gym",
      days: [
        {
          day1:1,
          status:DONE
        },
        {
          day1:2,
          status:DONE
        },
        {
          day1:3,
          status:DONE
        }
      ]
    }
  ]
}

export default function Status(state = initialStatus,action){
  switch(action.type){
    case ADDHABIT:
    return{
      habits:[...state.habits,action.newHabit]
    }
    default:
    return {
      state
    }
  }
}
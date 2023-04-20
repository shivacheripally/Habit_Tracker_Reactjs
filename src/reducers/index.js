import React from 'react';
import {DONE,NOTDONE,NOTSEEN,ADDHABIT,UPDATE} from '../actions/actionTypes.js';

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
    },
    {
      title: "Read a book",
      days: [
        {
          day:1,
          status:NOTDONE
        },
        {
          day:2,
          status:DONE
        },
        {
          day:3,
          status:NOTSEEN
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
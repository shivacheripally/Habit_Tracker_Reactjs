import React from 'react';
import {DONE,NOTDONE,NOTSEEN} from '../actions/actionTypes.js';

export default function Status(status = [],action){
  if(action.type === DONE){

  }
  else if(action.type === NOTDONE){

  }
  else if(action.type === NOTSEEN){

  }
  else return status;
}
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Tasks, AddHabit, Navbar, Home } from './index.js';
// import {list} from '../HabitsList.js';
import { addHabit } from '../actions/index';
function App(props) {
  const {store} = props;
  // console.log(store.getState());
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks store={store}/>} />
          <Route path="/addhabit" element={<AddHabit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

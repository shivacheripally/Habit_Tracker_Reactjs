import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Tasks, AddHabit, Navbar, Home } from './index.js';
import {list} from '../HabitsList.js';
import {addHabit} from '../actions/index';
class App extends React.Component{
  componentDidMount(){
    const {store} = this.props;
    //make an api call
    //use actions
    store.dispatch(addHabit(list));
  }
  render(){
    return (
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/addhabit" element={<AddHabit />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

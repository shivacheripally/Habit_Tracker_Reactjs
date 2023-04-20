import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Tasks, AddHabit, Navbar, Home } from './index.js';
import { connect } from 'react-redux';

function App(props) {
  const {store} = props;
  console.log("app",props);
  // const habits = props.state.habits;
  // console.log("habits",habits);

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

const mapStateToProps = state => ({
  habits: state.habits
});

export default connect(mapStateToProps)(App);

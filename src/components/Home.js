import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ManageComponent } from './index.js';
function Home() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to Habit Tracker</h1>
        <ManageComponent />
      </div>
    </BrowserRouter>
  );
}

export default Home;

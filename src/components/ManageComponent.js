import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Tasks } from './index.js';

export default function ManageComponent() {
  return (
      <div>
        <h1>Simple SPA</h1>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Tasks/>} />
          </Routes>
        </div>
      </div>
  );
}

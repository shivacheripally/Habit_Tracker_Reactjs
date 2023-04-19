import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux';
import Status from './reducers';
import App from './components/App';

const store = createStore(Status);
// console.log('store',store);
// console.log('initial State: ',store.getState());


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

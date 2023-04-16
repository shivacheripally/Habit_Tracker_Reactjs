import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import SevenDays from './components/SevenDays.js';

import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <SevenDays /> */}
  </StrictMode>
);

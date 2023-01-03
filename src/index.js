/*
@TODO:
    1. Supports mobile application resolution
    2. Profile Page
    3. Saving (GPA data object) to firebase
    4. Retriving (GPA data object) from firebase
*/

// Body.js -> need to update firebase currentSemester's document value

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter as Router,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        {/* Ensure that the whole application will now be able to use routes */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

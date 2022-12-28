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

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Add form validations, javascript and css
// Style display form
// Add an edit button on the display side
// Edit button brings up the appropriate form, fill input with old data, onSubmit set the new data
// Only show 1 form at a time, onSubmit go to next form
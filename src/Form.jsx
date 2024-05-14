// Form.jsx

import React from 'react';
import './Form.css';

function Form({ showForm, toggleForm }) {
  return (
    <div className="formContainer">
      <div className="formGroup">
        <label className="formLabel" htmlFor="name">Name:</label>
        <input className="formInput" type="text" id="name" name="name" />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="email">Email:</label>
        <input className="formInput" type="email" id="email" name="email" />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="message">Message:</label>
        <textarea className="formInput" id="message" name="message" rows="4"></textarea>
      </div>
      <button className="formButton" type="submit">Submit</button>
    </div>
  );
}

export default Form;

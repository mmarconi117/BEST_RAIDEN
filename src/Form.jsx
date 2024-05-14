import React, { useState } from 'react';
import './Form.css';

function Form({ toggleForm, onFormSubmit }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if name and email fields are not empty
    if (!name || !email) {
      setErrorMessage('Please provide name and email');
      return;
    }
    // Call the parent component's callback function to handle form submission
    onFormSubmit();
    // Set submitted state to true
    setSubmitted(true);
    // Reset form fields
    setName('');
    setEmail('');
    // Clear error message
    setErrorMessage('');
  };

  return (
    <div className="formContainer">
      <div className="formGroup">
        <label className="formLabel" htmlFor="name">Name:</label>
        <input className="formInput" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="email">Email:</label>
        <input className="formInput" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="message">Message:</label>
        <textarea className="formInput" id="message" name="message" rows="4"></textarea>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="formButton" type="submit" onClick={handleSubmit}>Submit</button>
      {submitted && <p className="success-message">Submitted Successfully</p>}
    </div>
  );
}

export default Form;

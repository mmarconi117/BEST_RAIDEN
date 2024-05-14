import { useState } from 'react';
import twitchLogo from '/twitchLogo.png';
import youtubeLogo from '/youtubeLogo.png';
import espn from '/espnmk.jpeg';
import Form from './Form';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    setSubmitted(false); // Reset submitted state when form is toggled
  };

  const handleFormSubmit = () => {
    setSubmitted(true); // Set submitted state to true when form is submitted
  };

  return (
    <>
      <header>
        <div>
          <a href="https://www.youtube.com/watch?v=XFkl94-XhP0&t=309s" target="_blank">
            <img src={youtubeLogo} className="youtube-logo" alt="Vite logo" />
          </a>
          <a href="https://www.twitch.tv/best_raiden" target="_blank">
            <img src={twitchLogo} className="twitch-logo" alt="React logo" />
          </a>
        </div>
      </header>
      <h1>𝐁𝐄𝐒𝐓_𝐑𝐀𝐈𝐃𝐄𝐍</h1>
      <div className="card">
        <div className='left-image'>
          <img src='https://steamuserimages-a.akamaihd.net/ugc/788609251622526633/4D504407E2D00312040D218470D2C6726ED71E4A/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
            className='espn' alt='espn pic' />
        </div>
        <div className='centered-image'>
          <img src={espn} className='espn' alt='espn pic' />
        </div>
        <div className="right-image">
        <img src='https://64.media.tumblr.com/962f7035afed668c49a2d763ca70b1d1/80bb3f62b35857e7-a3/s540x810/df09359db5873aa7c50ac6465fa7c8d7f2ca4a15.gifv'
        className='combo' alt='combo pic' />

        </div>


      </div>

      <div className="summary-box">
        <p className="summary">
          BEST_RAIDEN HERE! I am a teacher in the gaming world, sharing your knowledge gained from years
          of professional experience. Your expertise helps others understand gaming concepts easily,
          making you a sought-after mentor. You're dedicated to helping aspiring game developers learn and grow,
          making a significant impact on the gaming community.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Youtube and Twitch logos to see more.
      </p>
      <div className="formContainer">
        <button className="submit-request-btn" onClick={toggleForm}>
          Submit a Request
        </button>
        {showForm && <Form toggleForm={toggleForm} onFormSubmit={handleFormSubmit} />}
      </div>
      <footer>
        <div class="contact-info">
          <p className='email'>Email: <a href="mailto:bestmkraiden@gmail.com">bestmkraiden@gmail.com</a></p>
          <p className='number'>Phone number: <a href="tel:+12243003699">(224)-300-3699</a></p>
          <p className='copy'>© 2024 BEST_RAIDEN. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

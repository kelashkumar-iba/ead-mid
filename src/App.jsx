import React, { useState } from 'react';
import './App.css';

function CountdownLightSwitch() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <div className={`container ${isLightTheme ? 'light' : 'dark'}`}>
      <h1>Countdown Light Switch</h1>
      <button onClick={toggleTheme}>
        Switch to {isLightTheme ? 'Dark' : 'Light'} Theme
      </button>
      <div className="countdown">
        <div className="progress-bar" style={{ width: '100%' }}></div>
        <p>30 seconds left</p>
      </div>
    </div>
  );
}

export default CountdownLightSwitch;
import React from 'react';
import './CountdownLightSwitch.css';

function CountdownLightSwitch() {
  return (
    <div className="container light">
      <h1>Countdown Light Switch</h1>
      <button>Switch to Dark Theme</button>
      <div className="countdown">
        <div className="progress-bar" style={{ width: '100%' }}></div>
        <p>30 seconds left</p>
      </div>
    </div>
  );
}

export default CountdownLightSwitch;
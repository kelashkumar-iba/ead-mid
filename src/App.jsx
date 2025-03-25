import React, { useState, useEffect } from 'react';
import './App.css';

function CountdownLightSwitch() {
  // managing the theme
  const [isLightTheme, setIsLightTheme] = useState(true);
  // countdown timer
  const [timeLeft, setTimeLeft] = useState(30);
  // manage whether the timer is running or not
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // useEffect hook for handleing the countdown timer logic
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      // Seting an interval
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      // Toggle the theme when the timer reaches zero
      setIsLightTheme(!isLightTheme);
      // Stop the timer
      setIsTimerRunning(false);
    }
  }, [timeLeft, isTimerRunning, isLightTheme]);

  // toggle the theme
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  // start the timer
  const startTimer = () => {
    setIsTimerRunning(true);
  };

  // reset
  const resetTimer = () => {
    setTimeLeft(30);
    setIsTimerRunning(false);
  };

  
  const progressBarWidth = (timeLeft / 30) * 100;

  return (
    <div className={`container ${isLightTheme ? 'light' : 'dark'}`}>
      <h1>Countdown Light Switch</h1>
      <button onClick={toggleTheme}>
        Switch to {isLightTheme ? 'Dark' : 'Light'} Theme
      </button>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
      <div className="countdown">
        <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
        <p>{timeLeft > 0 ? `${timeLeft} seconds left` : "Time's Up!"}</p>
      </div>
    </div>
  );
}

export default CountdownLightSwitch;
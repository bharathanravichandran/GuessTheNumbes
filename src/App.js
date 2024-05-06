import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    if (isNaN(guessedNumber)) {
      setMessage('Please enter a valid number.');
    } else {
      if (guessedNumber === number) {
        setMessage('Congratulations! You guessed the correct number.');
      } else if (guessedNumber < number) {
        setMessage('Too low. Try again.');
      } else {
        setMessage('Too high. Try again.');
      }
    }
    setGuess('');
  };

  const handleReset = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setMessage('');
  };

  return (
    <div className="container">
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <br />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={handleReset}>Reset</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

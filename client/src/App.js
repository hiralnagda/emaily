import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello World!
        </p>
        <a href="/auth/google">
          Sign in with Google
        </a>
      </header>
    </div>
  );
}

export default App;

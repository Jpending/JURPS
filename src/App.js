import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">

      <nav className="main-nav">
        <div className="nav-item"><a href=" ">Home</a></div>
        <div className="nav-item"><a href=" ">About</a></div>
        <div className="nav-item"><a href=" ">How to Use</a></div>
        <div className="nav-item"><a href=" ">Contact</a></div>
      </nav>

      <div className="main-body">
        <h1>Welcome to JURPS</h1>
        <form className="log-in-home">
          <div className="input-cont">
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Password"></input>
          </div>
          <div className="button-cont">
            <button type="submit">Log In</button>
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

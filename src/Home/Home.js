import React from 'react';


export default function Home() {

  return (
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
  );
}

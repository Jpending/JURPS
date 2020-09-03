import React from 'react';
import { Link } from "react-router-dom";
import FadeIn from '../../Utilities/FadeIn';

export default function Home() {

  return (
    <FadeIn>
      <div className="main-body">
        <h1>Welcome to JURPS</h1>
        <form className="log-in-home">
          <div className="input-cont">
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Password"></input>
          </div>
          <div className="button-cont">
            <button type="submit" >Log In</button>
            <Link to="/Register"><button type="submit">Create Account</button></Link>
          </div>
        </form>
      </div>
    </FadeIn>
  )

}

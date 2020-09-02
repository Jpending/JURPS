import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from '../../Registration/Registration'

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
          <Router>
            <button type="submit" >Log In</button>
            <Link to="/Register"><button type="submit">Create Account</button></Link>
            <Route path="/Register">
              <Registration />
            </Route>
          </Router>
        </div>

      </form>

    </div>

  )

}

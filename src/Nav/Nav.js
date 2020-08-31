import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Nav.css'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'

export default function Nav() {

  return (
    <Router>
      <nav className="main-nav">
        <div className="nav-item"><Link to="/">Home</Link></div>
        <div className="nav-item"><Link to="/About">About</Link></div>
        <div className="nav-item"><Link to="/How-To-Use">How to Use</Link></div>
        <div className="nav-item"><Link to="/Contact">Contact</Link></div>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/How-To-Use">
          <How-To-Use />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

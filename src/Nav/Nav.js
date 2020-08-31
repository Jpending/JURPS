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
import UserHome from '../UserHome/UserHome'


export default class Nav extends React.Component {

  render() {
    let isLoggedIn = this.props.loggedIn;

    return (
      <Router>
        <nav className="main-nav">
          <div className="nav-item"><Link to="/">Home</Link></div>
          <div className="nav-item"><Link to="/User-Home">My-Stuff</Link></div>
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
          <Route path="/User-Home">
            <UserHome />
          </Route>
          <Route path="/">
            <Home handleClickLogIn={this.props.handleClickLogIn} />
          </Route>
        </Switch>

      </Router >
    )
  }
}

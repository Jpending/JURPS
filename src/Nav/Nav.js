import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Nav.css'
import About from '../Routes/InfoPages/About/About'
import Contact from '../Routes/InfoPages/Contact/Contact'
import UserHome from './UserHome/UserHome'
import HowToUse from '../Routes/InfoPages/HowToUse/HowToUse'
import Character from '../Create/Character/Character'
import BBEG from "../Create/BBEG/BBEG"
import NPC from '../Create/NPC/NPC'
import Item from '../Create/Item/Item'
import RegPage from '../Routes/RegPage/RegPage';
import LoginPage from '../Routes/LogInPage/LogInPage';

export default class Nav extends React.Component {

  render() {


    return (
      <Router>
        <nav className="main-nav">
          <div className="nav-item"><Link to="/">Home</Link></div>
          <div className="nav-item"><Link to="/User">Create & View</Link></div>
          <div className="nav-item"><Link to="/About">About</Link></div>
          <div className="nav-item"><Link to="/How-To-Use">How to Use</Link></div>
          <div className="nav-item"><Link to="/Contact">Contact</Link></div>
        </nav>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/How-To-Use">
            <HowToUse />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/User">
            <UserHome />
          </Route>
          <Route exact path="/User/Create/Character">
            <Character />
          </Route>
          <Route exact path="/User/Create/NPC">
            <NPC />
          </Route>
          <Route exact path="/User/Create/Item">
            <Item />
          </Route>
          <Route exact path="/User/Create/BBEG">
            <BBEG />
          </Route>
          <Route exact path="/Register" component={RegPage} />
          <Route exact path="/login" component={LoginPage} />

          <Route path="/" component={LoginPage} />

        </Switch>

      </Router >
    )
  }
}

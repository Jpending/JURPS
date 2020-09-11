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
import CharPage from '../Routes/CharPage/CharPage';
import NotFound from '../Routes/NotFound/NotFound';
import FadeIn from '../Utilities/FadeIn';
import { render } from '@testing-library/react';

export default class Nav extends React.Component {


  renderMainRoutes() {
    return (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/HowTo" component={HowToUse} />
        <Route path="/Contact" component={Contact} />
        <Route exact path="/Register" component={RegPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/User/Characters" component={UserHome} />
        <Route exact path="/User/Characters/:character_id" component={CharPage} />
        <Route exact path="/User/Create/Character" component={Character} />
        <Route exact path="/User/Create/NPC" component={NPC} />
        <Route exact path="/User/Create/Item" component={Item} />
        <Route exact path="/User/Create/BBEG" component={BBEG} />
        <Route path="/" component={NotFound} />
      </Switch>)
  }
  render() {


    return (
      <FadeIn>
        <nav className="main-nav">
          <div className="nav-item"><Link to="/User">Home</Link></div>
          <div className="nav-item"><Link to="/User/Characters">Create & View</Link></div>
          <div className="nav-item"><Link to="/About">About</Link></div>
          <div className="nav-item"><Link to="/HowTo">How to Use</Link></div>
          <div className="nav-item"><Link to="/Contact">Contact</Link></div>
        </nav>

      </FadeIn>
    )
  }
}

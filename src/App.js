import Nav from './Nav/Nav'
import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './Routes/InfoPages/About/About'
import Contact from './Routes/InfoPages/Contact/Contact'
import UserHome from './Nav/UserHome/UserHome'
import HowToUse from './Routes/InfoPages/HowToUse/HowToUse'
import Character from './Create/Character/Character'
import BBEG from "./Create/BBEG/BBEG"
import NPC from './Create/NPC/NPC'
import Item from './Create/Item/Item'
import RegPage from './Routes/RegPage/RegPage';
import LoginPage from './Routes/LogInPage/LogInPage';
import CharPage from './Routes/CharPage/CharPage';
import NotFound from './Routes/NotFound/NotFound';
import PrivateRoute from './Utilities/PrivateRoute';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }



  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/HowTo" component={HowToUse} />
          <Route path="/Contact" component={Contact} />
          <Route exact path="/Register" component={RegPage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/User/Characters" component={UserHome} />
          <PrivateRoute exact path="/User/Characters/:character_id" component={CharPage} />
          <PrivateRoute exact path="/User/Create/Character" component={Character} />
          <PrivateRoute exact path="/User/Create/NPC" component={NPC} />
          <PrivateRoute exact path="/User/Create/Item" component={Item} />
          <PrivateRoute exact path="/User/Create/BBEG" component={BBEG} />
          <Route exact path="/" component={LoginPage} />
          <Route path="/" component={NotFound} />
        </Switch>
      </>
    )
  };
}



export default App;

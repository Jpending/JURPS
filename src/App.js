import React from 'react';

import './App.css';
import Nav from './Nav/Nav'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  handleClickLogIn() {
    this.setState({ loggedIn: !this.state.loggedIn });
  }
  render() {
    return (
      <Nav handleClickLogIn={this.handleClickLogIn} loggedIn={this.state.loggedIn} />
    )
  };
}



export default App;

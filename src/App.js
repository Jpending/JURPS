import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import CreateNav from './Create/CreateNav/CreateNav';



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
      <Nav />
    )
  };
}



export default App;

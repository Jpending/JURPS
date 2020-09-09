import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import { CharProvider } from './Context/CharContext';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, loggedIn: false };
  }
  handleClickLogIn() {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  render() {

    return (
      <CharProvider>
        <Nav />
      </CharProvider>

    )
  };
}



export default App;

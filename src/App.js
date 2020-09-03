import React from 'react'
import './App.css'
import Nav from './Nav/Nav'
import FadeIn from './Utilities/FadeIn'



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
      <FadeIn>
        <Nav />
      </FadeIn>
    )
  };
}



export default App;

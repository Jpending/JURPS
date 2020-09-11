import React, { Component } from 'react'

const UserContext = React.createContext({
  username: '',
  display_name: '',
  email: '',
  user_id: null,
  error: null,
  loggedIn: false,
  setError: () => { },
  clearError: () => { },
  setUserID: () => { },
  setUserName: () => { },
  setDisplayName: () => { },
  setEmail: () => { },
  setLoggedIn: () => { },

})
export default UserContext

export class UserContextProvider extends Component {
  state = {
    username: '',
    display_name: '',
    email: '',
    user_id: null,
    loggedIn: false,
    error: null,
  };

  setLoggedIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  setUserName = username => {
    this.setState({ username })
  }

  setUserID = user_id => {
    this.setState({ user_id })
  }

  setEmail = email => {
    this.setState({ email })
  }

  setDisplayName = display_name => {
    this.setState({ display_name })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      username: this.state.username,
      user_id: this.state.user_id,
      email: this.state.email,
      display_name: this.state.display_name,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUserName: this.setUserName,
      setUserID: this.setUserID,
      setEmail: this.setEmail,
      setDisplayName: this.setDisplayName,
      setLoggedIn: this.setLoggedIn,
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

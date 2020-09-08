import React, { Component } from 'react'

const CharListContext = React.createContext({
  CharList: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setCharList: () => { },
})
export default CharListContext

export class CharListProvider extends Component {
  state = {
    CharList: [],
    error: null,
  };

  setCharList = CharList => {
    this.setState({ CharList })
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
      CharList: this.state.CharList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCharList: this.setCharList,
    }
    return (
      <CharListContext.Provider value={value}>
        {this.props.children}
      </CharListContext.Provider>
    )
  }
}

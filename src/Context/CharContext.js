import React, { Component } from 'react'


const CharContext = React.createContext({
  chars: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  clearChar: () => { },
  setChars: () => { },
  findAndDeleteChar: () => { },

})

export default CharContext

export class CharProvider extends Component {
  state = {
    chars: [],
    error: null,
  };

  findAndDeleteChar = id => {
    this.setState({ chars: this.state.chars.filter((char) => char.id !== id) })
  }
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setChar = char => {
    this.setState({ char })
  }
  setChars = chars => {
    this.setState({ chars })
  }

  clearChar = () => {
    this.setChars([])
  }

  addChar = char => {
    this.setChars([
      ...this.state.chars,
      char
    ])
  }

  render() {
    const value = {
      chars: this.state.chars,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setChar: this.setChar,
      setChars: this.setChars,
      clearChar: this.clearChar,
      addChar: this.addChar,
      findAndDeleteChar: this.findAndDeleteChar,
    }
    return (
      <CharContext.Provider value={value}>
        {this.props.children}
      </CharContext.Provider>
    )
  }
}

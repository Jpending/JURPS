import React, { Component } from 'react'

export const nullChar = {
  author: {},
  tags: [],
}

const CharContext = React.createContext({
  char: nullChar,
  chars: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setChar: () => { },
  clearChar: () => { },

})

export default CharContext

export class CharProvider extends Component {
  state = {
    char: nullChar,
    error: null,
  };

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
    this.setChar(nullChar)
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
      char: this.state.char,
      chars: this.state.chars,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setChar: this.setChar,
      setChars: this.setChars,
      clearChar: this.clearChar,
      addChar: this.addChar,
    }
    return (
      <CharContext.Provider value={value}>
        {this.props.children}
      </CharContext.Provider>
    )
  }
}

import React from 'react'
import { Section } from '../../Utilities/Utilities'
import RegForm from '../../Components/RegForm/RegForm'

export default class RegPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/login'
    history.push(destination)
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <h2>Register</h2>
        <RegForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}

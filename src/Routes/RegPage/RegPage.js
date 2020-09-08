import React from 'react'
import { Section } from '../../Utilities/Utilities'
import RegForm from '../../Components/RegForm/RegForm'

export default class RegPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
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

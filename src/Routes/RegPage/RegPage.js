import React from 'react'
import { Section } from '../../Utilities/Utilities'
import Registration from '../../Components/Registration/Registration'

export default class RegistrationPage extends React.Component {
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
        <Registration
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}

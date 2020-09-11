import React from 'react'
import { Section } from '../../Utilities/Utilities'
import LoginForm from '../../Components/LogIn/LogIn'
import { UserContextProvider } from '../../Context/UserContext'
import TokenService from '../../Services/Token-service'

export default class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = (user_id) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/Users/${user_id}`
    TokenService.storeUserID(user_id)
    history.push(destination)
  }

  render() {
    return (

      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>

    )
  }
}

import React from 'react'
import { Section } from '../../Utilities/Utilities'
import LoginForm from '../../Components/LogIn/LogIn'
import UserContext from '../../Context/UserContext'
import TokenService from '../../Services/Token-service'
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBound'

export default class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  static contextType = UserContext;

  handleLoginSuccess = (user_id) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/User/Characters`
    TokenService.storeUserID(user_id)
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <ErrorBoundary>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </ErrorBoundary>
      </Section>

    )
  }
}

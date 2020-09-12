import React from 'react'
import TokenService from '../../Services/Token-service'
import AuthService from '../../Services/Auth-service'
import { Button, Input } from '../../Utilities/Utilities'
import { Link } from 'react-router-dom'
import UserContext from '../../Context/UserContext'

export default class LogIn extends React.Component {
  state = {
    error: null,
  };
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext;


  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target
    AuthService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess(res.payload.user_id)
      })
      .catch(
        this.context.setError
      )
  }

  render() {
    const { error } = this.context
    return (

      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error.message}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
        <Link to="/Register"><Button type="submit">Create Account</Button></Link>
      </form>

    )
  }
}

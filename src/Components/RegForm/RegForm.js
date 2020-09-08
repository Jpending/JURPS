import React from 'react';
import './RegForm.css'
import { Button, Input, Required } from '../../Utilities/Utilities'
import AuthService from '../../Services/Auth-service'

export default class RegistrationForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { email, display_name, user_name, password } = ev.target
    console.log('registration form submitted')
    AuthService.postRegister({
      user_name: user_name.value,
      password: password.value,
      display_name: display_name.value,
      email: email.value,
    })
      .then(res => {
        email.value = ''
        display_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    console.log({ email, display_name, user_name, password })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'>
            E-mail <Required />
          </label>
          <Input
            placeholder="E-Mail"
            name='email'
            type='text'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            placeholder="Username"
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password
             <Required />
          </label>
          <Input
            placeholder="Password"
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='nick_name'>
          <label htmlFor='RegistrationForm__nick_name'>
            Display Name<Required />
          </label>
          <Input
            placeholder="Display Name"
            name='display_name'
            type='text'
            required
            id='RegistrationForm__display_name'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}

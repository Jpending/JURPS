import React from 'react';
import './Registration.css'

export default function Registration() {

  return (
    <div>
      <h1>Your journey starts here...</h1>
      <form class="create-acc">
        <div class="input-cont">
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Repeat Password"></input>
          <input type="email" placeholder="E-mail Address"></input>
        </div>

        <div class="button-cont">
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  )
}

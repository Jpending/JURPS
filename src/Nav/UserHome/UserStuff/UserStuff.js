import React from 'react'
import UserStuffUL from './UserStuffUL/UserStuffUL'
import store from '../../../store'


export default function UserStuff() {
  return (
    <div className="mystuffcont" >
      {/*<h1>Welcome back, {store[0].user.user_name}.</h1>
       <h3 className="mystuffspan">My Stuff</h3> */}
      <UserStuffUL chars={store} />
    </div>
  )
}

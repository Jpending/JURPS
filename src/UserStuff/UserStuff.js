import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import UserStuffUL from './UserStuffUL/UserStuffUL'
import store from '../store'

export default function UserStuff() {
  return (
    <Router>
      <UserStuffUL user={store[0].user} />

    </Router>
  )
}

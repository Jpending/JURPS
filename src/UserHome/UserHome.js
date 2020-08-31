import React from 'react';
import './UserHome.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Character from '../Create/Character/Character'
import CreateNav from '../Create/CreateNav/CreateNav';
import UserStuff from '../UserStuff/UserStuff';

export default function UserHome() {
  return (

    <UserStuff />

  )
};

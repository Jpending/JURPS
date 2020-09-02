import React from 'react';
import './UserHome.css'
import CreateNav from '../../Create/CreateNav/CreateNav'
import UserStuff from './UserStuff/UserStuff';

export default function UserHome() {
  return (
    <main>
      <CreateNav />
      <UserStuff />
    </main>
  )
};

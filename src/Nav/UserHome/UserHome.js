import React from 'react';
import './UserHome.css'
import CreateNav from '../../Create/CreateNav/CreateNav'
import UserStuff from './UserStuff/UserStuff';
import FadeIn from '../../Utilities/FadeIn';

export default function UserHome() {
  return (
    <main>
      <FadeIn >
        <CreateNav />
      </FadeIn>
      <UserStuff />

    </main>
  )
};

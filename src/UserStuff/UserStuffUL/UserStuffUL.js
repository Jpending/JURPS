import React from 'react'
import UserStuffLI from '../UserStuffLI/UserStuffLI';
import './UserStuffUL.css'
export default class UserStuffUL extends React.Component {


  render() {

    const { nickname, stuff } = this.props.user
    const ArrofKeys = Object.keys(stuff)



    return (
      <div className="mystuffcont" >
        <h1>Welcome back, {nickname}</h1>
        <span className="mystuffspan">My Stuff</span>
        {
          ArrofKeys.map(category =>
            <div className="mylist" >
              <span>My {category}</span>
              <ul>
                <UserStuffLI name={stuff[category]} />
              </ul>
            </div>
          )
        }


      </div>
    )
  }
}

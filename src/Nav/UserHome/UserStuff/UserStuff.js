import React from 'react'
import UserStuffUL from './UserStuffUL/UserStuffUL'



export default class UserStuff extends React.Component {
  static defaultProps = [];
  render() {
    const { chars, userId } = this.props
    return (
      <div className="mystuffcont" >
        {/*<h1>Welcome back, {store[0].user.user_name}.</h1>
       <h3 className="mystuffspan">My Stuff</h3> */}
        < UserStuffUL chars={chars} userId={userId} />
      </div>
    )
  }
}

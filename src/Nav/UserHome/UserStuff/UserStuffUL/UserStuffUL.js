import React from 'react'
import UserStuffLI from '../UserStuffLI/UserStuffLI';


export default class UserStuffUL extends React.Component {

  render() {
    const { chars } = this.props
    return (

      <div className="mylist" >
        <h3>My Characters</h3>
        {chars.map(character => <UserStuffLI key={character.id} char={character} />)}
      </div>

    )
  }
}

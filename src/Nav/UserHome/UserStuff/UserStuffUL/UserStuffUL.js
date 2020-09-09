import React from 'react'
import UserStuffLI from './UserStuffLI/UserStuffLI';
import FadeIn from '../../../../Utilities/FadeIn';


export default class UserStuffUL extends React.Component {
  static defaultProps = [];
  render() {
    const { chars, userId } = this.props

    return (

      <div className="mylist" >
        <FadeIn>
          <h3>My Characters</h3>

          {chars.map(character => <UserStuffLI key={character.id} char={character} userId={userId} />)}
        </FadeIn>
      </div>

    )
  }
}

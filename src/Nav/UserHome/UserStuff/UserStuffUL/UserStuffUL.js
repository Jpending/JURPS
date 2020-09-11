import React from 'react'
import UserStuffLI from './UserStuffLI/UserStuffLI';
import FadeIn from '../../../../Utilities/FadeIn';
import CharContext from '../../../../Context/CharContext';




export default class UserStuffUL extends React.Component {
  static contextType = CharContext;

  renderListItems() {
    const { chars } = this.context;
    const { userId } = this.props
    return chars.map(character => <FadeIn key={character.id}><UserStuffLI key={character.id} character={character} userId={userId} /></FadeIn>)
  }

  render() {
    const { error } = this.context

    return (
      <FadeIn >
        <h3>My Characters</h3>
        <div className="mylist" >



          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderListItems()}

        </div>
      </FadeIn>

    )
  }
}

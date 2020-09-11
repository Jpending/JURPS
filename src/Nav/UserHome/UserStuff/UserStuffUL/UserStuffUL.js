import React from 'react'
import UserStuffLI from './UserStuffLI/UserStuffLI';
import FadeIn from '../../../../Utilities/FadeIn';
import CharContext from '../../../../Context/CharContext';
import CharacterService from '../../../../Services/Character-service';
import ErrorBoundary from '../../../../Components/ErrorBoundary/ErrorBound';



export default class UserStuffUL extends React.Component {
  static contextType = CharContext;
  constructor(props) {
    super(props);
    this.state = { expanded: false, deleted: null };
  }
  static defaultProps = {
    match: {
      params: {}
    },
    location: {},
    history: {
      push: () => { },
    },
    findAndDeleteChar: () => { },
  }

  handleDelete = id => {
    CharacterService.deleteCharacter(id)
    this.context.findAndDeleteChar(id)
  }

  renderListItems() {
    const { chars } = this.context;
    const { userId } = this.props
    return chars.map(character => <UserStuffLI key={character.id} handleDelete={this.handleDelete} character={character} userId={userId} />)
  }

  render() {
    const { error } = this.context
    return (
      <ErrorBoundary>
        <FadeIn >
          <h3>My Characters</h3>
          <div className="mychars" >
            {error
              ? <p className='red'>There was an error, try again</p>
              : this.renderListItems()}

          </div>
        </FadeIn>
      </ErrorBoundary>
    )
  }
}

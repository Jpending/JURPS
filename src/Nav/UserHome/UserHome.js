import React from 'react';
import './UserHome.css'
import CreateNav from '../../Create/CreateNav/CreateNav'
import FadeIn from '../../Utilities/FadeIn';
import characterService from '../../Services/Character-service';
import CharContext from '../../Context/CharContext';
import { Section } from '../../Utilities/Utilities';
import UserStuffUL from './UserStuff/UserStuffUL/UserStuffUL';
import TokenService from '../../Services/Token-service';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBound';


export default class UserHome extends React.Component {
  state = { chars: {} };
  static contextType = CharContext;

  componentDidMount() {
    const user_id = TokenService.getUserID();
    characterService.getCharsForUser(user_id)
      .then(this.context.setChars)
      .then(this.setState({ chars: this.context.chars }))
      .catch(this.context.setError);
  }

  renderCharacters() {
    const { chars = [] } = this.context;
    const { user_id } = TokenService.getUserID();
    return (< UserStuffUL chars={chars} userId={user_id} />)
  }

  render() {
    const { error } = this.context;
    return (
      <ErrorBoundary>
        <Section list className='userHomeMain'>
          <FadeIn >
            <CreateNav />
          </FadeIn>
          {error
            ? <h2 color='red'>There was an error, please try to log in again.</h2>
            : this.renderCharacters()}
        </Section>
      </ErrorBoundary>
    )
  }
};

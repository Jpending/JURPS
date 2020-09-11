import React from 'react';
import './UserHome.css'
import CreateNav from '../../Create/CreateNav/CreateNav'
import UserStuff from './UserStuff/UserStuff';
import FadeIn from '../../Utilities/FadeIn';
import characterService from '../../Services/Character-service';
import UserContext from '../../Context/UserContext';
import CharContext from '../../Context/CharContext';
import { Section } from '../../Utilities/Utilities';
import UserStuffUL from './UserStuff/UserStuffUL/UserStuffUL';
import TokenService from '../../Services/Token-service';


export default class UserHome extends React.Component {
  //state = { chars: '' };
  static contextType = CharContext;

  async componentDidMount() {
    this.context.clearError();
    const user_id = TokenService.getUserID();
    await characterService.getCharsForUser(user_id)
      .then(this.context.setChars)
      .catch(this.context.setError);
    //this.setState({ chars: charList })

  }

  renderCharacters() {
    const { chars = [] } = this.context;
    const { user_id } = this.props.match.params;
    return (< UserStuffUL chars={chars} userId={user_id} />)
  }

  render() {
    const { error } = this.context;
    return (

      <Section list className='userHomeMain'>
        <FadeIn >
          <CreateNav />
        </FadeIn>
        {error
          ? <h2>There was an error, please try to log in again.</h2>
          : this.renderCharacters()}
      </Section>

    )
  }
};

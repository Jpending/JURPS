import React from 'react';
import './UserHome.css'
import CreateNav from '../../Create/CreateNav/CreateNav'
import UserStuff from './UserStuff/UserStuff';
import FadeIn from '../../Utilities/FadeIn';
import characterService from '../../Services/Character-service';


export default class UserHome extends React.Component {
  state = { chars: '' };


  async componentDidMount() {
    const userId = this.props.match.params.user_id;
    const charList = await characterService.getCharsForUser(userId)
    this.setState({ chars: charList })

  }

  render() {
    const { chars } = this.state;
    return (
      <main>
        <FadeIn >
          <CreateNav />
        </FadeIn>
        {chars.length > 1 && <UserStuff chars={chars} userId={this.props.match.params.user_id} />}
      </main>
    )
  }
};

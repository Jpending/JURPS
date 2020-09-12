import React from 'react'
import CharPage from '../../../../../Routes/CharPage/CharPage';
import FadeIn from '../../../../../Utilities/FadeIn';
import { Button } from '../../../../../Utilities/Utilities';
import { Link } from 'react-router-dom';
import CharContext from '../../../../../Context/CharContext';
import ErrorBoundary from '../../../../../Components/ErrorBoundary/ErrorBound';






export default class UserStuffLI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  static contextType = CharContext;
  static defaultProps = {
    location: {},
    character: {},
    findAndDeleteChar: () => { },
    match: {
      params: {}
    },
    history: {
      push: () => { },
    },
  }
  handleOnClickXpand = (ev) => {
    ev.preventDefault()
    this.setState({ expanded: !this.state.expanded })
  }
  componentDidCatch(error) { this.context.setError(error.message) }

  handleDeleteChar = (id) => {
    this.props.handleDelete(id)
  }

  render() {
    const { character, userId } = this.props;
    const char = character;
    const { expanded } = this.state;

    return (
      <ErrorBoundary>
        <div>
          {!expanded &&
            <FadeIn>
              <div className="characterdiv Cards" key={char.id}>
                <Button onClick={(ev) => { this.handleOnClickXpand(ev) }}>{char.name}</Button>
                <Link to='/User/Characters' className="deletebutton"> <Button type="delete" className="deletebutton" onClick={() => this.handleDeleteChar(char.id)}>Delete</Button></Link>
                <FadeIn>
                  <ul className="ulcat">
                    <li key={char.id + 1}>{char.race}</li>
                    <li key={char.id + 3}>{char.class}</li>
                  </ul>
                </FadeIn>
                {/* <FadeIn>
              <ul className="ulcat">
                <li key={char.id + 2}>Strength:{char.str}</li>
                <li key={char.id + 4}>Dexterity:{char.dex}</li>
              </ul>
            </FadeIn>
            <FadeIn>
              <ul className="ulcat">
                <li key={char.id + 5}>Intelligence:{char.int}</li>
                <li key={char.id + 7}>Health:{char.health}</li>
              </ul>
            </FadeIn>
            <FadeIn>
              <ul className="ulcat">
                <li key={char.id + 6}>Hit Points:{char.hp}</li>
                <li key={char.id + 8}>Will:{char.will}</li>
              </ul>
            </FadeIn>
            <FadeIn>
              <ul className="ulcat">
                <li key={char.id + 9}>Perception:{char.per}</li>
                <li key={char.id + 11}>Fatigue Points:{char.fp}</li>
              </ul>
            </FadeIn> */}
              </div>
            </FadeIn>
          }<FadeIn>
            {expanded && <CharPage char={char} handleExpand={this.handleOnClickXpand} userId={userId} />}</FadeIn>
        </div>
      </ErrorBoundary >
    )
  }
};

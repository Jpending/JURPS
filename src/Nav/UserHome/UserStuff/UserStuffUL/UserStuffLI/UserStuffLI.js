import React from 'react'
import CharPage from '../../../../../Routes/CharPage/CharPage';
import FadeIn from '../../../../../Utilities/FadeIn';




export default class UserStuffLI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }


  componentDidMount() {

  }

  handleOnClickXpand(ev) {
    ev.preventDefault()
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { character, userId } = this.props;
    const char = character;
    const { expanded } = this.state;

    return (
      <div>
        {!expanded &&
          <FadeIn><div className="characterdiv Cards" key={char}>

            <button onClick={(ev) => { this.handleOnClickXpand(ev) }}><h4>{char.name}</h4></button>
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

    )
  }
};

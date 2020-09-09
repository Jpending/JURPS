import React from 'react'
import CharPage from '../../../../../Routes/CharPage/CharPage';




export default class UserStuffLI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, expanded: false };
  }


  handleOnClickXpand(ev) {
    ev.preventDefault()
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { char, userId } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        {!expanded && <div className="characterdiv" key={char.id}>

          <button onClick={(ev) => { this.handleOnClickXpand(ev) }}><h4>{char.name}</h4></button>
          <ul className="ulcat">
            <li key={char.id + 1}>{char.race}</li>
            <li key={char.id + 3}>{char.class}</li>
          </ul>
          <ul className="ulcat">
            <li key={char.id + 2}>Strength:{char.str}</li>
            <li key={char.id + 4}>Dexterity:{char.dex}</li>
          </ul>
          <ul className="ulcat">
            <li key={char.id + 5}>Intelligence:{char.int}</li>
            <li key={char.id + 7}>Health:{char.health}</li>
          </ul>
          <ul className="ulcat">
            <li key={char.id + 6}>Hit Points:{char.hp}</li>
            <li key={char.id + 8}>Will:{char.will}</li>
          </ul>
          <ul className="ulcat">
            <li key={char.id + 9}>Perception:{char.per}</li>
            <li key={char.id + 11}>Fatigue Points:{char.fp}</li>
          </ul>
        </div>
        }
        {expanded && <CharPage char={char} handleExpand={this.handleOnClickXpand} userId={userId} />}
      </div>

    )
  }
};

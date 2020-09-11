import React from 'react'
import '../../Create/Character/Character.css'
import { Input, Textarea } from '../../Utilities/Utilities';
import characterService from '../../Services/Character-service'
import UserContext from '../../Context/UserContext';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBound';



export default class CharPage extends React.Component {
  // static propTypes = {
  //   match: PropTypes.shape({
  //     params: PropTypes.object,
  //   }),
  //   history: PropTypes.shape({
  //     push: PropTypes.func,
  //   }).isRequired,
  // };

  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      char: {
        id: 0,
        name: '',
        race: '',
        cclass: '',
        str: 0,
        dex: 0,
        int: 0,
        health: 0,
        hp: 0,
        will: 0,
        per: 0,
        fp: 0,
        abilities: '',
        story: ''
      }
    };
  }

  componentDidMount() {

    const character_id = undefined ? this.props.match.params.character_id : this.props.char.cid
    characterService.getCharacter(character_id)
      .then(responseData => {
        this.setState({
          char: {
            id: '',
            name: responseData.name,
            race: responseData.race,
            cclass: responseData.class,
            str: responseData.str,
            dex: responseData.dex,
            int: responseData.int,
            health: responseData.health,
            hp: responseData.hp,
            will: responseData.will,
            per: responseData.per,
            fp: responseData.fp,
            abilities: responseData.abilities,
            story: responseData.story
          }
        })
      })
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
  }

  handleChangeName = e => { this.setState({ char: { name: e.target.value } }) }
  handleChangeRace = e => { this.setState({ char: { race: e.target.value } }) }
  handleChangeClass = e => { this.setState({ char: { cclass: e.target.value } }) }
  handleChangeStr = e => { this.setState({ char: { str: e.target.value } }) }
  handleChangeDex = e => { this.setState({ char: { dex: e.target.value } }) }
  handleChangeInt = e => { this.setState({ char: { int: e.target.value } }) }
  handleChangeHealth = e => { this.setState({ char: { health: e.target.value } }) }
  handleChangeHP = e => { this.setState({ char: { hp: e.target.value } }) }
  handleChangePer = e => { this.setState({ char: { per: e.target.value } }) }
  handleChangeFP = e => { this.setState({ char: { fp: e.target.value } }) }
  handleChangeAbilities = e => { this.setState({ char: { abilities: e.target.value } }) }
  handleChangeStory = e => { this.setState({ char: { story: e.target.value } }) }
  handleChangeWill = e => { this.setState({ char: { will: e.target.value } }) }

  formatUpdateChar() {
    const { char: { name, race, cclass, str, dex, int, health, hp, will, per, fp, abilities, story }, char } = this.state;
    const charToUpdate = { "name": name, "race": race, "cclass": cclass, "strength": str, "dexterity": dex, "intelligence": int, "health": health, "hit_points": hp, "will": will, "perception": per, "fatigue_points": fp, "abilities": abilities, "background_story": story }
    const numberOfValues = Object.values(charToUpdate).filter(Boolean).length;
    if (numberOfValues) {
      return char
    }
  }

  async handleSubmit(ev) {
    const { handleExpand, char } = this.props
    const charToUpdate = this.formatUpdateChar();
    console.log(char)
    await characterService.patchChar(charToUpdate, char.id)
      .then(handleExpand)
  }

  render() {
    console.log(this.props)
    const { error } = this.state
    const { char } = this.state
    return (
      <div>
        <h1>Editing {char.name}</h1>
        <div>
          {error && <h2>{error.message}</h2>}
          <ErrorBoundary>
            <form key={char.id} onSubmit={(ev) => { this.handleSubmit(ev) }} >
              <div className="textattr">
                <label htmlFor="name">Name:</label><Input type="text" className="textinput" name="name" defaultValue={char.name} onChange={this.handleChangeName} />
                <label htmlFor="race">Race:</label><Input type="text" className="textinput" name="race" defaultValue={char.race} onChange={this.handleChangeRace} />
                <label htmlFor="cclass">Class:</label><Input type="text" className="textinput" name="cclass" defaultValue={char.class} onChange={this.handleChangeClass} />
              </div>
              <div className="numattrcont" >
                <div className="numattr" >
                  <label htmlFor="strength">Strength:</label><Input type="number" name="strength" defaultValue={char.str} onChange={this.handleChangeStr} />
                  <label htmlFor="dexterity">Dexterity:</label><Input type="number" name="dexterity" defaultValue={char.dex} onChange={this.handleChangeDex} />
                  <label htmlFor="intelligence">Intelligence:</label><Input type="number" name="intelligence" defaultValue={char.int} onChange={this.handleChangeInt} />
                  <label htmlFor="health">Health:</label><Input type="number" name="health" defaultValue={char.health} onChange={this.handleChangeHealth} />
                </div>
                <div className="numattr">
                  <label htmlFor="hit_points">Hit Points: </label> <Input type="number" name="hit_points" defaultValue={char.hp} onChange={this.handleChangeHP} />
                  <label htmlFor="will">Will:</label><Input type="number" name="will" defaultValue={char.will} onChange={this.handleChangeWill} />
                  <label htmlFor="perception">Perception:</label><Input type="number" name="perception" defaultValue={char.per} onChange={this.handleChangePer} />
                  <label htmlFor="fatigue_points">Fatigue Points:</label><Input type="number" name="fatigue_points" defaultValue={char.fp} onChange={this.handleChangeFP} />
                </div>
              </div>
              <div className="textareacont">
                <label htmlFor="abilities">Abilities:</label>
                <Textarea className="abilities" name="abilities" defaultValue={char.abilities} onChange={this.handleChangeAbilities} />
                <label htmlFor="backstory">Backstory:</label>
                <Textarea className="backstory" name="backstory" defaultValue={char.story} onChange={this.handleChangeStory} />
              </div>
              <button>Submit</button>
            </form >
          </ErrorBoundary>
        </div>
      </div>)
  }
}

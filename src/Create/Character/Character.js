import React from 'react'
import './Character.css'
import { Input, Textarea, Button, Required } from '../../Utilities/Utilities'
import characterService from '../../Services/Character-service'
import TokenService from '../../Services/Token-service';
import CharContext from '../../Context/CharContext';

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Ready: false,
      error: null,
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

    };
  }
  static contextType = CharContext;


  handleChangeName = e => { this.setState({ name: e.target.value }) }
  handleChangeRace = e => { this.setState({ race: e.target.value }) }
  handleChangeClass = e => { this.setState({ cclass: e.target.value }) }
  handleChangeStr = e => { this.setState({ str: e.target.value }) }
  handleChangeDex = e => { this.setState({ dex: e.target.value }) }
  handleChangeInt = e => { this.setState({ int: e.target.value }) }
  handleChangeHealth = e => { this.setState({ health: e.target.value }) }
  handleChangeHP = e => { this.setState({ hp: e.target.value }) }
  handleChangePer = e => { this.setState({ per: e.target.value }) }
  handleChangeFP = e => { this.setState({ fp: e.target.value }) }
  handleChangeAbilities = e => { this.setState({ abilities: e.target.value }) }
  handleChangeStory = e => { this.setState({ story: e.target.value }) }
  handleChangeWill = e => { this.setState({ will: e.target.value }) }


  toggleReady() {
    const { name, race, cclass, str, dex, int, health, hp, will, per, fp } = this.state;
    if (name && race && cclass && str && dex && int && health && hp && will && per && fp) {
      return this.setState({ Ready: true });
    }

  }
  formatUpdateChar() {
    const { name, race, cclass, str, dex, int, health, hp, will, per, fp, abilities, story } = this.state;
    const charToUpdate = { "name": name, "race": race, "cclass": cclass, "strength": str, "dexterity": dex, "intelligence": int, "health": health, "hit_points": hp, "will": will, "perception": per, "fatigue_points": fp, "abilities": abilities, "background_story": story }
    const numberOfValues = Object.values(charToUpdate).filter(Boolean).length;
    if (numberOfValues > 10) {
      return charToUpdate
    }
  }



  async handleSubmit(ev) {
    ev.preventDefault();
    const { error } = this.context
    const charToUpdate = this.formatUpdateChar();
    const user_id = TokenService.getUserID();
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/User/Characters`
    await characterService.postChar(charToUpdate, user_id)
      .then(this.context.addChar)
      .catch(this.context.setError)
    // .then(error ? history.push(destination) : console.log(''))
  }
  render() {
    const { error } = this.context
    const { Ready } = this.state
    return (
      <div>

        <h1>Create your Character</h1>
        {error && <p className='red'>{error}</p>}
        {!Ready && <div><p className="Instructions">* Indicates a required field,</p><p>Once, you are ready</p><p>a button will appear!</p></div>}
        <form className='form' onChange={ev => this.toggleReady(ev)} onSubmit={(ev) => { this.handleSubmit(ev) }} >
          <div className="textattr">
            <label htmlFor="name">Name:</label><Required /><Input type="text" className="textinput" name="name" defaultValue='Give it a great  name' onChange={this.handleChangeName} />
            <label htmlFor="race">Race:</label><Required /><Input type="text" className="textinput" name="race" defaultValue='Is it a beast, a person?' onChange={this.handleChangeRace} />
            <label htmlFor="cclass">Class:</label><Required /><Input type="text" className="textinput" name="cclass" defaultValue='Custom classes encouraged' onChange={this.handleChangeClass} />
          </div>
          <div className="numattrcont" >
            <div className="numattr" >
              <label htmlFor="strength">Strength:</label><Required /><Input type="number" name="strength" defaultValue='0' onChange={this.handleChangeStr} />
              <label htmlFor="dexterity">Dexterity:</label><Required /><Input type="number" name="dexterity" defaultValue='0' onChange={this.handleChangeDex} />
              <label htmlFor="intelligence">Intelligence:</label><Required /><Input type="number" name="intelligence" defaultValue='0' onChange={this.handleChangeInt} />
              <label htmlFor="health">Health:</label><Required /><Input type="number" name="health" defaultValue='0' onChange={this.handleChangeHealth} />
            </div>
            <div className="numattr">
              <label htmlFor="hit_points">Hit Points: </label> <Required /><Input type="number" name="hit_points" defaultValue='0' onChange={this.handleChangeHP} />
              <label htmlFor="will">Will:</label><Required /><Input type="number" name="will" defaultValue='0' onChange={this.handleChangeWill} />
              <label htmlFor="perception">Perception:</label><Required /><Input type="number" name="perception" defaultValue='0' onChange={this.handleChangePer} />
              <label htmlFor="fatigue_points">Fatigue Points:</label><Required /><Input type="number" name="fatigue_points" defaultValue='0' onChange={this.handleChangeFP} />
            </div>
          </div>
          <div className="textareacont">
            <label htmlFor="abilities" className="textLabel">Abilities:</label>
            <Required /><Textarea className="abilities" name="abilities" defaultValue='Put Abilities in here.' onChange={this.handleChangeAbilities} />
            <label htmlFor="backstory" className="textLabel">Backstory:</label>
            <Required /><Textarea className="backstory" name="backstory" defaultValue='Add a background story for your character here!' onChange={this.handleChangeStory} />
          </div>
          {Ready && <p></p>}<Button className="bigButt">Submit</Button>
        </form >
      </div>

    )
  };
}

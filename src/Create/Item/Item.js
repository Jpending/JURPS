import React from 'react'

export default function Item() {

  return (
    <div>
      <h1>Create your Item</h1>
      <div>
        <form>
          <div className="textattr">
            <p>Name:</p><input type="text" className="textinput" />
            <p>Material:</p><input type="text" className="textinput" />
            <p>Attack-Type:</p><input type="text" className="textinput" />
          </div>
          <div className="numattrcont" >
            <div className="numattr" >
              <p>Strength Mod:</p><input type="number" />
              <p>Dexterity Mod:</p><input type="number" />
              <p>Intelligence Mod:</p><input type="number" />
              <p>Health Mod:</p><input type="number" />
            </div>
            <div className="numattr">
              <p> Hit Point Mod: </p> <input type="number" />
              <p> Will Mod:</p><input type="number" />
              <p>Perception Mod:</p><input type="number" />
              <p>Fatigue Point Mod:</p><input type="number" />
            </div>
          </div>
          <div className="textareacont">
            <textarea className="abilities">Put your abilities here</textarea>
            <textarea className="backstory">Background story stuff goes here...</textarea>
          </div>
          <button>Create</button>
        </form >
      </div>
    </div>
  );
}

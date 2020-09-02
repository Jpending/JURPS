import React from 'react'

export default function Character() {

  return (
    <body>
      <h1>Create your Character</h1>
      <div>
        <form>
          <div className="textattr">
            <p>Name:</p><input type="text" className="textinput" />
            <p>Race:</p><input type="text" className="textinput" />
            <p>Class:</p><input type="text" className="textinput" />
          </div>
          <div className="numattrcont" >
            <div className="numattr" >
              <p>Strength:</p><input type="number" />
              <p>Dexterity:</p><input type="number" />
              <p>Intelligence:</p><input type="number" />
              <p>Health:</p><input type="number" />
            </div>
            <div className="numattr">
              <p> Hit Points: </p> <input type="number" />
              <p> Will:</p><input type="number" />
              <p>Perception:</p><input type="number" />
              <p>Fatigue Points:</p><input type="number" />
            </div>
          </div>
          <div className="textareacont">
            <textarea className="abilities">Put your abilities here</textarea>
            <textarea className="backstory">Background story stuff goes here...</textarea>
          </div>
          <button>Create</button>
        </form >
      </div>
    </body>
  );
}

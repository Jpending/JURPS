import React from 'react'

export default function UserStuffLI(props) {
  const { char } = props;
  return (

    <div className="characterdiv" key={char.id}>
      <h4>{char.name}</h4>
      <ul>
        <li key={char.id + 1}>{char.race}</li>
        <li key={char.id + 3}>{char.class}</li>
      </ul>
    </div>
  )
}

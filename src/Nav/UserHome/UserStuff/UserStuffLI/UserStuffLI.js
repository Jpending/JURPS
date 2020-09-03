import React from 'react'
import FadeIn from '../../../../Utilities/FadeIn';

export default function UserStuffLI(props) {
  const { char } = props;
  return (

    <div className="characterdiv" key={char.id}>
      <h4>{char.name}</h4>
      <ul>
        <FadeIn>
          <li key={char.id + 1}>{char.race}</li>
          <li key={char.id + 3}>{char.class}</li>
        </FadeIn>
      </ul>
    </div>
  )
}

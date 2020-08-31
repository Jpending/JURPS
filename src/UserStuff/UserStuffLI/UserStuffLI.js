import React from 'react'

export default function UserStuffLI(props) {
  let ArrofKeys = []
  let ArrofNames = Object.keys(props.name);
  for (let key in props.name)
    if (props.name.hasOwnProperty(key)) {
      ArrofKeys.push(props.name[key])
    }
  console.log(ArrofNames)
  return (
    ArrofNames.map(thing =>
      <li key={thing.id}>{thing}</li>)
  )
}

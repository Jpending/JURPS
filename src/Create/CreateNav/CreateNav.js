import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Character from '../Character/Character'
import BBEG from "../BBEG/BBEG"
import NPC from '../NPC/NPC'
import Item from '../Item/Item'

export default function CreateNav() {

  return (

    <div className="makestuffnav">
      <Link to="/User/Create/Character"><button className="makebuttons">Make a Character</button></Link>
      <Link to="/User/Create/NPC"><button className="makebuttons">Make an NPC</button></Link>
      <Link to="/User/Create/Item"><button className="makebuttons">Make an Item</button></Link>
      <Link to="/User/Create/BBEG"><button className="makebuttons">Make a BBEG</button></Link>
    </div>
  )
}

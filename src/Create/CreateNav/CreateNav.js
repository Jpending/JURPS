import React from 'react'
import {
  Link
} from "react-router-dom"


export default function CreateNav() {

  return (

    <div className="makestuffnav">
      <Link to="/User/Create/Character"><button className="makebuttons">Make a Character</button></Link>
      <Link to="/User/Create/NPC"><button className="makebuttons">Make an NPC</button></Link>
      <Link to="/User/Create/Item"><button className="makebuttons">Make an Item</button></Link>
      <Link to="/User/Create/BBEG"><button className="makebuttons">Make a BBEG</button></Link>
      <Link to="/User/Characters/"><button className="makebuttons" >View Characters</button></Link>
    </div>
  )
}

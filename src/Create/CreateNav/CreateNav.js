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
    < Router >
      <div className="makestuffnav">
        <Link to="/Create/Character"><button className="makebuttons">Make a Character</button></Link>
        <Link to="/Create/NPC"><button className="makebuttons">Make an NPC</button></Link>
        <Link to="/Create/Item"><button className="makebuttons">Make an Item</button></Link>
        <Link to="/Create/BBEG"><button className="makebuttons">Make a BBEG</button></Link>
      </div>
      <Switch>
        <Route path="/Create/Character">
          <Character />
        </Route>
        <Route path="/Create/NPC">
          <NPC />
        </Route>
        <Route path="/Create/Item">
          <Item />
        </Route>
        <Route path="/Create/BBEG">
          <BBEG />
        </Route>
      </Switch>
    </Router >)
}

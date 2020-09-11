import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '../../Utilities/Utilities'
import TokenService from '../../Services/Token-service'
import IdleService from '../../Services/Idle-service'
export default class CreateNav extends React.Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  render() {
    return (
      <div className="makestuffnav" >
        <Link onClick={this.handleLogoutClick} to='/'><Button className="makebuttons">Logout</Button></Link>
        <Link to="/User/Create/Character"><Button className="makebuttons">Make</Button></Link>
        {/* <Link to="/User/Create/NPC"><Button className="makebuttons">Make an NPC</Button></Link>
      <Link to="/User/Create/Item"><Button className="makebuttons">Make an Item</Button></Link>
      <Link to="/User/Create/BBEG"><Button className="makebuttons">Make a BBEG</Button></Link> */}
        <Link to="/User/Characters/" > <Button className="makebuttons" >View</Button></Link>
      </div >
    )
  }
}

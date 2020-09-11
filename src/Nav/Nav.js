import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css'

import FadeIn from '../Utilities/FadeIn';



export default class Nav extends React.Component {
  render() {
    return (
      <FadeIn>
        <nav className="main-nav">
          <div className="nav-item"><Link to="/User/Characters"><button className='navbutt' >Home</button></Link></div>
          <div className="nav-item"><Link to="/About"><button className='navbutt' >About</button></Link></div>
          <div className="nav-item"><Link to="/HowTo"><button className='navbutt' >How to Use</button></Link></div>
          <div className="nav-item"><Link to="/Contact"><button className='navbutt' >Contact</button></Link></div>
        </nav>
      </FadeIn>
    )
  }
}

import React from 'react';
import './About.css'


export default function About() {

  return (
    <div className="main-body linksdiv" >
      <h1 className="links">About Jurps</h1>
      <p className="links">JURPS is a take on GURPS, the GENERIC UNIVERSAL ROLEPLAYING SYSTEM.
      In it's original form GURPS was created by Steve Jackson, in 1985 in
      order to allow players and DM's alike the opportunity and freedom to
      take the basics of Dungeons and Dragons and apply it to worlds the original
      game did not cover, such as Sci-fi, cyberpunk, or dystopian themes.</p>
      <h3 className="links">find out more below</h3>
      <div className="linksdiv links" >
        <a className="links" href="https://www.youtube.com/watch?v=AYo3MrGw1Gs">History</a>
        <a className="links" href="https://en.wikipedia.org/wiki/GURPS">wikipedia</a>
        <a className="links" href="http://www.sjgames.com/gurps/" >SJGames</a>
      </div>
    </div >
  );
}

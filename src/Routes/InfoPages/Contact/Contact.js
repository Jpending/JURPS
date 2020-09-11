import React from 'react';
import './Contact.css'
export default function Contact() {

  return (
    <div className="main-body">
      <h1 className="heading">Contact</h1>
      {/* <form className="main-body">
        <input type='email' placeholder="youremail@example.com" />
        <textarea placeholder="type your message here" />
        <button type="submit" >Send</button>
      </form> */}
      <a className="contactlinks" href="mailto:jpending@gmail.com">Click to send an email.</a>
    </div>
  );
}

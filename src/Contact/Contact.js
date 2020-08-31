import React from 'react';
import './Contact.css'
export default function Contact() {

  return (
    <div>
      <h1>Contact</h1>
      <form>
        <input type='email' placeholder="youremail@example.com" />
        <textarea placeholder="type your message here" />
        <button type="submit" >Send</button>
      </form>
      <a href="jpending@gmail.com">send me an email.</a>
    </div>
  );
}

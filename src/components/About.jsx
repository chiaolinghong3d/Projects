import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function About() {
  return (
    <div className='content-item-container'>
      <h1>Chiaoling <span style={{color: '#2377C6'}}>Hong</span></h1>
      <br />
      <h2>I am a software engineer who is passionate <br/>about user-centered design.</h2>
      <br />
      <br />
      <h2>clean.<span style={{color: '#4A9DEB'}}>simple</span>.design.</h2>
      <div className="social-media-list pt-5">
        <BsGithub className='social-media-icon'/>
        <BsLinkedin className='social-media-icon'/>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { RiMailSendFill } from 'react-icons/ri';
  
function About() {
  return (
    <div className='content-item-container' id='about'>
      <div className="intro">
        <h1>Chiaoling <span style={{color: '#2377C6'}}>Hong</span></h1>
        <br /><br />
        <p>I am a software engineer who is passionate <br/>about <span style={{color: '#4A9DEB'}}>user-centered design</span>.</p>
        <br /><br />
        <p>clean.<span style={{color: '#4A9DEB'}}>simple</span>.design.</p>
      </div>
      <div className="social-media-list pt-5">
        <a href='https://github.com/chiaolinghong3d' target='_blank' rel='noopener noreferrer'>
          <BsGithub className='social-media-icon'/>
        </a>
        <a href='https://www.linkedin.com/in/chiaolinghong/' target='_blank' rel='noopener noreferrer'>
          <BsLinkedin className='social-media-icon'/>
        </a>
        <a href='mailto:chiaolinghong3d@gmail.com'>
          <RiMailSendFill className='social-media-icon'/>
        </a>
      </div>
    </div>
  );
}

export default About;

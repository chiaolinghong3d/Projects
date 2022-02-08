import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";
import { SiContainerd } from "react-icons/si";

function Home() {
  return (
    <div className='content-item-container' id='home'>
      <div className='row align-items-center justify-content-around'>
        <div className='col-sm-5 d-flex justify-content-center'>
          <img
            className='img-fluid rounded-circle p-3'
            src={`${process.env.PUBLIC_URL}/img/profile.jpg`}
            alt='profile pic'
          />
        </div>
        <div className='col-sm-6'>
        <h1><span style={{fontSize: '1.2rem'}}>Hi, I'm </span>Chiaoling</h1>
          <p className='pt-2 '>
            I am a <span className='blue'>fullstack developer</span> with a focus in front-end design,
            currently based in Milpitas, CA. I’m passionate in building
            user-centered interactions and open to front-end/full-stack
            positions
          </p>
        </div>
      </div>
      <div className='row justify-content-around align-items-center gx-4 pt-2'>
        <div className='col-sm-5'>
          <div className='space-evenly mx-3'>
            <a
              href='https://www.linkedin.com/in/chiaolinghong/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin className='social-media-icon' />
            </a>
            <a
              href='https://github.com/chiaolinghong3d'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub className='social-media-icon' />
            </a>
            <a href='mailto:chiaolinghong3d@gmail.com'>
              <RiMailSendFill className='social-media-icon' />
            </a>
          </div>
        </div>
        <div className='col-sm-6 btn-resume'>
          <div className="d-flex justify-content-center">
            <a
              href='https://52670be7-fb3b-4f6c-8d62-2c6bb22c054b.filesusr.com/ugd/c6dcdd_42b9e9df4ff5420492987cb0effdae5b.pdf'
              className='btn btn-primary btn-lg'
              target='_blank' 
              rel='noopener noreferrer'
              role='button'
            >
              resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

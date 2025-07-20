import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/IMG_5514.jpg';
import Typewriter from 'typewriter-effect';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/poojakish" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pooja-kishorekumar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pooja Kishore Kumar</h1>
          {/* <p>AI Engineer</p> */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p style={{ margin: 0 }}>I'm&nbsp;</p>
            <p><Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: [ 'an AI Engineer', 'a Data Scientist', 'a Computer Vision Engineer', 'a Machine Learning Engineer' ],
              }} 
            /></p>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/poojakish" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pooja-kishorekumar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
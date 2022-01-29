import React from "react";
import { Container } from '../assets/styles/footer'

import reactIcon from './../assets/icons/react-icon.svg'
import linkedinIcon from './../assets/icons/linkedin.png'
import githubIcon from './../assets/icons/github.png'
import youtubeIcon from './../assets/icons/youtube.svg'
import twitterIcon from './../assets/icons/twitter.png'

export function Footer() {
  return (
    <Container className="footer" id="foot"> 
      <a href="/" className="logo">
        <span>Technocrats Labs</span>
        <h6><a href="mailto:technocrats.nitw@gmail.com" style={{color: '#ffffff'}}>technocrats.nitw@gmail.com</a></h6>
      </a>
      <div>
        <p>
          Made with <span>❤️</span> in <img src={reactIcon} alt="React" id="react" /> x <img src={githubIcon} alt="React" /> pages
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/company/technocrats-lab"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Technocrats-nitw"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://twitter.com/labs_technocrat"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>

        <a
          href="https://www.youtube.com/channel/UC7XJqHdyyUgQcIYkCsP8APg"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
    </Container>
  )
}

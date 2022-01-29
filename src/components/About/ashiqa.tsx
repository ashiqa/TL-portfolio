import React from "react";
import { Android, Cpp, Css, Django, Flutter, HTML, Js, Mysql, Nodejs, Python, REACT, Selenium } from "../Icons";
import { Container } from "../../assets/styles/about";
import ScrollAnimation from "react-animate-on-scroll";
import linkedinIcon from '../../assets/icons/linkedin.png'
import githubIcon from '../../assets/icons/github.png'
import anshiqaImg from "../../assets/images/ashiqa.jpeg";

export function Ashiqa(props:any){
  return(
    <Container id="about">

      <div className="about-image">
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={anshiqaImg} alt="Ashiqa Rahman" />
        </ScrollAnimation>

      </div>
      <div className="about-text">
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
          <h2>Ashiqa Rahman</h2>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>She is a pre-final year studying Computer Science Engineering at NITW and a summer SDE intern at Amazon.</p>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>
          Proficient at cross-platform app development using flutter, web development with React and NodeJs, bot automation and web scraping using Python and Selenium.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            She has participated in hackathons and is an active member of TEDx and CybSec community.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Tech Stack:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <Cpp/>
          <REACT/>
          <Js/>
          <HTML/>
          <Css/>
          <Nodejs/>
          <Flutter/>
          <Android/>
          <Django/>
          <Mysql/>
          <Python/>
          <Selenium/>
          
        </div>

        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Social Urls :</h3>
        </ScrollAnimation>

        <div className="social-media hard-skills">
        <a
          href="https://www.linkedin.com/in/ashiqa-rahman-432a47192/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/ashiqa"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        </div>

      </div>
      
    </Container>
  )
}

import React from "react";
import { Container } from "../../assets/styles/about";

import ScrollAnimation from "react-animate-on-scroll";
import { Cpp, Matlab, Python, Rust, Unity } from "../Icons";
import linkedinIcon from '../../assets/icons/linkedin.png'
import githubIcon from '../../assets/icons/github.png'
import aadiImg from "../../assets/images/aaditya.jpeg";


export function Aaditya(props:any){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
          <h2>Aaditya Prakash Kattekola</h2>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.2 * 1000}>
          <p>
            Aaditya Prakash is currently an undergraduate student, pursuing his 3rd year in Bachelors of Electronics & Communications Engineering from National Institute of Technology, Warangal (NITW)
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>
            He has published 3 mobile games, lead the teams on one of the games.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.6 * 1000}>

          <p>
            He’s also built TTL Logic based circuits, and is an active member in the Institute’s Robotics Club.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Tech-stacks :</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <Cpp/>
          <Unity/>
          <Matlab/>
          <Rust/>
          <Python/>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Social Urls :</h3>
        </ScrollAnimation>

        <div className="social-media hard-skills">
        <a
          href="https://www.linkedin.com/in/aaditya-prakash-74500b195/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Kapi2910"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        </div>

      </div>
      <div className="about-image">
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.6 * 1000}>
          <img src={aadiImg} alt="Aaditya" />
        </ScrollAnimation>
      </div>
      
    </Container>
  )
}

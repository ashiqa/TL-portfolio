import React from "react";
import { Container } from "../../assets/styles/about";

import ScrollAnimation from "react-animate-on-scroll";
import { Cpp, Css, Django, HTML, Js, Mongo, Mysql, Nodejs, Python, REACT, Typescript } from "../Icons";
import SufiyanImg from "../../assets/images/sufiyan.jpeg";
import linkedinIcon from '../../assets/icons/linkedin.png'
import githubIcon from '../../assets/icons/github.png'


export function Sufiyan(){
  return(
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={SufiyanImg} alt="Sufiyan Ansari" />
        </ScrollAnimation>

      </div>

      <div className="about-text">
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
          <h2>Mohd. Sufiyan Ansari</h2>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            This is Mohd Sufiyan Ansari, currently a pre-final year student at National Institute of Technology, Warangal.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>
            Proficient at Backend Development using Django / ExpressJS+NodeJS, he has built numerous websites and won hackathons.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>
            Presently a Senior Developer in WSDC NITW and Joint Secretary at CSE Association, NITW.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Tech-stacks :</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <Cpp/>
          <Django/>
          <REACT/>
          <Js/>
          <HTML/>
          <Css/>
          <Nodejs/>
          <Mysql/>
          <Mongo/>
          <Typescript/>
          <Python/>
        </div>
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Social Urls :</h3>
        </ScrollAnimation>

        <div className="social-media hard-skills">
        <a
          href="https://www.linkedin.com/in/sufiyan-ansari-nitw/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/suffisme"
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

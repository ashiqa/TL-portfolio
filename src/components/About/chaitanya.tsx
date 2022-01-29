import React from "react";
import { Container } from "../../assets/styles/about";

import ScrollAnimation from "react-animate-on-scroll";
import { Cpp, Css, Django, HTML, Js, Mysql, Python, Tf } from "../Icons";
import chaitanyaImg from "../../assets/images/chaitanya.jpeg";
import linkedinIcon from '../../assets/icons/linkedin.png'
import githubIcon from '../../assets/icons/github.png'


export function Chaitanya(props:any){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
          <h2>Chaitanya Hardikar</h2>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.2 * 1000}>
          <p>
            This is Chaitanya Hardikar, third year student from National Institute of Technology, Warangal pursuing B.Tech in Computer Science and Engineering.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>
            Well-versed in backend Django Frameworks, HTML/CSS and interested in Machine Learning. He also is a competitive coder who practices regularly on Codeforces and Codechef.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.6 * 1000}>

          <p>
            Currently, a Senior Developer in WSDC NITW, a Joint Secretary at CSE Association NITW, and a member of Nevronas-IG team.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Tech-stacks :</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <Cpp/>
          <Js/>  
          <HTML/>
          <Css/>
          <Django/>
          <Tf/>
          <Mysql/>
          <Python/>

      </div>

      <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Social Urls :</h3>
        </ScrollAnimation>

        <div className="social-media hard-skills">
        <a
          href="https://www.linkedin.com/in/chaitanya-hardikar-0ab4821a7/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/chaitanyahardikar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        </div>

      </div>
      <div className="about-image">
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.6 * 1000}>
          <img src={chaitanyaImg} alt="Chaitanya Hardikar" />
        </ScrollAnimation>

      </div>
      
    </Container>
  )
}

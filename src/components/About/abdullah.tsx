import React from "react";
import { Container } from "../../assets/styles/about";

import ScrollAnimation from "react-animate-on-scroll";
import { Cpp, Matlab, Python, Ros, Solidworks, Tf } from "../Icons";
import linkedinIcon from '../../assets/icons/linkedin.png'
import githubIcon from '../../assets/icons/github.png'
import abdullahImg from "../../assets/images/abdullah.jpeg";


export function Abdullah(props:any){
  return(
    <Container id="about">
    <div className="about-image">
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={abdullahImg} alt="Shaik Abdullah" />
        </ScrollAnimation>

      </div>
      <div className="about-text">
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
          <h2>Shaik Abdullah</h2>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Shaik Abdullah is currently an undergraduate student, pursuing his 3rd year in Bachelors of Electrical and Electronics Engineering from National Institute of Technology, Warangal (NITW).
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>
            His areas of interest is mainly Robotics. He has worked on several Robotic projects like Delivery Drones, Harvesting Autonomous Ground Vehicles (AGVs) and Object Recognition and Categorization Robotic Arms. He has internship experience at several companies working on waste segregating robotic arms, warehouse robots and so on. His current research is related to FWMAVs for Smart Agriculture and Stealth UAVs.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>
            He has experience with SLAM, Navigation, Kinematics of motion, etc.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>
            Tech-stacks :
          </h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <Cpp/>
          <Ros/>
          <Tf/>
          <Python/>
          <Solidworks/>
          <Matlab/>
      </div>
      <ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Social Urls :</h3>
        </ScrollAnimation>

        <div className="social-media hard-skills">
        <a
          href="https://www.linkedin.com/in/shaik-abdullah-6ab62219b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Shaik2003"
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

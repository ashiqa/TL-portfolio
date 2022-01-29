import React from "react";

import ScrollAnimation from "react-animate-on-scroll"
import { Container } from "../assets/styles/intro"

function Intro(){
  return(
    <Container id="home">
      <div className="hero-text">

      <br/>
        <br/>
        <br/>

        <br/>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000} animateOnce={true}>
        <span id="top-this">This is</span>
        <br/>
        <span id="TLabs">Technocrats Labs</span>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000} animateOnce={true}>
          <h3>We leverage ultimate technologies to transcend customer experience</h3>
        </ScrollAnimation> */}
        <br/>
        <br/>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000} animateOnce={true}>
          <h2>
          <span class="team-name">6 Friends</span>, unified by nothing but the zeal to acheive something - anything at all - form a team to participate in a hackathon.
          Then they take part in another, then another, and then.... here they are trying to provide their skills as a service to people with mutual benefits.
          </h2>
        </ScrollAnimation>

        <br/>
        <br/>
        <br/>

        <br/>

      </div>
    </Container>
  )
}

export default Intro;

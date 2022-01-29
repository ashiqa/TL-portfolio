import React from "react";
import { Abdullah } from "../components/About/abdullah";
import { Chaitanya } from "../components/About/chaitanya";
import { Ashiqa } from "../components/About/ashiqa";
import { Sufiyan } from "../components/About/sufiyan";
import { Aaditya } from "../components/About/aaditya";
import { Anshuman } from "../components/About/anshuman";

import ScrollAnimation from "react-animate-on-scroll"
import { Container } from "../assets/styles/intro"
import {MouseScroll} from "../components/Icons"
import { NavHashLink, HashLink } from 'react-router-hash-link'

function Team(){
    return(
        <>
        <Container id="home">      
      <div className="hero-text">

      <br/>
        <br/>
        <br/>

        <br/>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000} animateOnce={true}>
          <h1>Technocrats - The Team</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000} animateOnce={true}>
          <h3>Meet The Original Six Of Technocrats</h3>
        </ScrollAnimation>
        
        <br/>
        <br/>
        <br/>

        <br/>
        <NavHashLink smooth to="#team"><MouseScroll></MouseScroll></NavHashLink>
      </div>

    </Container>
    <div id="team">
        <Sufiyan/>
        <Anshuman/>
        <Ashiqa />
        <Chaitanya />
        <Abdullah />
        <Aaditya />
    </div>
        </>
    );
  }

export default Team;
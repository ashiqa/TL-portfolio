import React from "react";
import { Container } from '../assets/styles/header'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import TechnocratsImg from "./../assets/icons/technocrats.svg";

export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
    
    <img src={TechnocratsImg} alt="Ilustração" height={100}/>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="/" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="/projects" onClick={closeMenu}>
            Projects
          </NavHashLink>
          <NavHashLink smooth to="/team" onClick={closeMenu}>
            The Original Six
          </NavHashLink>
          <NavHashLink smooth to="#foot" onClick={closeMenu}>
            Get in Touch !
          </NavHashLink>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
    </Container>
  )
}

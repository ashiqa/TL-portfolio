import React from "react";
import { Container } from "../assets/styles/projects";
import { projects } from "../constants/projects";
import { ProjectCard } from "../components/project-card";


function Projects(){
  return(
    <Container id="projects">
      <h2>Project Gallery</h2>

      <div className="projects">
        {projects.map((project) =>{
          return <ProjectCard project={project} />
        })}
      </div>
    </Container>
  );
}

export default Projects;
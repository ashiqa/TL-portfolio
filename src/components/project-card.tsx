import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function ProjectCard(props:any){
  return(
        <ScrollAnimation  animateOnce={true} animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>{props.project.name}</h3>
              <p>{props.project.description}</p>

            <div className="hard-skills">
                {props.project.hardSkills.map((item:any) =>{
                   return item;
                })}
            </div>
            <footer>  
            <ul className="tech-list">
                {props.project.techList.map((item:any) =>{
                    return <li>{item}</li>;
                    })}
                  
                </ul>
            </footer>
            </div>
          </div>
        </ScrollAnimation>
  );
}
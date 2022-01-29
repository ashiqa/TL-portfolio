import React from "react";
import ScrollAnimation from "react-animate-on-scroll"
import '../assets/styles/testimonial.css'

function TestimonialCards(props:any){
    const direction = props.direction;
    var behavior = "testimonial-quote group";
    var fadeDir = "fadeInLeft";
    if(direction == 'right'){
        behavior += " right";
        fadeDir = "fadeInRight";
    }
    return(
        <>
            <ScrollAnimation animateIn={fadeDir} delay={0.15 * 1000} animateOnce={true}>
            <div className={behavior}>
                <img src={props.item.img}/>
                <div className="quote-container">
                    <blockquote>
                        <p>{props.item.testimonial}”</p>
                    </blockquote>  
                    <cite><span>{props.item.name}</span><br/>
                        {props.item.title}<br/>
                        {props.item.college}
                    </cite>
                </div>
            </div>    
            </ScrollAnimation>
            <hr style={{margin: '60px auto', opacity: '.5'}}></hr>
        </>
        )
    
}

export default TestimonialCards;
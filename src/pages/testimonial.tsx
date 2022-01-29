import React from "react";
import ScrollAnimation from "react-animate-on-scroll"
import '../assets/styles/testimonial.css'
import TestimonialCards from "../components/testimonial-cards"
import { testimonials } from "../constants/testimonials"

function Testimonial(){
  if(testimonials.length == 0)
      return(<></>);
  return(
    <>
      {/* Feedbacks */}
      <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000} animateOnce={true}>
      <div style={{margin:'10% auto 0 auto', color:'#0f0f0f'}}>
        <h1 id="happycustomer">Our Happy Clients</h1>
      </div>
      </ScrollAnimation>
      <div style={{maxWidth: '100vh', margin: '2% auto 0 auto', paddingTop: '80px', paddingBottom: '80px'}}> 
        {testimonials.map((item, index) => {
            // if(index === 0) {
            //     return <></>
            // }
            var direction = index%2 === 0 ? 'left' : 'right';
              return(
                  <TestimonialCards item = {item} direction = {direction} />
              )
        })}          
      </div>
    </>
  )
}

export default Testimonial;
import React, { useEffect, useRef } from 'react'
import { Container } from './style'
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function Section6() {
  const TextRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.fromTo(TextRef.current, {
      opacity: 0.1,
      y: '50'
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
          trigger: TextRef.current,
          start: "-10% 90%",
          end: "150% 90%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })
  }, [])

  return (
    <Container>
      <h3 ref={TextRef}>More about us</h3>
    </Container>
  )
}

export default Section6
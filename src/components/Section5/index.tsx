import React, { useEffect, useRef } from 'react'
import { Bottom, Container, TextContent } from './style'
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function Section5() {

  const VideoRef = useRef<HTMLVideoElement>(null)
  const DivContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(DivContentRef.current, {
      width: '100%',
      marginTop: '-10vh',
    }, {
      width: '80%',
      marginTop: '0vh',
      scrollTrigger: {
        trigger: VideoRef.current,
        start: "0% 90%",
        end: "50% 90%",
        scrub: true,
        toggleActions: "restart none none none",
        markers: false,
    }, 
    })
  }, [])

  return (
    <Container>
      <div ref={DivContentRef} className="content">
        <video ref={VideoRef} autoPlay loop muted>
          <source src="https://burospaces1.fra1.cdn.digitaloceanspaces.com/kozowood/2023-10-30T12-21-47.403Z-kozo-architect-mobile.mp4#t=0.01" type="video/mp4" />
        </video>
        <TextContent>
          <h2>Let inspiration</h2>
          <h2 className='t2'>take shape</h2>
        </TextContent>
        <Bottom>
        <p>Need a future-proofed, sustainable space?<br/>
          We streamline communication with specialized architects who are ready to bring your ideal wooden home to fruition.</p>
          <button>
            <span>
              <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path data-v-4d231480="" d="M15.9913 16.1082L14.7017 5.42589C14.6171 4.72518 15.1641 4.10815 15.8699 4.10815C16.5652 4.10815 17.1088 4.70773 17.041 5.39966L15.9913 16.1082L17.0957 26.7577C17.1706 27.4799 16.6042 28.1082 15.8781 28.1082C15.1418 28.1082 14.5721 27.4628 14.6634 26.7322L15.9913 16.1082Z" fill="black"></path><path data-v-4d231480="" d="M16 16.1165L26.6823 14.8269C27.383 14.7423 28 15.2893 28 15.9951C28 16.6904 27.4004 17.234 26.7085 17.1662L16 16.1165L5.35042 17.2209C4.62827 17.2958 4 16.7294 4 16.0033C4 15.267 4.64533 14.6973 5.37595 14.7886L16 16.1165Z" fill="black"></path></svg>
              Building with Kōzōwood
            </span>
          </button>
      </Bottom>
      </div>
      <img src="https://cdn.sanity.io/images/kdijhcxf/develop/b25b57eb8f1b0b5c0756278fb3501dc5a075a6d2-720x960.jpg?rect=45,0,630,960&w=320&h=488&q=100&auto=format" alt="" />
    </Container>
  )
}

export default Section5
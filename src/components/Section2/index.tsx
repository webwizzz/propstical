import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/home.svg';
import { Container, VideoContainer } from './style';
gsap.registerPlugin(ScrollTrigger)




function Section2({ SectionRef }: { SectionRef: React.RefObject<HTMLDivElement>}) {

  const MaskRef = useRef<HTMLVideoElement>(null)
  const VideoContentRef = useRef<HTMLDivElement>(null)
  // const SectionRef = useRef<HTMLDivElement>(null)
  const TextRef = useRef<HTMLHeadingElement>(null)
  const LogoRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    gsap.fromTo(MaskRef.current, {
      maskSize: '15vw'
    }, {
      maskSize: '120vw',
      scrollTrigger: {
          trigger: SectionRef.current,
          start: "10% 15%",
          end: "60% 15%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo(TextRef.current, {
      opacity: 1,
      y: 0,
    }, {
      opacity: 0,
      y: '-100px',
      scrollTrigger: {
          trigger: TextRef.current,
          start: "0% 25%",
          end: "100% 15%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo(LogoRef.current, {
      opacity: 1,
      transform: 'scale(100%)',
    }, {
      opacity: 0,
      transform: 'scale(150%)',
      scrollTrigger: {
          trigger: SectionRef.current,
          start: "25% 25%",
          end: "60% 5%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })


    // gsap.fromTo(VideoContentRef.current, {
    //   height: '150vh',
    // }, {
    //   height: '40vh',
    //   scrollTrigger: {
    //       trigger: SectionRef.current,
    //       start: "50% 0%",
    //       end: "90% 0%",
    //       scrub: true,
    //       toggleActions: "restart none none none",
    //       markers: false,
    //   }, 
    // })

    // gsap.fromTo(SectionRef.current, {
    //   height: '150vh',
    // }, {
    //   height: '40vh',
    //   scrollTrigger: {
    //       trigger: SectionRef.current,
    //       start: "50% 0%",
    //       end: "90% 0%",
    //       scrub: true,
    //       toggleActions: "restart none none none",
    //       markers: false,
    //   }, 
    // })
    

    const pin = gsap.context(() => {
      gsap.to(VideoContentRef.current, {
        scrollTrigger: {
            trigger: SectionRef.current,
            start: "0% 0%",
            end: "90% 0%",
            scrub: true,
            toggleActions: "restart none none none",
            markers: false,
            pin: true,
        }, 
       })
      })

    return () => {
      pin.revert()
    }
  }, [])
  

  return (
    <Container ref={SectionRef}>
      <VideoContainer ref={VideoContentRef}>
        <video ref={MaskRef} autoPlay loop muted>
          <source type="video/mp4" src='/latitude.mp4#t=0.01' />
        </video>
      </VideoContainer>

      <h1 ref={TextRef}>Connect with highly-rated designers who are committed to<br/>executing your vision,not theirs.</h1>
      <div className="logo">
        <Logo ref={LogoRef} />
      </div>
    </Container>
  )
}

export default Section2
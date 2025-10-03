import React, { useEffect, useRef, useState } from 'react'
import { Container, TextContent, VideoContainer } from './style'
import Card from './Card'
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { theme } from '../../styles/Theme';

gsap.registerPlugin(ScrollTrigger)

function Section1() {

  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const SectionRef = useRef<HTMLDivElement>(null)
  const DivRef = useRef<HTMLDivElement>(null)
  
  
  const URL_VIDEO1 = '/interior1.mp4'
  const URL_VIDEO2 = '/cozy-interior.mp4'
  
  const [videoSelected, setVideoSelected] = useState<string>(URL_VIDEO1)

  useEffect(() => {
    if (videoSelected === URL_VIDEO1) {
      gsap.fromTo(".video12", {
        opacity: 0,
        display: 'none',
      }, {
        opacity: 1,
        display: 'block',
        ease: Expo.easeInOut,
        duration: 2,
      })

      gsap.fromTo(".video22", {
        opacity: 1,
        display: 'block',
      }, {
        opacity: 0,
        display: 'none',
        ease: Expo.easeInOut,
        duration: 2,
      })

      setTimeout(() => {
        if (video1Ref.current && video2Ref.current) {
          video1Ref.current.play()
          video2Ref.current.pause()
          video2Ref.current.currentTime = 0
        }
      }, 0)
    } else {
      gsap.fromTo(".video22", {
        opacity: 0,
        display: 'none',
      }, {
        display: 'block',
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 2,
      })

      gsap.fromTo(".video12", {
        opacity: 1,
        display: 'block',
      }, {
        display: 'none',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2,
      })

      setTimeout(() => {
        if (video1Ref.current && video2Ref.current) {
          video2Ref.current.play()
          video1Ref.current.pause()
          video1Ref.current.currentTime = 0
        }
      }, 0)
    }
  }, [videoSelected])

  useEffect(() => {
    gsap.fromTo(DivRef.current, {
      backgroundColor: theme.colors.primary,
    }, {
        // ease: Expo.easeIn,
        backgroundColor: theme.colors.secodary,
        // duration: 0,
        // delay: 0,
        scrollTrigger: {
            trigger: SectionRef.current,
            start: "5% 0%",
            end: "85% 15%",
            scrub: true,
            toggleActions: "restart none none none",
            markers: false,
        }, 
    })
  }, [])

  return (
    <Container ref={SectionRef}>
      <TextContent ref={DivRef}>
        <div>
        <h1>HOME COMPASS</h1>
        <p>Mastical Company</p>
        </div>
        <div className="scroll">
          <span className='animeted'>↓</span>
          <span>SCROLL</span>
        </div>
      </TextContent>

      <Card setVideo={setVideoSelected} video={videoSelected} video1={URL_VIDEO1} video2={URL_VIDEO2} />

      <VideoContainer>
        <video ref={video1Ref} autoPlay loop muted className='video12'>
          <source src={URL_VIDEO1} type="video/mp4" />
        </video>

        <video ref={video2Ref} autoPlay loop muted className='video22'>
          <source src={URL_VIDEO2} type="video/mp4" />
        </video>
      </VideoContainer>
    </Container>
  )
}

export default Section1
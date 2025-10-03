import React, { useEffect, useRef, useState } from 'react'
import { ButtonsVideos, Container, VideoContainer } from './style'
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg';
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)


interface Props {
  setVideo: React.Dispatch<React.SetStateAction<string>>;
  video: string;
  video1: string;
  video2: string;
}


function Card({ setVideo, video, video1, video2 }: Props) {
  const CardRef = useRef<HTMLDivElement>(null)
  const Video1Ref = useRef<HTMLVideoElement>(null)
  const Video2Ref = useRef<HTMLVideoElement>(null)

  const [progressVideo1, setProgressVideo1] = useState<number>(0)
  const [progressVideo2, setProgressVideo2] = useState<number>(0)

  const [cardWidth, setCardWidth] = useState<number | null>(CardRef.current ? CardRef?.current.clientWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      if (CardRef.current) {
        setCardWidth(CardRef?.current.clientWidth);
        console.log(cardWidth)
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(video === video1) {
      if (Video1Ref.current && Video2Ref.current) {
        Video1Ref.current.play()
        Video2Ref.current.pause()
        Video2Ref.current.currentTime = 0
      }
    } else {
      if (Video1Ref.current && Video2Ref.current) {
        Video2Ref.current.play()
        Video1Ref.current.pause()
        Video1Ref.current.currentTime = 0
      }
    }
  }, [video])

  useEffect(() => {
    if (video === video1) {
      if (Video1Ref.current && Video2Ref.current) {
        setProgressVideo2(0)
      }
    } else {
      if (Video1Ref.current && Video2Ref.current) {
        setProgressVideo1(0)
      }
    }
    
    const timeVideo = () => {
      if (Video1Ref.current && Video2Ref.current) {
        if (video === video1) {
          setProgressVideo1(Math.round(Video1Ref.current.currentTime * 100 / Video1Ref.current.duration))
          setProgressVideo2(0)

          if (Math.round(Video1Ref.current.currentTime * 100 / Video1Ref.current.duration) >= 99) {
            setVideo(video2)
            console.log("CHEGOU NO FINAL")
            Video1Ref.current.pause()
            Video2Ref.current.play()
            setProgressVideo1(0)
          }

        } else {
          setProgressVideo2(Math.round(Video2Ref.current.currentTime * 100 / Video2Ref.current.duration))
          setProgressVideo1(0)

          if (Math.round(Video2Ref.current.currentTime * 100 / Video2Ref.current.duration) >= 99) {
            setVideo(video1)
            Video2Ref.current.pause()
            Video1Ref.current.play()
            setProgressVideo2(0)
          }
        }
      }
    }

    const videoElement = document.querySelector(".video1 div video") as HTMLVideoElement;
    const videoElement2 = document.querySelector(".video2 div video") as HTMLVideoElement;
    videoElement.addEventListener("timeupdate", timeVideo);
    videoElement2.addEventListener("timeupdate", timeVideo);

    return () => {
      videoElement.removeEventListener("timeupdate", timeVideo);
      videoElement2.removeEventListener("timeupdate", timeVideo);
    };

    
  }, [video])

  useEffect(() => {
    if (video === video1) {
      gsap.fromTo(".video1", {
        left: '-100%',
        opacity: 0,
        display: 'none',
      }, {
        left: '18px',
        opacity: 1,
        display: 'block',
        ease: Expo.easeInOut,
        duration: 2,
      })

      gsap.fromTo(".video2", {
        left: '18px',
        opacity: 1,
        display: 'block',
      }, {
        left: '100%',
        opacity: 0,
        display: 'none',
        ease: Expo.easeInOut,
        duration: 2,
      })
    } else {
      gsap.fromTo(".video2", {
        left: '-100%',
        opacity: 0,
        display: 'none',
      }, {
        left: '18px',
        display: 'block',
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 2,
      })

      gsap.fromTo(".video1", {
        left: '18px',
        opacity: 1,
        display: 'block',
      }, {
        left: '100%',
        display: 'none',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2,
      })
    }
  }, [video])



  return (
    <Container ref={CardRef} style={{ left: `calc(50% - ${cardWidth ? cardWidth/2 + 'px' : 334/2 + 'px'})` }}>
      <div className="video1 video">
        <VideoContainer>
          <video ref={Video1Ref} autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>

        </VideoContainer>

        <div className="textContent">
          <h4> A LA CARTE ADVICE</h4>
          <h1>No Commitments</h1>
          <p>Hire pros for 30-minute consults or specific tasks like sourcing—no full commitments needed.</p>
        </div>
      </div>

      <div className="video2 video">
        <VideoContainer>
          <video ref={Video2Ref} autoPlay loop muted>
            <source src={video2} type="video/mp4" />
          </video>

        </VideoContainer>

        <div className="textContent">
          <h4>CREATE YOUR HOME WITH</h4>
          <h1>PROPSTICAL</h1>
          <p>Never compromise on your dream again. Our system ensures the customer always has the final say</p>
        </div>
      </div>

      <ButtonsVideos>
        <button onClick={() => {
          setVideo(video1)
          console.log('Vídeo 1')
        }}>
          <div className="line">
            <div className="progress" style={{ width: `${progressVideo1}%`}}></div>
          </div>
        </button>

        <button onClick={() => {
          setVideo(video2)
          console.log('Vídeo 2')
        }}>
          <div className="line">
            <div className="progress" style={{ width: `${progressVideo2}%`}}></div>
          </div>
        </button>
      </ButtonsVideos>
    </Container>
  )
}

export default Card
import React, { useEffect, useRef, useState } from 'react'
import { Col2, Container, Line, LinkMenu, LinkMenu2, Links } from './style'
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { FaLinkedinIn, FaFacebook, FaInstagram   } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger)

interface Props {
  theme?: string
  SectionRef: React.RefObject<HTMLDivElement>
}

function Footer({ theme, SectionRef }: Props) {

  const LogoRef = useRef<SVGSVGElement>(null)
  const LogoDivRef = useRef<HTMLDivElement>(null)
  const LineRef = useRef<HTMLDivElement>(null)
  const MenuRef = useRef<HTMLDivElement>(null)

  const [cardHeight, setCardHeight] = useState<number | null>(MenuRef.current ? MenuRef?.current.clientHeight : 0);

  useEffect(() => {
    const handleResize = () => {
      if (MenuRef.current) {
        setCardHeight(MenuRef?.current.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(LogoRef.current, {
      opacity: 0.5,
      transform: 'scale(90%) translateY(10%)',
    }, {
      opacity: 1,
      transform: 'scale(100%) translateY(0%)',
      scrollTrigger: {
          trigger: LogoDivRef.current,
          start: "0% 100%",
          end: "85% 100%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo('.span-link', {
      x: '128px',
    }, {
      ease: Expo.easeInOut,
      x: '48px',
      delay: 10,
      duration: 2,
      stagger: {
        amount: 5000,
      },
      scrollTrigger: {
          trigger: LineRef.current,
          start: "0% 80%",
          end: "55% 80%",
          scrub: true,
          toggleActions: "start none none reverse",
          markers: false,
      }, 
    })
  }, [])

  return (
    <Container ref={SectionRef} className={theme}>
      <Line ref={LineRef}>
        <Links>
          <LinkMenu className='link' to="/"><span className='span-link'>Home</span></LinkMenu>
          <LinkMenu className='link' to="/about"><span className='span-link'>About</span></LinkMenu>
          <LinkMenu className='link' to="/building"><span className='span-link'>Building with Kōzōwood</span></LinkMenu>
          <LinkMenu className='link' to="/why"><span className='span-link'>Why Wood</span></LinkMenu>
          <LinkMenu className='link' to="/sustainability"><span className='span-link'>Sustainability</span></LinkMenu>
          <LinkMenu className='no-border link' to="/journal"><span className='span-link'>Journal</span></LinkMenu>
        </Links>
        <Col2>
          <div className="top" style={cardHeight ? { height: `${cardHeight / 4.05}px`} : {}}>
            <a href="" target='_blank'>
              <FaLinkedinIn />
            </a>
            <a href="" target='_blank'>
              <FaFacebook  />
            </a>

            <a href="" target='_blank'>
              <FaInstagram  />
            </a>
          </div>

          <div className="bottom">
            <LinkMenu2 style={{ height: '25%' }} to="">
              <span>Privacy Policy</span>
            </LinkMenu2>
            <LinkMenu2 style={{ height: '25%' }} to="">
              <span>Terms and Coditions</span>
            </LinkMenu2>
            <LinkMenu2 className='no-border' style={{ height: '50%' }} to="">
              <span>Made by Carlos Daniel</span>
            </LinkMenu2>
          </div>
        </Col2>
      </Line>
      <div ref={LogoDivRef} className="logo">
        <svg ref={LogoRef} data-v-7c9a7c3d="" viewBox="0 0 161 24"><path data-v-7c9a7c3d="" d="M111.278 4.71236C106.012 4.71236 101.742 9.03062 101.742 14.3562C101.742 19.6817 106.012 24 111.278 24C116.543 24 120.813 19.6817 120.813 14.3562C120.813 9.03062 116.543 4.71236 111.278 4.71236ZM111.278 20.9568C107.679 20.9568 104.751 17.9958 104.751 14.3562C104.751 10.7165 107.679 7.75553 111.278 7.75553C114.876 7.75553 117.804 10.7165 117.804 14.3562C117.804 17.9958 114.876 20.9568 111.278 20.9568ZM131.826 4.71236C126.56 4.71236 122.291 9.03062 122.291 14.3562C122.291 19.6817 126.56 24 131.826 24C137.092 24 141.362 19.6817 141.362 14.3562C141.362 9.03062 137.092 4.71236 131.826 4.71236ZM131.826 20.9568C128.227 20.9568 125.3 17.9958 125.3 14.3562C125.3 10.7165 128.227 7.75553 131.826 7.75553C135.425 7.75553 138.353 10.7165 138.353 14.3562C138.353 17.9958 135.425 20.9568 131.826 20.9568ZM64.9615 4.71236C59.6957 4.71236 55.4259 9.03062 55.4259 14.3562C55.4259 19.6817 59.6957 24 64.9615 24C70.2273 24 74.497 19.6817 74.497 14.3562C74.497 9.03062 70.2273 4.71236 64.9615 4.71236ZM64.9615 20.9568C61.3627 20.9568 58.4349 17.9958 58.4349 14.3562C58.4349 10.7165 61.3627 7.75553 64.9615 7.75553C68.5603 7.75553 71.488 10.7165 71.488 14.3562C71.488 17.9958 68.5603 20.9568 64.9615 20.9568ZM71.0337 3.04317H58.8893V0H71.0337V3.04317ZM27.6693 4.71236C22.4036 4.71236 18.1338 9.03062 18.1338 14.3562C18.1338 19.6817 22.4036 24 27.6693 24C32.9351 24 37.2049 19.6817 37.2049 14.3562C37.2049 9.03062 32.9351 4.71236 27.6693 4.71236ZM27.6693 20.9568C24.0706 20.9568 21.1428 17.9958 21.1428 14.3562C21.1428 10.7165 24.0706 7.75553 27.6693 7.75553C31.2681 7.75553 34.1959 10.7165 34.1959 14.3562C34.1959 17.9958 31.2681 20.9568 27.6693 20.9568ZM33.7415 3.04317H21.5972V0H33.7415V3.04317ZM155.727 5.22665H142.839V23.4857H155.727L161.002 18.151V10.5598L155.727 5.22513V5.22665ZM157.993 16.9748L154.564 20.4425H145.848V8.26983H154.564L157.993 11.7375V16.9748ZM10.2728 14.3425L17.1679 21.3159L15.0405 23.4674L8.14539 16.494L3.00901 21.6887V23.4842H0V5.22665H3.00901V17.3857L15.0315 5.22665L17.1589 7.37818L10.2728 14.3425ZM38.1693 5.22665H54.46V8.26983L42.424 20.4425H54.46V23.4857H38.1693V20.4425L50.2053 8.26983H38.1693V5.22665ZM101.3 8.26983L95.9979 23.4857H92.2758L88.2843 12.6337L84.2929 23.4857H80.5722L75.2794 8.26983L74.2217 5.22665H77.4113L78.4704 8.26983L82.4604 19.7456L86.682 8.26983V5.22665H89.8926V8.26983L94.1143 19.7456L98.1132 8.26983L99.1724 5.22665H102.362L101.304 8.26983H101.3Z"></path></svg>
      </div>
    </Container>
  )
}

export default Footer
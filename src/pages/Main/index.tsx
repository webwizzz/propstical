import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect, useRef, useState } from 'react'
import Section1 from '../../components/Section1'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'
import {Container } from './styles'
import Section4 from '../../components/Section4'
import Section5 from '../../components/Section5'
import Section6 from '../../components/Section6'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


export default function Main() {

  const HeaderRef = useRef<HTMLDivElement>(null)
  const SectionRef2 = useRef<HTMLDivElement>(null)
  const SectionRef3 = useRef<HTMLDivElement>(null)
  const SectionRef6 = useRef<HTMLDivElement>(null)
  const FooterRef = useRef<HTMLDivElement>(null)
  const PageRef = useRef<HTMLDivElement>(null)

  const lenis = useLenis(({ scroll }: { scroll: any}) => {
    // 
  })

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [theme, setTheme] = useState<string>('dark');
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (SectionRef2.current && SectionRef3.current && SectionRef6.current) {
        const positionDivSection2 = SectionRef2.current.getBoundingClientRect().top + window.scrollY
        const positionDivSection3 = SectionRef3.current.getBoundingClientRect().top + window.scrollY
        const positionDivSection6 = SectionRef6.current.getBoundingClientRect().top + window.scrollY

        if ((position) >=  positionDivSection2) {
          setTheme('light')
          if ((position) >=  positionDivSection3) {
            setTheme('dark')

            if ((position) >=  positionDivSection6) {
              setTheme('light')
            }
          }
        } else {
          setTheme('dark')
        }
      }

      if (FooterRef.current) {
        const positionFooter = FooterRef.current.getBoundingClientRect().top + window.scrollY

        if ((position + 56 + 48) >= positionFooter) {
          setDisable(true)
        } else {
          setDisable(false)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.2,
    }}>
      <Container ref={PageRef}>
        <Header theme={theme} HeaderRef={HeaderRef} disable={disable}/>
        <Section1 />
        <Section2 SectionRef={SectionRef2} />
        <Section3 SectionRef={SectionRef3} Section2Ref={SectionRef2} />
        <Section4 />
        {/* <Section5 /> */}
        {/* <Section6 SectionRef={SectionRef6} />
        <Footer SectionRef={FooterRef} theme='dark' /> */}
      </Container>
    </ReactLenis>
  )
}

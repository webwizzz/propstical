import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect, useRef } from 'react'
import Section1 from '../../components/Section1'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'
import {Container } from './styles'
import Section4 from '../../components/Section4'
import Section5 from '../../components/Section5'
import Section6 from '../../components/Section6'


export default function Main() {

  const SectionRef2 = useRef<HTMLDivElement>(null)
  const PageRef = useRef<HTMLDivElement>(null)

  const lenis = useLenis(({ scroll }: { scroll: any}) => {
    // 
  })

  return (
    
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.2,
    }}>
      <Container ref={PageRef}>
        <Section1 />
        <Section2 SectionRef={SectionRef2} />
        <Section3 Section2Ref={SectionRef2} />
        <Section4 />
        <Section5 />
        <Section6 />
      </Container>
    </ReactLenis>
  )
}

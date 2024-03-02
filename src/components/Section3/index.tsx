import React, { useEffect, useRef } from 'react'
import { Container, Content, Slider } from './style'
import SplitType from 'split-type'
import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow.svg';

import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { theme } from '../../styles/Theme';

gsap.registerPlugin(ScrollTrigger)

function Section3({ Section2Ref }: { Section2Ref: React.RefObject<HTMLDivElement>}) {
  const SectionRef = useRef<HTMLDivElement>(null)
  const Slider1Ref = useRef<HTMLDivElement>(null)
  const Slider2Ref = useRef<HTMLDivElement>(null)
  const TextRef1 = useRef<HTMLHeadingElement>(null)
  const TextRef2 = useRef<HTMLHeadingElement>(null)

  useEffect(() => {

    if (TextRef1.current && TextRef2.current) {
      SplitType.create(TextRef1.current, { types: 'chars,words' , wordClass: 'char1'})
      SplitType.create(TextRef2.current, { types: 'chars,words' , wordClass: 'char2'})

      gsap.fromTo('.char1', {
        opacity: '0.4'
      }, {
        opacity: '1',
        ease: Expo.easeOut,
        delay: 1,
        duration: 1,
        stagger: {
            amount: 1,
        },
        scrollTrigger: {
            trigger: TextRef1.current,
            start: "0% 70%",
            end: "200% 70%",
            scrub: true,
            toggleActions: "restart none none none",
            markers: false,
        }, 
      })

      gsap.fromTo('.char2', {
        opacity: '0.4'
      }, {
        opacity: '1',
        ease: Expo.easeOut,
        delay: 1,
        duration: 1,
        stagger: {
            amount: 1,
        },
        scrollTrigger: {
            trigger: TextRef2.current,
            start: "0% 70%",
            end: "200% 70%",
            scrub: true,
            toggleActions: "restart none none none",
            markers: false,
        }, 
      })

      gsap.fromTo(Slider1Ref.current, {
        x: -200
      }, {
        x: -20,
        scrollTrigger: {
            trigger: Slider1Ref.current,
            start: "-10% 100%",
            end: "500% 100%",
            scrub: 2,
            toggleActions: "restart none none reverse",
            markers: false,
        }, 
      })

      gsap.fromTo(Slider2Ref.current, {
        x: 20
      }, {
        x: -150,
        scrollTrigger: {
            trigger: Slider1Ref.current,
            start: "-10% 100%",
            end: "500% 100%",
            scrub: 2,
            toggleActions: "restart none none reverse",
            markers: false,
        }, 
      })
    }
  }, [])
  


  return (
    <Container ref={SectionRef}>
      <Content>
        <h1 ref={TextRef1}>Sturdily beautiful.<br/>
            Warm, bright.<br/>
            Naturally comforting.<br/>
            Timelessly modern.</h1>
      </Content>
      <Slider ref={Slider1Ref}>
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/dbb955eecab06d8d21d5c1bf6742571fdd85d17e-2663x1498.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/89c7a423c02972cf5ef5b17a6d1475969e1db77e-1180x1180.webp?w=700&auto=format" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/0e5a249860e7b9a2dded8ebc137df388b486c127-2415x1610.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/f16091c96ee5c27f1eb07fe07516d799e6709d2e-1180x1180.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/a1cc7c848255b2994536c3e969637ef62579afc9-2663x1498.jpg" alt="" />
        <img src="https://kozowood.com/_nuxt/image/d05fc7.webp" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/8f8662a74cbd1c10131aad053a30ada50a19be40-1228x1534.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/2a0e2cd3f7f21348b81860326ef4217836b9e83f-1200x674.jpg" alt="" />
      </Slider>

      <Slider style={{ alignItems: 'flex-start'}} ref={Slider2Ref}>
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/8f8662a74cbd1c10131aad053a30ada50a19be40-1228x1534.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/8cbbfa457b44020d4ce6db9075a6efa59cc39c37-1200x674.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/1014fafe485cd870882889303782223d57829abe-960x720.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/2b476fbd615162eaa4703aa6c4dd86f5d0bd1460-1440x810.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/0e5a249860e7b9a2dded8ebc137df388b486c127-2415x1610.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/06d9f1f44c212ca727d7b34d61363579f5f068df-1440x1080.jpg" alt="" />
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/ad92c572c643a37d26517fce17171d0c1fa701d9-576x768.jpg" alt="" />
      </Slider>

      <Content>
        <h1 ref={TextRef2}>Effortlessly sustainable.
          The perfect living space.
          Built just like in your mind.</h1>

          <h3>Things are shaping up.<br/>
Let’s turn your dream house into <br/>your reality.</h3>

      <button>
        <span><ArrowIcon /></span>
        <span>About us</span>
      </button>
      </Content>
      
    </Container>
  )
}

export default Section3
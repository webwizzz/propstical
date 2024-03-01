import LocomotiveScroll from 'locomotive-scroll';
import Lenis from '@studio-freight/lenis'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import React, { useEffect, useRef } from 'react'
import { Container } from './style'


function Teste() {
  const PageRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: PageRef.current ?? undefined,
  //     smooth: true, // Ativa o scrolling suave
  //     // Adicione outras opções de configuração conforme necessário
  //   });

  //   return () => {
  //     if (scroll) {
  //       scroll.destroy(); // Limpa a instância do Locomotive Scroll ao desmontar o componente
  //     }
  //   };
  // }, []);

  const lenis = useLenis(({ scroll }: { scroll: any}) => {
    console.log("SCROLLANDO")
  })


  return (
    
    <ReactLenis root
      options={{
        lerp: 0.1,
        duration: 1.5,
      }}
    >
      <Container ref={PageRef}>
        <div />
        <div />
        <div />
        <div />
      </Container>
    </ReactLenis>
  )
}

export default Teste
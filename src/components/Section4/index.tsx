import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from 'react';
import WaitlistModal from '../WaitlistModal';
import logo23 from './../../assets/icons/logo23.svg';
import { Card, Container, Houses, StartDiv } from './style';

gsap.registerPlugin(ScrollTrigger)

function Section4() {

  const LogoRef = useRef<HTMLImageElement>(null)
  const TextRef = useRef<HTMLHeadingElement>(null)
  const CardRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    gsap.fromTo(LogoRef.current, {
      opacity: 0.1,
      y: '100'
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
          trigger: TextRef.current,
          start: "-100% 90%",
          end: "100% 100%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo(TextRef.current, {
      opacity: 0.1,
      y: '150'
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
          trigger: TextRef.current,
          start: "-90% 90%",
          end: "110% 90%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo(CardRef.current, {
      transform: 'scale(98%)',
      y: '100'
    }, {
      transform: 'scale(100%)',
      y: 0,
      scrollTrigger: {
          trigger: CardRef.current,
          start: "0% 90%",
          end: "100% 90%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })
  }, [])

  return (
    <Container>
      <img ref={LogoRef} src={logo23} alt="Logo" />
      <h2 ref={TextRef}> We&apos;re building the first design support  <br/>
platform where your vision is the only priority. Join the Beta and discover a smarter way to build your dream home.</h2>

      <Houses>
        <div className={selected && selected === 'img2' ? "option img1 hidden" : "option img1" }
          onMouseEnter={() => setSelected('img1')}
          onMouseLeave={() => setSelected('')}
        >
          <p>Think of us as the safety net between your imagination and concrete.</p>
          <button onClick={openModal}>
          <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-4d231480="" fillRule="evenodd" clipRule="evenodd" d="M19.3004 4.50815C19.1062 4.25673 18.8204 4.10815 18.5004 4.10815C17.6433 4.10815 17.1861 5.10244 17.7347 5.75387L26.0205 15.5024L5.15429 14.9767C4.52572 14.9653 4 15.4682 4 16.1082C4 16.7482 4.52572 17.251 5.15429 17.2396L26.0205 16.7139L17.7347 26.4624C17.1861 27.1139 17.6433 28.1082 18.5004 28.1082C18.8204 28.1082 19.1176 27.9596 19.3004 27.7082L27.9976 16.1082L19.3004 4.50815Z" fill="black"></path></svg>
            <span>Know more</span>
          </button>
        </div>
        <div className={selected && selected === 'img1' ? "option img2 hidden" : "option img2" }
          onMouseEnter={() => setSelected('img2')}
          onMouseLeave={() => setSelected('')}
        >
          <p>We bring in top architects and designers as your second consultancy—turning &apos;Are you sure?&apos; into &apos;Absolutely.&apos;</p>
          <button onClick={openModal}>
          <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-4d231480="" fillRule="evenodd" clipRule="evenodd" d="M19.3004 4.50815C19.1062 4.25673 18.8204 4.10815 18.5004 4.10815C17.6433 4.10815 17.1861 5.10244 17.7347 5.75387L26.0205 15.5024L5.15429 14.9767C4.52572 14.9653 4 15.4682 4 16.1082C4 16.7482 4.52572 17.251 5.15429 17.2396L26.0205 16.7139L17.7347 26.4624C17.1861 27.1139 17.6433 28.1082 18.5004 28.1082C18.8204 28.1082 19.1176 27.9596 19.3004 27.7082L27.9976 16.1082L19.3004 4.50815Z" fill="black"></path></svg>
            <span>Know more</span>
          </button>
        </div>
      </Houses>

      <StartDiv>
        <h3>Flexible delivery: swift or unhurried. <span>Your call.</span></h3>
        <button onClick={openModal}>
          <span><svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><g data-v-4d231480="" clipPath="url(#clip0_3685_3864)"><path data-v-4d231480="" fillRule="evenodd" clipRule="evenodd" d="M13.8548 6.45748C13.8548 6.45748 13.8548 6.45748 13.8548 6.45748L7.74369 10.1612C6.50598 10.9113 5.75 12.2535 5.75 13.7008V21.3915C5.75 23.6773 7.60305 25.5304 9.88889 25.5304H22.1111C24.3969 25.5304 26.25 23.6773 26.25 21.3915V13.7008C26.25 12.2535 25.494 10.9113 24.2563 10.1612L18.1452 6.45748C18.1452 6.45748 18.1452 6.45748 18.1452 6.45748C16.8266 5.65839 15.1734 5.65839 13.8548 6.45748ZM13.0774 5.17467C14.8738 4.08598 17.1262 4.08598 18.9226 5.17467L25.0337 8.87838C26.7201 9.90037 27.75 11.729 27.75 13.7008V21.3915C27.75 24.5057 25.2253 27.0304 22.1111 27.0304H9.88889C6.77461 27.0304 4.25 24.5057 4.25 21.3915V13.7008C4.25 11.729 5.27996 9.90037 6.96624 8.87838L13.0774 5.17467Z" fill="black"></path><path data-v-4d231480="" fillRule="evenodd" clipRule="evenodd" d="M11.583 21.3914C11.583 20.9772 11.9188 20.6414 12.333 20.6414H19.6663C20.0806 20.6414 20.4163 20.9772 20.4163 21.3914C20.4163 21.8056 20.0806 22.1414 19.6663 22.1414H12.333C11.9188 22.1414 11.583 21.8056 11.583 21.3914Z" fill="black"></path></g><defs data-v-4d231480=""><clipPath data-v-4d231480="" id="clip0_3685_3864"><rect data-v-4d231480="" width="24" height="24" fill="white" transform="translate(4 4.10815)"></rect></clipPath></defs></svg>
            Start a project</span>
        </button>
      </StartDiv>

      <Card ref={CardRef}>
        <img src="https://cdn.sanity.io/images/kdijhcxf/develop/40283a3f9cfd82d798644a194298b33fd5303649-1334x2000.jpg" alt="" />
        <div className="text">
          <h4>Still Unclear ?</h4>
          <p>Provide your contact details, and we&apos;ll be happy to connect at your convenience.</p>
          <button onClick={openModal}>
            <span><svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><g data-v-4d231480="" clipPath="url(#clip0_3685_3864)"><path data-v-4d231480="" fillRule="evenodd" clipRule="evenodd" d="M13.8548 6.45748C13.8548 6.45748 13.8548 6.45748 13.8548 6.45748L7.74369 10.1612C6.50598 10.9113 5.75 12.2535 5.75 13.7008V21.3915C5.75 23.6773 7.60305 25.5304 9.88889 25.5304H22.1111C24.3969 25.5304 26.25 23.6773 26.25 21.3915V13.7008C26.25 12.2535 25.494 10.9113 24.2563 10.1612L18.1452 6.45748C18.1452 6.45748 18.1452 6.45748 18.1452 6.45748C16.8266 5.65839 15.1734 5.65839 13.8548 6.45748ZM13.0774 5.17467C14.8738 4.08598 17.1262 4.08598 18.9226 5.17467L25.0337 8.87838C26.7201 9.90037 27.75 11.729 27.75 13.7008V21.3915C27.75 24.5057 25.2253 27.0304 22.1111 27.0304H9.88889C6.77461 27.0304 4.25 24.5057 4.25 21.3915V13.7008C4.25 11.729 5.27996 9.90037 6.96624 8.87838L13.0774 5.17467Z" fill="black"></path><path data-v-4d231480="" fillRule="evenodd" clipRule="evenodd" d="M11.583 21.3914C11.583 20.9772 11.9188 20.6414 12.333 20.6414H19.6663C20.0806 20.6414 20.4163 20.9772 20.4163 21.3914C20.4163 21.8056 20.0806 22.1414 19.6663 22.1414H12.333C11.9188 22.1414 11.583 21.8056 11.583 21.3914Z" fill="black"></path></g><defs data-v-4d231480=""><clipPath data-v-4d231480="" id="clip0_3685_3864"><rect data-v-4d231480="" width="24" height="24" fill="white" transform="translate(4 4.10815)"></rect></clipPath></defs></svg>
              Contact us</span>
          </button>
        </div>
      </Card>

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  )
}

export default Section4

import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as Logo } from './../../assets/icons/logo2.svg';
import { Container, Houses } from './style'
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function Section4() {

  const LogoRef = useRef<SVGSVGElement>(null)
  const TextRef = useRef<HTMLHeadingElement>(null)
  const [selected, setSelected] = useState('')

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
          end: "100% 90%",
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
  }, [])

  return (
    <Container>
      <Logo ref={LogoRef} />
      <h2 ref={TextRef}>If you have a vision, we will build it.<br/>
From modular to custom projects, all perfectly sustainable.</h2>

      <Houses>
        <div className={selected && selected === 'img2' ? "option img1 hidden" : "option img1" }
          onMouseEnter={() => setSelected('img1')}
          onMouseLeave={() => setSelected('')}
        >
          <p>Tailored houses to answer your architectural vision.</p>
          <svg className='logo' viewBox="0 0 161 24" data-v-7c9a7c3d=""><path d="M111.278 4.71236C106.012 4.71236 101.742 9.03062 101.742 14.3562C101.742 19.6817 106.012 24 111.278 24C116.543 24 120.813 19.6817 120.813 14.3562C120.813 9.03062 116.543 4.71236 111.278 4.71236ZM111.278 20.9568C107.679 20.9568 104.751 17.9958 104.751 14.3562C104.751 10.7165 107.679 7.75553 111.278 7.75553C114.876 7.75553 117.804 10.7165 117.804 14.3562C117.804 17.9958 114.876 20.9568 111.278 20.9568ZM131.826 4.71236C126.56 4.71236 122.291 9.03062 122.291 14.3562C122.291 19.6817 126.56 24 131.826 24C137.092 24 141.362 19.6817 141.362 14.3562C141.362 9.03062 137.092 4.71236 131.826 4.71236ZM131.826 20.9568C128.227 20.9568 125.3 17.9958 125.3 14.3562C125.3 10.7165 128.227 7.75553 131.826 7.75553C135.425 7.75553 138.353 10.7165 138.353 14.3562C138.353 17.9958 135.425 20.9568 131.826 20.9568ZM64.9615 4.71236C59.6957 4.71236 55.4259 9.03062 55.4259 14.3562C55.4259 19.6817 59.6957 24 64.9615 24C70.2273 24 74.497 19.6817 74.497 14.3562C74.497 9.03062 70.2273 4.71236 64.9615 4.71236ZM64.9615 20.9568C61.3627 20.9568 58.4349 17.9958 58.4349 14.3562C58.4349 10.7165 61.3627 7.75553 64.9615 7.75553C68.5603 7.75553 71.488 10.7165 71.488 14.3562C71.488 17.9958 68.5603 20.9568 64.9615 20.9568ZM71.0337 3.04317H58.8893V0H71.0337V3.04317ZM27.6693 4.71236C22.4036 4.71236 18.1338 9.03062 18.1338 14.3562C18.1338 19.6817 22.4036 24 27.6693 24C32.9351 24 37.2049 19.6817 37.2049 14.3562C37.2049 9.03062 32.9351 4.71236 27.6693 4.71236ZM27.6693 20.9568C24.0706 20.9568 21.1428 17.9958 21.1428 14.3562C21.1428 10.7165 24.0706 7.75553 27.6693 7.75553C31.2681 7.75553 34.1959 10.7165 34.1959 14.3562C34.1959 17.9958 31.2681 20.9568 27.6693 20.9568ZM33.7415 3.04317H21.5972V0H33.7415V3.04317ZM155.727 5.22665H142.839V23.4857H155.727L161.002 18.151V10.5598L155.727 5.22513V5.22665ZM157.993 16.9748L154.564 20.4425H145.848V8.26983H154.564L157.993 11.7375V16.9748ZM10.2728 14.3425L17.1679 21.3159L15.0405 23.4674L8.14539 16.494L3.00901 21.6887V23.4842H0V5.22665H3.00901V17.3857L15.0315 5.22665L17.1589 7.37818L10.2728 14.3425ZM38.1693 5.22665H54.46V8.26983L42.424 20.4425H54.46V23.4857H38.1693V20.4425L50.2053 8.26983H38.1693V5.22665ZM101.3 8.26983L95.9979 23.4857H92.2758L88.2843 12.6337L84.2929 23.4857H80.5722L75.2794 8.26983L74.2217 5.22665H77.4113L78.4704 8.26983L82.4604 19.7456L86.682 8.26983V5.22665H89.8926V8.26983L94.1143 19.7456L98.1132 8.26983L99.1724 5.22665H102.362L101.304 8.26983H101.3Z" data-v-7c9a7c3d=""></path></svg>
          <button>
          <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-4d231480="" fillRule="evenodd" clipRule="evenodd" d="M19.3004 4.50815C19.1062 4.25673 18.8204 4.10815 18.5004 4.10815C17.6433 4.10815 17.1861 5.10244 17.7347 5.75387L26.0205 15.5024L5.15429 14.9767C4.52572 14.9653 4 15.4682 4 16.1082C4 16.7482 4.52572 17.251 5.15429 17.2396L26.0205 16.7139L17.7347 26.4624C17.1861 27.1139 17.6433 28.1082 18.5004 28.1082C18.8204 28.1082 19.1176 27.9596 19.3004 27.7082L27.9976 16.1082L19.3004 4.50815Z" fill="black"></path></svg>
            <span>Know more</span>
          </button>
        </div>
        <div className={selected && selected === 'img1' ? "option img2 hidden" : "option img2" }
          onMouseEnter={() => setSelected('img2')}
          onMouseLeave={() => setSelected('')}
        >
          <p>Charming modular wood houses, fit to your dreams.</p>
          <svg className='logo' viewBox="0 0 378 85" data-v-7c9a7c3d=""><path d="M69.9371 0H15.1964L0 15.1745L0.108237 42.5027L0 69.8201L15.1964 84.9946H69.9371L85.1281 69.8255V15.1691L69.9371 0ZM75.3868 65.7995L65.9053 75.2673H19.2336L9.75753 65.8049L9.84953 42.7513V42.5027V42.2541L9.75753 19.1897L19.2336 9.72725H65.9053L75.3868 19.1951V65.7995Z" data-v-7c9a7c3d=""></path> <path d="M277.134 0H198.17V9.72726H232.784V85H242.525V9.72726H277.134V0Z" data-v-7c9a7c3d=""></path> <path d="M378 0.367432H366.917L342.785 44.7616H324.932L300.8 0.367432H289.717L319.135 54.4888H328.985V85H338.726V54.4888H348.581L378 0.367432Z" data-v-7c9a7c3d=""></path> <path d="M172.22 0H117.48L102.283 15.1745L102.391 42.5027L102.283 69.8201L117.48 84.9946H172.22L187.411 69.8255V15.1691L172.22 0ZM177.67 65.7995L168.188 75.2673H121.517L112.041 65.8049L112.133 42.7513V42.5027V42.2541L112.041 19.1897L121.517 9.72725H168.188L177.67 19.1951V65.7995Z" data-v-7c9a7c3d=""></path></svg>
          <button>
          <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-4d231480="" fillRule="evenodd" clipRule="evenodd" d="M19.3004 4.50815C19.1062 4.25673 18.8204 4.10815 18.5004 4.10815C17.6433 4.10815 17.1861 5.10244 17.7347 5.75387L26.0205 15.5024L5.15429 14.9767C4.52572 14.9653 4 15.4682 4 16.1082C4 16.7482 4.52572 17.251 5.15429 17.2396L26.0205 16.7139L17.7347 26.4624C17.1861 27.1139 17.6433 28.1082 18.5004 28.1082C18.8204 28.1082 19.1176 27.9596 19.3004 27.7082L27.9976 16.1082L19.3004 4.50815Z" fill="black"></path></svg>
            <span>Know more</span>
          </button>
        </div>
      </Houses>
    </Container>
  )
}

export default Section4
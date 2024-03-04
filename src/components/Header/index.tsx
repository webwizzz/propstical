import React from 'react'
import { Container, Menu } from './style'
import { ReactComponent as Logo } from '../../assets/icons/logoHeader.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as MusicIcon } from '../../assets/icons/music.svg'
import Lottie from 'lottie-react'
import Wave from '../../assets/icons/wave.json'

function Header({ theme, HeaderRef, disable }: { disable: boolean, theme: string, HeaderRef: React.RefObject<HTMLDivElement>}) {
  return (
    <Container className={disable ? `${theme} disable` : theme} ref={HeaderRef}>
      <Logo />
      <Menu className={theme}>
        <button className="music">
          <Lottie loop={true} style={{ height: '28px'}} animationData={Wave} />
        </button>

        <button className="menu">
          <MenuIcon />
        </button>
      </Menu>
    </Container>
  )
}

export default Header
import styled from "styled-components";
import mask from "../../assets/icons/mask.svg"
import { theme } from "../../styles/Theme";

export const Container = styled.section`
  width: 100%;
  height: 120vh;
  background-color: ${theme.colors.terciary};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  margin-bottom: 20vh;

  h1{
    font-weight: 100;
    font-size: 49.2px;
    margin-top: 88px;
    letter-spacing: -2px;
    color: ${theme.colors.primary};
    line-height: 1.08em;
    text-align: center;
    z-index: 99999;
  }

  div.logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: blue;
    z-index: 9999;

    svg{
      position: absolute;
      width: auto;
      height: 20vh;
      top: calc(42% - 10vh);

      path{
        fill: ${theme.colors.terciary};
      }
    }
  }

  div.mask {
    position: absolute;
    mask-image: url(${mask});
    background-color: #415AF6;
    z-index: 9999;
    height: 256px;
    width: 256px;
    mask-repeat: no-repeat;
    transform: scale(500%);
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 0%;
  overflow: hidden;
  position: absolute;

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    mask-image: url(${mask});
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 108px;
  }

  div.mask {
    position: absolute;
    mask-image: url(${mask});
    background-color: #415AF6;
    color: #0F0F0F;
    mask-repeat: no-repeat;
    mask-size: 20px;
    transform: scale(200%);
  }
  
`;

export const Mask = styled.div`
  width: 312px;
  height: 312px;
  background-color: blue;
  border-radius: 50%;
  overflow: hidden;
  z-index: 999;
`;


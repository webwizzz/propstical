import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: max(304px,calc(275.897px + 9.77vw));
  height: max(436px,calc(384.793px + 13.13vw));
  position: absolute;
  top: calc(10vh);
  left: 50%;
  background-color: ${theme.colors.backgroundCard};
  backdrop-filter: blur(14px);
  z-index: 999;
  padding: 18px;
  overflow: hidden;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;

  @media (max-width: 768px) {
    top: calc(15vh);
  }

  @media (max-width: 480px) {
    top: calc(26vh);
  }

  div.video{
    min-width: calc(100% - 36px);
    width: calc(100% - 36px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 18px;
    left: 18px;
  }

  div.textContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h4 {
    font-family: 'OGG';
    color: ${theme.colors.gray100};
    font-size: 14px;
    text-align: center;
    margin: 0;
    margin-top: 24px;
    font-weight: 100;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 11px;
      margin-top: 20px;
    }
  }

  h1{
    font-family: 'OGG';
    color: ${theme.colors.gray100};
    font-size: 40px;
    text-align: center;
    margin: 0;
    margin-top: -0px;
    font-weight: 100;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  p{
    color: ${theme.colors.gray100};
    font-size: 16px;
    text-align: center;
    margin: 0;
    margin-top: 8px;
    opacity: .5;
    width: 85%;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
      width: 90%;
    }
  }
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 65%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button{
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${theme.colors.gray100};
    border: none;
    cursor: pointer;
    border-radius: 32px;
    color: ${theme.colors.text};
    font-size: 16px;
    font-family: 'OGG';
    position: absolute;
    bottom: 24px;
    letter-spacing: 1px;
    transition: all .4s ease-in-out;

    &:hover{
      transform: scale(104%);
    }

    svg{
      width: 16px;
      height: 16px;

      path {
        fill: ${theme.colors.text};
      }
    }
  }
`;

export const ButtonsVideos = styled.div`
  height: 36px;
  width: calc(100% - 36px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 18px;

  @media (max-width: 768px) {
    bottom: 16px;
  }

  @media (max-width: 480px) {
    bottom: 0px;
    height: 32px;
  }

  button{
    width: 49.99%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    div.line{
      display: flex;
      align-items: center;
      height: 1px;
      width: 100%;
      position: relative;
      border-radius: 1px;

      div.progress{
        width: 0%;
        background-color: ${theme.colors.gray100};
        height: 100%;
        transition: 1s ease;
        position: absolute;
        left: 0;
      }

      &::before{
        content: '';
        width: 100%;
        z-index: -1;
        height: 1px;
        background-color: ${theme.colors.gray100};
        opacity: .5;
      }
    }
  }
`;
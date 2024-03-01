import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/Theme";

export const Animation = keyframes`
  0%, 100% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(4px);
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 999;
`;

export const TextContent = styled.div`
  width: calc(50% - 48px);
  min-width: calc(50% - 48px);
  padding-left: 48px;
  height: 100%;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1{
    font-weight: 100;
    font-size: 49.2px;
    width: 64%;
    margin-top: 88px;
    letter-spacing: -2px;
    color: ${theme.colors.text};
    line-height: 1.08em;
  }

  div.scroll {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 48px;

    span{
      font-size: 12px;
      font-family: 'OGG';
      color: ${theme.colors.text};
      font-weight: 600;
      letter-spacing: .3em;

      &.animeted {
        animation: ${Animation} 2s ease-in-out infinite;
        font-variation-settings: "wght" 100;
      }
    }
  }
`;

export const VideoContainer = styled.div`
  width: 50%;
  min-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    position: absolute;
  }
`;
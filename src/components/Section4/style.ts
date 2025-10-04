import styled from "styled-components";
import aestheticInterior from "../../assets/images/aesthetic_interior.jpg";
import modernInterior from "../../assets/images/modern_interior.jpg";
import { theme } from "../../styles/Theme";

export const Container = styled.section`
  width: 100%;
  min-height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.bg5};
  padding-top: 15vh;
  padding-bottom: 20vh;
  gap: 12px;
  overflow: hidden;

  /* Logo image styles */
  > img {
    height: 60px;
    width: auto;
    max-width: 300px;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  svg.logo-top{
    height: 32px;
    width: auto;
    path{
      fill: ${theme.colors.terciary};
    }
  }

  h2{
    font-family: 'PP Mori';
    color: ${theme.colors.text};
    line-height: 1.05em;
    font-weight: 500;
    font-size: max(30px,calc(23.448px + 1.68vw));
    text-align: center;
    width: 70%;
  }

  /* Tablet responsiveness */
  @media (max-width: 768px) {
    padding-top: 10vh;
    padding-bottom: 15vh;
    gap: 8px;

    > img {
      height: 48px;
      max-width: 240px;
    }

    h2 {
      width: 85%;
      font-size: max(24px, calc(20px + 1.2vw));
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 480px) {
    padding-top: 8vh;
    padding-bottom: 12vh;
    gap: 6px;

    > img {
      height: 36px;
      max-width: 180px;
    }

    h2 {
      width: 90%;
      font-size: max(20px, calc(18px + 1vw));
      line-height: 1.2em;
    }
  }

  /* Extra small screens */
  @media (max-width: 320px) {
    padding-bottom: 10vh;

    > img {
      height: 32px;
      max-width: 150px;
    }

    h2 {
      width: 95%;
      font-size: max(18px, calc(16px + 0.8vw));
    }
  }
`;

export const Houses = styled.div`
  width: 80%;
  height: 540px;
  display: flex;
  align-items: center;
  gap: 24px;

  div.option{
    height: 100%;
    width: 50%;
    transition: all .75s cubic-bezier(.165,.84,.44,1);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    position: relative;

    &:before{
      content: '';
      width: 100%;
      height: 100%;
      background-color: #00000050;
      position: absolute;
    }
    
    p{
      font-family: 'PP Mori';
      color: ${theme.colors.gray100};
      line-height: 1.3em;
      font-weight: 500;
      font-size: max(18px, calc(16.206px + .46vw));
      width: max(74px,calc(74px + 28.59vw));
      transition: all .75s cubic-bezier(.165,.84,.44,1);
      position: absolute;
      top: 8px;
      left: 48px;
      opacity: 1;
    }
    
    svg.logo{
      position: absolute;
      bottom: 48px;
      left: 48px;
      transition: all .75s cubic-bezier(.165,.84,.44,1);
      height: 30px;
      width: auto;
      opacity: 1;

      path{
        fill: ${theme.colors.gray100};
      }
    }

    &.hidden{
      /* Remove opacity changes - keep text always visible */
    }

    button{
    padding: 16px 24px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${theme.colors.gray100};
    color: ${theme.colors.gray100};
    border: none;
    cursor: pointer;
    border-radius: 32px;
    color: ${theme.colors.text};
    font-size: 16px;
    font-family: 'OGG';
    letter-spacing: 1px;
    transition: all .75s cubic-bezier(.165,.84,.44,1);
    position: absolute;
    bottom: 48px;
    right: 48px;
    opacity: 1;
    transform: translateX(0px);

    span{
      color: ${theme.colors.terciary};
      transition: all .75s cubic-bezier(.165,.84,.44,1);
    }

    svg{
      width: 18px;
      height: 18px;

      path {
        fill: ${theme.colors.terciary};
      }
    }
  }

    &:hover{
      width: 60%;
      button{
        opacity: 1;
        transform: translateX(0px);
      }
    }

    &.img1{
      background-image: url(${modernInterior});
    }

    &.img2{
      background-image: url(${aestheticInterior});
    }
    
  }

  /* Tablet responsiveness */
  @media (max-width: 768px) {
    width: 90%;
    height: 400px;
    gap: 16px;
    flex-direction: column;

    div.option {
      width: 100%;
      height: 180px;

      p {
        font-size: max(16px, calc(14px + 0.4vw));
        width: calc(100% - 48px);
        max-width: calc(100% - 48px);
        top: 16px;
        left: 24px;
        right: 24px;
      }

      svg.logo {
        bottom: 24px;
        left: 24px;
        height: 24px;
      }

      button {
        bottom: 24px;
        right: 24px;
        padding: 12px 20px;
        font-size: 14px;
      }

      &:hover {
        width: 100%;
      }
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 480px) {
    width: 95%;
    height: 320px;
    gap: 12px;

    div.option {
      height: 150px;

      p {
        font-size: max(14px, calc(12px + 0.3vw));
        width: calc(100% - 32px);
        max-width: calc(100% - 32px);
        top: 12px;
        left: 16px;
        right: 16px;
        padding-right: 80px; /* Space for button */
      }

      svg.logo {
        bottom: 16px;
        left: 16px;
        height: 20px;
      }

      button {
        bottom: 16px;
        right: 16px;
        padding: 10px 16px;
        font-size: 12px;

        svg {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
`;

export const StartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  gap: 32px;
  margin-bottom: 12vh;

  h3{
    font-family: 'PP Mori';
    color: ${theme.colors.text};
    line-height: 1.05em;
    font-weight: 500;
    font-size: max(26px,calc(22.412px + .92vw));
    width: 70%;

    span{
      opacity: 0.5;
    }
  }

  button{
    padding: 20px 32px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${theme.colors.terciary};
    color: ${theme.colors.gray100};
    border: none;
    cursor: pointer;
    border-radius: 32px;
    color: ${theme.colors.text};
    font-size: 20px;
    font-family: 'OGG';
    letter-spacing: 1px;
    transition: all .4s ease-in-out;

    span{
      color: ${theme.colors.gray100};
      transition: all .4s ease-in-out;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &:hover{
      transform: scale(104%);

      span{
        transform: scale(96%);
      }
    }

    svg{
      width: 24px;
      height: 24px;

      path {
        fill: ${theme.colors.gray100};
      }
    }
  }

  /* Tablet responsiveness */
  @media (max-width: 768px) {
    width: 90%;
    gap: 20px;
    margin-bottom: 8vh;
    flex-direction: column;
    text-align: center;

    h3 {
      width: 100%;
      font-size: max(22px, calc(18px + 0.8vw));
    }

    button {
      padding: 16px 28px;
      font-size: 18px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 480px) {
    width: 95%;
    gap: 16px;
    margin-bottom: 6vh;

    h3 {
      font-size: max(18px, calc(16px + 0.6vw));
      line-height: 1.2em;
    }

    button {
      padding: 14px 24px;
      font-size: 16px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

`;

export const Card = styled.div`
  width: max(480px,calc(424.62px + 14.2vw));
  background-color: rgba(62,54,46,.08);
  height: auto;
  padding: 12px;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  height: 200px;

  img{
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
    width: max(140px,calc(119.174px + 5.34vw));
    min-width: max(140px,calc(119.174px + 5.34vw));
    height: 100%;
  }

  div.text{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;

    h4{
      font-family: 'PP Mori';
      color: ${theme.colors.text};
      line-height: 1.2em;
      font-weight: 500;
      font-size: max(18px,calc(16.206px + .46vw));
      margin: 0;
    }

    p{
      font-family: 'PP Mori';
      color: rgba(62,54,46,.7);
      line-height: 1.3em;
      font-weight: 500;
      font-size: max(12px,calc(10.791px + .31vw));
      margin: 0;
    }

    button{
    padding: 16px 24px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${theme.colors.terciary};
    color: ${theme.colors.gray100};
    border: none;
    cursor: pointer;
    border-radius: 32px;
    color: ${theme.colors.text};
    font-size: 16px;
    font-family: 'OGG';
    letter-spacing: 1px;
    transition: all .4s ease-in-out;

    span{
      color: ${theme.colors.gray100};
      transition: all .4s ease-in-out;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &:hover{
      transform: scale(104%);

      span{
        transform: scale(96%);
      }
    }

    svg{
      width: 18px;
      height: 18px;

      path {
        fill: ${theme.colors.gray100};
      }
    }
  }

  }

  /* Tablet responsiveness */
  @media (max-width: 768px) {
    width: max(400px, calc(90vw));
    height: auto;
    min-height: 180px;
    gap: 16px;
    padding: 16px;

    img {
      width: max(120px, calc(100px + 4vw));
      min-width: max(120px, calc(100px + 4vw));
    }

    div.text {
      margin-top: 16px;

      h4 {
        font-size: max(16px, calc(14px + 0.4vw));
      }

      p {
        font-size: max(11px, calc(10px + 0.3vw));
      }

      button {
        padding: 14px 20px;
        font-size: 14px;

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 480px) {
    width: calc(95vw);
    flex-direction: column;
    height: auto;
    min-height: auto;
    gap: 12px;
    padding: 12px;

    img {
      width: 100%;
      min-width: 100%;
      height: 180px;
      object-fit: cover;
    }

    div.text {
      margin-top: 8px;
      gap: 12px;

      h4 {
        font-size: max(14px, calc(13px + 0.3vw));
      }

      p {
        font-size: max(10px, calc(9px + 0.25vw));
      }

      button {
        padding: 12px 18px;
        font-size: 13px;
        align-self: flex-start;

        svg {
          width: 14px;
          height: 14px;
        }
      }
    }
  }

  /* Extra small screens */
  @media (max-width: 320px) {
    padding: 10px;

    img {
      height: 150px;
    }

    div.text {
      h4 {
        font-size: 13px;
      }

      p {
        font-size: 9px;
      }

      button {
        padding: 10px 16px;
        font-size: 12px;
      }
    }
  }
`;
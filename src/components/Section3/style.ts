import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.section`
  width: 100%;
  height: auto;
  background-color: ${theme.colors.quartenary};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-top: 15vh;
  padding-bottom: 15vh;
  z-index: 999;
  gap: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border-radius: 48px;

  h1{
    font-family: 'OGG';
    color: ${theme.colors.text};
    line-height: 1.2em;
    font-weight: 400;
    font-size: max(46px,calc(31.726px + 3.66vw));

    div, span{
      display: block;
    }
  }

  h3{
    font-family: 'PP Mori';
    color: ${theme.colors.text};
    line-height: 1.05em;
    font-weight: 500;
    font-size: max(26px,calc(22.412px + .92vw));
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
    }

    &:hover{
      transform: scale(104%);

      span{
        transform: scale(96%);
      }
    }

    svg{
      width: 22px;
      height: 22px;

      path {
        fill: ${theme.colors.gray100};
      }
    }
  }

`;

export const Slider = styled.div`
  width: 100%;
  height: 35vh;
  min-height: 35vh;
  display: flex;
  gap: 12px;
  align-items: flex-end;

  img{
    height: fit-content;
    max-height: 35vh;
    width: 240px;
    object-fit: contain;
    background-color: blue;
  }
`;


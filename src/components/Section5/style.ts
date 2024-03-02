import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${theme.colors.primary};
  padding-top: 20vh;
  padding-bottom: 25vh;
  justify-content: center;
  gap: 32px;

  div.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10vh;
    // padding-bottom: 20vh;

    video{
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  img{
    position: absolute;
    left: 96px;
    top: 15vh;
    width: 240px;
    height: auto;
  }

`;

export const TextContent = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  z-index: 999;
  justify-self: flex-end;
  transform: translateY(-60%);
  margin-bottom: -15%;

  h2{
      font-family: 'OGG';
      color: ${theme.colors.primary};
      line-height: 1em;
      font-weight: 400;
      font-size: max(40px,calc(10.243px + 7.63vw));
      margin: 0;
      letter-spacing: .02em;

      &.t2{
        color: ${theme.colors.text};
        align-self: flex-end;
      }
    }
`;

export const Bottom = styled.div`
  width: 98%;
  margin-top: 0vh;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 998;

  p{
    font-family: 'PP Mori';
    color: ${theme.colors.text};
    line-height: 1.2em;
    font-weight: 500;
    font-size: max(18px,calc(16.206px + .46vw));
    margin: 0;
    letter-spacing: -.02em;
    width: 40%;
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
`;
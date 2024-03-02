import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.colors.terciary};
  padding-top: 5vh;
  padding-bottom: 15vh;

  h3{
    font-family: 'OGG';
    color: ${theme.colors.primary};
    line-height: 1.1em;
    font-weight: 400;
    font-size: max(34px,calc(22.69px + 2.9vw));
    margin: 0;
    letter-spacing: -.01em;
  }
`;

export const Articles = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 32px;
`;

export const ArticleLayout = styled.div`
  height: fit-content;
  max-height: fit-content;
  width: 24%;
  max-width: 24%;
  padding: 16px;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 16px;

  &:hover{
    div.img img {
      width: 102%;
    }

    div.img::before{
      opacity: 0;
    }

    div.img{
      div.tag{
        opacity: 0;
        transform: scale(110%);
      }
    }
    
  }
  

  div.img{
    width: 100%;
    height: auto;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    transition: all .75s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.tag{
      padding: 8px 12px;
      border-radius: 32px;
      border: 1px solid ${theme.colors.gray100};
      position: absolute;
      top: 16px;
      opacity: 1;
      z-index: 9999;
      transition: all .4s cubic-bezier(.19,1,.22,1), opacity .4s cubic-bezier(.19,1,.22,1);

      span{
        font-family: 'OGG';
        color: ${theme.colors.gray100};
        line-height: 1em;
        font-weight: 400;
        font-size: max(10px,calc(9.415px + .15vw));
        margin: 0;
        letter-spacing: .3em;
      }
    }

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 2s cubic-bezier(.19,1,.22,1);
      z-index: 1;
    }

    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 3;
      background-color: #000000;
      opacity: 0.4;
      transition: opacity 1s cubic-bezier(.19,1,.22,1);
    }
  }

  
  h3{
    font-family: 'PP Mori';
    color: ${theme.colors.text};
    line-height: 1.3em;
    font-weight: 400;
    font-size: max(16px,calc(14.791px + .31vw));
    margin: 0;
    letter-spacing: -.02em;
    width: 85%;
  }

  span.read{
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'OGG';
    color: ${theme.colors.text};
    line-height: 1em;
    font-weight: 400;
    font-size: max(10px,calc(9.415px + .15vw));
    margin: 0;
    letter-spacing: .3em;

    svg{
      width: 16px;
      height: 16px;

      path{
        fill: ${theme.colors.terciary};
      }
    }
  }
`;
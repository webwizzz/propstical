import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.bg5};
  padding-top: 15vh;
  padding-bottom: 15vh;
  gap: 12px;

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
    }
    
    svg.logo{
      position: absolute;
      bottom: 48px;
      left: 48px;
      transition: all .75s cubic-bezier(.165,.84,.44,1);
      height: 30px;
      width: auto;

      path{
        fill: ${theme.colors.gray100};
      }
    }

    &.hidden{
      p, svg{
        opacity: 0;
      }
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
    opacity: 0;
    transform: translateX(-20px);

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
      background-image: url('https://cdn.sanity.io/images/kdijhcxf/develop/8cbbfa457b44020d4ce6db9075a6efa59cc39c37-1200x674.jpg');
    }

    &.img2{
      background-image: url('https://cdn.sanity.io/images/kdijhcxf/develop/06d9f1f44c212ca727d7b34d61363579f5f068df-1440x1080.jpg');
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
`;
import styled from "styled-components";
import mask from "../../assets/icons/mask.svg";
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
  text-color: #000000ff;
  padding: 0 5vw;

  h1{
    font-weight: 100;
    font-size: 49.2px;
    margin-top: 88px;
    letter-spacing: -2px;
    color: ${theme.colors.primary};
    line-height: 1.08em;
    text-align: center;
    color: #000000ff;
    z-index: 99999;
    
    /* Tablet styles */
    @media (max-width: 1024px) {
      font-size: 38px;
      margin-top: 70px;
      letter-spacing: -1.5px;
      line-height: 1.1em;
    }
    
    /* Mobile styles */
    @media (max-width: 768px) {
      font-size: 28px;
      margin-top: 50px;
      letter-spacing: -1px;
      line-height: 1.2em;
      padding: 0 4vw;
    }
    
    /* Small mobile styles */
    @media (max-width: 480px) {
      font-size: 22px;
      margin-top: 40px;
      letter-spacing: -0.5px;
      line-height: 1.25em;
      padding: 0 6vw;
    }
  }

  /* Responsive padding for different screen sizes */
  @media (max-width: 1024px) {
    padding: 0 4vw;
  }
  
  @media (max-width: 768px) {
    padding: 0 3vw;
    height: 100vh;
    margin-bottom: 15vh;
  }
  
  @media (max-width: 480px) {
    padding: 0 2vw;
    height: 90vh;
    margin-bottom: 10vh;
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
      width: 10vw;
      height: 10vw;
      top: calc(42% - 10vh);

      path{
        fill: ${theme.colors.terciary};
      }
      
      /* Tablet styles */
      @media (max-width: 1024px) {
        width: 12vw;
        height: 12vw;
        top: calc(45% - 8vh);
      }
      
      /* Mobile styles */
      @media (max-width: 768px) {
        width: 15vw;
        height: 15vw;
        top: calc(48% - 6vh);
      }
      
      /* Small mobile styles */
      @media (max-width: 480px) {
        width: 18vw;
        height: 18vw;
        top: calc(50% - 5vh);
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
    
    /* Tablet styles */
    @media (max-width: 1024px) {
      height: 200px;
      width: 200px;
      transform: scale(400%);
    }
    
    /* Mobile styles */
    @media (max-width: 768px) {
      height: 150px;
      width: 150px;
      transform: scale(300%);
    }
    
    /* Small mobile styles */
    @media (max-width: 480px) {
      height: 120px;
      width: 120px;
      transform: scale(250%);
    }
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
    
    /* Tablet styles */
    @media (max-width: 1024px) {
      mask-size: 96px;
    }
    
    /* Mobile styles */
    @media (max-width: 768px) {
      mask-size: 80px;
      height: 90vh;
    }
    
    /* Small mobile styles */
    @media (max-width: 480px) {
      mask-size: 64px;
      height: 85vh;
    }
  }

  div.mask {
    position: absolute;
    mask-image: url(${mask});
    background-color: #415AF6;
    color: #0F0F0F;
    mask-repeat: no-repeat;
    mask-size: 20px;
    transform: scale(200%);
    
    /* Tablet styles */
    @media (max-width: 1024px) {
      mask-size: 18px;
      transform: scale(180%);
    }
    
    /* Mobile styles */
    @media (max-width: 768px) {
      mask-size: 15px;
      transform: scale(150%);
    }
    
    /* Small mobile styles */
    @media (max-width: 480px) {
      mask-size: 12px;
      transform: scale(120%);
    }
  }
  
  /* Container responsiveness */
  @media (max-width: 768px) {
    height: 90vh;
  }
  
  @media (max-width: 480px) {
    height: 85vh;
  }
`;

export const Mask = styled.div`
  width: 312px;
  height: 312px;
  background-color: blue;
  border-radius: 50%;
  overflow: hidden;
  z-index: 999;
  
  /* Tablet styles */
  @media (max-width: 1024px) {
    width: 280px;
    height: 280px;
  }
  
  /* Mobile styles */
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
  
  /* Small mobile styles */
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;


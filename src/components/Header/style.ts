import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.header`
  width: 100%;
  padding: 0 20px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  transition: all .35s cubic-bezier(.165,.84,.44,1);

  &.disable{
    transform: translateY(-100%);
  }

  svg{
    height: 40px;
    width: 180px;
    transition: all .35s cubic-bezier(.165,.84,.44,1);

    path{
      fill: ${theme.colors.terciary};
      transition: all .35s cubic-bezier(.165,.84,.44,1);
    }
  }

  &.light{
    svg{
      height: 40px;
      width: 180px;

      path{
        fill: ${theme.colors.primary}
      }
    }
  }

  /* Mobile and tablet responsiveness */
  @media (max-width: 768px) {
    padding: 0 16px;
    height: 52px;
    
    svg{
      height: 32px;
      width: 140px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    height: 48px;
    
    svg{
      height: 28px;
      width: 120px;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &.light{
    button.menu{
      width: auto;
      padding: 0 24px;
      border-radius: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.primary};
      border: none;
      cursor: pointer;

      svg{
        height: 28px;
        width: 28px;

        path{ 
          fill: ${theme.colors.terciary}
        }
      }
    }

    button.music{
      width: auto;
      padding: 0 12px;
      border-radius: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
      cursor: pointer;

      svg{
        height: 28px;
        width: 28px;

        path{ 
          fill: ${theme.colors.primary}
        }
      }
    }
  }
  
  button.menu{
    width: auto;
    padding: 0 24px;
    border-radius: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.terciary};
    border: none;
    cursor: pointer;
    transition: all .35s cubic-bezier(.165,.84,.44,1);

    svg{
      height: 28px;
      width: 28px;
      transition: all .35s cubic-bezier(.165,.84,.44,1);

      path{ 
        fill: ${theme.colors.gray100};
        transition: all .35s cubic-bezier(.165,.84,.44,1);
      }
    }
  }

  button.music{
    width: auto;
    padding: 0 12px;
    border-radius: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid ${theme.colors.terciary};
    cursor: pointer;
    transition: all .35s cubic-bezier(.165,.84,.44,1);

    svg{
      height: 28px;
      width: 28px;
      transition: all .35s cubic-bezier(.165,.84,.44,1);

      path{ 
        fill: ${theme.colors.terciary};
        transition: all .35s cubic-bezier(.165,.84,.44,1);
      }
    }
  }
`;
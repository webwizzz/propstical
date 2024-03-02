import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Container = styled.footer`
  width: 100%;
  background-color: ${theme.colors.terciary};
  display: flex;
  flex-direction: column;
  align-items: center;

  div.logo{
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    svg{
      width: 100%;
      height: auto;

      path{
        fill: ${theme.colors.primary};
      }
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.primary};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-right: 1px solid ${theme.colors.primary};
`;

export const LinkMenu = styled(NavLink)`
  font-family: 'OGG';
  color: ${theme.colors.primary};
  width: 100%;
  transition: all .5s cubic-bezier(.165,.84,.44,1), all .5s cubic-bezier(.165,.84,.44,1);
  line-height: 1.6em;
  display: flex;
  align-items: center;
  letter-spacing: -.01em;
  font-size: max(34px,calc(22.69px + 2.9vw));
  font-weight: 400;
  border-bottom: 1px solid ${theme.colors.primary};
  text-decoration: none;

  span{
    transform: translateX(48px);
    transition: all .5s cubic-bezier(.165,.84,.44,1), all .5s cubic-bezier(.165,.84,.44,1);
  }

  &.active{
    cursor: default;
    span{
      opacity: .5;
    }

    &:hover{
      color: ${theme.colors.primary};
      span{
      transform: translateX(48px);
      }
    }
  }

  &:hover{
    color: ${theme.colors.gray100};

    span{
      transform: translateX(54px);
    }
  }

  &.no-border{
    border-bottom: none;
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: inherit;

  div.top{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    border-bottom: 1px solid ${theme.colors.primary};
    height: 66.6666667%;
    min-height: 66.6666667%;

    a{
      width: 40px;
      height: 40px;
      border-radius: 24px;
      background-color: ${theme.colors.primary};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all .5s cubic-bezier(.165,.84,.44,1), all .5s cubic-bezier(.165,.84,.44,1);

      &:hover{
        background-color: ${theme.colors.gray100};
      }

      svg{
        width: 20px;
        height: 20px;
        path{
          fill: ${theme.colors.terciary};
        }
      }
    }
  }

  div.bottom{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkMenu2 = styled(NavLink)`
  font-family: 'PP Mori';
  width: 100%;
  border-bottom: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: max(12px,calc(10.791px + .31vw));
  line-height: 1.3em;
  letter-spacing: -.01em;
  transition: all .5s cubic-bezier(.165,.84,.44,1), all .5s cubic-bezier(.165,.84,.44,1);

  &.no-border{
    border-bottom: none;
  }
  
  span {
    transition: all .5s cubic-bezier(.165,.84,.44,1), all .5s cubic-bezier(.165,.84,.44,1);

    &:hover{
      color: ${theme.colors.gray100};
      transform: scale(105%);
    }
  }
`;
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
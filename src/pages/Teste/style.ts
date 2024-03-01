import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: white;

  div{
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.primary};
  }
`;
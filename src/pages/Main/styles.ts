import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Container = styled.div`
  width: 100%;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
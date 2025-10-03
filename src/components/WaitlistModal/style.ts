import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`

export const ModalContent = styled.div`
  background-color: ${theme.colors.bg5};
  border-radius: 16px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid ${theme.colors.terciary};
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    font-family: 'PP Mori';
    color: ${theme.colors.text};
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${theme.colors.text};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.terciary}20;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-family: 'PP Mori';
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${theme.colors.terciary}40;
  border-radius: 8px;
  background-color: ${theme.colors.bg5};
  color: ${theme.colors.text};
  font-family: 'PP Mori';
  font-size: 16px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.terciary};
  }

  &::placeholder {
    color: ${theme.colors.text}60;
  }

  /* For select element */
  option {
    background-color: ${theme.colors.bg5};
    color: ${theme.colors.text};
  }
`

export const SubmitButton = styled.button`
  padding: 16px 24px;
  background-color: ${theme.colors.terciary};
  color: ${theme.colors.text};
  border: none;
  border-radius: 8px;
  font-family: 'OGG';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.terciary}90;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 40px 20px;

  h3 {
    font-family: 'PP Mori';
    color: ${theme.colors.terciary};
    font-size: 20px;
    margin-bottom: 12px;
  }

  p {
    font-family: 'PP Mori';
    color: ${theme.colors.text};
    font-size: 16px;
    line-height: 1.5;
  }
`
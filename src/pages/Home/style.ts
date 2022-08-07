import styled from "styled-components";

export const HomeContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`
const BaseContdownButton = styled.button`
  align-items: center;
  border: 0;
  border-radius: 8px;
  color: ${props => props.theme["gray-100"]};
  display: flex;
  cursor: pointer;
  font-weight: bold;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
  transition: background-color 0.2s;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background-color: ${props => props.theme["green-700"]};
  }
`
export const StartCountdownButton = styled(BaseContdownButton)`
  background-color: ${props => props.theme["green-500"]};

  &:not(:disabled):hover {
    background-color: ${props => props.theme["green-700"]};
  }
`
export const StopCountdownButton = styled(BaseContdownButton)`
  background-color: ${props => props.theme["red-500"]};

  &:not(:disabled):hover {
    background-color: ${props => props.theme["red-700"]};
  }
`
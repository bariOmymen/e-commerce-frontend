import styled from "styled-components";
export const Button = styled.button`
  display: flex;
  flex-direction: column;
  padding: 7px 25px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: var(--primary);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }
`;

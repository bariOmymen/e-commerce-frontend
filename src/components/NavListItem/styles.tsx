import styled from "styled-components";
import { StyledNavListItemProps } from "./types";

export const StyledNavListItem = styled.button<StyledNavListItemProps>`
  background-color: transparent;
  border: 0;
  display: flex;
  height: 48px;
  position: relative;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.textSubtle};
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  ${({ theme, $notify, $notificationNumber }) =>
    $notify &&
    `
&:after {
  content: "${$notificationNumber}";
  color: ${theme.colors.tertiary};
  background-color: ${theme.colors["failure"]};
  border-radius: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 20px;
  margin-left: 12px;
  
}
`}

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 16px;
  }
`;

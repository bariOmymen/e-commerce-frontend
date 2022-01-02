import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import useOnClickOutSide from "../../hooks/useOnClickOutSide";
import { Box } from "../Box/Box";
import { Text } from "../Text";
import "./styles.css";
import UserItem from "./UserItem";

const StyledUser = styled.div`
  visibility: visible;
  z-index: 1001;
  pointer-events: auto;

  backround-color: ${({ theme }) => theme.card.background};
  ${({ isOpen }) =>
    !isOpen &&
    `
    
    display: none;
visibility: hidden;
pointer-events: none;
`}
`;

const AccountToken = styled(Text)`
  padding: 10px 8px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

function User(props) {
  const [open, setOpen] = useState(false);
  const [targetRef, setTargetRef] = useState();
  const { deactivate, account } = useWeb3React();
  const auth = useAuth();

  useEffect(() => {});

  useOnClickOutSide(
    {
      current: targetRef,
    },
    () => setOpen(false)
  );
  const disconnect = () => {
    try {
      deactivate();
      JSON.stringify(localStorage.setItem("isConnected", false));
    } catch (error) {
      console.log(error);
    }
  };
  function showFirstSevenLetters(string) {
    const arr = string.split("");
    let res = "";
    for (let i = 0; i < 7; i++) {
      res = res + arr[i];
    }
    return res;
  }
  return (
    <Box ref={setTargetRef} zIndex={30} height={"45px"} {...props}>
      <Box>
        <AccountToken onPointerDown={() => setOpen((open) => !open)}>
          {showFirstSevenLetters(account)}
        </AccountToken>
      </Box>

      {open && (
        <StyledUser isOpen={open}>
          <UserItem>
            <Link to="/userprofile">User Profile</Link>
          </UserItem>

          <UserItem>
            <div onClick={disconnect}>Disconnect</div>
          </UserItem>
        </StyledUser>
      )}
    </Box>
  );
}

export default User;

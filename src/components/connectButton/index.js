import { useWeb3React } from "@web3-react/core";
import React, { useCallback } from "react";
import { injected } from "../../connectors";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  padding: 7px 25px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: var(--primary);
  cursor: pointer;
  font-size: 1rem;
`;

const ConnectButton = () => {
  const { activate, account, active } = useWeb3React();
  console.log(active);
  const connect = useCallback(() => {
    try {
      activate(injected);
      JSON.stringify(localStorage.setItem("isConnected", true));
    } catch (e) {
      console.log(e.message);
    }
  }, [activate]);
  return (
    <div className="connect-container">
      {active ? (
        account
      ) : (
        <Button className="btn connect-btn" onClick={connect}>
          connect
        </Button>
      )}
    </div>
  );
};

export default ConnectButton;

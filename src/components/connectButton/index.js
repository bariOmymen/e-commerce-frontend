import { useWeb3React } from "@web3-react/core";
import React, { useCallback } from "react";
import { injected } from "../../connectors";
import styled from "styled-components";
import { useToast } from "../../hooks/useToast";
import { Button } from "../styles/Button";

const ConnectButton = () => {
  const { toastError, toastSuccess } = useToast();
  const { activate, active, account } = useWeb3React();
  const connect = useCallback(() => {
    try {
      activate(injected, async (error) => {
        const description = error.message;
        toastError({ title: "request pending", description });
      });
      if (active) {
        toastSuccess({ title: "Connected", description: account });
      }

      JSON.stringify(localStorage.setItem("isConnected", true));
    } catch (e) {
      console.log(e.message);
    }
  }, [account, activate, active, toastError, toastSuccess]);
  return (
    <div className="connect-container">
      <Button onClick={connect}>connect</Button>
    </div>
  );
};

export default ConnectButton;

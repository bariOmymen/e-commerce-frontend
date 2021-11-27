import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import WalletPersistent from "./WalletPersistent";

export const getLibrary = (provider) => {
  return new Web3(provider);
};

function Providers({ children }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WalletPersistent>{children}</WalletPersistent>
    </Web3ReactProvider>
  );
}

export default Providers;

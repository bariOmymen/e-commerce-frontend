import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import WalletPersistent from "./WalletPersistent";
import { ToastProvider } from "./Contexts/ToastContext/provider";
import { ProvideAuth } from "./Contexts/AuthContext/authProvider";
import store from "./store";
import { Provider } from "react-redux";

export const getLibrary = (provider) => {
  return new Web3(provider);
};

function Providers({ children }) {
  return (
    <ToastProvider>
      <Provider store={store}>
        <ProvideAuth>
          <Web3ReactProvider getLibrary={getLibrary}>
            <WalletPersistent>{children}</WalletPersistent>
          </Web3ReactProvider>
        </ProvideAuth>
      </Provider>
    </ToastProvider>
  );
}

export default Providers;

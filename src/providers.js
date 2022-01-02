import React, { useEffect, useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import WalletPersistent from "./WalletPersistent";
import { ToastProvider } from "./Contexts/ToastContext/provider";
import { ProvideAuth } from "./Contexts/AuthContext/authProvider";
import store from "./store";
import { Provider } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import dark from "./theme/dark";
import light from "./theme/light";
import { useThemeManager } from "./actions/themeToggle";

export const getLibrary = (provider) => {
  return new Web3(provider);
};

const ThemeProviderWrapper = (props) => {
  const [isDark] = useThemeManager();
  return <ThemeProvider theme={isDark ? dark : light} {...props} />;
};

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <ToastProvider>
          <ProvideAuth>
            <Web3ReactProvider getLibrary={getLibrary}>
              <WalletPersistent>{children}</WalletPersistent>
            </Web3ReactProvider>
          </ProvideAuth>
        </ToastProvider>
      </ThemeProviderWrapper>
    </Provider>
  );
};

export default Providers;

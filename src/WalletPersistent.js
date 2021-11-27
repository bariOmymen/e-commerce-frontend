import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { injected } from "./connectors";

function WalletPersistent({ children }) {
  const [loaded, setLoaded] = useState();
  const { active, activate, error } = useWeb3React();
  const isConnected = JSON.parse(localStorage.getItem("isConnected"));

  useEffect(() => {
    try {
      if (isConnected) {
        const isAuth = injected.isAuthorized();

        setLoaded(true);
        if (isAuth && !active && !error) {
          activate(injected);
        }
      } else {
        setLoaded(true);
      }
    } catch (error) {
      setLoaded(true);
      console.log(error);
    }
  }, [activate, active, error, isConnected]);

  if (loaded) {
    return children;
  }
  return <div>LOADING...</div>;
}

export default WalletPersistent;

// Hook (use-auth.js)
import React, { useState, useContext, createContext } from "react";
import { useDispatch } from "react-redux";
import { signIn, signUp, signOut } from "./actions/userActions";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(false);

  const signin = (email, password) => {
    dispatch(signIn(email, password));
    setUser(true);
  };
  const signup = (name, email, password) => {
    dispatch(signUp(name, email, password));
    setUser(true);
  };
  const signout = () => {
    dispatch(signOut());
    setUser(false);
  };
  const sendPasswordResetEmail = (email) => {
    return "";
  };
  const confirmPasswordReset = (code, password) => {
    return "";
  };

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

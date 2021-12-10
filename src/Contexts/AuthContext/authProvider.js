// Hook (use-auth.js)
import React, { useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp, signOut } from "../../actions/userActions";

export const authContext = createContext();

export function ProvideAuth({ children }) {
  function useProvideAuth() {
    const userInfo = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();
    const [user, setUser] = useState(false);

    const signin = (email, password) => {
      dispatch(signIn(email, password));
    };
    const signup = (name, email, password) => {
      dispatch(signUp(name, email, password));
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
      setUser,
      signin,
      signup,
      signout,
      sendPasswordResetEmail,
      confirmPasswordReset,
    };
  }
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

import React from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";

function AuthListener() {
  const { setUser } = useAuth();
  const userInfo = useSelector((state) => state.user.userInfo);
  if (userInfo) {
    setUser(true);
  } else {
    setUser(false);
  }
  return null;
}

export default AuthListener;

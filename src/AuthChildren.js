import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function AuthChildren({ children }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/signin" />;
}

export default AuthChildren;

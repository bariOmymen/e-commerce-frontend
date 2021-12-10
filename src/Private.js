import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function Private() {
  const auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

export default Private;

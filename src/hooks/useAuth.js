import { useContext } from "react";
import { authContext } from "../Contexts/AuthContext/authProvider";

export const useAuth = () => {
  return useContext(authContext);
};

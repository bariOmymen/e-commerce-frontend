import { useContext } from "react";
import { ToastContext } from "../Contexts/ToastContext/provider";

export const useToast = () => {
  const toastContext = useContext(ToastContext);
  if (toastContext === undefined) {
    console.log("toastContext not available");
  } else {
    return toastContext;
  }
};

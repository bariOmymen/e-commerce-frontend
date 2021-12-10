import { kebabCase } from "lodash";
import { createContext, useCallback, useState } from "react";
import { types } from "../../components/Toast/types";

export const ToastContext = createContext(undefined);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const toast = useCallback(
    ({ title, description, type }) => {
      setToasts((prevToasts) => {
        const id = kebabCase(title);
        const currentToasts = prevToasts.filter((toast) => toast.id !== id);
        return [
          {
            id,
            title,
            description,
            type,
          },
          ...currentToasts,
        ];
      });
    },
    [setToasts]
  );

  const toastError = ({ title, description }) => {
    return toast({ title, description, type: types.DANGER });
  };
  const toastSuccess = ({ title, description }) => {
    return toast({ title, description, type: types.SUCCESS });
  };

  const remove = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };
  const clear = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{ toasts, toastError, remove, clear, toastSuccess }}
    >
      {children}
    </ToastContext.Provider>
  );
};

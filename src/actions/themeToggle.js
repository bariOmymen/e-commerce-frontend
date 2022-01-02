import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLETHEME } from "../types";

export function useThemeManager() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.user.isDark);

  const toggleTheme = useCallback(() => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    dispatch({
      type: TOGGLETHEME,
      payLoad: !isDark,
    });
  }, [dispatch, isDark]);

  return [isDark, toggleTheme];
}

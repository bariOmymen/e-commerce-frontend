import { DefaultTheme } from "styled-components";
import { dark as cardDark } from "../components/Card/theme";
import { dark as toggleDark } from "../components/ToggleTheme/theme";
import { dark as navDark } from "../components/widgets/menu/theme";
import base from "./base";
import { darkColors } from "./colors";

const dark: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  card: cardDark,
  nav: navDark,
  toggle: toggleDark,
};

export default dark;

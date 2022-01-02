import { DefaultTheme } from "styled-components";
import { light as cardLight } from "../components/Card/theme";
import { light as toggleLight } from "../components/ToggleTheme/theme";
import { light as navLight } from "../components/widgets/menu/theme";
import base from "./base";
import { lightColors } from "./colors";

const light: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  card: cardLight,
  nav: navLight,
  toggle: toggleLight,
};
export {};
export default light;

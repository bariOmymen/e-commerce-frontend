import { darkColors, lightColors } from "../../../theme/colors";

export interface NavTheme {
  background: string;
}

export const light: NavTheme = {
  background: lightColors.backgroundAlt,
};

export const dark: NavTheme = {
  background: darkColors.backgroundAlt,
};

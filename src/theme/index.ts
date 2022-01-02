// import { AlertTheme } from '../components/Alert/types'
// import { CardTheme } from '../components/Card/types'
import { ToggleTheme } from "../components/ToggleTheme/theme";
import { CardTheme } from "../components/Card/types";
import { NavTheme } from "../components/widgets/menu/theme";
import { Colors, Radii, Shadows, ZIndices } from "./types";

export interface PancakeTheme {
  isDark: boolean;
  siteWidth: number;
  colors: Colors;
  card: CardTheme;
  shadows: Shadows;
  zIndices: ZIndices;
  radii: Radii;
  nav: NavTheme;
  toggle: ToggleTheme;
}

// export { default as light } from './light'
// export { default as dark } from './dark'

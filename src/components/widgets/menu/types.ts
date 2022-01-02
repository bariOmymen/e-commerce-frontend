import { NavItems } from "../../NavList/types";

export interface MenuProps {
  isDark?: boolean;
  navItems: NavItems[];
  activeItem: string;
  isLoggedIn?: boolean;
  isWalletActive?: boolean;
  switchTheme: (isDark?: boolean) => void;
  signOut?: () => void;
}

import { NavListItemType } from "../NavListItem/types";

export interface NavItemsProps {
  notifyCart?: boolean;
  cartNotificationNumber?: number;
  isLoggedIn?: boolean;
}

export interface NavListProps {
  navItems: NavItems[];
  activeItem?: string;
  signOut?: () => void;
}

export interface NavItems {
  label: string;
  href: string;
  notify?: boolean;
  notificationNumber?: number;
  isLoggedIn?: boolean;
  type?: NavListItemType;
}

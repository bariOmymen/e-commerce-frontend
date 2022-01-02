import { NavListItemType } from "../NavListItem/types";
import { NavItems, NavItemsProps } from "./types";

export const navItems: ({
  notifyCart,
  cartNotificationNumber,
  isLoggedIn,
}: NavItemsProps) => NavItems[] = ({
  notifyCart,
  cartNotificationNumber,
  isLoggedIn,
}) => [
  {
    label: "cart",
    href: "/cart",
    notify: notifyCart,
    notificationNumber: cartNotificationNumber,
    type: NavListItemType.LINK,
  },
  {
    label: "Authenticate",
    href: "/signin",
    notify: false,
    notificationNumber: 0,
    isLoggedIn,
    type: NavListItemType.LINK,
  },
  {
    label: "Order History",
    href: "/history",
    notify: false,
    notificationNumber: 0,
    type: NavListItemType.LINK,
  },
  {
    label: "Sign Out",
    href: "/",
    notify: false,
    notificationNumber: 0,
    isLoggedIn,
    type: NavListItemType.BUTTON,
  },
];

export default navItems;

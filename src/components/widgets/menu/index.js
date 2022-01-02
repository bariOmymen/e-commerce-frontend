import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useThemeManager } from "../../../actions/themeToggle";
import { SIGNOUT_USER } from "../../../types";
import navItems from "../../NavList/config";
import Menu from "./Menu";

const Body = (props) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isDark, toggleTheme] = useThemeManager();

  const [items, setItems] = useState();
  const location = useLocation();
  const activeItem = location.pathname;
  const { active } = useWeb3React();
  useEffect(() => {
    const notifyCart = cartItems.length > 0;
    const cartNotificationNumber = cartItems.length;
    setItems(
      navItems({ notifyCart, cartNotificationNumber, isLoggedIn: !!userInfo })
    );
  }, [cartItems, userInfo]);

  return (
    <Menu
      {...props}
      navItems={items}
      activeItem={activeItem}
      isLoggedIn={!!userInfo}
      isWalletActive={active}
      isDark={isDark}
      switchTheme={toggleTheme}
      signOut={() => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("shippingDetails");
        dispatch({
          type: SIGNOUT_USER,
        });
      }}
    />
  );
};
export default Body;

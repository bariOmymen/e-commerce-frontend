import { useWeb3React } from "@web3-react/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import CartBadge from "../CartBadge";
import ConnectButton from "../connectButton";
import { ListItem } from "../styles/ListItem";
import User from "../user";
import "./styles.css";

function Nav() {
  const { cartItems } = useSelector((state) => state.cart);
  const userInfo = useAuth();
  const { active } = useWeb3React();
  return (
    <nav className="container">
      <Link to="/"> AMAZONIA</Link>
      <div className="right-side">
        <ul className="nav-items">
          <ListItem>
            <Link className="cart" to="/cart">
              {" "}
              Cart{" "}
              {cartItems.length > 0 && userInfo ? (
                <CartBadge show classes="cart-badge">
                  {cartItems.length}
                </CartBadge>
              ) : null}
            </Link>
          </ListItem>
          {active ? (
            <ListItem>
              <User />
            </ListItem>
          ) : (
            <li>
              <ConnectButton />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

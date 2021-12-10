import React from "react";
import { ListItem } from "../styles/ListItem";
import "./styles.css";
function UserItem({ children }) {
  return <ListItem className="user-item">{children}</ListItem>;
}

export default UserItem;

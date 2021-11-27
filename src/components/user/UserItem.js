import React from "react";
import "./styles.css";
function UserItem({ children }) {
  return <li className="user-item">{children}</li>;
}

export default UserItem;

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../router-helper";
import "./styles.css";
import UserItem from "./UserItem";

function User() {
  const [open, setOpen] = useState(false);
  const { deactivate, account } = useWeb3React();
  const auth = useAuth();

  const disconnect = () => {
    try {
      deactivate();
      JSON.stringify(localStorage.setItem("isConnected", false));
    } catch (error) {
      console.log(error);
    }
  };

  function showFirstSevenLetters(string) {
    const arr = string.split("");
    let res = "";
    for (let i = 0; i < 7; i++) {
      res = res + arr[i];
    }
    return res;
  }
  return (
    <div>
      <h3 className="dropdown" onClick={() => setOpen(!open)}>
        {showFirstSevenLetters(account)}{" "}
        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>{" "}
      </h3>
      <ul className={open ? "dropdown-content-active" : "dropdown-content"}>
        <UserItem>
          <Link to="/userprofile">User Profile</Link>
        </UserItem>
        <UserItem>
          <Link to="/orderhistory">Order History</Link>
        </UserItem>
        <UserItem>
          <Link
            to="#signout"
            onClick={() => {
              auth.signout();
            }}
          >
            Sign Out
          </Link>
        </UserItem>
        <UserItem>
          <button onClick={disconnect}>Disconnect</button>
        </UserItem>
        <UserItem>
          <Link
            to="/signin"
            onClick={() => {
              auth.signout();
            }}
          >
            signin
          </Link>
        </UserItem>
        <UserItem>
          <Link
            to="/Signup"
            onClick={() => {
              auth.signout();
            }}
          >
            Signup
          </Link>
        </UserItem>
      </ul>
    </div>
  );
}

export default User;

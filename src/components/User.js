import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAuth } from '../router-helper'

function User() {
    const userInfo = useSelector(state => state.user.userInfo)
    const auth = useAuth()
    return (
        <div className="dropdown">
        <Link to="#">
          {userInfo.name} <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>{' '}
        </Link>
        <ul className="dropdown-content">
          <li>
            <Link to="/userprofile">User Profile</Link>
          </li>
          <li>
            <Link to="/orderhistory">Order History</Link>
          </li>
          <li>
            <Link to="#signout" onClick={() => {auth.signout()}}>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    )
}

export default User

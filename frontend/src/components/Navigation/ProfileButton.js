import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <button id="profilePic"onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <div className="dropdown-content">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button id="logoutBtn" onClick={logout}>Log Out</button>
          </li>
          </div>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;

// <button id="profilePic"onClick={openMenu}>
// <i className="fas fa-user-circle" />
// </button>
// {showMenu && (
// <ul className="profile-dropdown">
//   <div className="dropdown-content">
//   <li>{user.username}</li>
//   <li>{user.email}</li>
//   <li>
//     <button onClick={logout}>Log Out</button>
//   </li>
//   </div>
// </ul>
// )}

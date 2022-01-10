import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from './images/critterlogo.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar'>
      <div className="crittrLogo">
        <NavLink exact to="/">
          <img id="flickrlogo" src={logo}></img>
          {/* <img id="flickrpic" src="./images/flickr.png"></img> */}
          Crittr
          </NavLink>
      </div>
      {/* <li> */}
      <div className = "rightSide">
          {isLoaded && sessionLinks}
      </div>
      {/* </li> */}
    </div>
  );
}

export default Navigation;

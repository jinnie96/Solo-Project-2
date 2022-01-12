import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from '../Navigation/images/favicon.png'

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
      <header>
        <LoginFormModal />
        <NavLink to="/signup">
          <button id='signup'>Sign up</button>
        </NavLink>
      </header>
      </>
    );
  }

  return (
    <header>
      <nav>

    <div className='navbar'>
        <NavLink exact to="/">
          <div className="crittrLogo">
              <img id="flickrlogo" src={logo}></img>
              {/* <img id="flickrlogo" src="./images/critterlogo.png"></img> */}
              {/* <img id="flickrpic" src="./images/flickr.png"></img> */}
              {/* <h1 id="crittrName">
                Crittr
              </h1> */}
          </div>
        </NavLink>
      {/* <li> */}
      <div className = "rightSide">
          {isLoaded && sessionLinks}
      </div>
      {/* </li> */}
    </div>
      </nav>
    </header>
  );
}

export default Navigation;

{/* <div className="background-image">
<header>
  <nav>
    <div className="navbar">
      <div className="flickrlogo">
        <img id="flickrlogo" src="./images/flickr-1-logo-svg-vector.svg" />
        <img id="flickrpic" src="./images/flickr.png" />
      </div>
      <div className="rightside">
        <img id="searchlogo" src="./images/search-3-xxl.png" />
        <h1 id="log-in" className="buttons">Log in</h1>
        <button id="sign-up" className="buttons">Sign Up</button>
      </div>
    </div>
  </nav>
</header>
<main className="body">
  <h1 className="inspiration">Find your inspiration.</h1>
  <h2 className="community">Join the Flickr community, home to tens of billions of photos and 2 million groups.
  </h2>
  <button className="startbutton">Start for free</button>
</main>
</div>
); */}

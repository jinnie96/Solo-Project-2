import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UploadImageForm from "./components/UploadImageForm"
import UserHomePage from "./components/UserHomePage";
import SinglePicture from './components/SinglePicture'
import Homepage from './components/Homepage'
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const loggedIn = useSelector(state => state.session.user)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div>
        {!loggedIn && (
          <div>
            <Homepage />
          </div>
        )}
        {loggedIn && (
          <Switch>

            <Route path exact="/">
              <UserHomePage />
            </Route>

            <Route path="/signup">
              <SignupFormPage />
            </Route>

            <Route path="/new">
              <UploadImageForm />
            </Route>

            <Route path="/image/:id">
              <SinglePicture />
            </Route>

            <Route>
              <h1>404: Page not Found</h1>
            </Route>

          </Switch>
        )}
        <Footer />
      </div>
    </>
  );
  // return (
  //   <>
  //     <Navigation isLoaded={isLoaded} />
  //     {isLoaded && (
  //       <Switch>
  //         <Route path="/">
  //           <Homepage />
  //         </Route>
  //         <Route path="/signup">
  //           <SignupFormPage />
  //         </Route>
  //       </Switch>
  //     )}
  //   </>
  // );
}

export default App;

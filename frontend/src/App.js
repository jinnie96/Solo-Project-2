import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
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
      {!loggedIn && (
        <div>
          <Homepage />
          <Footer />
        </div>
      )}
      {isLoaded && (
        <Switch>
          <Route path exact="/">
             {/* <Homepage /> */}
           </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
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

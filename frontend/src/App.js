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
import UpdateImageForm from "./components/UpdateImageForm";
import DeleteImageForm from "./components/DeleteImageForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const loggedIn = useSelector(state => state.session.user)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  // return (
  //   <>
  //     <Navigation isLoaded={isLoaded} />
  //     <div>
  //       {!loggedIn && (
  //         <Switch>
  //           <Route exact path = "/">
  //             <Homepage />
  //           </Route>
  //           {/* <div class="allBackground"> */}
  //           <Route exact path = "/signup">

  //           <SignupFormPage />
  //           </Route>
  //           {/* </div> */}
  //         </Switch>
  //       )}
  //       {loggedIn && (
  //         <Switch>
  //           <div class="allBackground">
  //           <Route exact path="/">
  //             <UserHomePage />
  //           </Route>

  //           <Route exact path="/">
  //             <UserHomePage />
  //           </Route>
  //             {/* FIX^^^^^^^^^^^^ */}

  //           <Route path="/new">
  //             <UploadImageForm/>
  //           </Route>

  //           <Route exact path="/images/:id">
  //             {/* <h1>Route</h1> */}
  //             <SinglePicture />
  //           </Route>

  //           <Route exact path="/images/:id/edit">
  //             <UpdateImageForm />
  //           </Route>

  //           <Route exact path="/images/:id/delete">
  //             <DeleteImageForm />
  //           </Route>
  //           {/* <Route>
  //             <h1>404: Page not Found</h1>
  //           </Route> */}
  //           </div>

  //         </Switch>
  //       )}
  //       <Footer />
  //     </div>
  //   </>
  // );
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div>
      {!loggedIn && (
          <Switch>
            <Route exact path = "/">
              <Homepage />
            </Route>
            <Route exact path = "/signup">

            <SignupFormPage />
            </Route>
          </Switch>
        )}
        {loggedIn && (
          <Switch>
            <div class="backgroundImg">
            <Route exact path="/">
              <UserHomePage />
            </Route>

            <Route exact path="/signup">
              <UserHomePage />
            </Route>

            <Route path="/new">
              <UploadImageForm/>
            </Route>

            <Route exact path="/images/:id">
              {/* <h1>Route</h1> */}
              <SinglePicture />
            </Route>

            <Route exact path="/images/:id/edit">
              <UpdateImageForm />
            </Route>

            <Route exact path="/images/:id/delete">
              <DeleteImageForm />
            </Route>
            </div>
          {isLoaded && (
            <Route path="*">
              <h1>404: Page not Found</h1>
              </Route>
          )}
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

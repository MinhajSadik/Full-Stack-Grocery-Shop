import { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useHistory, useLocation } from "react-router";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import CheckOut from "./Components/CheckOut/CheckOut";
import LogInPage from "./Components/LogInPage/LogInPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { initializeFramework } from "./Components/FirebaseManegment/FirebaseManegment";
import firebase from "firebase/app";
import "firebase/auth";
import Orders from "./Components/Orders/Orders";
import Header from "./Components/Header/Header";

export const LoggedInUserContext = createContext();

function App() {
  const [LoggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    initializeFramework();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedInUser(user);
      } else {
        setLoggedInUser("");
      }
    });
  }, []);

  return (
    <>
      <LoggedInUserContext.Provider
        value={[LoggedInUser, setLoggedInUser]}
      >
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/checkOut/:name">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/logIn">
              <LogInPage />
            </Route>
          </Switch>
        </Router>
      </LoggedInUserContext.Provider>
    </>
  );
}

export default App;

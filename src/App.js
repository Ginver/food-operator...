import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Balanceday from './pages/Balanceday';
import Workoutday from './pages/Workoutday';
import NoTimeForCookingday from './pages/NoTimeForCookingday';
import Comfortfoodday from './pages/Comfortfoodday';
import Coaching from './pages/Coaching';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {UserContext} from "./context/UserContext";

function PrivateRoute({children, user}) {
  // omdat we nog steeds alle mogelijke properties zoals exact etc. op Route willen zetten, kunnen we met de ...rest operator zeggen:
  // al die andere props die je verder nog ontvangt, zet die ook allemaal maar op <Route>
  return (
      <Route>
        {user !== null ? children : <Redirect to="/profile" />}
      </Route>
  )
}

function App() {

  const { user } = useContext(UserContext);

  return (
      <>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/profile" user={user}>
              <Profile />
            </PrivateRoute>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/balanceday">
              <Balanceday />
            </Route>
            <Route path="/notimeforcookingday">
              <NoTimeForCookingday />
            </Route>
            <Route path="/workoutday">
              <Workoutday />
            </Route>
            <Route path="/comfortfoodday">
              <Comfortfoodday />
            </Route>
            <Route path="/coaching">
              <Coaching />
            </Route>
          </Switch>

          <Footer />

        </div>
      </>
  );
}

export default App;

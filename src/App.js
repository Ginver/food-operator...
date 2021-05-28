import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Overview from './pages/Overview';
import BalanceDay from './pages/BalanceDay';
import WorkoutDay from './pages/WorkoutDay';
import NoTimeForCookingDay from './pages/NoTimeForCookingDay';
import ComfortFoodDay from './pages/ComfortFoodDay';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import {UserContext} from "./context/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

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
            <PrivateRoute path="/overview" user={user}>
              <Overview />
            </PrivateRoute>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/balanceday">
              <BalanceDay />
            </Route>
            <Route path="/notimeforcookingday">
              <NoTimeForCookingDay />
            </Route>
            <Route path="/workoutday">
              <WorkoutDay />
            </Route>
            <Route path="/comfortfoodday">
              <ComfortFoodDay />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
  );
}

export default App;

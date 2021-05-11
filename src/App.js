import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Balanceday from './pages/Balanceday';
import Workoutday from './pages/Workoutday';
import NoTimeForCookingday from './pages/NoTimeForCookingday';
import Comfortfoodday from './pages/Comfortfoodday';
import Coaching from './pages/Coaching';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {

  return (
      <>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
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
            <Route path="/comfortfoodday">
              <Coaching />
            </Route>
          </Switch>

          <Footer />

        </div>
      </>
  );
}

export default App;

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NavBurgerPopup from "../NavBurgerPopup/NavBurgerPopup";
import PageNotFound from "../PageNotFound/PageNotFound";
import './App.css';


function App() {
  const [isNavBurgerPopupOpen, setIsNavBurgerPopupOpen] = useState(false);

  function handleNavBurgerClick() {
    setIsNavBurgerPopupOpen(true);
  }

  function closeAllPopups() {
    setIsNavBurgerPopupOpen(false);
  }

  return (
    <div className="app">
      <Switch>
      <Route exact path="/">
          <Main />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile
            isOpen={isNavBurgerPopupOpen}
            onClose={closeAllPopups}
            onNavBurger={handleNavBurgerClick}
          />
        </Route>
        <Route path="/movies">
          <Movies
            isOpen={isNavBurgerPopupOpen}
            onClose={closeAllPopups}
            onNavBurger={handleNavBurgerClick}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            isOpen={isNavBurgerPopupOpen}
            onClose={closeAllPopups}
            onNavBurger={handleNavBurgerClick}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
        {/* <NavBurgerPopup 
          // isOpen={isNavBurgerPopupOpen}
          // onClose={closeAllPopups} 
        /> */}
      </Switch>
    </div>
  );
}

export default App;
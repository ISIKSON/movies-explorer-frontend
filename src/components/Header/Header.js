import React from "react";
import { Route } from "react-router-dom";
import logotype from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import './Header.css';

function Header({
    onNavBurger
  }) {
    return (
<>
    <Route exact path="/">
        <header className="header-main">
            <div className="header-main-contant">
                <img className="header-logo" src={logotype} alt="Логотоп" />
                <Navigation />
            </div>
        </header>
    </Route>
    <Route path="/movies">
        <header className="header-account">
            <div className="header-account-contant">
                <img className="header-logo" src={logotype} alt="Логотоп" />
                <Navigation
                onNavBurger={onNavBurger}
                />
            </div>
        </header>  
    </Route>
    <Route path="/saved-movies">
        <header className="header-account">
            <div className="header-account-contant">
                <img className="header-logo" src={logotype} alt="Логотоп" />
                <Navigation 
                onNavBurger={onNavBurger}
                />
            </div>
        </header>  
    </Route>
    <Route path="/profile">
        <header className="header-account">
            <div className="header-account-contant">
                <img className="header-logo" src={logotype} alt="Логотоп" />
                <Navigation
                onNavBurger={onNavBurger}
                />
            </div>
        </header>  
    </Route>
    </>
    )
}

export default Header;
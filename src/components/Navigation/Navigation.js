import React from "react";
import { Route, Link } from "react-router-dom";
import profileIcon from "../../images/profile-icon.svg";
import burgerIcon from "../../images/burger-menu.svg";
import './Navigation.css';

function Navigation(props) {
    return (
      <> 
        <Route exact path="/">
            <nav className="nav-main">
              <Link to="sign-up" className="nav-main__link">
                  Регистрация
              </Link>
              <Link to="sign-in" className="nav-main__link nav-main__link_green">
                  Войти
              </Link>
            </nav>
        </Route>
        <Route path="/movies">
            <nav className="nav-account">
              <div className="nav-account__movies">
                <Link to="movies" className="nav-movie-link">
                    Фильмы
                </Link>
                <Link to="saved-movies" className="nav-movie-link">
                    Сохранённые фильмы
                </Link>
              </div>
              <div className="nav-account__profil">
                <img className="nav-profile-logo" src={profileIcon} alt="Логотип" />
                <Link to="profile" className="nav-profile-link">
                    Аккаунт
                </Link>
              </div>
              <button onClick={props.onNavBurger} className="nav-account__burger">
                <img className="nav-burger-logo" src={burgerIcon} alt="Логотип" />
              </button>
            </nav>
        </Route>
        <Route path="/saved-movies">
            <nav className="nav-account">
              <div className="nav-account__movies">
                <Link to="movies" className="nav-movie-link">
                    Фильмы
                </Link>
                <Link to="saved-movies" className="nav-movie-link">
                    Сохранённые фильмы
                </Link>
              </div>
              <div className="nav-account__profil">
                <img className="nav-profile-logo" src={profileIcon} alt="Логотип" />
                <Link to="profile" className="nav-profile-link">
                    Аккаунт
                </Link>
              </div>
              <button onClick={props.onNavBurger} className="nav-account__burger">
                <img className="nav-burger-logo" src={burgerIcon} alt="Логотип" />
              </button>
            </nav>
        </Route>
        <Route path="/profile">
            <nav className="nav-account">
              <div className="nav-account__movies">
                <Link to="movies" className="nav-movie-link">
                    Фильмы
                </Link>
                <Link to="saved-movies" className="nav-movie-link">
                    Сохранённые фильмы
                </Link>
              </div>
              <div className="nav-account__profil">
                <img className="nav-profile-logo" src={profileIcon} alt="Логотип" />
                <Link to="profile" className="nav-profile-link">
                    Аккаунт
                </Link>
              </div>
              <button onClick={props.onNavBurger} className="nav-account__burger">
                <img className="nav-burger-logo" src={burgerIcon} alt="Логотип" />
              </button>
            </nav>
        </Route>
      </>
    )
}

export default Navigation;
import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../images/profile-icon.svg";
import './NavBurgerPopup.css';

function NavBurgerPopup(props) {
  return (
    <div className={
        props.isOpen
          ? "popup popup_type__burger-nav popup_opened"
          : "popup popup_type__burger-nav"
      }>
      <div className="popup__overlay"></div>
      <div className="popup__nav-container">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        {/* ----------------------------------------------------------------- */}
        <nav className="popup-nav">
              <div className="popup-nav__movies">
              <Link to="movies" className="popup-nav-link">
                    Главная
                </Link>
                <Link to="movies" className="popup-nav-link">
                    Фильмы
                </Link>
                <Link to="saved-movies" className="popup-nav-link">
                    Сохранённые фильмы
                </Link>
              </div>
              <div className="popup-nav__profil">
                <img className="popup-nav-profile-logo" src={profileIcon} alt="Логотип" />
                <Link to="profile" className="popup-nav-profile-link">
                    Аккаунт
                </Link>
              </div>
            </nav>
         {/* ----------------------------------------------------------------- */}   
      </div>
    </div>
  );
}

export default NavBurgerPopup;

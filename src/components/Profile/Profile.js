import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import NavBurgerPopup from "../NavBurgerPopup/NavBurgerPopup";
import './Profile.css';

function Profile({
    onNavBurger,
    isOpen,
    onClose
  }) {
    return (
        <>
            <Header onNavBurger={onNavBurger}/>
            <div className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form" id="profileform">
                    <div className="profile__contant">
                        <label className="profile__label" htmlFor="username">Имя</label>
                        <input
                            id="username"
                            className="profile__input"
                            name="username"
                            type="text"
                            minLength="2"
                            maxLength="40"
                            required
                        />
                    </div>
                    <div className="profile__contant">
                        <label className="profile__label" htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            className="profile__input"
                            name="email"
                            type="email"
                            minLength="2"
                            maxLength="40"
                            required
                        />
                    </div>
                </form>
                    <button className="profile__button" form="profileform" type="submit">
                        Редактировать
                    </button>
                    <Link to="/" className="profile__exit">
                        Выйти из аккаунта
                    </Link>
            </div>
            <NavBurgerPopup 
                isOpen={isOpen}
                onClose={onClose}
        />
        </>
    )
}

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
import logotype from "../../images/logo.svg";
import './Register.css';

function Register() {
    return (
        <div className="register">
            <img className="register__logo" src={logotype} alt="Student" />
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form">
                <label for="username">Имя</label>
                <input
                    id="username"
                    className="register__input"
                    name="username"
                    type="text"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span id="username-error" class="error">Что-то пошло не так...</span>

                <label for="email">E-mail</label>
                <input
                    id="email"
                    className="register__input"
                    name="email"
                    type="email"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span id="email-error" class="error">Что-то пошло не так...</span>

                <label for="password">Пароль</label>
                <input
                    id="password"
                    className="register__input"
                    name="password"
                    type="password"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span id="password-error" class="error">Что-то пошло не так...</span>
                
                    <button className="register__button" type="submit">
                        Зарегистрироваться
                    </button>
            </form>
            <div className="register__signin">
                <p className="register__subtitle">Уже зарегестрированы?</p>
                <Link to="/sign-in" className="register__login-link">
                    Войти
                </Link>
            </div>
        </div>
    )
}

export default Register;

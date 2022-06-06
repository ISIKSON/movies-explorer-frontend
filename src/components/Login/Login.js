import React from "react";
import { Link } from "react-router-dom";
import logotype from "../../images/logo.svg";
import './Login.css';

function Login() {
    return (
        <div className="login">
            <img className="login__logo" src={logotype} alt="Student" />
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form">
                <label for="email">E-mail</label>
                <input
                    id="email"
                    className="login__input"
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
                    className="login__input"
                    name="password"
                    type="password"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span id="password-error" class="error">Что-то пошло не так...</span>
                
                    <button className="login__button" type="submit">
                        Войти
                    </button>
            </form>
            <div className="login__signup">
                <p className="login__subtitle">Ещё не зарегестрированы?</p>
                <Link to="/sign-up" className="login__register-link">
                    Регестрация
                </Link>
            </div>
        </div>
    )
}

export default Login;

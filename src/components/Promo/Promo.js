import React from "react";
// import { Route, Link } from "react-router-dom";
import landingLogo from "../../images/landing-logo.png";
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <div className="promo-face">
                <img className="promo-face__logo" src={landingLogo} alt="Баннер" />
                <h1 className="promo-face__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </section>
    )
}

export default Promo;
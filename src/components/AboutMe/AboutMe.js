import React from "react";
// import { Route, Link } from "react-router-dom";
import photoMe from "../../images/me.png";
import './AboutMe.css';

function AboutMe() {
    return (
        <section id="about-me" className="about-me">
            <div className="about-me-content">
            <h2 className="section-title">Студент</h2>
                <hr />
                <div className="about-me-info">
                    <div className="about-me-info__text">
                        <h3 className="about-me-title">Виталий</h3>
                        <h4 className="about-me-subtitle">Фронтенд-разработчик, 30 лет</h4>
                        <p className="about-me-description">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                            У меня есть жена и дочь. 
                            Я люблю слушать музыку, а ещё увлекаюсь бегом. 
                            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                            </p>
                        <ul className="about-me-links">
                            <li className="about-me-links__profile">
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="about-me-links__link">
                                    Facebook
                                </a>
                            </li>
                            <li className="about-me-links__profile">
                                <a target="_blank" rel="noreferrer" href="https://github.com/ISIKSON" className="about-me-links__link">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img className="about-me-info__photo" src={photoMe} alt="Портрет студента" />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
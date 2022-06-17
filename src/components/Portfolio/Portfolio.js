import React from "react";
// import { Route, Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio-content">
                <h2 className="portfolio-title">Портфолио</h2>
                <div className="portfolio-project">
                    <h3 className="portfolio-project__chapter">Статичный сайт</h3>
                    <a href="https://github.com/ISIKSON/how-to-learn" className="portfolio-project__link">
                    <img className="portfolio-project__photo" src={arrow} alt="Стрелка" />
                    </a>
                </div>
                <div className="portfolio-project">
                    <h3 className="portfolio-project__chapter">Адаптивный сайт</h3>
                    <a href="https://isikson.github.io/russian-travel/" className="portfolio-project__link">
                    <img className="portfolio-project__photo" src={arrow} alt="Стрелка" />
                    </a>
                </div>
                <div className="portfolio-project">
                    <h3 className="portfolio-project__chapter">Одностраничное приложение</h3>
                    <a href="https://github.com/ISIKSON/react-mesto-api-full" className="portfolio-project__link">
                    <img className="portfolio-project__photo" src={arrow} alt="Стрелка" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
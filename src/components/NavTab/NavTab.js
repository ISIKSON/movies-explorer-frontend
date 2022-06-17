import React from "react";
// import { Route, Link } from "react-router-dom";
import './NavTab.css';

function NavTab() {
    return (
        <section className="navTab">
            <nav className="navTab-links">
                <a href="#about-project" className="navTab-links__link">
                    О проекте
                </a>
                <a href="#techs" className="navTab-links__link">
                    Технологии
                </a>
                <a href="#about-me" className="navTab-links__link">
                    Студент
                </a>
            </nav>
        </section>
    )
}

export default NavTab;
import React from "react";
// import { Route, Link } from "react-router-dom";
import './Techs.css';

function Techs() {
    return (
        <section id="techs" className="techs">
            <div className="techs-content">
            <h2 className="section-title">Технологии</h2>
                <hr />
                <h2 className="techs-title">7 технологий</h2>
                <p className="techs-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="list-techs">
                    <li className="list-techs__name">HTML</li>
                    <li className="list-techs__name">CSS</li>
                    <li className="list-techs__name">JS</li>
                    <li className="list-techs__name">React</li>
                    <li className="list-techs__name">Git</li>
                    <li className="list-techs__name">Express.js</li>
                    <li className="list-techs__name">mongoDB</li>
                </ul>
                <div className="lead-time">
                    
                </div>
            </div>
        </section>
    )
}

export default Techs;
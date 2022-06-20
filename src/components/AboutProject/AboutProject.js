import React from "react";
// import { Route, Link } from "react-router-dom";
import './AboutProject.css';

function AboutProject() {
    return (
        <section id="about-project" className="about-project">
            <div className="about-project-content">
            <h2 className="section-title">О проекте</h2>
                <hr />
                <div className="about-project-stage">
                    <div className="about-project-stage__column">
                        <h3 className="about-project-stage__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project-stage__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project-stage__column">
                        <h3 className="about-project-stage__subtitle">На выполнение диплома ушло 5 недель</h3>  
                        <p className="about-project-stage__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>    
                </div>
                <div className="about-project-weeks">
                    <h4 className="about-project-weeks__week about-project-weeks__week_back">1 неделя</h4>
                    <h4 className="about-project-weeks__week about-project-weeks__week_front">4 недели</h4> 
                </div>
                <div className="about-project-names">
                    <h4 className="about-project-names__name about-project-names__name_back">Back-end</h4>
                    <h4 className="about-project-names__name about-project-names__name_front">Front-end</h4> 
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
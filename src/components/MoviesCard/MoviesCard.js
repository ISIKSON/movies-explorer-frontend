import React from "react";
import { Route } from "react-router-dom";
import aboutDesign from "../../images/about design.jpg";
// import like from "../../images/like.svg";
import './MoviesCard.css';

function MoviesCard() {
    return (
        <>
        <Route path="/movies">
            <div className="movies-card">
                <img className="movies-card__image" src={aboutDesign} alt="Фото" />
                <div className="movies-card__description">
                    <h2 className="movies-card__title">33 слова о дизайне</h2>
                    <h3 className="movies-card__duration">1ч 47м</h3>
                </div>
                <button className="movies-card__like-btn"></button>
            </div>
        </Route>
        <Route path="/saved-movies">
            <div className="movies-card">
                <img className="movies-card__image" src={aboutDesign} alt="Обложка фильма" />
                <div className="movies-card__description">
                    <h2 className="movies-card__title">33 слова о дизайне</h2>
                    <h3 className="movies-card__duration">1ч 47м</h3>
                </div>
                <div className="movies-card__del">
                    <button className="movies-card__delete-btn"></button>
                </div>
            </div>
        </Route>
        </>
    )
            
}

export default MoviesCard;
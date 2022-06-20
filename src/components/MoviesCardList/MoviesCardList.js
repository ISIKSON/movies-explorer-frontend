import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList() {
    return (
        <section className="movies-card-list">
            <div className="cards">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
        </section>
    )
}

export default MoviesCardList;
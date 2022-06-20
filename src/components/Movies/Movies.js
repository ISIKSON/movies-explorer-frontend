import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreCard from "../MoreCard/MoreCard";
import Footer from "../Footer/Footer";
import NavBurgerPopup from "../NavBurgerPopup/NavBurgerPopup";
import './Movies.css';

function Movies({
  onNavBurger,
  isOpen,
  onClose
}) {
    return (
    <div className="movies-page">
        <Header onNavBurger={onNavBurger}/>
        <SearchForm />
        <MoviesCardList />
        <MoreCard />
        <Footer />
        <NavBurgerPopup 
        isOpen={isOpen}
        onClose={onClose}
        />
      </div>
    )
}

export default Movies;
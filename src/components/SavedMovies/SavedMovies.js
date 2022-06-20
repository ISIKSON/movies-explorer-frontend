import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import NavBurgerPopup from "../NavBurgerPopup/NavBurgerPopup";
import './SavedMovies.css';

function savedMovies({
  onNavBurger,
  isOpen,
  onClose
}) {
    return (
    <div className="saved-movies-page">
        <Header onNavBurger={onNavBurger}/>
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
        <Footer />
        <NavBurgerPopup 
        isOpen={isOpen}
        onClose={onClose}
        />
      </div>
    )
}

export default savedMovies;
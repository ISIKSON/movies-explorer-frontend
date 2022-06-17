import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form-content">
                <input className="search-form-content__input" placeholder="Фильм" />
                <button className="search-form-content__button">Найти</button>
            </form>
            <FilterCheckbox />
            <hr className="search-form-line"/>
        </section>
    )
}

export default SearchForm;
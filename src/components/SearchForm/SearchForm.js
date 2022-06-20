import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form-content">
                <input
                id="filmname"
                className="search-form-content__input" 
                name="filmname"
                type="text"
                placeholder="Фильм" 
                required
                />
                <button className="search-form-content__button">Найти</button>
            </form>
            <FilterCheckbox />
            <hr className="search-form-line"/>
        </section>
    )
}

export default SearchForm;
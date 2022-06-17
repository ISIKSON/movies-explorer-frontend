import React from "react";
// import { Route } from "react-router-dom";
// import Navigation from "../Navigation/Navigation";
import './FilterCheckbox.css';
// import '../Movies/Movies.css';


function FilterCheckbox() {
    return (
            <div className="filter-checkbox">
                <input className="filter-checkbox__switch" type="checkbox" />
                <h2 className="filter-checkbox__name">Короткометражки</h2>
            </div>
    )
}

export default FilterCheckbox;
import React from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className="pageNotFound">
            <h1 className="pageNotFound__error-number">404</h1>
            <h2 className="pageNotFound__error-description">Страница не найдена</h2>
            <Link to="/" className="pageNotFound__back">
                Назад
            </Link>
        </div>
    )
}

export default PageNotFound;

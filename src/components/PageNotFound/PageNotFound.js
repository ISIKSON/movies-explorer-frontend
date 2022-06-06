import React from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className="pageNotFound">
            <h1 className="pageNotFound_error-number">404</h1>
            <h2 className="pageNotFound_error-description">Страница не найдена</h2>
            <Link to="/" className="pageNotFound__back">
                Назад
            </Link>
        </div>
    )
}

export default PageNotFound;

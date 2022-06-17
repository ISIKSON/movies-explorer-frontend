import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer-data">
                    <p className="footer-data__year">© 2022</p>
                    <nav className="footer-data__links">
                        <a href="https://practicum.yandex.ru/" className="footer-data__link">Яндекс.Практикум</a>
                        <a href="https://github.com/ISIKSON" className="footer-data__link">Github</a>
                        <a href="https://www.facebook.com/" className="footer-data__link">Facebook</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
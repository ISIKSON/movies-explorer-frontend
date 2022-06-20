import React from "react";
// import { Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProjec from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
    return (
    <div className="page">
      <Header />
      <Promo />
      <NavTab />
      <AboutProjec />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
    )
}

export default Main;
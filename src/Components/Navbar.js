import React from "react";
import { NavLink } from "react-router-dom";
import home from "../logo/home (1).svg";
import about from "../logo/stick-man.svg";
import portfolio from "../logo/portfolio.svg";
import skills from "../logo/skill-development.svg";
import contact from "../logo/email.svg";

const Navbar = () => {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg  navbar-light  ">
        <div className="container-fluid">
          <span className="navbar-brand" >
            G.Aisel
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link " href="#myAnchor">
                  <img className="logo" src={home} />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <img className="logo" src={about} />
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <img className="logo" src={skills} />
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link" >
                <img src={portfolio} className="logo"/>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" >
                <img src={contact} className="logo"/>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

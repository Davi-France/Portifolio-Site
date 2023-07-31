import React, { useState } from "react";
import "./header.css";

const header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Davi França
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="bx bx-home nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user nav__icon"></i> Sobre
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-file nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="bx bx-briefcase nav__icon"></i> Experiencia
              </a>
            </li>
            <li className="nav__item">
              <a href="#portifolio" className="nav__link">
                <i className="bx bx-terminal nav__icon"></i> Portifolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-send nav__icon"></i> Contato
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default header;

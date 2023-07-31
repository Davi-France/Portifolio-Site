import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Davi França</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre Mim
            </a>
          </li>

          <li>
            <a href="#portifolio" className="footer__link">
              Projetos
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contato
            </a>
          </li>
        </ul>
        <div className="footer__social">
          {" "}
          <a
            href="https://www.instagram.com/dav.i/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/davifrança/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Davi-France"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

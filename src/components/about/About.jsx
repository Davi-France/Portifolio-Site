import React from "react";
import "./about.css";
import AboutImg from "../../assets/fotoeu.jpg";
import Info from "../../components/about/Info";
import Cv from "../../assets/curriculo-davi.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Mim</h2>
      <span className="section__subtitle">Minha introdução</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">Desenvolvedor fullstack Junior</p>

          <a download={Cv} href={Cv} className="button button--flex">
            Download CV
            <i className="uil uil-file-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

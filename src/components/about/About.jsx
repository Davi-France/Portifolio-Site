import React from "react";
import "./about.css";
import AboutImg from "../../assets/fotoeu.jpg";
import Info from "../../components/about/Info";
import Cv from "../../assets/Curriculo-fullstack.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Mim</h2>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            Com 20 anos de idade, iniciei minha jornada na tecnologia aos 14
            anos durante o ensino médio técnico na ETEC de Informática.
            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas
            na UNICID, buscando aprimorar minhas habilidades. Atualmente
            entusiasta de Java, Angular, TypeScript, ReactJS e SQL e minha
            paixão por tecnologia me impulsiona a me dedicar cada vez mais a
            estudar e realizar projetos.
          </p>

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

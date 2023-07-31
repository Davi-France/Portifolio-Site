import React from "react";
import { ReactComponent as SendSvg } from "../../assets/send.svg";
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Davi França</h1>
      <h3 className="home__subtitle">Desenvolvedor FullStack</h3>
      <p className="home__description">
        Desejo consolidar minha carreira como Desenvolvedor/Analista. Com
        pró-atividade e facilidade no aprendizado, busco contribuir de forma
        significativa para projetos inovadores e crescer profissionalmente junto
        da empresa.
      </p>
      <a href="#contact" className="button button--flex">
        Fale comigo!
        <SendSvg fill="var(--container-color)" />
      </a>
    </div>
  );
};

export default Data;

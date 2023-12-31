import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-briefcase-alt"></i>
        <h3 className="about__title">Experiência</h3>
        <span className="about__title">1 ano trabalho</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support"></i>
        <h3 className="about__title">Suporte</h3>
        <span className="about__title">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;

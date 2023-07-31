import React, { useState } from "react";
import "./portifolio.css";
import Menu from "./Menu";

const Portifolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="portifolio">
      <h2 className="section__title">Projetos</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Todos
        </span>
        <span className="work__item" onClick={() => filterItem("ReactJS")}>
          ReactJS
        </span>
        <span className="work__item" onClick={() => filterItem("Java")}>
          Java
        </span>
        <span className="work__item" onClick={() => filterItem("Angular")}>
          Angular
        </span>
      </div>

      <div className="work__container grid">
        {items.map((item) => {
          const { id, image, title, category, link } = item;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link}>
                <i className="uil uil-link work__button"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;

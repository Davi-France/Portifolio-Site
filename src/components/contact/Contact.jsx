import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title"> Contato</h2>

      <div className="contact__container container grid">
        <div className="contact__info">
          <a
            href="mailto::davilfranca06@gmail.com.com"
            className="contact__button"
          >
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                davilfranca06@gmail.com
              </span>
            </div>
          </a>

          <a href="https://wa.me/5511950835794" className="contact__button">
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">(11) 95083-5794</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import PORTFOLIO1 from "../../assets/pr1.png";
import PORTFOLIO2 from "../../assets/pr2.png";
import PORTFOLIO3 from "../../assets/pr3.png";


import "./Portfolio.css";



function Portfolio() {

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={PORTFOLIO1} alt="" />
          </div>
          <h3>A simple Chat App</h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com/rohitdas13595/ChatApp.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://rohit59-chat-app.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={PORTFOLIO2} alt="" />
          </div>
          <h3>Old portfolio</h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com/rohitdas13595/MyPortfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://portfolio-rohit595.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={PORTFOLIO3} alt="" />
          </div>
          <h3>Object Detection using OpenCV</h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com/rohitdas13595/objdetdep.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://objdetapp.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;

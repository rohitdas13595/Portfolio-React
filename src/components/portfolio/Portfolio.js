import React from "react";
import PORTFOLIO1 from "../../assets/portfolio1.jpg";
import PORTFOLIO2 from "../../assets/portfolio2.jpg";
import PORTFOLIO3 from "../../assets/portfolio3.jpg";
import PORTFOLIO4 from "../../assets/portfolio4.jpg";
import PORTFOLIO5 from "../../assets/portfolio5.png";
import PORTFOLIO6 from "../../assets/portfolio6.jpg";

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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item__cta">
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://github.com"
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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item__cta">
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://github.com"
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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item__cta">
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://github.com"
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

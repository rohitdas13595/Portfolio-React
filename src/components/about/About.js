import React from "react";
import "./About.css";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";

import ME from "../../assets/me-ab.png";

function About() {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Customers</h5>
              <small>10+ Satisfied</small>
            </article>
            <article className="about__card">
              <VscProject className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            I'm an avid Fullstack developer with experience in MERN stack,
            Django, Flask and Figma. I can design design data intensive, robust
            and responsive websites and apps.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

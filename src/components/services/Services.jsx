import React from 'react'
import './Services.css'

import { BsCheckLg } from 'react-icons/bs';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
            <h2>$2.5/hr</h2>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Design for web, tablates and mobile apps.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Design on FIgma or Adobe XD.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Interactive work flow.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Micro-Interactions</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Animations</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Neumorphic Design</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Front End Developer</h3>
            <h2>$2.5/hr</h2>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Portfolios, personal websites.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Modern responsive design.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Animations and transitions</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Single page/ Multipage.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Good for apps with less data.</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>FullStack Developer</h3>
            <h2>$3.0/hr</h2>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Data intensive apps.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Integration of ML/AI features.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Responsive Frontend and secure Backend.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>API integration.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Database management.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon' />
              <p>Server Management.</p>
            </li>
            
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services
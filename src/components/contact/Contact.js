import React, { useRef } from "react";
import { FiMail, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

import "./Contact.css";
const contactData = [
  {
    id: 1,
    header: "Email",

    ref: `mailto:${process.env.REACT_APP_MY_EMAIL}?cc=${process.env.REACT_APP_MY_GMAIL}&subject=Contacting for service&body= Hi there, I'm contacting you for your service.`,
    text: "Send Mail",
  },
  {
    id: 2,
    header: "Instagram",
    ref: `${process.env.REACT_APP_INSTAGRAM}`,
    text: "Send Message!",
  },
  {
    id: 3,
    header: "Whatsapp",
    ref: `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_MY_NUM}&text=Hi there, I'm contacting you for your service.`,
    text: "Send Message",
  },
];

function Contact() {
  //console.log(process.env.REACT_APP_INSTAGRAM);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        "#myform"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option__icon" />
            <h4>{contactData[0].header}</h4>
            <a className="btn btn-primary" href={contactData[0].ref}>
              {contactData[0].text}
            </a>
          </article>
          <article className="contact__option">
            <FiInstagram className="contact__option__icon" />
            <h4>{contactData[1].header}</h4>
            <a
              className="btn btn-primary"
              href={contactData[1].ref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactData[1].text}
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option__icon" />
            <h4>{contactData[2].header}</h4>
            <a
              className="btn btn-primary"
              href={contactData[2].ref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactData[2].text}
            </a>
          </article>
        </div>
        <form ref={form} id="myform" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder=" Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      {/* script for Email js */}
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <script type="text/javascript">
        {(function () {
          emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
        })()}
      </script>
      {/* script for Email js */}
    </section>
  );
}

export default Contact;

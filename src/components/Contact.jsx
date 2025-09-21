import React from "react";
// Contact.jsx
import "../styles/contact.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h2>Contato</h2>

      <p>
        <FaEnvelope />
        <a href="mailto:gilwanealwes@gmail.com">
          gilwanealwes@gmail.com
        </a>
      </p>

      <p>
        <FaLinkedin />
        <a
          href="https://www.linkedin.com/in/gilvane-alves-dias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/gilvane-alves-dias
        </a>
      </p>

      <p>
        <FaGithub />
        <a
          href="https://github.com/GilvaneAlves"
          target="_blank"
          rel="noreferrer"
        >
          github.com/GilvaneAlves
        </a>
      </p>
    </section>
  );
}

export default Contact;

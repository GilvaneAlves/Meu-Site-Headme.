import React from "react";
import "../styles/about.css";
import profilePic from "../assets/Gil.jpeg"; // coloque sua foto em src/assets/

function About() {
  return (
    <section className="about-split">
      <div className="about-split-container">
        <div className="about-split-image">
          <img src={profilePic} alt="Foto de Perfil" />
        </div>
        <div className="about-split-text">
          <h2>Sobre Mim</h2>
          <p>
            Sou Desenvolvedor Front-end com experiência prática em <b>HTML, CSS, JavaScript, React e Firebase</b>. 
            Atuo na criação de interfaces <b>responsivas e funcionais</b>, sempre buscando oferecer a <b>melhor experiência do usuário</b> 
            com foco em <b>alta performance</b>. Tenho disciplina e organização, competências desenvolvidas ao longo da minha trajetória 
            profissional nas áreas de <b>logística e telecomunicações</b>.
          </p>
          <p>
            Possuo conhecimento no desenvolvimento de <b>Progressive Web Apps (PWA)</b> e sistemas interativos, além de familiaridade 
            com ferramentas como <b>Tailwind CSS, ES6+ e Figma</b> para prototipação e estilização. Priorizo escrever <b>código limpo 
            e de fácil manutenção</b>, garantindo qualidade e eficiência em cada projeto.
          </p>
          <p>
            Minha experiência em <b>liderança e gestão de equipes</b> complementa minha atuação técnica, permitindo o alinhamento entre 
            desenvolvimento e processos organizacionais. Estou em constante atualização, acompanhando as tendências do desenvolvimento 
            front-end para entregar <b>soluções inovadoras e eficazes</b>.
          </p>

          <a href="/cv.pdf" download className="btn-cv">
            📄 Baixar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

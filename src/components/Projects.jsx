import React from "react";
// Projects.jsx
import "../styles/projects.css";

import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "BarberStyleSite",
      description: "Site de barbearia em HTML, CSS e JavaScript.",
      url: "https://github.com/GilvaneAlves/BarberStyleSite",
      tech: ["HTML"],
    },
    {
      name: "primeiro-projeto-react",
      description: "Meu primeiro projeto usando React.",
      url: "https://github.com/GilvaneAlves/primeiro-projeto-react",
      tech: ["React", "CSS", "JS"],
    },
    {
      name: "Primeiro-desafio-CSS",
      description: "Desafio inicial de HTML e CSS.",
      url: "https://github.com/GilvaneAlves/Primeiro-desafio-CSS",
      tech: ["HTML", "CSS"],
    },
    {
      name: "Segundo-Projeto-com-CSS",
      description: "Projeto avançado de CSS.",
      url: "https://github.com/GilvaneAlves/Segundo-Projeto-com-CSS",
      tech: ["CSS"],
    },
    {
      name: "NumSort",
      description: "Sorteador de números.",
      url: "https://github.com/GilvaneAlves/NumSort",
      tech: ["CSS", "JS"],
    },
    {
      name: "Dev Movies",
      description: "Permite explorar informações sobre filmes e séries.",
      url: "https://github.com/GilvaneAlves/dev-movies",
      tech: ["React", "CSS", "JS"],
    },
    {
      name: "JokenPo",
      description: "Jogo clássico de Pedra, Papel e Tesoura.",
      url: "https://github.com/GilvaneAlves/JokenPoJS",
      tech: ["HTML", "CSS", "JS"],
    },
    {
      name: "appdelivery",
      description: "Plataforma de delivery com apps para clientes e entregadores.",
      url: "https://github.com/GilvaneAlves/appdelivery",
      tech: ["React", "CSS", "JS"],
    },
    {
      name: "GilvaneAlves",
      description: "Portfólio pessoal e README.",
      url: "https://github.com/GilvaneAlves/GilvaneAlves",
      tech: ["Markdown", "HTML", "CSS"],
    },
    {
      name: "Criacao-Magica-IA-N8N",
      description: "Integração basica de CSS com N8N para criação de objetos.",
      url: "https://github.com/GilvaneAlves/Criacao-Magica-IA-N8N",
      tech: ["N8N", "CSS"],
    },
    
  ];

  const renderTechIcon = (tech) => {
    switch (tech) {
      case "React":
        return <FaReact color="#61dafb" />;
      case "HTML":
        return <FaHtml5 color="#e34c26" />;
      case "CSS":
        return <FaCss3Alt color="#1572b6" />;
      case "JS":
        return <FaJs color="#f7df1e" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icons">
              {project.tech.map((t, i) => (
                <span key={i}>{renderTechIcon(t)}</span>
              ))}
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

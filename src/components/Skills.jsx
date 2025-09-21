import React from "react";
// Skills.jsx
import "../styles/skills.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572b6" /> },
    { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
    { name: "React", icon: <FaReact color="#61dafb" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  ];

  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

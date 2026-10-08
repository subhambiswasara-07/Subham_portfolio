import React from "react";
import "./expert.css";
import SectionHeading from "./SectionHeading";
import stand from '../assets/standing.png'

const skills = [
  {
    number: "01",
    title: "Frontend",
    description: "React · JavaScript · HTML · CSS",
  },
  {
    number: "02",
    title: "UI / UX",
    description: "Responsive Design · UX · Figma",
  },
  {
    number: "03",
    title: "Animation",
    description: "GSAP · ScrollTrigger · Framer Motion",
  },
  {
    number: "04",
    title: "Backend",
    description: "Node.js · Express · REST APIs",
  },
  {
    number: "05",
    title: "Database",
    description: "MongoDB · Mongoose",
  },
  {
    number: "06",
    title: "Tools",
    description: "Git · GitHub · Postman · VS Code",
  },
];

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <span className="skill-number">{skill.number}</span>

      <div className="skill-info">
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
      </div>

      <span className="skill-arrow">↗</span>
    </div>
  );
}

function Expert() {
  return (
    <section className="expertise-section">
      <SectionHeading>My Expertise</SectionHeading>

      <div className="expertise-grid">
        <div className="skills-column left-column">
          {skills.slice(0, 3).map((skill) => (
            <SkillCard key={skill.number} skill={skill} />
          ))}
        </div>

        <div className="character-container">
          <div className="character-glow"></div>

          <img
            src={stand}
            alt="Character"
            className="character-image"
          />
        </div>

        <div className="skills-column right-column">
          {skills.slice(3, 6).map((skill) => (
            <SkillCard key={skill.number} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expert

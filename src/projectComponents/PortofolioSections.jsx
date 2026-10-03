import React from "react";
import "./portofoliosection.css";
import { Link } from "react-router-dom";

// SVG Icon Helpers for Section 3 Cards
const LightbulbIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e50914"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const PaletteIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e50914"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="#e50914" />
    <circle cx="17.5" cy="10.5" r=".5" fill="#e50914" />
    <circle cx="8.5" cy="7.5" r=".5" fill="#e50914" />
    <circle cx="6.5" cy="12.5" r=".5" fill="#e50914" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.71 1.7-1.63 0-.43-.17-.83-.44-1.12-.27-.29-.44-.7-.44-1.12 0-.91.73-1.63 1.64-1.63H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e50914"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e50914"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Analyze the problem, research and gather requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Plan the structure, create wireframes and build the UI.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Write clean, maintainable code and integrate backend & frontend.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Test, fix bugs, improve performance and make it production ready.",
  },
];

const timelineData = [
  {
    year: "2024",
    title: "First Projects",
    description:
      "Explored web development, learned the basics and built small projects.",
  },
  {
    year: "2025",
    title: "Full-Stack Development",
    description:
      "Mastered MERN stack, worked on real-world projects, solving skills.",
  },
  {
    year: "2026",
    title: "Building Bigger Experiences",
    description:
      "Creating polished applications, learning new technologies and focusing on real-world impact.",
  },
];

const learningsData = [
  {
    icon: <LightbulbIcon />,
    title: "Problem Solving",
    description: "Finding creative solutions to real-world challenges.",
  },
  {
    icon: <PaletteIcon />,
    title: "Design Thinking",
    description: "Building user-friendly and meaningful experiences.",
  },
  {
    icon: <UsersIcon />,
    title: "Working With Real Users",
    description: "Understanding needs, getting feedback, improving.",
  },
  {
    icon: <ChartIcon />,
    title: "Learning From Mistakes",
    description: "Every bug, every error made me a better developer.",
  },
];

const PortfolioSections = () => {
  return (
    <div className="portfolio-wrapper">
      {/* SECTION 1: MY PROCESS */}
      <section className="section-block">
        <div className="process-header">
          <h2 className="section-title">
            My <span className="highlight">Process</span>
          </h2>
          <p className="process-subtitle">
            I follow a simple but effective process to turn ideas into real
            products.
          </p>
        </div>

        <div className="process-cards">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="process-card">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-description">{step.description}</p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <span className="process-arrow">&#8594;</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* SECTION 2: FROM LEARNING TO BUILDING */}
      <section className="section-block">
        <h2 className="section-title timeline-heading">
          From Learning to <span className="highlight">Building</span>
        </h2>

        <div className="timeline-grid">
          {timelineData.map((item) => (
            <div key={item.year} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: WHAT I'VE LEARNED (CARDS ONLY) */}
      <section className="section-block">
        <h2 className="section-title learnings-heading">
          Every Project Taught Me{" "}
          <span className="highlight">Something New.</span>
        </h2>

        <div className="learnings-grid">
          {learningsData.map((item, index) => (
            <div key={index} className="learning-card">
              <div className="learning-icon-circle">{item.icon}</div>
              <div className="learning-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="section-block cta-section">
        <h2 className="cta-title">
          I'm always building <br />
          <span className="highlight">something new.</span>
        </h2>

        <Link
          to="/"
          onClick={() => {

            setTimeout(() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 500);
          }}
        >
          <button className="cta-button">
            Get in Touch <span className="cta-arrow">&#8594;</span>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default PortfolioSections;

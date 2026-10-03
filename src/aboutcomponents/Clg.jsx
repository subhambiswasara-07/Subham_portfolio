import React from 'react'
import "./clg.css";

const Clg = () => {
  return (
    <div className="clg">
      <div className="about-clg">
        <h1>
          My College <span>journey</span>
        </h1>
        <p>
          I completed my Bachelor of Computer Applications (BCA) from Kalam
          Institute of Technology (KIT), affiliated with Berhampur University.
          My time at KIT gave me a strong foundation in computer science,
          programming, and software development while helping me develop my
          problem-solving and technical skills. Beyond academics, my college
          experience encouraged me to explore web development, work on projects,
          learn new technologies, and build the confidence to pursue my career
          as a full-stack developer.
        </p>
      </div>
      {/* <div className="line"></div> */}
      <div className="clg-icons">
        <div className="line"></div>
        <ul>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> BCA Graduate
          </li>
          <li>
            <i className="fa-solid fa-computer"></i> Coding & Developement
          </li>
          <li>
            <i className="fa-solid fa-diagram-project"></i> Projects &
            Experiments{" "}
          </li>
          <li>
            <i className="fa-solid fa-handshake"></i> New connections
          </li>
          <li>
            <i className="fa-solid fa-calendar-days"></i> Collage Events
          </li>
          <li>
            <i className="fa-solid fa-face-grin-stars"></i> Memories & Moments
          </li>
          <li>
            <i className="fa-solid fa-user-tie"></i> Personal Growth
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Clg

import React from 'react'
import './aboutme.css'
import about from '../assets/education.png'

const Aboutme = () => {
  return (
    <div className="about-me">
      <div className="about-text">
        <h1>
          About <span>myself</span>
        </h1>
        <p>
          Hi, I’m Subham Biswasara, a BCA graduate and full-stack developer who
          enjoys turning ideas into modern, functional web experiences. I’m
          particularly passionate about front-end development, where I love
          creating clean, responsive, and visually engaging user interfaces. I
          enjoy exploring new technologies, solving problems, and continuously
          improving my skills while building websites and applications that are
          both useful and enjoyable to use.
        </p>
        <ul>
          <li>
            <i className="fa-solid fa-code"></i> MERN Stack Developer
          </li>
          <li>
            <i className="fa-solid fa-code"></i> Always Learning{" "}
          </li>
          <li>
            <i className="fa-solid fa-code"></i> Problem Solver
          </li>
          <li>
            <i className="fa-solid fa-code"></i> Time Management{" "}
          </li>
          <li>
            <i className="fa-solid fa-code"></i> EXcellent Communication Skills{" "}
          </li>
          <li>
            <i className="fa-solid fa-code"></i> Good Team Coordination
          </li>
          <li>
            <i className="fa-solid fa-code"></i> Open To New Opportunities
          </li>
        </ul>
      </div>
      <div className="about-img">
        <img src={about} alt="" />
      </div>
    </div>
  );
}

export default Aboutme

import React from 'react'
import "./education.css";
import education from '../assets/about.png'
import pdf from '../assets/resume.pdf'
import { motion } from 'motion/react';


const Education = () => {
  return (
    <div className="education">
      <div className="education-pic">
        <motion.img
          // animate={{
          //   rotateX: [0, 15, 0, -15, 0],
          //   rotateY: [0, 10, 0, -10, 0],
          // }}
          // transition={{
          //   rotateX: {
          //     duration: 4,
          //     repeat: Infinity,
          //     ease: "easeInOut",
          //   },
          //   rotateY: {
          //     duration: 4,
          //     repeat: Infinity,
          //     ease: "easeInOut",
          //   },
          // }}
          src={education}
          alt=""
        />
        <a href={pdf} download="subham_cv.pdf">
          Download &nbsp;Cv <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="academic">
        <h2>
          My Academic <br />
          <span>Journey</span>
        </h2>
        <p>
          A strong foundation in computer science and continuos learning has
          shaped my skills,mindset and passion for building grate and digital
          solutions
        </p>
        <div className="study-cards">
          <div className="study">
            <div className="single">
              <div className="s-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="s-text">
                <p>Bachelor in computer application (BCA)</p>{" "}
                <span>(2022 - 2025)</span>
              </div>
            </div>

            <div className="cgpa">CGPA - 8.5</div>
          </div>
          <div className="study">
            <div className="single">
              <div className="s-icon">
                <i className="fa-solid fa-book-open-reader"></i>{" "}
              </div>
              <div className="s-text">
                <p>Higher secondory ( 12th )</p>
                <span>(2020 - 2022)</span>
              </div>
            </div>

            <div className="cgpa">Percentage - 60%</div>
          </div>
          <div className="study">
            <div className="single">
              <div className="s-icon">
                <i className="fa-solid fa-school"></i>{" "}
              </div>
              <div className="s-text">
                <p>Secondary ( 10th )</p>
                <span>(2019 - 2020)</span>
              </div>
            </div>

            <div className="cgpa">Percentage - 77%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education


import React, { useEffect, useRef } from "react";
import "./education.css";
import education from "../assets/about.png";
import pdf from "../assets/resume.pdf";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%", 
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          ".education-pic img",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        )
          .fromTo(
            ".education-pic a",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.4",
          )
          .fromTo(
            ".academic h2, .academic p",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.3",
          )
          .fromTo(
            ".study-cards .study",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.3",
          );
      }, sectionRef);

      ScrollTrigger.refresh();

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={sectionRef} className="education">
      <div className="education-pic">
        <img src={education} alt="Education" />
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
          A strong foundation in computer science and continuous learning has
          shaped my skills, mindset and passion for building great digital
          solutions.
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
                <p>Higher secondary ( 12th )</p>
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
};

export default Education;
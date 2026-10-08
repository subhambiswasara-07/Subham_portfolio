

import React, { useEffect, useRef } from "react";
import "./aboutme.css";
import about from "../assets/education.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            gsap.set(
              [
                ".about-text h1",
                ".about-text p",
                ".about-text li",
                ".about-img img",
              ],
              { clearProps: "all" },
            );
          },
        });

        tl.fromTo(
          ".about-text h1, .about-text p",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            delay: 1,
            ease: "power2.out",
          },
        )
          .fromTo(
            ".about-text li",
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2",
          )
          .fromTo(
            ".about-img img",
            { opacity: 0, scale: 0.9, x: 30 },
            { opacity: 1, scale: 1, x: 0, duration: 0.7, ease: "power2.out" },
            "-=0.5",
          );
      }, sectionRef);

      ScrollTrigger.refresh();

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={sectionRef} className="about-me">
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
            <i className="fa-solid fa-code"></i> Excellent Communication
            Skills{" "}
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
        <img src={about} alt="Subham Biswasara" />
      </div>
    </div>
  );
};

export default Aboutme;
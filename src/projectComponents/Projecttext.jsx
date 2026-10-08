
import React, { useRef } from "react";
import "./projecttext.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { delay } from "motion";

const Projecttext = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".project-one h1",

        { opacity: 0, y: 40 },
        { delay: 1.2, opacity: 1, y: 0, duration: 0.8 },
      )
        .fromTo(
          ".project-one p",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4", 
        )
        .fromTo(
          ".project-one a",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );

  return (
    <div className="project-text" ref={containerRef}>
      <div className="project-one">
        <h1>
          Selected &nbsp;<span>Projects</span>
        </h1>
        <p>
          A collection of websites I designed and developed showcasing my
          knowledge on coding, skills and creativity. Click on the images to
          visit the project site.
        </p>
        <a>
          scroll down to see more <i className="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Projecttext;

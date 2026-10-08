

import React, { useEffect, useRef } from "react";
import "./clg.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Clg = () => {
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
                ".about-clg h1",
                ".about-clg p",
                ".clg-icons .line",
                ".clg-icons li",
              ],
              { clearProps: "all" },
            );
          },
        });

        tl.fromTo(
          ".about-clg h1, .about-clg p",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        )
          .fromTo(
            ".clg-icons .line",
            { opacity: 0, scaleY: 0 },
            { opacity: 1, scaleY: 1, duration: 0.5, ease: "power2.out" },
            "-=0.2",
          )
          .fromTo(
            ".clg-icons li",
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.1,
              duration: 0.4,
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
    <div ref={sectionRef} className="clg">
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

      <div className="clg-icons">
        <div className="line"></div>
        <ul>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> BCA Graduate
          </li>
          <li>
            <i className="fa-solid fa-computer"></i> Coding & Development
          </li>
          <li>
            <i className="fa-solid fa-diagram-project"></i> Projects &
            Experiments
          </li>
          <li>
            <i className="fa-solid fa-handshake"></i> New connections
          </li>
          <li>
            <i className="fa-solid fa-calendar-days"></i> College Events
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
};

export default Clg;
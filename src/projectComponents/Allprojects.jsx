


import React, { useRef } from "react";
import "./projecttext.css";

import eventrax from "../assets/eventrax.png";
import carage from "../assets/carage.png";
import hotel from "../assets/hotelhub.png";
import cdn from "../assets/cdnjs.png";
import kfc from "../assets/kfc.png";
import swiggy from "../assets/swiggy.png";
import rapido from "../assets/rapido.png";
import quick from "../assets/quickride.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    name: "EventraX",
    img: eventrax,
    url: "https://eventrax.onrender.com/",
  },
  {
    id: 2,
    name: "Carage",
    img: carage,
    url: "https://carage.onrender.com/",
  },
  {
    id: 3,
    name: "Hotel Hub",
    img: hotel,
    url: "https://hotelhub-ukw1.onrender.com/",
  },
  {
    id: 4,
    name: "CDNJS",
    img: cdn,
    url: "https://cdn-js-clone.onrender.com",
  },
  {
    id: 5,
    name: "KFC Clone",
    img: kfc,
    url: "https://chickenary-kfc-clone.onrender.com",
  },
  {
    id: 6,
    name: "Swiggy Clone",
    img: swiggy,
    url: "https://foodly-swiggy-ui-clone.onrender.com",
  },
  {
    id: 7,
    name: "Rapido Clone",
    img: rapido,
    url: "https://rapido-clone-gsvd.onrender.com",
  },
  {
    id: 8,
    name: "Quick Ride",
    img: quick,
    url: "https://quick-ride-clone.onrender.com",
  },
];

const Allprojects = () => {
  const projectsRef = useRef([]);

  useGSAP(() => {
    const projects = projectsRef.current.filter(Boolean);
    if (!projects.length) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.set(projects, { height: "150px" });

      for (let i = 0; i < projects.length; i += 2) {
        const pair = projects.slice(i, i + 2);
        gsap.to(pair, {
          height: "60vh",
          ease: "none",
          scrollTrigger: {
            trigger: pair[0],
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
            markers: false,
          },
        });
      }
    });

  
    mm.add("(max-width: 768px)", () => {
      gsap.set(projects, { clearProps: "height", opacity: 0, y: 50 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".project-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .to(projects, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 1.5, 
          stagger: 0.3,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(projects, { clearProps: "transform,opacity" });
          },
        });
    });

    return () => mm.revert();
  });

  return (
    <div className="all-pro">
      <div className="project-container">
        {projectsData.map((project, index) => {
          const sideClass =
            project.id % 2 === 0 ? "project-right" : "project-left";

          return (
            <div
              key={project.id}
              className={sideClass}
              ref={(el) => {
                projectsRef.current[index] = el;
              }}
            >
              <img src={project.img} alt={project.name} />

              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="overlay">
                  <button className="over-btn">Visit</button>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allprojects;

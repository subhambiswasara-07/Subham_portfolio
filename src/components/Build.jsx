import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import "./build.css";
import Projectcard from "./Projectcard";

gsap.registerPlugin(ScrollTrigger);

const Build = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".growing-box", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="second-section">
      <SectionHeading>What do I build</SectionHeading>
      <div className="growing-box">
        <Projectcard />
      </div>
    </section>
  );
};

export default Build;
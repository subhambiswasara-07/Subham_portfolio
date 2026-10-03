import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import './build.css'
import Projectcard from "./Projectcard";

gsap.registerPlugin(ScrollTrigger);

const Build = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to(boxRef.current, {
  //       width: "100vw",
  //       height: "100vh",

  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "+=1500",
  //         scrub: true,
  //         pin: true,
  //       },
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section ref={sectionRef} className="second-section">
      <SectionHeading>What do i built</SectionHeading>

      {/* Growing element */}
      <div ref={boxRef} className="growing-box">

<Projectcard/>        

      </div>
    </section>
  );
};

export default Build;

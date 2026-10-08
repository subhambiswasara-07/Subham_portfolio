import React, { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const StairTransition = ({ children }) => {
  const location = useLocation();
  const stairContainerRef = useRef(null);
  const contentRef = useRef(null);

  const [displayChildren, setDisplayChildren] = useState(children);

  useLayoutEffect(() => {
    const stairs = stairContainerRef.current.querySelectorAll(".stair-strip");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(stairs, { yPercent: -100 });
      gsap.set(contentRef.current, { opacity: 0 });

      tl.to(stairs, {
        yPercent: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.inOut",
      })
        .add(() => {
          setDisplayChildren(children);
        })
        .to(contentRef.current, {
          opacity: 1,
          duration: 0.1,
        })
        .to([...stairs].reverse(), {
          yPercent: 100,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.inOut",
        });
    });

    return () => ctx.revert();
  }, [location.pathname, children]);

  return (
    <>
      <div
        ref={stairContainerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          pointerEvents: "none",
          zIndex: 9990,
        }}
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="stair-strip"
            style={{
              flex: 1,
              height: "100%",
              background:"white",
              borderRight: "1px solid rgba(0, 0, 0, 0.05)", // subtle edge line
            }}
          />
        ))}
      </div>

      <div ref={contentRef}>{displayChildren}</div>
    </>
  );
};

export default StairTransition;




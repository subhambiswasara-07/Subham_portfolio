import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./loader.css";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const nameRef = useRef(null);
  const percentageRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const name = nameRef.current;
    const percentage = percentageRef.current;
    const progress = progressRef.current;

    const counter = {
      value: 0,
    };

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

   

    gsap.set(name, {
      y: 50,
      opacity: 0,
    });

    gsap.set(percentage, {
      opacity: 0,
    });

    gsap.set(progress, {
      scaleX: 0,
      transformOrigin: "left center",
    });



    tl.to(name, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })



      .to(
        percentage,
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      )

    

      .to(
        counter,
        {
          value: 100,
          duration: 2.5,
          ease: "power2.out",

          onUpdate: () => {
            percentage.textContent = `${Math.round(counter.value)}%`;
          },
        },
        "-=0.1",
      )

      .to(
        progress,
        {
          scaleX: 1,
          duration: 2.5,
          ease: "power2.out",
        },
        "<",
      )


      .to(
        {},
        {
          duration: 0.3,
        },
      )


      .to(loader, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-inner">

        <div className="loader-top">
          <span>PORTFOLIO</span>
        </div>


        <div className="loader-center">
          <h1 ref={nameRef}>SUBHAM</h1>

          <div className="loader-progress">
            <div className="loader-info">
              <span>LOADING</span>

              <span ref={percentageRef}>0%</span>
            </div>

            <div className="progress-track">
              <div ref={progressRef} className="progress-bar" />
            </div>
          </div>
        </div>


        <div className="loader-bottom">
          <span>CREATIVE DEVELOPER</span>

          <span>PLEASE WAIT</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

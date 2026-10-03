import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sectionheading.css";

gsap.registerPlugin(ScrollTrigger);

const SectionHeading = ({ children }) => {
  const underlineRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const textElement = textRef.current;

    if (!underline || !svg || !path || !textElement) return;

    let currentAnimation;

    const scrollTween = gsap.fromTo(
      textElement,
      { scale: 0.8, opacity: 0,y:-50 },
      {
        scale: 1,
        opacity: 1,
        y:1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textElement,
          start: "top 85%",
          end: "top 35%",
          scrub: 1,
        },
      },
    );

    const updateSVG = () => {
      const width = underline.offsetWidth;
      const height = underline.offsetHeight;
      if (!width || !height) return;

      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      const centerY = height / 2;

      gsap.set(path, {
        attr: {
          d: `M 10 ${centerY} Q ${width / 2} ${centerY} ${width - 10} ${centerY}`,
        },
      });
    };

    const handleMouseMove = (e) => {
      const rect = underline.getBoundingClientRect();
      const width = underline.offsetWidth;
      const height = underline.offsetHeight;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerY = height / 2;

      const clampedX = Math.max(10, Math.min(width - 10, x));
      const clampedY = Math.max(0, Math.min(height, y));

      currentAnimation?.kill();
      currentAnimation = gsap.to(path, {
        attr: {
          d: `M 10 ${centerY} Q ${clampedX} ${clampedY} ${width - 10} ${centerY}`,
        },
        duration: 0.5,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      const width = underline.offsetWidth;
      const height = underline.offsetHeight;
      const centerY = height / 2;

      currentAnimation?.kill();
      currentAnimation = gsap.to(path, {
        attr: {
          d: `M 10 ${centerY} Q ${width / 2} ${centerY} ${width - 10} ${centerY}`,
        },
        duration: 1.8,
        ease: "elastic.out(1, 0.2)",
      });
    };

    updateSVG();
    underline.addEventListener("mousemove", handleMouseMove);
    underline.addEventListener("mouseleave", handleMouseLeave);

    const resizeObserver = new ResizeObserver(() => {
      currentAnimation?.kill();
      updateSVG();
    });
    resizeObserver.observe(underline);

    return () => {
      currentAnimation?.kill();
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();

      underline.removeEventListener("mousemove", handleMouseMove);
      underline.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="section-heading">
      <h2 ref={textRef} style={{ transformOrigin: "center center" }}>
        {children}
      </h2>

      <div className="heading-underline" ref={underlineRef}>
        <svg ref={svgRef}>
          <path
            ref={pathRef}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionHeading;

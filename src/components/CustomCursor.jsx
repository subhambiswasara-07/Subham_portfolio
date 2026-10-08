import React, { useEffect, useState } from "react";
import "./custom.css"
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
    className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        borderRadius: "50%",
        pointerEvents: "none", 
        zIndex: 9999,
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`,
        transition: "transform 0.05s ease-out",
      }}
    />
  );
};

export default CustomCursor;

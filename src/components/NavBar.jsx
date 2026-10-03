
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import hero from "../assets/hero.png";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 1390 || currentScrollY > 2250) {
        setIsVisible(true);
      }
      else if (currentScrollY > lastScrollY && !isOpen) {
        setIsVisible(false);
      }
      else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isOpen]);

  return (
    <nav className={`navbar ${isVisible ? "nav-visible" : "nav-hidden"}`}>
      <Link to="/">
        <div className="logo">
          <div className="logo-img">
            <motion.img
              animate={{
                rotateX: [0, 15, 0, -15, 0],
                rotateY: [0, 10, 0, -10, 0],
              }}
              transition={{
                rotateX: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              src={hero}
              alt=""
            />
          </div>
        </div>
      </Link>

      <button
        className={`menu-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <hr />
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <hr />
        <Link to="/project" onClick={() => setIsOpen(false)}>
          Project
        </Link>
        <hr />
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);

            setTimeout(() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 300);
          }}
        >
          Contact
        </Link>
        <hr />
      </div>
    </nav>
  );
};

export default Navbar;



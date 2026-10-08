import React from 'react'
import './hometxt.css'
import { Link } from "react-router-dom";
import hero from "../assets/laptop.png"
import { motion } from 'motion/react';

const HomeTxt = () => {

  return (
    <div className="home-txt">
      <div className="img-div">
        <motion.img
          drag
          dragSnapToOrigin
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

      <div>
        <h1>Full Stack </h1>
        <h1>Developer</h1>
      </div>
      <div className="btns">
        <Link to="/project">
          <div className="btn btn-1">Project</div>
        </Link>
        <Link to="/about">
          <div className="btn btn-2">About</div>
        </Link>
      </div>
    </div>
  );
}

export default HomeTxt

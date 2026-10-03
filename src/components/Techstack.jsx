import React from 'react'
import "./techstack.css"
import SectionHeading from "./SectionHeading";
import Icon from './Icon';
import { SiGsap } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiFramer } from "react-icons/si";

const Techstack = () => {

  const icondetails = [
    {
      id: 1,
      text: "HTML",
      icon: <i className="fa-brands fa-html5"></i>, // FontAwesome icon name
      color: "#E34F26",
      shadow: "0px 4px 50px rgba(227, 79, 38, 0.4)",
    },
    {
      id: 2,
      text: "CSS",
      icon: <i className="fa-brands fa-css3-alt"></i>,
      color: "#1572B6",
      shadow: "0px 4px 50px rgba(21, 114, 182, 0.4)",
    },
    {
      id: 3,
      text: "JS",
      icon: <i className="fa-brands fa-js"></i>, // Ionicons icon name
      color: "#F7DF1E",
      shadow: "0px 4px 50px rgba(247, 223, 30, 0.3)",
    },
    {
      id: 4,
      text: "NodeJS",
      icon: <i className="fa-brands fa-node"></i>,
      color: "#339933",
      shadow: "0px 4px 50px rgba(51, 153, 51, 0.4)",
    },
    {
      id: 5,
      text: "Express JS",
      icon: <i className="fa-brands fa-node-js"></i>,
      color: "#0fc40f",
      shadow: "0px 4px 50px rgba(2, 255, 2, 0.4)",
    },
    {
      id: 6,
      text: "MongoDB",
      icon: <i className="fa-solid fa-leaf"></i>,
      color: "#47A248",
      shadow: "0px 4px 50px rgba(71, 162, 72, 0.4)",
    },
    {
      id: 7,
      text: "GSAP",
      icon: <SiGsap style={{ height: "40px" }} />,
      color: "#88CE02",
      shadow: "0px 4px 50px rgba(136, 206, 2, 0.4)",
    },
    {
      id: 8,
      text: "React JS",
      icon: <i className="fa-brands fa-react"></i>,
      color: "#61DAFB",
      shadow: "0px 4px 50px rgba(97, 218, 251, 0.4)",
    },
    {
      id: 9,
      text: "Tailwind CSS",
      icon: <i className="fa-brands fa-tailwind-css"></i>, // SimpleIcons icon name
      color: "#06B6D4",
      shadow: "0px 4px 50px rgba(6, 182, 212, 0.4)",
    },
    {
      id: 10,
      text: "Framer Motion",
      icon: <SiFramer style={{ height: "40px" }} />,
      color: "#0055FF",
      shadow: "0px 4px 50px rgba(0, 85, 255, 0.4)",
    },
    {
      id: 11,
      text: "Git",
      icon: <i className="fa-brands fa-git-alt"></i>,
      color: "#F05032",
      shadow: "0px 4px 50px rgba(240, 80, 50, 0.4)",
    },
    {
      id: 12,
      text: "GitHub",
      icon: <i className="fa-brands fa-github"></i>,
      color: "#BB99FF",
      shadow: "0px 4px 50px rgba(187, 153, 255, 0.4)",
    },
    {
      id: 13,
      text: "Render",
      icon: <SiRender style={{ height: "40px" }} />,
      color: "#46E3B7",
      shadow: "0px 4px 50px rgba(70, 227, 183, 0.4)",
    },
    {
      id: 14,
      text: "AWS",
      icon: <i className="fa-brands fa-aws"></i>,
      color: "#FF9900",
      shadow: "0px 4px 50px rgba(255, 153, 0, 0.4)",
    },
    {
      id: 15,
      text: "Docker",
      icon: <i className="fa-brands fa-docker"></i>,
      color: "#2496ED",
      shadow: "0px 4px 50px rgba(36, 150, 237, 0.4)",
    },
  ];


  return (
    <div className="tech">
      <div>
        <SectionHeading>My Techstack</SectionHeading>
      </div>

      <div className="techstack">
           {icondetails.map((i) => (
      <Icon key={i.id} i={i} />
          ))}
      </div>
    </div>
  );
}

export default Techstack

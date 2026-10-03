import React, { useState } from "react";
import "./techstack.css";

const Icon = ({ i }) => {
    const [ishover,sethover]=useState(false)
  return (
    <div
      className="icon"
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      style={{
        border: ishover ? `3px solid ${i.color}` : `1px solid ${i.color}`,
        boxShadow: ishover ? i.shadow : "0px 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="i"
        style={{
          color: ishover ? i.color : i.color,
          transition: "all 0.3s ease",
          boxShadow: ishover ? i.shadow : "0px 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        {i.icon}
      </div>

      <div className="i-text">{i.text} </div>
    </div>
  );
};

export default Icon;

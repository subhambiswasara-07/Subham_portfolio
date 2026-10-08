import React, { useState } from "react";
import "./transform.css";
import Techstack from "./Techstack";
import Build from "./Build";
import Expert from "./Expert";
const Transform = () => {
  const [activeTab, setActiveTab] = useState("build");

  return (
    <div className="transform-container">
      <nav
        className="transform-nav "
      >
        <div className="nav-btns">
          <button
            onClick={() => setActiveTab("build")}
            className="nav-btn nav-btn-1"
            style={{
              fontWeight: activeTab === "build" ? "bold" : "normal",
              backgroundColor: activeTab === "build" ? "red" : "transparent",
              borderRadius: activeTab === "build" ? "20px" : "0px",
              transition: "all 0.2s ease",
            }}
          >
            <span>Build</span>
          </button>

          <button
            onClick={() => setActiveTab("expert")}
            className="nav-btn nav-btn-3"
            style={{
              fontWeight: activeTab === "expert" ? "bold" : "normal",
              backgroundColor: activeTab === "expert" ? "red" : "transparent",
              borderRadius: activeTab === "expert" ? "20px" : "0px",
              transition: "all 0.2s ease",
            }}
          >
            <span>Expert</span>
          </button>

          <button
            onClick={() => setActiveTab("techstack")}
            className="nav-btn"
            style={{
              fontWeight: activeTab === "techstack" ? "bold" : "normal",
              backgroundColor:
                activeTab === "techstack" ? "red" : "transparent",
              borderRadius: activeTab === "techstack" ? "20px" : "0px",
              transition: "all 0.2s ease",
            }}
          >
            <span>Techstack</span>
          </button>
        </div>
      </nav>

      <main className="transform-content" key={activeTab}>
        {activeTab === "build" && <Build />}
        {activeTab === "techstack" && <Techstack />}
        {activeTab === "expert" && <Expert />}
      </main>
    </div>
  );
};

export default Transform;

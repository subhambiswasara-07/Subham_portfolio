import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

import Navbar from "./components/NavBar";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import StairTransition from "./components/StairTransition"; 

const App = () => {
  const [loading, setLoading] = useState(
    !sessionStorage.getItem("loaderShown"),
  );

  const handleLoaderComplete = () => {
    sessionStorage.setItem("loaderShown", "true");
    setLoading(false);
  };

  return (
    <div>
      <CustomCursor />

      {loading && <Loader onComplete={handleLoaderComplete} />}

      <Navbar />

      <StairTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </StairTransition>
    </div>
  );
};

export default App;

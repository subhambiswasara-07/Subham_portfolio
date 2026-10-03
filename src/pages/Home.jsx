import React from "react";
import HomeTxt from "../components/HomeTxt";
import Education from "../components/Education";
import Transform from "../components/Transform";
import Contact from "../components/Contact";

// import Build from '../components/Build'
// import Techstack from "../components/Techstack";
// import Expert from '../components/Expert'
const Home = () => {


  return (
    <div className="home">
      <HomeTxt />
      <Education />
      <Transform />
      <Contact />
    </div>
  );
};

export default Home;

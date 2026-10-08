import React from "react";
import HomeTxt from "../components/HomeTxt";
import Education from "../components/Education";
import Transform from "../components/Transform";
import Contact from "../components/Contact";


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

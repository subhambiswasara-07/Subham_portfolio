// // import React from 'react'
// // import { Routes,Route,Link } from 'react-router-dom'
// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Project from './pages/Project';
// // import Navbar from './components/NavBar';
// // const App = () => {
// //   return (
// //     <div>

// //       <Navbar />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/project" element={<Project />} />

// //         <Route path="*" element={<h2>404 - Page Not Found</h2>} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App



import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

import Navbar from "./components/NavBar";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(
    // true
    !sessionStorage.getItem("loaderShown"),
  );

  const handleLoaderComplete = () => {
    sessionStorage.setItem("loaderShown", "true");

    setLoading(false);
  };

  return (
    <div>
   

      {loading && <Loader onComplete={handleLoaderComplete} />}

    

      <Navbar />

   

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/project" element={<Project />} />

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
};

export default App;









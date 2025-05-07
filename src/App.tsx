// import "./App.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Educations from "./components/Education";
// import Blogs from "./components/Blogs";
import ProjectExplain from "./components/ProjectExplain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WExperience from "./components/WExperience";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    // <>
    //   <Header />
    //   <Hero />
    //   <About />
    //   <Skills />
    //   <Educations />
    //   {/* <Blogs /> */}
    //   <Projects />
    //   <Contact />
    //   <Footer />
    // </>
    <Router>
      {/* <div className="bg-gray-50 min-h-screen flex flex-col"> */}
      <Header />
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/portfolio-chamal"
          element={
            <>
              <Hero />
              {/* <About /> */}
              <WExperience />
              <Skills />
              <Educations />
              <Projects />
              <Contact />
            </>
          }
        />
        {/* Project Detail Page */}
        <Route path="/projects/:title" element={<ProjectExplain />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;

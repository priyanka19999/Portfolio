import React from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

// Interactive Modals
import ResumeModal from "./components/modals/ResumeModal";
import VisionDemoModal from "./components/modals/VisionDemoModal";
import MegaBlogDemoModal from "./components/modals/MegaBlogDemoModal";
import SharePlateDemoModal from "./components/modals/SharePlateDemoModal";

export function App() {
  return (
    <div className="relative min-h-screen bg-[#07080e] text-slate-100 selection:bg-white/20 selection:text-white">
      {/* Floating Dock Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col gap-8 md:gap-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Global Interactive Project & Resume Modals */}
      <ResumeModal />
      <VisionDemoModal />
      <MegaBlogDemoModal />
      <SharePlateDemoModal />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

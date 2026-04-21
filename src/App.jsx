import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Timezone from "./sections/Timezone";
import Projects from "./sections/Projects";
import Exp from "./sections/Exp";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Timezone />
      <Projects/>
      <Exp />
      <Contact />
      <Footer />

    </div>
  );
}
 
export default App; 
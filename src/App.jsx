import { useEffect, useRef } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Feedbacks from "./components/Feedbacks";
import Tech from "./components/Tech";
import Marquee from "./components/Marquee";
import StarCanvas from "./components/canvas/Stars";
import LocomotiveScroll from "locomotive-scroll";


function App() {

  return (
    <div className="relative bg-primary" >
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="relative z-100">
          <Home />
        </div>
        <Marquee />
      </div>
      
      <About />
      <Works />
      <Tech />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </div>
  );
}

export default App;

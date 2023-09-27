import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/home_page/navabar/navbar";
import HeroSection from"./components/home_page/Hero-section/hero-section";
import Companies from "./components/home_page/hiring slider/hiringpartners"
import Courses from "./components/home_page/pupular-courses/courses";
import Advantages from "./components/home_page/training-advantages/training-advantages";
import Intro_vid from "./components/home_page/Intro-video/Intro_vid";
import Footer from "./components/home_page/footer/footer";
import Mentors from "./components/home_page/mentors/mentors";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Companies/>
      <Courses/>
      <Advantages/>
      <Intro_vid/>
      <Mentors/>
      <Footer/>
    </div>
  );

}

export default App;

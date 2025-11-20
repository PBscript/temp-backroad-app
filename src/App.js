import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Servicies from "./components/Servicies";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Servicies />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;

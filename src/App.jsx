import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChckoutBenifit from "./components/ChckoutBenifit";
import Section from "./components/Section";
import Multiple from "./components/Multiple";
import Frequently from "./components/Frequently";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ChckoutBenifit />
      <Section />
      <Multiple />
      <Section />
      <Frequently />
      <Footer />
    </div>
  );
};

export default App;

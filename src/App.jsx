import MiddleBar from "./components/MiddleBar";
import TopBar from "./components/TopBar";
import "./components/style.css";
import React from "react";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <TopBar />
      <MiddleBar />
      <Hero />
    </>
  )
}

export default App;

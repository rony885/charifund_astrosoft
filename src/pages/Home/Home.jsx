import React from "react";
import BannerSection from "./BannerSection";
import About from "./About";
import CompletedThings from "./CompletedThings";
import Services from "./Services";
import WorkProcess from "./WorkProcess";
// import Portfolio from "./Portfolio";
import TechnologyUsed from "./TechnologyUsed";
import Pricing from "./Pricing";
import Client from "./Client";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="" id="home">
      <BannerSection />
      <About />
      <CompletedThings />
      <Services />
      <WorkProcess />
      {/* <Portfolio /> */}
      <TechnologyUsed />
      <Pricing />
      <Client />
      <Contact />
    </div>
  );
};

export default Home;

import React from "react";
import BannerSection from "./BannerSection";
import About from "./About";
import CompletedThings from "./CompletedThings";
import Services from "./Services";
import WorkProcess from "./WorkProcess";
// import Portfolio from "./Portfolio";
import TechnologyUsed from "./TechnologyUsed";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Client from "./Client";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <BannerSection />
      <About />
      <CompletedThings />
      <Services />
      <WorkProcess />
      {/* <Portfolio /> */}
      <TechnologyUsed />
      <Pricing />
      <Blog />
      <Client />
      <Contact />
    </>
  );
};

export default Home;

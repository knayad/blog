import React from "react";

import MainLayout from "../../components/MainLayout";
import Hero from "./containers/Hero";
import Articles from "./containers/Articles";
import CTA from "./containers/CTA";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default Home;

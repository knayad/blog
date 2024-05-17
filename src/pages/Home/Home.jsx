import React from "react";

import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
    </MainLayout>
  );
};

export default Home;

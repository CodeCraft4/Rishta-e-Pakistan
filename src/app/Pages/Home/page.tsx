"use client";
import React from "react";
import Header from "./component/Header/page";
import Resizable from "./component/CardSlider/page";
import Responsive from "./component/MemberSlider/page";
import PackageCard from "./component/Package/page";

const Home = () => {

  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        {/* Card Slider */}
        <Resizable />
        {/* Member Slider */}
        <Responsive/>
        {/* Package Card */}
        <PackageCard/>
      </section>
    </div>
  );
};

export default Home;

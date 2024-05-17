import React from "react";
import { FcSearch } from "react-icons/fc";

import { images } from "../../../constants";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-sansita-san-serif text-3x text-center font-bold italic text-primary md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w--[540px]">
          Read and write reviews
        </h1>
        <p className="mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          A noun refers to a person, place, or thing. Here at Noun, we create a
          centralized space to read and write reviews on any type of noun!
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <FcSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 " />
            <input
              className="placeholder:font-bold placeholder:text-[#959EAD] font-semibold italic place rounded-lg pl-12 r-3 w-full py-3 focus:outline-none shadow-2xl shadow-blue-500/20 md:py-4 "
              type="text"
              placeholder="Search for a noun..."
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2  ">
            Search
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-[#959EAD] font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            {" "}
            Popular tags:{" "}
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-yp2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-neon-green bg-opacity-10 px-3 py-1.5 text-neon-green font-semibold italic">
              Person
            </li>
            <li className="rounded-lg bg-neon-green bg-opacity-10 px-3 py-1.5 text-neon-green font-semibold italic">
              Place
            </li>
            <li className="rounded-lg bg-neon-green bg-opacity-10 px-3 py-1.5 text-neon-green font-semibold italic">
              Thing
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2 px-16">
        <img
          className="w-full"
          src={images.SharingKnowledge}
          alt="user writing review"
        />
      </div>
    </section>
  );
};

export default Hero;

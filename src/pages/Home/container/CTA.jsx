import React from "react";

import { images } from "../../../constants";

const CTA = () => {
  return (
    <section className="relative px-5 CTA">
      <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center ">
        <div className="col-span-12 lg:col-span-6">
          <h2 className="font-sansita-san-serif font-bold italic text-3xl text-white pt-10 md:text-4xl md:text-center md:leading-normal lg:text-left ">
            {" "}
            Stay updated!
          </h2>
          <p className="text-white font-sansita-san-serif pt-5">
            Get the latest and greatest reviews straight to your inbox.
          </p>
          <div className="'w-full max-w-[494px] mt-7 space-y mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0 ">
            <input
              type="text"
              className="px-4 py-3 rounded-lg w-full placeholder:text-[rgb(97,104,116)]"
              placeholder="Your email"
            />

            <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap  lg:hover:bg-white hover:bg-white-500  lg:hover:text-primary transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm leading-7 mt-6 text-[rgb(201,206,215)] md:text-center md:text-base lg:text-left">
            <span className="font-bold italic text-[rgb(85,91,101)] md:not-italic md:font-normal ">
              Commitment issues?{" "}
            </span>
            Easily unsubscribe at any time. We're here to make life easier, not
            more complicated. This subscribe button is non-functional anyway.
          </p>
        </div>
        <div className="col-span-12 hidden mt-[80px] md:block md:order-first lg:order-last lg:col-span-6 pr-[30%]">
          <div className="w-3/4 mx-auto relative">
            <div className="w-3/4 h-1/2 bg-neon-green rounded-lg absolute -top-[4%] -right-[28%] opacity-[29%]" />
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-primary rounded-lg absolute bottom-[19%] left-[30%] opacity-[29%]" />
              <div className="w-1/4 h-1/2 bg-neon-red rounded-lg absolute -bottom-[8%] left-[15%] opacity-[29%]" />

              <div className="w-[200%] rounded-xl z-[1] relative bg-white bg-opacity-15 p-3">
                <img
                  src={images.BufferRed}
                  alt="social media"
                  className="w-full object-fill object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-sansita-san-serif font-bold italic text-xl text-white  md:text-2xl lg:text-[28px]">
                    Stay social.
                  </h2>
                  <p className="text-white mt-3 text-sm md:text-lg">
                    Share reviews from Noun to people you care about, because we
                    care about how you spend your coin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

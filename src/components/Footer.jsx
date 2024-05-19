import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

import { images } from "../constants/index";

const Footer = () => {
  return (
    <section className="CTA">
      <br />
      <footer className="container mx-auto grid grid-cols-10 rounded-xl z-[1] relative bg-white bg-opacity-[28%] p-3 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-2 pl-12 lg:col-span-2">
          <h3 className="text-grey font-bold pb-3 md:text-lg "> Pages</h3>
          <ul className="text-grey text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Articles</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 pl-12 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-grey font-bold pb-3 md:text-lg"> Join</h3>
          <ul className="text-grey text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Contribute</a>
            </li>
            <li>
              <a href="/">Referrals</a>
            </li>
            <li>
              <a href="/">Adverts</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 pl-12 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto hidden lg:block lg:1/2 px-16">
          <h3 className="text-grey font-bold pb-3 md:text-lg"> Header</h3>
          <ul className="text-grey text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">1</a>
            </li>
            <li>
              <a href="/">2</a>
            </li>
            <li>
              <a href="/">3</a>
            </li>
            <li>
              <a href="/">4</a>
            </li>
            <li>
              <a href="/">5</a>
            </li>
            <li>
              <a href="/">6</a>
            </li>
          </ul>
        </div>
        <div className="text-grey col-span-10 md:col-span-4 md:order-last">
          <img
            src={images.Logo}
            alt="logo"
            className="invert mx-auto md:mx-0 md:my-0 w-full object-center"
          />
          <p className="text-grey text-center mt-0 md:text-left md:text-base lg:text-center">
            Read, write, and share reviews.
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-grey md:justify-center">
            <li>
              <a href="/">
                <FaSquareXTwitter className="w-6 h-auto" />{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebookSquare className="w-6 h-auto" />{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutubeSquare />{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <FaSquareInstagram className="w-6 h-auto" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <br />
      <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-10 lg:col-span-10">
        <p className=" italic text-white">Copyright 2024</p>
        <div className="text-white p-3 rounded-full">
          <FaRegHeart className="w-7 h-auto" />
        </div>
        <p className="font-bold text-white">Crafted with love.</p>
        <br />
      </div>
    </section>
  );
};

export default Footer;

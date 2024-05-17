import React from "react";
import { MdOutlineVerified } from "react-icons/md";

import { images } from "../constants";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[5px_5px_rgba(0,255,_0,_0.4),_10px_10px_rgba(0,0,255,_0.3),_15px_15px_rgba(255,_0,_0,_0.2),_20px_20px_rgba(0,255,_0,_0.1),_25px_25px_rgba(0,0,255,_0.05)] ${className}`}
    >
      <img
        src={images.LeafRazor}
        alt="Leaf Razor"
        className="w-full object-cover object-center h-auto"
      />
      <div className="p-5">
        <h2 className="font-opensans font-bold text-xl"> Leaf Razor </h2>
        <p className="text-sm"> Still worth it after a few years? </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2">
            User
            <img src={images.Profile} alt="Profile" />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-sm text-[rgb(97,104,116)]">
                KNAYAD
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-neon-green w-fir bg-opacity-20 p-1.5 rounded-full">
                  <MdOutlineVerified className="text-neon-green" />
                </span>
                <span className="italic text-xs text-[#959EAD]">
                  Verified contributor
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold italic text-sm text-[rgb(97,104,116)]">
            Date
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

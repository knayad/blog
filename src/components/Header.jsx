import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { images } from "../constants/index";

const navItemsNames = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About", "Contact"] },
  { name: "Pricing", type: "link" },
  { name: "FAQ", type: "link" },
];
const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-white lg:text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdOutlineArrowDropDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden text-center">
              {item.items.map((page) => (
                <a
                  href="/"
                  className="hover: hover:bg-primary hover:text-white px-4 py-2"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [visible, setVisible] = useState(false);

  const visibleNavHandler = () => {
    setVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-16 lg:w-auto" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {visible ? (
            <AiOutlineClose onClick={visibleNavHandler} className="w-6 h-6" />
          ) : (
            <AiOutlineMenu onClick={visibleNavHandler} className="w-6 h-6" />
          )}
        </div>
        <div
          className={`${
            visible ? "right-0" : "-right-full"
          } transition-all duration-300 bg-primary lg:bg-transparent  mt-[56px] lg:mt-0  z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static  gap-x-9 items-center`}
        >
          <ul className="text-white lg:text-black flex flex-col lg:flex-row gap-x-2 items-center gap-y-5">
            {navItemsNames.map((i) => (
              <NavItem key={i.name} item={i} />
            ))}
          </ul>
          <button class="mt-5 lg:mt-0 border-2 border-white-500 lg:border-blue-500 px-6 py-2 rounded-full text-white lg:text-blue-500 font-semibold lg:hover:bg-blue-500 hover:bg-white-500  lg:hover:text-white transition-all duration-300">
            Sign in
          </button>
          <div>{""}</div>
        </div>
      </header>
    </section>
  );
};

export default Header;

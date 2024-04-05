/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown, FaPhoneAlt } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import LogoImg from '../../assets/images/logo.png';

const dropdownLinks = [
  {
    name: "locations",
    link: "#",
  },
  {
    name: "location1",
    link: "#",
  },
  {
    name: "location2",
    link: "#",
  },
];

export const NavBar = ({ handleOrderPopUp }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="fixed top-0 right-0 bg-white w-full text-black shadow-md z-[9999] ">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between py-[2px]">
              <p>20% off on your next booking</p>
              <div className="flex items-center justify-center gap-3 ">
              <FaPhoneAlt />
              <a href="tel:+254740920640">
                <p>+254740920640</p>
              </a>
            </div>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link to="/" onClick={window.scrollTo(0, 0)}>
                <div className="flex h-10 items-center font-semibold justify-center text-primary">
                  <img src={LogoImg} alt="" className="h-16 block"/>
                  <h1>Finest Explorers</h1>
                </div>
              </Link>
            </div>
            {/* navlinks */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    // activeClsName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/places"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/blogs"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                {/* dropdown */}
                <li className="relative py-4 group cursor-pointer">
                  <div className="dropdown flex items-center">
                    <span>Quick links</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 z-[999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {dropdownLinks.map((data) => {
                        return (
                          <li key={data.name}>
                            <a
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.link}
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              {/* <button onClick={handleOrderPopUp} className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                Book Now
              </button> */}

              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

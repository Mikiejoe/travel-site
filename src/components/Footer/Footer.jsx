/* eslint-disable no-unused-vars */
import React from "react";
import BgImage from "../../assets/images/img9.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/places",
  },
];

export const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <img
        src={BgImage}
        alt=""
        className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
      />
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              Logo
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              veniam debitis, dolores consequatur perspiciatis ipsa magnam saepe
              suscipit recusandae unde blanditiis error earum, tempora sapiente
              placeat accusantium cumque sunt similique.
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+254 7405 107 78</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Nakuru, Kenya</p>
            </div>
            <div className="">
              <div className="flex items-center gap-3 mt-4">
                <a href="#">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:p-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
              <ul>
                {
                FooterLinks.map(({name,link})=>(
                  <li key={name} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700">
                    
                    <Link to={link}
                    onClick={()=>{window.scrollTo(0,0);}}>
                      <span>&#11162;</span>
                      <span> {name} </span>
                    </Link>
                  </li>
                ))
                }
              </ul>
            </div>

          </div>
        </div>
        <div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary">&copy; 2024 All Rigths reserved || made with love by <a href="github.com/Mikiejoe" className="text-white">Joe</a></div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImg from '../../assets/images/logo.png';

const navBarLinks = [
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
const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-500 md:hidden rounded-r-xl shadow-md `}
    >
      <div className="Navbar_card">
        {/* top */}
        <div>
          <div className="flex items-center justify-start gap-4">
            <img src={LogoImg} alt="" className="h-12 bg-gray-200 rounded-full" />
            <div className="text-gray-500">
              <h1 className="">Finest Explorers</h1>
            </div>
          </div>
        </div>
        {/* navlinks */}
        <div className="text-black mt-12">
          <ul className="space-y-4 text-xl">
            {navBarLinks.map(({ name, link }) => (
              <li key={name}>
                <Link
                  to={link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveMenu;

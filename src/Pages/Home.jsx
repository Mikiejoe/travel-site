/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BgImg from "../assets/images/bannerImg.jpeg";
// import BgImg from '../assets/images/page01.jpg'
import Hero from "../components/Hero/Hero";
import { Places } from "../components/places/Places";
import { BannerImg } from "../components/BannerImg/BannerImg";
import BgImage from "../assets/images/img9.jpg";
import { BlogsComp } from "../components/Blogs/BlogsComp";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import PopUp from "../components/PopUp/PopUp";

export const Home = () => {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const handleOrderPopUp = () => {
    setOrderPopUp(!orderPopUp);
  };
  return (
    <>
      <div className="">
        <div className="flex bg-blue-400 relative justify-center">
          <img
            className="w-[90vw] h-[80vh] object-fit mt-[90px] "
            src={BgImg}
            alt=""
          />
          {/* <Hero/> */}
          <button
            onClick={handleOrderPopUp}
            className="bg-gradient-to-r absolute left-32 top-3/4 from-green-800 animate-bounce to-green-500 shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800 transition-all duration-600 text-white px-6 py-3 rounded-full"
          >
            Book Now
          </button>
        </div>
        <Places handleOrderPopUp={handleOrderPopUp} />
        <BannerImg img={BgImage} />
        <BlogsComp />
        <Banner />
        <BannerImg img={BgImage} />
        <Testimonials />
        <PopUp orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp} />
      </div>
    </>
  );
};

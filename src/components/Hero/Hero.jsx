import React, { useState } from "react";


const Hero = () => {
  const [priceValue, setPriceValue] = useState(100);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/20">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up">Our packages</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-2xl md:text-3xl"
            >
              Search your destination
            </p>
          </div>
          <div
          data-aos="fade-up"
          data-aos-delay='600'
          className="space-y-4 bg-white rounded-md p-4 relative">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Malindi"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="date" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="date"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div >
                <label htmlFor="destination" className="opacity-70">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">${priceValue}</p>
                  </div>
                </label>
                <div className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2">
                <input
                  type="range"
                  name="destination"
                  id="destination"
                  min={100}
                  max={1300}
                  value={priceValue}
                  step={10}
                  onChange={(e) => setPriceValue(e.target.value)}
                  className="w-full appearance-none bg-gradient-to-r from-primary to-secondary h-2 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full"
                />
                </div>
              </div>
            </div>
            {/* <button></button> */}
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

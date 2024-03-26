/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick/lib/slider";

import Img1 from "../../assets/images/img6.jpg";
import Img2 from "../../assets/images/img9.jpg";
import Img3 from "../../assets/images/amboseli.jpg";
import Img4 from "../../assets/images/nakuru.jpg";

const TestimonialData = [
  {
    id: 1,
    img: Img1,
    name: "Alex Mwanzo",
    text: "I stumbled upon your travel website while planning my trip to Kenya, and I couldn't be happier with the experience! The website's user-friendly interface made it easy to browse through various destinations and find the perfect itinerary for my vacation. The detailed descriptions and stunning photos provided valuable insights into each destination, helping me make informed decisions. I highly recommend your website to anyone looking for hassle-free travel planning!"
  },
  {
    id: 3,
    img: Img3,
    name: "Joseph Ochieng",
    text: "As a solo traveler, I rely on travel websites to help me navigate through unfamiliar destinations, and yours exceeded my expectations! The comprehensive travel guides and itineraries provided valuable insights into local attractions, activities, and accommodations, making it easy for me to plan my itinerary. The website's responsive design ensured a seamless browsing experience across different devices, allowing me to access important information anytime, anywhere. I'm grateful for the invaluable resources your website offers to travelers like myself!"
  },
  {
    id: 4,
    img: Img4,
    name: "Michael Joseph",
    text: "Booking my safari adventure through your travel website was a breeze! I appreciated the wide selection of safari packages available, catering to different budgets and preferences. The booking process was seamless, and I received instant confirmation of my reservation. The website's informative articles and travel guides also helped me prepare for my trip, ensuring that I had everything I needed for a memorable experience. Thank you for making travel planning so convenient and enjoyable!",
  },
  {
    id: 2,
    img: Img2,
    name: "David Kariuki",
    text:  "I've been using your travel website for years, and it continues to be my go-to resource for travel inspiration and planning. Whether I'm searching for off-the-beaten-path destinations or seeking insider tips on popular attractions, your website always delivers. The user-generated reviews and recommendations provide authentic insights into each destination, helping me make informed decisions and discover hidden gems along the way. Thank you for creating such a valuable resource for travelers like me!",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10009,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Don &apos; t forget to leave a review, Help us improve on your travel with us.
          </p>
        </div>
        <Slider {...settings}>
          {TestimonialData.map(({ id, name, text, img }) => {
            return (
              <div key={id} className="bg-red-5 my-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                  <img
                    src={img}
                    alt=""
                    className="h-16 w-16 rounded-full block mx-auto"
                  />
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 text-sm">{text}</p>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

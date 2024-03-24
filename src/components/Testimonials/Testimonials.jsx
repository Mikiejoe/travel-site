/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick/lib/slider";

import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img4 from "../../assets/images/img4.jpg";

const TestimonialData = [
  {
    id: 1,
    img: Img1,
    name: "John Doe",
    text: "very long description very very long description it is vry long that you cant even see the whole description",
  },
  {
    id: 3,
    img: Img3,
    name: "Jane Doe",
    text: "very long description very very long description it is vry long that you cant even see the whole description",
  },
  {
    id: 4,
    img: Img4,
    name: "Jane Doe",
    text: "very long description very very long description it is vry long that you cant even see the whole description",
  },
  {
    id: 2,
    img: Img2,
    name: "Jane Doe",
    text: "very long description very very long description it is vry long that you cant even see the whole description",
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quidem error eos voluptas!
          </p>
        </div>
        <Slider {...settings}>
          {TestimonialData.map(({ id, name, text, img }) => {
            return (
              <div key={id} className="bg-red-5 my-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shdow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
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

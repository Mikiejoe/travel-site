/* eslint-disable no-unused-vars */
import React from "react";
import { PlacesCard } from "./PlacesCard";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img4 from "../../assets/images/img4.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Title",
    location: "location",
    description: "very long description very very long description it is vry long that you cant even see the whole description",
    price: 10000,
    type: "Type",
  },
  {
    img: Img2,
    title: "Title",
    location: "location",
    description: "very long description very very long description it is vry long that you cant even see the whole description",
    price: 10000,
    type: "Type",
  },
  {
    img: Img3,
    title: "Title",
    location: "location",
    description: "very long description very very long description it is vry long that you cant even see the whole description",
    price: 10000,
    type: "Type",
  },
  {
    img: Img4,
    title: "Title",
    location: "location",
    description: "very long description very very long description it is vry long that you cant even see the whole description",
    price: 10000,
    type: "Type",
  },
];

export const Places = ({handleOrderPopUp}) => {
  return (
    <div className="bg-gray-50 py-10 ">
      <div data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlacesCard
            handleOrderPopUp={handleOrderPopUp}
            key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

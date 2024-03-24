/* eslint-disable no-unused-vars */
import React from "react";
import { PlacesCard } from "./PlacesCard";
import Img1 from "../../assets/images/masaaimara.jpg";
import Img2 from "../../assets/images/mountkenya.jpg";
import Img3 from "../../assets/images/amboseli.jpg";
import Img4 from "../../assets/images/lamuisland.jpg";
import Img5 from "../../assets/images/nairobi.jpg";
import Img6 from "../../assets/images/nakuru.jpg";

const PlacesData = [
  {
    title: "Maasai Mara National Reserve",
    description: "One of Africa's greatest wildlife reserves, famous for the annual wildebeest migration.",
    location: "Narok County, Rift Valley Province",
    type: "Wildlife",
    price: 10000,
    img: Img1
  },
  {
    "title": "Mount Kenya",
    "description": "The second-highest mountain in Africa, offering stunning landscapes and diverse wildlife.",
    "location": "Central Province",
    "type": "Adventure",
    price: 10000,
    img: Img2
  },
  {
    "title": "Amboseli National Park",
    "description": "Known for its large herds of elephants and views of Mount Kilimanjaro.",
    "location": "Kajiado County, Rift Valley Province",
    "type": "Safari",
    price: 10000,
    img: Img3
  },
  {
    "title": "Lamu Island",
    "description": "A UNESCO World Heritage Site with well-preserved Swahili culture and beautiful beaches.",
    "location": "Lamu County, Coast Province",
    "type": "Culture",
    price: 10000,
    img: Img4
  },
  {
    "title": "Nairobi National Park",
    "description": "A unique park located just outside Nairobi's bustling city center, home to a variety of wildlife.",
    "location": "Nairobi County",
    "type": "Urban Wildlife",
    price: 10000,
    img: Img5,
  },
  {
    title: "Lake Nakuru National Park",
    description: "Famous for its large population of flamingos and other bird species.",
    location: "Nakuru County, Rift Valley Province",
    type: "Bird Watching",
    price: 10000,
    img: Img6
  }
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

import React from "react";
import { useLocation } from "react-router";
import { BlogsComp } from "../components/Blogs/BlogsComp";

export const BlogDetails = () => {
  const location = useLocation();
  const { img, description, date, author, title } = location.state;
  return (
    <div className="min-h-[550px] pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={img}
          alt=""
          className="mx-auto h-[300px] w-full object-cover tansition duration-700 hover:scale-110"
        />
      </div>
      <div className="container pb-14">
        <p className="text-slate-600 text-sm py-3">
          Written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold mb-10">{title}</h1>
        <p>{description}</p>
      </div>
      <BlogsComp/>
    </div>
  );
};

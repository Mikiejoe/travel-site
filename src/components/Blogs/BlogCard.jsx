/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";


const BlogCard = ({ img, title, description, date, author }) => {
  return (
    <Link
    to={`/blogs/${title}`}
    onClick={()=>{
        window.scrollTo(0,0)
    }}
    state={{img,description,date,author,title}}
    >
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl rounded-md">
        <div className="overflow-hidden rounded-md">
            <img src={img} alt="" className="mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110" />
        </div>
        <div className="flex justify-between pt-2 text-slate-400 ">
            <p>{date}</p>
            <p className="capitalize">By {author}</p>
        </div>
        <div className="space-y-2 py-4">
            <h1 className="line-clamp-1 font-bold">{title}</h1>
            <p className="line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

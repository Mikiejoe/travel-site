/* eslint-disable no-unused-vars */
import React from 'react'
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img4 from "../../assets/images/img4.jpg";
import BlogCard from './BlogCard';



const BlogsData = [
    {
        id: 1,
        img: Img1,
        title: "title toe",
        description: "Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description",
        author: "Mike Joe",
        date: "March 2024"
    },
    {
        id: 2,
        img: Img2,
        title: "title 2",
        description: "Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description",
        author: "Mike Joe",
        date: "March 2024"
    },
    {
        id: 3,
        img: Img3,
        title: "title 3",
        description: "Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description",
        author: "Mike Joe",
        date: "March 2024"
    },
    {
        id: 4,
        img: Img4,
        title: "title 4",
        description: "Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description Very long description",
        author: "Mike Joe",
        date: "March 2024"
    },
]

export const BlogsComp = () => {
  return (
    <div >
        <div className='container my-8' data-aos="fade-up">
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Our Recent Blogs</h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-center'>
                {
                    BlogsData.map((item,index)=>(
                        <BlogCard key={index} {...item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

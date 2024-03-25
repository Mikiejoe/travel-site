/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { FaLocationArrow } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
export const PlacesCard = ({img,title,location,description,price,type,handleOrderPopUp}) => {
  return (

    <div onClick={handleOrderPopUp} className='rounded-md shadow-lg transition-al duration-500 hover-shadow-xl cursor-pointer'>
        <div className='overflow-hidden '>
            <img src={img} alt="" className='hover:rounded-t-md rounded-t-md mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'/>
        </div>
        <div className='space-y-2 p-3 '>
            <h1 className='line-clamp-1 font-bold text-xl'>{title}</h1>
            <div className="flex items-center gap-2 opacity-70">
                <IoLocationSharp/>
                <span>{location}</span>
            </div>
            <p className='line-clamp-2'>{description}</p>
            <div className='flex items-center justify-between  border-t-2 y-3 !mt-3'>
                <div className="opacity-70">
                    <p>{type}</p>
                </div>
                <button onClick={handleOrderPopUp} className="bg-gradient-to-r mt-2 from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                Book Now
              </button>
            </div>
        </div>
    </div>
  )
}

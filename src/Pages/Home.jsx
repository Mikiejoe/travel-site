/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import BgImg from '../assets/images/img6.jpg'
import Hero from '../components/Hero/Hero'
import { Places } from '../components/places/Places'
import { BannerImg } from '../components/BannerImg/BannerImg'
import BgImage from '../assets/images/img9.jpg'
import { BlogsComp } from '../components/Blogs/BlogsComp'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import PopUp from '../components/PopUp/PopUp'

export const Home = () => {
  const [orderPopUp,setOrderPopUp] = useState(false)
    const handleOrderPopUp = ()=>{
        setOrderPopUp(!orderPopUp)
    }
  return (
    <>
    <div className=''>
      <div className='relative h-[700px] '>
        <img 
        className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1] '
        src={BgImg} 
        alt="" />
        <Hero/>
      </div>
      <Places handleOrderPopUp={handleOrderPopUp}/>
      <BannerImg img={BgImage}/>
      <BlogsComp/>
      <Banner/>
      <BannerImg img={BgImage}/>
      <Testimonials/>
      <PopUp orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
    </div>
    </>
  )
}

/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import BgImg from '../assets/images/bannerImg.jpg'
// import BgImg from '../assets/images/page01.jpg'
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
      <div className='flex bg-blue-400 justify-center'>
        <img 
        className='w-[90vw] h-[80vh] object-fit mt-[90px] '
        src={BgImg} 
        alt="" />
        {/* <Hero/> */}
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

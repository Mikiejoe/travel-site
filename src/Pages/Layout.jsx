import React, { useState } from 'react'
import { NavBar } from '../components/Navbar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import PopUp from '../components/PopUp/PopUp'

export const Layout = () => {
  const [orderPopUp,setOrderPopUp] = useState(false)
    const handleOrderPopUp = ()=>{
        setOrderPopUp(!orderPopUp)
    }
  return (
    <>
    <NavBar handleOrderPopUp={handleOrderPopUp}/>
    <Outlet/>
    <Footer/>
    <PopUp orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
    </>
  )
}

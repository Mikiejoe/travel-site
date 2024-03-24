/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'
import AOS from "aos"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { NoPage } from "./Pages/NoPage";
import { Blogs } from "./Pages/Blogs";
import { PlacesRoute } from "./Pages/PlacesRoute";
import { BlogDetails } from "./Pages/BlogDetails";

function App() {
  useEffect(()=>{
    AOS.init()
  },[]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/places" element={<PlacesRoute />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

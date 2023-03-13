import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/Home/components/About";
import Hero from "../pages/Home/components/Hero";
import Carousel from "../pages/Home/components/Carousel";

const PublicRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Carousel />} />
        </Routes>
    );
};

export default PublicRoutes;
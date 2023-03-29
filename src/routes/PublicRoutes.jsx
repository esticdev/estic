import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Hero from "../pages/Home/components/Hero";
import Carousel from "../pages/Properties/Properties";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import ContactForm from "../pages/ContactForm";
import JoinUsForm from "../pages/JoinUsForm";

const PublicRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Carousel />} />
      <Route path="/properties/details" element={<PropertyDetails />} />
      <Route path="/contact-us" element={<ContactForm />} />
      <Route path="/join-us" element={<JoinUsForm />} />
    </Routes>
  );
};

export default PublicRoutes;

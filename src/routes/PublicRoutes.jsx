import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Carousel from "../pages/Properties/Properties";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import ContactForm from "../pages/ContactForm";

const PublicRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Carousel />} />
      <Route path="/properties/details" element={<PropertyDetails />} />
      <Route path="/contact-us" element={<ContactForm />} />
    </Routes>
  );
};

export default PublicRoutes;

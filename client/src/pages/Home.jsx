import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewSletter";
import Footer from "../components/Footer";
import ReccommendedHotels from "../components/RecommendedHotels";

const Home = () => {
  return (
    <div>
      <Hero />
      <ReccommendedHotels />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default Home;

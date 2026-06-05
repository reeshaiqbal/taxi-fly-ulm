import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PostHero from "../components/PostHero";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import ReviewsSection from "../components/ReviewsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <PostHero />
      <Gallery/>
      <ReviewsSection/>
    </div>
  );
};

export default Home;

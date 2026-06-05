import React from "react";
import { assets } from "../assets/assets";
import { Phone, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <img
        src={assets.background}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Text content slightly to the right and lower */}
      <div className="absolute top-1/3 left-16 flex flex-col text-left text-white z-20">

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Ride,{" "}
          <span className="text-yellow-500 drop-shadow-[0_0_25px_hsl(48,100%,50%/0.4)]">
            Anytime
          </span>
          <br />
          Anywhere.
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
          Fast, reliable, and safe rides across the city. Book in seconds and
          let our professional drivers get you there in comfort.
        </p>

        {/* Buttons with icons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+923048833023"
           className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl flex items-center justify-center">
            Book a Ride <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="tel:+923048833023" className="border border-yellow-400/30 text-yellow-400 hover:bg-yellow-500/10 font-semibold py-3 px-6 rounded-xl flex items-center justify-center">
            <Phone className="mr-2 w-5 h-5" /> Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
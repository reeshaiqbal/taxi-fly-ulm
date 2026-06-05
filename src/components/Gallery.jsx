import React from "react";
import { assets } from "../assets/assets";


const Gallery = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
         <span className="inline-block px-4 py-1.5 rounded-full text-gray-900 text-sm font-bold tracking-wider uppercase mb-6 border bg-amber-300">
                Our Gallery
              </span>
<div className="mb-4">
          <h1 className="text-5xl font-bold mb-10 text-gray-900">
            Meet the <span className="text-yellow-500">Ride</span>
          </h1>
        </div>
        {/* Gallery Grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5'>
      <div><img className="w-full h-48 object-cover rounded-2xl" src={assets.taxifront} alt="" /></div>
                <div><img className="w-full h-48 object-cover rounded-2xl" src={assets.taxiside} alt="" /></div>

                    <div><img className="w-full h-48 object-cover rounded-2xl" src={assets.taxiinner} alt="" /></div>

                    <div><img className="w-full h-48 object-cover rounded-2xl" src={assets.taxiback} alt="" /></div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
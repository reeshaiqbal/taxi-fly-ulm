import React from "react";
import { Car, Clock, Shield, MapPin, Phone, CreditCard } from "lucide-react";

const PostHero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-gray-900 text-sm font-bold tracking-wider uppercase mb-6 border bg-amber-300">
                Our Services
              </span>
        <div className="mb-4">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Ride with <span className="text-yellow-500">Confidence</span>
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 ml-12 mr-12">
          <div className="p-6 border border-black rounded-lg bg-gray-400">
            <div className="p-2 border border-black bg-amber-300 rounded-lg w-fit">
              <Car />
            </div>
            <h1 className="my-3 text-xl font-bold text-gray-900">City Rides</h1>
            <p>
              Comfortable rides across the city with professional drivers who
              know every shortcut.
            </p>
          </div>
          <div className="p-6 border border-black rounded-lg bg-gray-400">
            {" "}
            <div className="p-2 border border-black bg-amber-300 rounded-lg w-fit">
              <Clock />
            </div>
            <h1 className="my-3 text-xl font-bold text-gray-900">
              Airport Transfers
            </h1>
            <p>
              On-time pickups and drop-offs. We track your flight so we're
              always ready.
            </p>
          </div>
          <div className="p-6 border border-black rounded-lg bg-gray-400">
            {" "}
            <div className="p-2 border border-black bg-amber-300 rounded-lg w-fit">
              <MapPin />
            </div>
            <h1 className="my-3 text-xl font-bold text-gray-900">
              Outstation Trips
            </h1>
            <p>
              Long-distance travel made easy. Fixed fares, no hidden charges,
              total comfort.
            </p>
          </div>
          <div className="p-6 border border-black rounded-lg bg-gray-400">
            {" "}
            <div className="p-2 border border-black bg-amber-300 rounded-lg w-fit">
              <Phone />
            </div>
            <h1 className="my-3 text-xl font-bold text-gray-900">
              24/7 Service Available
            </h1>
            <p>
              Book anytime, day or night. Our dispatch team is always a call
              away.
            </p>
          </div>
          <div className="p-6 border border-black rounded-lg bg-gray-400">
            {" "}
            <div className="p-2 border border-black bg-amber-300 rounded-lg w-fit">
              <CreditCard />
            </div>
            <h1 className="my-3 text-xl font-bold text-gray-900">
              Flexible Payments
            </h1>
            <p>
              Pay with cash, card, or wallet. Corporate billing and invoicing
              available.
            </p>
          </div>
          <div className="p-6 border border-black rounded-lg bg-gray-400">
            {" "}
            <div className="p-2 border border-black bg-amber-300 rounded-lg w-fit">
              <Shield />
            </div>
            <h1 className="my-3 text-xl font-bold text-gray-900">
              Safe & Insured
            </h1>
            <p>
              All rides are fully insured. Vetted drivers and real-time trip
              monitoring.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHero;

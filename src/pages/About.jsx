import React from 'react'
import { assets } from "../assets/assets";
import { Award, Users, Clock, MapPin, Shield, Star, ArrowRight} from "lucide-react";


const About = () => {
  return (
    <>
      <section className="relative pt-20 pb-0 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] py-16">
            
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-gray-900 text-sm font-bold tracking-wider uppercase mb-6 border bg-amber-300">
                About Us
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                Driving <span className="text-yellow-500">Excellence</span> Since 2009
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                What started as a single Mercedes on the streets has grown into a trusted premium taxi service. We don’t just get you there — we make every journey comfortable.
              </p>

              <a href='tel:+923048833023'
               className="text-base px-8 py-4 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300">
                Book a Ride →
              </a>
            </div>

            {/* Right Image */}
            <div className="relative">
              
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
                <img
                  src={assets.taxifront}
                  alt="Taxi Service"
                  className="w-full h-auto object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Decorative border */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-yellow-200"></div>

            </div>

          </div>

        </div>
      </section>
      

<section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="text-center p-6 rounded-xl">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="md:text-5xl font-bold text-yellow-500 mb-1">
              10K+
            </div>
            <div className="text-sm">
              Rides Completed
            </div>
          </div>

          <div className="text-center p-6 rounded-xl">
            <Users className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="md:text-5xl font-bold text-yellow-500 mb-1">
              500+
            </div>
            <div className="text-sm">
              Happy Clients
            </div>
          </div>

          <div className="text-center p-6 rounded-xl">
            <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="md:text-5xl font-bold text-yellow-500 mb-1">
              15+
            </div>
            <div className="text-sm">
              Years Experience
            </div>
          </div>

          <div className="text-center p-6 rounded-xl">
            <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="md:text-5xl font-bold text-yellow-500 mb-1">
              50+
            </div>
            <div className="text-sm">
              Cities Covered
            </div>
          </div>

        </div>

      </div>
    </section>
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-600 text-sm font-semibold uppercase mb-4">
            Our Story
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            From One Car to a <span className="text-yellow-500">Fleet</span>
          </h2>

        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">

          <p>
            In 2009, our founder started with a simple belief: taxi rides in Germany could be better. Not just faster or cheaper — but genuinely comfortable, safe, and professional. He purchased his first black Mercedes E-Class and began offering rides around Berlin.
          </p>

          <p>
            Word spread quickly. Clients appreciated the spotless interiors, the punctuality, and the respect shown by every driver. Within two years, we had a fleet of ten vehicles. By 2015, we were operating across five major German cities.
          </p>

          <p>
            Today, CityCab is synonymous with premium taxi service in Germany. Our fleet of over 100 black Mercedes vehicles serves thousands of satisfied customers every month — from daily commuters to corporate executives to tourists exploring the country.
          </p>

        </div>

      </div>
    </section>
    <section className="py-24 px-6 bg-slate-50">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-600 text-sm font-semibold uppercase mb-4">
            Our Values
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            What We <span className="text-yellow-500">Stand For</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Three principles that guide every ride we take.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="p-8 rounded-xl border bg-white">
            <Shield className="w-6 h-6 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-gray-600">
              Every vehicle is inspected, every driver is vetted. Your security is our top priority on every journey.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-xl border bg-white">
            <Clock className="w-6 h-6 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Always Punctual</h3>
            <p className="text-gray-600">
              We respect your time. Flight tracking, real-time dispatch, and drivers who are always five minutes early.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-xl border bg-white">
            <Star className="w-6 h-6 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Comfort</h3>
            <p className="text-gray-600">
              Leather seats, climate control, complimentary water — because every ride should feel first-class.
            </p>
          </div>

        </div>

      </div>

    </section>

   <section className="py-24 px-6">

  <div className="max-w-3xl mx-auto text-center rounded-2xl bg-gray-800 p-12 md:p-16">

    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
      Ready to Experience the <span className="text-yellow-400">Difference</span>?
    </h2>

    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
      Join thousands of satisfied riders who trust CityCab for their daily commute and special journeys.
    </p>

    <button className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 mx-auto">
      Book Your First Ride
      <ArrowRight className="w-5 h-5" />
    </button>

  </div>

</section>
    </>
  )
}

export default About
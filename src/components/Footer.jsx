import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";


const Footer = () => {
  return (
    <>
     <footer className='bg-[#2F2F2F] w-full mt-10'>
  <div className='max-w-6xl mx-auto px-0 py-10 pb-4'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10'>
            <div>
                <img src={assets.logo} alt="Logo" className="h-20 w-auto"/>
                <h1 className="text-2xl font-bold mb-4 mt-4 text-yellow-500">
            TaxiFly<span className="text-white">Ulm</span>
          </h1>
                <p className='text-gray-400 mb-4'>Premium taxi service delivering safe, comfortable, and reliable rides across the city and beyond.</p>
                <div className='flex items-center gap-2'>
      <div className="group p-2 border border-zinc-700 bg-zinc-700 rounded-lg w-fit cursor-pointer hover:bg-yellow-500 transition-colors"><FaFacebookF className="text-gray-400 group-hover:text-black w-5 h-5" /></div>
      <div className='group p-2 border border-zinc-700 bg-zinc-700 rounded-lg w-fit cursor-pointer hover:bg-yellow-500 transition-colors'><FaInstagram className="text-gray-400 group-hover:text-black w-5 h-5 cursor-pointer" /></div>
      <div className='group p-2 border border-zinc-700 bg-zinc-700 rounded-lg w-fit cursor-pointer hover:bg-yellow-500 transition-colors'><FaTwitter className="text-gray-400 group-hover:text-black w-5 h-5 cursor-pointer" /></div>
      <div className='group p-2 border border-zinc-700 bg-zinc-700 rounded-lg w-fit cursor-pointer hover:bg-yellow-500 transition-colors'><FaLinkedinIn className="text-gray-400 group-hover:text-black w-5 h-5 cursor-pointer" /></div>
            </div>
            </div>
            <div>
                <h1 className='text-white text-sm font-semibold mt-5 mb-5'>QUICK LINKS</h1>
                <div className='space-y-3'>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>About Us</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Our Services</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>FAQ</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Careers</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Contact</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Custotmer Reviews</p>
                </div>
                </div>
            <div>
                <h1 className='text-white text-sm font-semibold mt-5 mb-5'>SPECIALIZED SERVICES</h1>
                                <div className='space-y-3'>

                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Lost Item Recovery</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Feedback & Complaints</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Parcel Delivery</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Fair Regulations</p>
                <p className='text-gray-400 cursor-pointer hover:text-yellow-500'>Airport Transfer</p>
                </div>
                </div>

            <div>
      <h1 className="text-white text-sm font-semibold mt-5 mb-5">CONTACT US</h1>
      <div className='space-y-3'>
      <div className="flex items-center gap-2 mb-2">
        <Phone className="w-5 h-5 text-yellow-500" />
        <p className="text-gray-400 group-hover:text-yellow-500">+1 (555) 123-4567</p>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-5 h-5 text-yellow-500" />
        <p className="text-gray-400 group-hover:text-yellow-500">janedoe@gmail.com</p>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <MapPin className="w-5 h-5 text-yellow-500" />
        <p className="text-gray-400 group-hover:text-yellow-500">123 Main Street, Downtown</p>
      </div>

      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-yellow-500" />
        <p className="text-gray-400 group-hover:text-yellow-500">24/7 Available</p>
      </div>
    </div>
    </div>
        </div>

        <hr className='border-gray-500 mt-6 mb-3' />

<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
  <p className='text-gray-400 text-sm text-center md:text-left'>
    © 2026 CityCab. All rights reserved.
  </p>

  <div className='flex flex-wrap justify-center md:justify-end gap-5'>
    <p className='text-gray-400 text-sm cursor-pointer hover:text-yellow-500 transition-colors duration-200'>
      Privacy Policy
    </p>
    <p className='text-gray-400 text-sm cursor-pointer hover:text-yellow-500 transition-colors duration-200'>
      Terms of Service
    </p>
    <p className='text-gray-400 text-sm cursor-pointer hover:text-yellow-500 transition-colors duration-200'>
      Cookie Policy
    </p>
  </div>
</div>
        </div>
      </footer>
    </>
  )
}

export default Footer

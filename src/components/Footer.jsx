import React from 'react';
// Icons for Social Media
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// Icon for Email Input
import { MdOutlineEmail } from 'react-icons/md';
// Icons for Payment Methods
import { FaCcVisa, FaCcMastercard, FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white rounded-[40px] p-6 md:p-12 shadow-sm max-w-360 mx-auto mt-10">
      
      {/* SECTION 1: NEWSLETTER */}
      <div className="bg-black text-white rounded-[40px] p-8 md:p-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
          
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="relative w-full">
              <MdOutlineEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white focus:outline-none text-gray-800 placeholder-gray-400 "
              />
            </div>
            <button className="w-full md:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-200">
              Subscribe to Newsletter
            </button>
          </div>
          
        </div>
      </div>

      {/* SECTION 2: LINK COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
         <Logo />
          <p className="text-gray-500 leading-relaxed my-6">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-black font-bold mb-6">COMPANY</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">About</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Features</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Works</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Career</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-black font-bold mb-6">HELP</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Customer Support</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Delivery Details</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-black font-bold mb-6">FAQ</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Account</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Manage Deliveries</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Orders</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Payments</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-black font-bold mb-6">RESOURCES</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Free eBooks</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Development Tutorial</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">How to - Blog</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Youtube Videos</a></li>
          </ul>
        </div>
      </div>

      {/* SECTION 3: COPYRIGHT & PAYMENTS */}
      <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          TEILON © 2000 - 2026, All Rights Reserved
        </p>
        
        {/* Payment Icons */}
        <div className="flex gap-4 text-2xl text-gray-800">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcApplePay />
          <FaGooglePay />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
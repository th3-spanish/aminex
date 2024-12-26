// src/components/Footer.jsx
import React from 'react';
import pp from "../assets/pp.jpeg" ;

     




const Footer = () => {
  return (
    <footer className="max-w-[1020px] mx-auto">
    <div className="min-h-[60vh] flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <img 
            src={pp}
            alt="Profile" 
            className="w-16 h-16 rounded-full mb-6"
          />
          <div className="max-w-md text-center">
            <p className="text-[13px] text-gray-300">Subscribe to join my journey, see my process behind building scalable apps, and explore how I combine creativity and technology to solve real-world problems.</p>
            <button className="mt-4 px-8 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors text-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-[13px]">
          Amine X © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
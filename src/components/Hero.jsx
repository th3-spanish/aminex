import React from 'react';
import { Code } from 'lucide-react';


const Hero = () => {
  return (
    <div className="max-w-[1020px] mx-auto  pt-32 pb-16 border-b border-gray-800">
      {/* align content with the border */}
      <div className="pl-0 pr-4">
        <div className="text-xl mb-6"><Code size={32} strokeWidth={2.5}/></div>
        <h1 className="text-[15px] text-gray-300 mb-4 max-w-md leading-relaxed">
          I'm <span className='text-white font-bold'>Amine X</span>, a Full-Stack Engineer, Problem Solver, and Creator.
        </h1>
        <p className="text-[15px] text-gray-300 mb-6 max-w-md leading-relaxed">
          As a Developer, I have built <span className='text-white font-bold' >+10 products</span>, and continue to craft scalable applications and automate workflows to solve real-world problems. ✌️
        </p>
        <a  href="mailto:aminebachane@gmail.com"
          className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-colors text-sm"
        >
          Work with Me ↗
        </a>
      </div>
    </div>
  );
 };

export default Hero;

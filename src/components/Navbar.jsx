// src/components/Navbar.jsx
import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center gap-4">
        <a href="https://x.com/Th3Munster" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-5 h-5 hover:text-white transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/amine-bachane-1a5767127/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
        </a>
        <a href="https://github.com/th3-spanish" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-white transition-colors" />
        </a>
        <a href="https://www.instagram.com/amine_bachane/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 hover:text-white transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
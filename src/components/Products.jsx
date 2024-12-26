// src/components/Products.jsx
import React from 'react';
import chat from '../assets/chat.jpg'
import jobo from  '../assets/jobo.png'
import dmat from '../assets/dmat1.png'


// src/components/Products.jsx
// src/components/Products.jsx
const ProductCard = ({ title, description, link, image }) => {
  return (
    <div className="mb-8">
      <div className="aspect-[4/3] w-full mb-3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-3 leading-relaxed">{description}</p>
      <a href={link} className="text-sm text-gray-400 hover:text-white transition-colors">
        {link.replace('https://', '')} →
      </a>
    </div>
  );
};
const Products = () => {
  const products = [
    {
      title: 'AI-Driven News Automation',
      description: 'Automated content aggregation, rephrasing, and publishing using GPT-4 and DALL-E APIs via Zapier, combined with WordPress integration for a seamless workflow. Regularly monitored for performance consistency.',
      link: 'Sold',
      image: jobo
    },
    {
        title: 'Dynamic Malware Analysis Framework',
        description: 'Built a Flask-Python application integrated with MongoDB to create detailed analysis reports for file samples, URLs, or hashes. Conducted a comparative study of dynamic malware analysis sandbox services to optimize performance and usability.',
        link: 'link unavailable due to privacy policy',
        image: dmat
      },
    {
        title: 'Realtime Chat Application',
        description: 'Developed a scalable messaging platform using React.js and Socket.io, enabling seamless instant communication with an innovative, user-friendly interface.',
        link: 'https://project1.com',
        image: chat
      },
      
    // Add more products here
  ];

  return (
    <div className="max-w-[1020px] mx-auto border-b border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
export default Products;

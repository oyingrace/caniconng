'use client';

import { motion } from 'framer-motion';

export default function TopNav() {
  const topNavVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div 
      className="bg-gray-100 border-b border-gray-200"
      variants={topNavVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
           {/*  <span className="hidden md:inline text-gray-700">123 Anywhere Street, NY</span> */}
            <a href="mailto:hi@cannicon.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              cnijomanta@caniconng.com
            </a>
            <a href="tel:+13330000000" className="hidden sm:inline text-gray-700 hover:text-blue-600 transition-colors">
            +2348034099746
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
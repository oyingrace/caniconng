'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const navLinks = [
      { name: 'Home', href: '#' },
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' }
    ];

    const navVariants = {
      hidden: { y: -100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };

    const logoVariants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
          ease: [0.34, 1.56, 0.64, 1] // bounce effect
        }
      }
    };

    const mobileMenuVariants = {
      hidden: { opacity: 0, height: 0 },
      visible: {
        opacity: 1,
        height: 'auto',
        transition: {
          duration: 0.3,
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      },
      exit: {
        opacity: 0,
        height: 0,
        transition: {
          duration: 0.2
        }
      }
    };

    const mobileItemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };
  
    return (
      <motion.nav 
        className="bg-blue-600 shadow-lg"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <motion.div 
              className="flex-shrink-0"
              variants={logoVariants}
            >
              <h1 className="text-white text-3xl font-bold">CANICON</h1>
            </motion.div>
  
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-lime-300 transition-colors text-base font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.4 + (index * 0.1),
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 py-2.5 rounded-full transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                Contact Us
              </motion.button>
            </div>
  
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-lime-300 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
  
          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="lg:hidden pb-4 overflow-hidden"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="text-white hover:text-lime-300 transition-colors text-base font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      variants={mobileItemVariants}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.button 
                    className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 py-2.5 rounded-full transition-colors mt-2"
                    variants={mobileItemVariants}
                  >
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    );
  };
  
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const navLinks = [
      { name: 'Home', href: '#' },
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' }
    ];
  
    return (
      <nav className="bg-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 className="text-white text-3xl font-bold">CANICON</h1>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-lime-300 transition-colors text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 py-2.5 rounded-full transition-colors">
                Contact Us
              </button>
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
          {isOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-lime-300 transition-colors text-base font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 py-2.5 rounded-full transition-colors mt-2">
                Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };
  
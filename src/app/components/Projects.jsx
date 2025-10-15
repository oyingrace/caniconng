'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Downtown Office Complex",
      location: "New York, NY",
      date: "2024",
      description: "Complete electrical system installation for 15-story office building including backup generators and smart building integration."
    },
    {
      title: "Manufacturing Facility Upgrade",
      location: "Detroit, MI",
      date: "2024",
      description: "Industrial power distribution system overhaul with automated controls and energy monitoring systems."
    },
    {
      title: "Luxury Residential Tower",
      location: "Miami, FL",
      date: "2023",
      description: "High-end residential electrical installations with home automation, EV charging stations, and smart lighting."
    },
    {
      title: "Shopping Mall Renovation",
      location: "Los Angeles, CA",
      date: "2023",
      description: "Energy-efficient LED lighting system and electrical infrastructure upgrade for 200,000 sq ft retail space."
    },
    {
      title: "Water Treatment Plant",
      location: "Phoenix, AZ",
      date: "2024",
      description: "Critical infrastructure electrical systems including redundant power supplies and monitoring equipment."
    },
    {
      title: "Warehouse Automation",
      location: "Chicago, IL",
      date: "2023",
      description: "Complete electrical design for automated warehouse with robotics integration and power management systems."
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section ref={ref} className="bg-white py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-blue-600 font-semibold text-sm md:text-base tracking-wide uppercase mb-3">
            OUR WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projects That Power Progress
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful electrical engineering projects across various industries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="relative bg-blue-500 h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-600 mb-6">
            Ready to start your project?
          </p>
          <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
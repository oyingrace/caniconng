'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+2348034099746"],
      subtext: "Mon-Fri, 8am-6pm EST"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["michaelkingsley@cannicon.com", "cnijomanta@cannicon.com"],
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Plot 1 Okwuta Isieke Road, Okuwuta, Umuahia Ibeku, Abia State, Nigeria"],
      subtext: "Visit us during business hours"
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
        staggerChildren: 0.2,
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
            GET IN TOUCH
          </p>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Have a question or ready to start your project? Reach out to us through any of the channels below
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {contact.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 text-lg font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>


        {/* Map Placeholder */}
      {/*   <div className="rounded-3xl overflow-hidden">
          <div className="bg-blue-500 h-96 w-full flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl font-semibold">Map will be displayed here</p>
              <p className="text-blue-100 mt-2">123 Anywhere Street, New York, NY 10001</p>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
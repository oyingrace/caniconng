'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        }
      }
    };

    const fadeInUp = {
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

    const scaleIn = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };

    return (
      <section className="bg-white py-12 md:py-16 lg:py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Text content - visible only on desktop */}
              <motion.div 
                className="hidden lg:block space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p 
                  variants={fadeInUp}
                  className="text-sm md:text-base"
                >
                  <span className="inline-block bg-blue-600 text-white font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md text-xs md:text-sm">
                    HIGH QUALITY ELECTRICAL SERVICES
                  </span>
                </motion.p>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  We're Ready to Take Charge of Your Electrical Power Engineering Needs
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl"
                >
                  As a leader in electrical power engineering, we help governments, developers, and EPCs across Nigeria overcome grid challenges. Our expert electrical engineering team specializes in grid reliability, interconnection, and compliance.
                </motion.p>
              </motion.div>
  
              {/* Image placeholder for left side */}
              <motion.div 
                className="mt-0 lg:mt-8 rounded-3xl h-64 sm:h-80 md:h-96 w-full overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/img1.webp"
                    alt="Electrical engineers working on power lines"
                    fill
                    priority
                    sizes="(min-width: 1024px) 600px, (min-width: 640px) 100vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
  
            {/* Right Content */}
            <div className="order-1 lg:order-2 relative">
              {/* Image placeholder for right side */}
              <motion.div 
                className="rounded-3xl h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full overflow-hidden"
                variants={scaleIn}
                initial="hidden"
                animate="visible"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/img2.webp"
                    alt="Electrical control panel with circuit breakers and wiring"
                    fill
                    priority
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Mobile-only dark overlay for text readability */}
              <div className="lg:hidden absolute inset-0 rounded-3xl bg-gradient-to-t from-black/85 via-black/70 to-black/50" />
              
              {/* Text overlay - visible only on mobile/tablet */}
              <motion.div 
                className="lg:hidden absolute inset-0 flex flex-col justify-center p-6 sm:p-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-4 sm:space-y-6">
                  <motion.p 
                    variants={fadeInUp}
                    className="text-sm sm:text-base"
                  >
                    <span className="inline-block bg-blue-600 text-white font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md text-xs sm:text-sm">
                      HIGH QUALITY ELECTRICAL SERVICES
                    </span>
                  </motion.p>
                  
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                  >
                    We're Ready to Take Charge of Your Electrical Power Engineering Needs
                  </motion.h1>
                  
                  <motion.p 
                    variants={fadeInUp}
                    className="text-white/90 text-sm sm:text-base leading-relaxed"
                  >
                    As a leader in electrical power engineering, we help governments, developers, and EPCs across Nigeria overcome grid challenges. Our expert electrical engineering team specializes in grid reliability, interconnection, and compliance.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
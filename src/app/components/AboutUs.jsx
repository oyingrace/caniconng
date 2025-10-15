'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Users, Zap, Shield } from 'lucide-react';

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function AboutSection() {
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const stats = [
    { number: "15", suffix: "+", label: "Years of Excellence" },
    { number: "50", suffix: "+", label: "Projects Completed" },
    { number: "20", suffix: "+", label: "Expert Engineers" },
    { number: "98", suffix: "%", label: "Client Satisfaction" }
  ];

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="bg-white overflow-x-hidden">
      {/* Main About Section */}
      <div ref={contentRef} className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div 
              className="order-2 lg:order-1"
              variants={imageVariants}
              initial="hidden"
              animate={isContentInView ? "visible" : "hidden"}
            >
              <div className="bg-blue-500 rounded-3xl h-96 md:h-[32rem] w-full"></div>
            </motion.div>

            {/* Right - Content */}
            <motion.div 
              className="order-1 lg:order-2"
              variants={contentVariants}
              initial="hidden"
              animate={isContentInView ? "visible" : "hidden"}
            >
              <p className="text-blue-600 font-semibold text-sm md:text-base tracking-wide uppercase mb-3">
                ABOUT US
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Powering Your World Since 2010
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Canicon is a leading electrical engineering company dedicated to delivering innovative and reliable electrical solutions. With over 15 years of experience, we've built a reputation for excellence, safety, and customer satisfaction.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Our team of certified engineers and technicians brings expertise across commercial, industrial, and residential projects. We combine technical knowledge with a commitment to quality, ensuring every project meets the highest standards.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                From design to installation and maintenance, we're your trusted partner in electrical engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="bg-blue-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={statsContainerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={statVariants}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-blue-100 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
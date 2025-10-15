import { Zap, Building2, Wrench, Clock, Lightbulb, Shield } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Commercial Installations",
      description: "Complete electrical installation services for offices, retail spaces, and commercial buildings with focus on efficiency and safety."
    },
    {
      icon: Zap,
      title: "Industrial Electrical Systems",
      description: "Heavy-duty electrical solutions for manufacturing facilities, warehouses, and industrial operations with minimal downtime."
    },
    {
      icon: Lightbulb,
      title: "Electrical Design & Engineering",
      description: "Custom electrical system design and engineering services tailored to your specific project requirements and specifications."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-600 font-semibold text-sm md:text-base tracking-wide uppercase mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powering Your Success
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive electrical engineering solutions designed to meet your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Button */}
               {/*  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group">
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button> */}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-6">
            Don't see what you're looking for?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg hover:shadow-xl">
            Contact Us for Custom Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
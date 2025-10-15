import { Award, Users, Zap, Shield } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Expert Engineers" },
    { number: "98%", label: "Client Satisfaction" }
  ];


  return (
    <section className="bg-white">
      {/* Main About Section */}
      <div className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-blue-500 rounded-3xl h-96 md:h-[32rem] w-full"></div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
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
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Projects() {
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

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-600 font-semibold text-sm md:text-base tracking-wide uppercase mb-3">
            OUR WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projects That Power Progress
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful electrical engineering projects across various industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-6">
            Ready to start your project?
          </p>
          <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
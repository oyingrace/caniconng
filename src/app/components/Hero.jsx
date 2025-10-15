export default function HeroSection() {
    return (
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Text content - visible only on desktop */}
              <div className="hidden lg:block space-y-6">
                <p className="text-blue-700 font-semibold text-sm md:text-base tracking-wide uppercase">
                  HIGH QUALITY ELECTRICAL SERVICEs
                </p>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We're Ready to Take Charge of Your Electrical Power Engineering Needs
                </h1>
                
                <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                  As a leader in electrical power engineering, we help governments, developers, and EPCs across Nigeria overcome grid challenges. Our expert electrical engineering team specializes in grid reliability, interconnection, and compliance.
                </p>
              </div>
  
              {/* Image placeholder for left side */}
              <div className="mt-0 lg:mt-8 bg-blue-500 rounded-3xl h-64 sm:h-80 md:h-96 w-full"></div>
            </div>
  
            {/* Right Content */}
            <div className="order-1 lg:order-2 relative">
              {/* Image placeholder for right side */}
              <div className="bg-blue-600 rounded-3xl h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full"></div>
              
              {/* Text overlay - visible only on mobile/tablet */}
              <div className="lg:hidden absolute inset-0 flex flex-col justify-center p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-white font-semibold text-xs sm:text-sm tracking-wide uppercase">
                  HIGH QUALITY ELECTRICAL SERVICES
                  </p>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  We're Ready to Take Charge of Your Electrical Power Engineering Needs
                  </h1>
                  
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  As a leader in electrical power engineering, we help governments, developers, and EPCs across Nigeria overcome grid challenges. Our expert electrical engineering team specializes in grid reliability, interconnection, and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
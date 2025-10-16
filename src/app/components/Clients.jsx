export default function Clients() {
    return (
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gray-500 text-base md:text-lg">
              Trusted by over <span className="text-blue-600 font-bold">90K+</span> companies worldwide
            </p>
          </div>
  
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {/* Logo Placeholder 1 */}
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs">Logo 1</span>
            </div>
  
            {/* Logo Placeholder 2 */}
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs">Logo 2</span>
            </div>
  
            {/* Logo Placeholder 3 */}
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs">Logo 3</span>
            </div>
  
            {/* Logo Placeholder 4 */}
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs">Logo 4</span>
            </div>
  
            {/* Logo Placeholder 5 */}
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs">Logo 5</span>
            </div>
          </div>
  
          {/* Bottom Border */}
          <div className="mt-12 border-t border-gray-200"></div>
        </div>
      </section>
    );
  }
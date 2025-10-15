export default function TopNav() {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
           {/*  <span className="hidden md:inline text-gray-700">123 Anywhere Street, NY</span> */}
            <a href="mailto:hi@cannicon.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              cnijomanta@caniconng.com
            </a>
            <a href="tel:+13330000000" className="hidden sm:inline text-gray-700 hover:text-blue-600 transition-colors">
              +234 811 222 3333
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
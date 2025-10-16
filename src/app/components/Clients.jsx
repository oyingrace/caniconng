import Image from 'next/image';

export default function Clients() {
    const clients = [
      { src: '/client1.png', alt: 'Client 1' },
      { src: '/client2.png', alt: 'Client 2' },
      { src: '/client1.png', alt: 'Client 3' },
      { src: '/client1.png', alt: 'Client 4' }
    ];

    return (
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gray-500 text-base md:text-lg">
              Some of our <span className="text-blue-600 font-bold">Clients</span>
            </p>
          </div>
  
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="relative w-32 h-20">
                  <Image src={client.src} alt={client.alt} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom Border */}
          <div className="mt-12 border-t border-gray-200"></div>
        </div>
      </section>
    );
  }
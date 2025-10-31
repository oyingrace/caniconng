
import Image from 'next/image'

export default function Team() {
  const members = [
    { name: 'Engr. Ijomah N. Ijomanta (KINTUS)', role: 'Director of Canicon', image: '/team1.jpg' },
    { name: 'Cynthia N.Ijomanta', role: 'Health & Safety Officer', image: '/team2.jpg' },
    { name: 'Engr. Ucho', role: 'LinesMan', image: '/team3.jpg' }
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-600 font-semibold text-sm md:text-base tracking-wide uppercase mb-3">
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Meet the People Behind Canicon
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((m, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
              <div className="relative w-40 h-40 mx-auto mb-5 overflow-hidden rounded-full">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 200px"
                  className="object-cover"
                  priority={idx < 2}
                />
              </div>
              <div className="text-lg font-semibold text-gray-900">{m.name}</div>
              <div className="text-gray-600">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
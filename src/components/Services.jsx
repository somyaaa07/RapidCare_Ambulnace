const services = [
  {
    img: "https://i.pinimg.com/736x/df/5d/4b/df5d4b95fad62acc87af46603c982109.jpg",
    icon: "🏥",
    title: "ICU Ambulance",
    desc: "Fully equipped mobile intensive care units with ventilators, monitors, and advanced cardiac life support for critical patients.",
  },
  {
    img: "https://i.pinimg.com/736x/e2/fd/1e/e2fd1e00ad2b9530a0f0ff06c4ce944f.jpg",
    icon: "💊",
    title: "Basic Life Support",
    desc: "Professional BLS service with trained EMTs providing essential pre-hospital care, oxygen therapy, and safe patient transport.",
  },
  {
    img: "https://i.pinimg.com/736x/fc/e4/38/fce43808880ee766f2cba6c6945f01f5.jpg",
    icon: "⚡",
    title: "Emergency Response",
    desc: "Rapid-deployment units reaching trauma scenes in under 10 minutes — staffed with ACLS-certified paramedics.",
  },
  {
    img: "https://i.pinimg.com/736x/26/41/0d/26410d8a9864d4f703b3c1b5624ebd04.jpg",
    icon: "🚗",
    title: "Patient Transport",
    desc: "Comfortable, safe non-emergency transport for hospital transfers, dialysis, chemotherapy, and outpatient appointments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <div className="w-12 h-1 mx-auto mb-5 bg-red-600 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-4">
            Comprehensive Emergency Medical Services
          </h2>
          <p className="max-w-lg mx-auto text-base leading-relaxed text-slate-500">
            From critical care to comfortable transport, we offer a full spectrum of
            pre-hospital medical services tailored to your needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="overflow-hidden transition-all duration-300 bg-white border group rounded-2xl border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">{s.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-red-600 font-semibold text-sm cursor-pointer group/link">
                  Learn More
                  <span className="text-base transition-transform group-hover/link:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

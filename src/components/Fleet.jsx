const fleet = [
  {
    img: "https://i.pinimg.com/1200x/3b/58/26/3b58264367ff25a10d419888fde59af7.jpg",
    name: "ALS Mobile ICU",
    tag: "Advanced Life Support",
  },
  {
    img: "https://i.pinimg.com/736x/c8/b5/70/c8b570e243920f00a95a59d990b3d1ec.jpg",
    name: "BLS Ambulance",
    tag: "Basic Life Support",
  },
  {
    img: "https://i.pinimg.com/736x/f8/18/eb/f818eb03286c307fba10bbe343bcd94a.jpg",
    name: "Neonatal Unit",
    tag: "Infant & NICU Transport",
  },
  {
    img: "https://i.pinimg.com/736x/72/13/03/721303dc38e01c8bdf54e396ed3e047e.jpg",
    name: "Trauma Response",
    tag: "Emergency Rapid Unit",
  },
  {
    img: "https://i.pinimg.com/736x/8d/f4/43/8df443c384a2dd04e58be47b49cc83fb.jpg",
    name: "Non-Emergency Van",
    tag: "Non-Emergency Transfers",
  },
  {
    img: "https://i.pinimg.com/736x/bf/e8/63/bfe863c3dd967c7663a4fe6bc3663c7d.jpg",
    name: "Air Ambulance Coord.",
    tag: "Helicopter Liaison",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Fleet
          </span>
          <div className="w-12 h-1 mx-auto mb-5 bg-red-600 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-4">
            State-of-the-Art Emergency Fleet
          </h2>
          <p className="max-w-md mx-auto text-base leading-relaxed text-slate-500">
            Meticulously maintained, GPS-tracked vehicles equipped with the latest
            medical technology — ready to respond at a moment's notice.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((f) => (
            <div
              key={f.name}
              className="relative h-56 overflow-hidden cursor-pointer group rounded-2xl"
            >
              <img
                src={f.img}
                alt={f.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/30 to-transparent" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="inline-block bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded mb-2">
                  {f.tag}
                </span>
                <div className="text-lg font-bold text-white">{f.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

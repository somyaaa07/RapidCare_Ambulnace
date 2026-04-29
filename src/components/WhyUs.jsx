const points = [
  {
    icon: "⚡",
    title: "8-Min Response Time",
    desc: "Strategically placed units ensure we arrive in under 8 minutes anywhere in the city.",
  },
  {
    icon: "🎓",
    title: "Certified Paramedics",
    desc: "All staff hold ACLS, BLS, and PHTLS certifications with regular training updates.",
  },
  {
    icon: "🕐",
    title: "24/7 Availability",
    desc: "Our dispatch center and fleet are operational every hour of every day, year-round.",
  },
  {
    icon: "🏥",
    title: "Hospital Coordination",
    desc: "We pre-notify receiving hospitals for seamless handover and faster treatment.",
  },
  {
    icon: "📡",
    title: "GPS Fleet Tracking",
    desc: "Real-time tracking of all vehicles ensures optimal routing and accountability.",
  },
  {
    icon: "❤️",
    title: "Patient-First Approach",
    desc: "We treat every patient with dignity and compassion — not just as a medical case.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#0B1F3A] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-600/20 text-red-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <div className="w-12 h-1 bg-red-600 rounded-full mx-auto mb-5" />
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What Sets RapidCare Apart
          </h2>
          <p className="text-white/55 text-base max-w-md mx-auto leading-relaxed">
            We don't just transport patients — we deliver hope, expertise, and care
            when it's needed most.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:-translate-y-1.5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-lg text-white mb-2.5">{p.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

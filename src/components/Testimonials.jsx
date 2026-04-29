const reviews = [
  {
    name: "Rajesh Sharma",
    loc: "Noida, UP",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop",
    quote:
      "RapidCare reached us in 7 minutes at 2 AM. The paramedic was calm, professional, and kept my father stable until we reached the hospital. Lifesavers — literally.",
  },
  {
    name: "Priya Malhotra",
    loc: "Ghaziabad, UP",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop",
    quote:
      "I used their non-emergency transport for my mother's dialysis for 6 months. Always on time, always caring. The staff treats her like family. Highly recommended.",
  },
  {
    name: "Dr. Anil Verma",
    loc: "Delhi",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80&auto=format&fit=crop",
    quote:
      "As a physician, I recommend RapidCare to all my patients needing transfers. Their ICU ambulance is truly hospital-grade and the coordination with our ER team is seamless.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <div className="w-12 h-1 bg-red-600 rounded-full mx-auto mb-5" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-4">
            Trusted by Thousands of Families
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            Real stories from real people — because the best measure of our service
            is the lives we've touched.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-slate-100 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300"
            >
              {/* Stars */}
              <div className="text-amber-400 text-lg tracking-wider mb-4">★★★★★</div>

              {/* Quote */}
              <p className="text-slate-600 text-[15px] leading-relaxed italic mb-6">
                "{r.quote}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <div className="font-bold text-[#0B1F3A] text-sm">{r.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{r.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

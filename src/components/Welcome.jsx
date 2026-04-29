export default function Welcome() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="grid items-center grid-cols-1 gap-16 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Image Column */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://i.pinimg.com/736x/d8/d6/c9/d8d6c96dda01a92402c9467a753085aa.jpg"
              alt="Medical team"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Floating badge bottom-right */}
          <div className="absolute -bottom-6 -right-4 md:right-[-20px] bg-[#0B1F3A] rounded-2xl px-6 py-5 shadow-2xl min-w-[140px]">
            <div className="text-4xl font-bold leading-none text-white">12+</div>
            <div className="text-white/60 text-sm mt-1.5">Years of Service</div>
          </div>
          {/* Floating badge top-left */}
          <div className="absolute px-5 py-4 bg-red-600 shadow-xl -top-4 -left-4 rounded-2xl shadow-red-200">
            <div className="text-xl font-bold leading-none text-white">ISO</div>
            <div className="mt-1 text-xs text-white/80">Certified</div>
          </div>
        </div>

        {/* Text Column */}
        <div>
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <div className="w-12 h-1 mb-5 bg-red-600 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight tracking-tight mb-5">
            Committed to Saving Lives,
            <br /> Every Minute Matters
          </h2>
          <p className="mb-4 text-base leading-relaxed text-slate-500">
            RapidCare Ambulance Services has been the region's most trusted emergency medical provider
            for over 12 years. Our fleet of advanced life support vehicles and highly trained paramedics
            are stationed strategically to ensure the fastest response times.
          </p>
          <p className="mb-8 text-base leading-relaxed text-slate-500">
            We operate round the clock — 365 days a year — delivering compassionate, professional
            emergency and non-emergency medical transport services across the city and surrounding areas.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              ["🏥", "Govt. Empanelled", "Recognized by state health dept."],
              ["🚑", "Advanced Fleet", "ICU-equipped ambulances"],
              ["👨‍⚕️", "Paramedic Trained", "ACLS & BLS certified staff"],
              ["⚡", "Fast Response", "Average 8-min arrival time"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="p-4 transition-colors border bg-slate-50 border-slate-100 rounded-xl hover:border-red-100 hover:bg-red-50/30"
              >
                <div className="mb-2 text-2xl">{icon}</div>
                <div className="font-600 text-[#0B1F3A] text-sm font-semibold mb-1">{title}</div>
                <div className="text-xs leading-relaxed text-slate-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

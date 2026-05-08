const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const WAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/1200x/34/a1/58/34a15894c09a5ef5cc18172f340d3306.jpg"
          alt="Ambulance"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-[#0B1F3A]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-red-400 uppercase">
              Available 24/7 — Emergency Response
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 animate-fade-up [animation-delay:150ms]">
            24/7 Emergency
            <br />
            <span className="text-red-400">Ambulance Services</span>
            <br />
            You Can Trust
          </h1>

          {/* Subheading */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up [animation-delay:300ms]">
            Swift, professional emergency medical care delivered to your doorstep.
            Certified paramedics, advanced life support, and state-of-the-art vehicles
            — because every second counts.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:450ms]">
            <a href="tel:+919354077514">
              <button className="flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30">
                <PhoneIcon /> Call Now — Free
              </button>
            </a>
            <a href="https://wa.me/919354077514">
              <button className="flex items-center gap-2.5 bg-green-600/20 hover:bg-green-600/30 border-2 border-green-500/60 text-green-400 font-bold text-base px-7 py-4 rounded-xl transition-all hover:-translate-y-1">
                <WAIcon /> WhatsApp Us
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14 animate-fade-up [animation-delay:550ms]">
            {[
              ["500+", "Cases Handled"],
              ["8 min", "Avg Response"],
              ["100%", "Certified Staff"],
            ].map(([num, label]) => (
              <div key={num}>
                <div className="text-4xl font-bold leading-none text-white">{num}</div>
                <div className="text-white/55 text-sm mt-1.5 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const quickLinks = ["Home", "Our Services", "Fleet", "About Us", "Contact", "Privacy Policy"];
  const serviceLinks = ["ICU Ambulance", "Basic Life Support", "Emergency Response", "Patient Transport", "Neonatal Transport", "Air Ambulance"];

  return (
    <footer id="contact" className="bg-[#060f1e] text-white/70 pt-16 pb-8 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center bg-red-600 rounded-xl w-9 h-9">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.3" strokeLinecap="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Rapid<span className="text-red-400">Care</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-[220px]">
              Your trusted partner in emergency medical care. Saving lives, one call at a time.
            </p>
            <div className="flex gap-2.5">
              {["📘", "📷", "🐦", "▶️"].map((icon, i) => (
                <button
                  key={i}
                  className="flex items-center justify-center text-base transition-colors rounded-lg w-9 h-9 bg-white/8 hover:bg-white/15"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-tight text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm no-underline transition-colors text-white/55 hover:text-red-400"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-tight text-white">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm no-underline transition-colors text-white/55 hover:text-red-400"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-tight text-white">Contact Us</h4>
            <ul className="space-y-4">
              {[
                ["📍", "Sector 18, Noida, Uttar Pradesh - 201301"],
                ["📞", "Emergency: 8900-XXX-XXX (24/7 Free)"],
                ["📱", "+91 8956232145"],
                ["✉️", "info@rapidcare.in"],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5">{icon}</span>
                  <span className="text-sm leading-relaxed text-white/55">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 border-t border-white/8 sm:flex-row">
          <p className="text-xs text-white/35">
            © 2025 RapidCare Ambulance Services. All rights reserved.
          </p>
          <p className="text-xs text-white/35"></p>
        </div>
      </div>
    </footer>
  );
}

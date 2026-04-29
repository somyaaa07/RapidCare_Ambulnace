import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <Fleet />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

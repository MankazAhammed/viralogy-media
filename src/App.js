import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhyViralogyMedia from "./sections/WhyViralogyMedia"
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import ContactCTA from "./sections/ContactCTA";
import BrandServicesStrip from "./sections/BrandServicesStrip";
import ApproachSection from "./sections/ApproachSection";

export default function App() {
  return (
    <main className="app-root">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyViralogyMedia />
      <ApproachSection />
      <BrandServicesStrip />
      <ContactCTA />
      <Footer />
    </main>
  );
}

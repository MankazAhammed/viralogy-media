import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import ContactCTA from "./sections/ContactCTA";

export default function App() {
  return (
    <main className="app-root">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  );
}

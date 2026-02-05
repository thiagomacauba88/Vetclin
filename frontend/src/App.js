import React from "react";
import "@/App.css";
import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Gallery />
      <Contact />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;

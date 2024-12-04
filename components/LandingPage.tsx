"use client";

import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import ToolSelector from './ToolSelector';
import Testimonials from './Testimonials';
import PricingSection from './PricingSection';
import Footer from './Footer';
import AdBanner from './AdBanner';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AdBanner slot="1234567890" className="max-w-7xl mx-auto my-8" />
        <Features />
        <HowItWorks />
        <section id="tools" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ToolSelector />
        </section>
        <Testimonials />
        <PricingSection />
        <AdBanner slot="0987654321" className="max-w-7xl mx-auto my-8" />
      </main>
      <Footer />
    </div>
  );
}
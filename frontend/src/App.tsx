import React from 'react';
import { Navigation } from './components/ui/Navigation';
import { Footer } from './components/ui/Footer';
import { Hero } from './components/sections/Hero';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { HowItWorks } from './components/sections/HowItWorks';
import { Services } from './components/sections/Services';
import { CaseStudies } from './components/sections/CaseStudies';
import { TrustedBy } from './components/sections/TrustedBy';
import { Pricing } from './components/sections/Pricing';
import { SocialProof } from './components/sections/SocialProof';
import { ToolsPlatforms } from './components/sections/ToolsPlatforms';
import { FAQ } from './components/sections/FAQ';
import { Blog } from './components/sections/Blog';
import { CTABanner } from './components/sections/CTABanner';
import { Contact } from './components/sections/Contact';
import './index.css';

function App() {
  return (
    <div className="bg-nexa-bg min-h-screen">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <CaseStudies />
      <TrustedBy />
      <Pricing />
      <SocialProof />
      <ToolsPlatforms />
      <FAQ />
      <Blog />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

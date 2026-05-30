/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { InstagramFeed } from './components/InstagramFeed';
import { ContactAndMap } from './components/ContactAndMap';
import { Footer } from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-zinc-950 min-h-screen text-zinc-50 font-sans antialiased selection:bg-amber-600 selection:text-white">
        <Navbar />
        <Hero />
        <Pricing />
        <Gallery />
        <Testimonials />
        <InstagramFeed />
        <ContactAndMap />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

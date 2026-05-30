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

export default function App() {
  return (
    <div className="bg-white min-h-screen text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      <Navbar />
      <Hero />
      <Pricing />
      <Gallery />
      <Testimonials />
      <InstagramFeed />
      <ContactAndMap />
      <Footer />
    </div>
  );
}

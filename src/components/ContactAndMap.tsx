import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as unknown as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export function ContactAndMap() {
  const position = { lat: 51.256, lng: 7.150 }; // Wuppertal approximate center

  return (
    <section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Contact Form & Info */}
        <div className="py-24 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">Visit Us</h2>
          <h3 className="text-3xl font-sans font-medium text-neutral-900 mb-8">Book & Connect</h3>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-neutral-400 mt-1 mr-4 shrink-0" />
              <p className="text-neutral-600 font-light">
                Friedrich-Ebert-Straße 123<br />
                42117 Wuppertal, Germany
              </p>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-neutral-400 mr-4 shrink-0" />
              <p className="text-neutral-600 font-light">+49 202 1234567</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-neutral-400 mr-4 shrink-0" />
              <p className="text-neutral-600 font-light">hello@maisonwuppertal.de</p>
            </div>
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-neutral-400 mt-1 mr-4 shrink-0" />
              <div className="text-neutral-600 font-light">
                <p>Tue - Fri: 9:00 - 19:00</p>
                <p>Sat: 9:00 - 15:00</p>
                <p className="text-neutral-400">Sun & Mon: Closed</p>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" placeholder="Your Name" className="w-full bg-neutral-50 px-4 py-3 border-none focus:ring-1 focus:ring-neutral-900 placeholder:text-neutral-400 font-light" />
            </div>
            <div>
              <input type="email" placeholder="Email Address" className="w-full bg-neutral-50 px-4 py-3 border-none focus:ring-1 focus:ring-neutral-900 placeholder:text-neutral-400 font-light" />
            </div>
            <div>
              <textarea placeholder="How can we help?" rows={3} className="w-full bg-neutral-50 px-4 py-3 border-none focus:ring-1 focus:ring-neutral-900 placeholder:text-neutral-400 font-light resize-none"></textarea>
            </div>
            <button type="submit" className="bg-neutral-900 text-white w-full py-3 font-medium hover:bg-neutral-800 transition-colors">
              Send Request
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="bg-neutral-100 flex items-center justify-center relative w-full h-[400px] lg:h-full">
          {!hasValidKey ? (
            <div className="p-8 text-center max-w-md bg-white shadow-xl m-4 z-10 border border-neutral-100">
              <h2 className="text-xl font-medium mb-4">Map Configuration Required</h2>
              <p className="text-sm text-neutral-600 mb-4 whitespace-normal text-left">
                <strong>Step 1:</strong> Get a Google Maps Platform API Key.<br/><br/>
                <strong>Step 2:</strong> Add your key as a secret in AI Studio:<br/>
                • Open <strong>Settings</strong> (⚙️ gear icon)<br/>
                • Select <strong>Secrets</strong><br/>
                • Name: <code>GOOGLE_MAPS_PLATFORM_KEY</code><br/>
                • Paste key & press <strong>Enter</strong>
              </p>
              <p className="text-xs text-neutral-400">The app will rebuild automatically.</p>
            </div>
          ) : (
            <APIProvider apiKey={API_KEY} version="weekly">
              <Map
                defaultCenter={position}
                defaultZoom={15}
                mapId="maison_map"
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                style={{ width: '100%', height: '100%' }}
                gestureHandling="greedy"
                disableDefaultUI={true}
              >
                <AdvancedMarker position={position}>
                  <Pin background="#171717" glyphColor="#fff" borderColor="#171717" />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          )}
        </div>
      </div>
    </section>
  );
}

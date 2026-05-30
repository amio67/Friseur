import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'motion/react';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as unknown as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export function ContactAndMap() {
  const position = { lat: 51.256, lng: 7.150 }; // Wuppertal approximate center
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-zinc-950 border-t border-zinc-900 border-b relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Contact Form & Info */}
        <div className="py-24 px-8 md:px-16 lg:px-24 flex flex-col justify-center relative bg-zinc-900/20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500 mb-4">{t.contact.section_title}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-zinc-50 mb-12">{t.contact.main_title}</h3>
            
            <div className="space-y-8 mb-16">
              <div className="flex items-start group">
                <div className="p-3 bg-zinc-900/50 rounded-sm border border-zinc-800 group-hover:border-amber-900 transition-colors mr-6">
                  <MapPin className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-zinc-300 font-light leading-relaxed">
                    Hochstraße<br />
                    42117 Wuppertal, Germany
                  </p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="p-3 bg-zinc-900/50 rounded-sm border border-zinc-800 group-hover:border-amber-900 transition-colors mr-6">
                  <Phone className="h-5 w-5 text-amber-500" />
                </div>
                <p className="text-zinc-300 font-light">+49 202 1234567</p>
              </div>
              <div className="flex items-start group">
                <div className="p-3 bg-zinc-900/50 rounded-sm border border-zinc-800 group-hover:border-amber-900 transition-colors mr-6">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-zinc-300 font-light leading-relaxed">
                  <p>{t.contact.hours.tue_fri}</p>
                  <p>{t.contact.hours.sat}</p>
                  <p className="text-zinc-500">{t.contact.hours.closed}</p>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" placeholder={t.contact.form.name} className="w-full bg-zinc-950/50 border border-zinc-800 px-5 py-4 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 placeholder:text-zinc-600 text-zinc-300 font-light transition-all rounded-sm" />
                </div>
                <div>
                  <input type="email" placeholder={t.contact.form.email} className="w-full bg-zinc-950/50 border border-zinc-800 px-5 py-4 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 placeholder:text-zinc-600 text-zinc-300 font-light transition-all rounded-sm" />
                </div>
              </div>
              <div>
                <textarea placeholder={t.contact.form.message} rows={4} className="w-full bg-zinc-950/50 border border-zinc-800 px-5 py-4 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 placeholder:text-zinc-600 text-zinc-300 font-light resize-none transition-all rounded-sm"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="bg-amber-600 text-white w-full py-4 text-sm font-semibold tracking-widest uppercase hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/20 rounded-sm"
              >
                {t.contact.form.submit}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <div className="bg-zinc-900 flex items-center justify-center relative w-full h-[500px] lg:h-auto border-l border-zinc-800">
          {!hasValidKey ? (
            <div className="p-10 text-center max-w-md bg-zinc-950 shadow-2xl m-4 z-10 border border-zinc-800">
              <h2 className="text-xl font-serif text-zinc-100 mb-4">Map Configuration Required</h2>
              <p className="text-sm text-zinc-400 mb-6 whitespace-normal text-left leading-relaxed">
                <strong>Step 1:</strong> Get a Google Maps Platform API Key.<br/><br/>
                <strong>Step 2:</strong> Add your key as a secret in AI Studio:<br/>
                • Open <strong>Settings</strong> (⚙️ gear icon)<br/>
                • Select <strong>Secrets</strong><br/>
                • Name: <code>GOOGLE_MAPS_PLATFORM_KEY</code><br/>
                • Paste key & press <strong>Enter</strong>
              </p>
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
                  <Pin background="#d97706" glyphColor="#fff" borderColor="#92400e" />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          )}
        </div>
      </div>
    </section>
  );
}

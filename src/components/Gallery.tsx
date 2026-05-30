import React from 'react';
import { motion } from 'motion/react';
import galleryCut from '../assets/images/gallery_barber_1_1780167515112.png';
import galleryColor from '../assets/images/gallery_barber_2_1780167530964.png';
import { useLanguage } from '../i18n/LanguageContext';

export function Gallery() {
  const { t } = useLanguage();
  return (
    <section id="gallery" className="py-32 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500 mb-4">{t.gallery.section_title}</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-zinc-50">{t.gallery.main_title}</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            <img 
              src={galleryCut} 
              alt="Precision Haircut" 
              className="w-full h-[600px] object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-end p-10 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-serif text-white">{t.gallery.item1_title}</h4>
                <p className="text-amber-500 font-light mt-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{t.gallery.item1_desc}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group overflow-hidden bg-zinc-900 border border-zinc-800 md:mt-16"
          >
            <img 
              src={galleryColor} 
              alt="Balayage Color" 
              className="w-full h-[600px] object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-end p-10 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-serif text-white">{t.gallery.item2_title}</h4>
                <p className="text-amber-500 font-light mt-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{t.gallery.item2_desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

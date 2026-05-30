import React from 'react';
import { motion } from 'motion/react';
import heroImg from '../assets/images/hero_barber_interior_1780167496390.png';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  return (
    <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[90vh]">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url('${heroImg}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950"></div>
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-zinc-50 font-serif font-medium text-5xl md:text-7xl leading-tight mb-6 drop-shadow-lg">
                {t.hero.title}
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-4 text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-amber-600 text-white px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-amber-500 transition-colors shadow-xl shadow-amber-900/40 rounded-sm"
              >
                {t.hero.cta}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

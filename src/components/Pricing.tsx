import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Pricing() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500 mb-4">{t.pricing.section_title}</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-zinc-50">{t.pricing.main_title}</h3>
          <p className="mt-6 text-zinc-400 font-light text-lg">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {t.pricing.categories.map((section, idx) => (
            <motion.div 
              key={section.name} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 hover:border-amber-900/50 transition-colors duration-500 group"
            >
              <h4 className="text-2xl font-serif text-zinc-100 mb-8 border-b border-zinc-800 pb-4 group-hover:border-amber-900/50 transition-colors">
                {section.name}
              </h4>
              <ul className="space-y-6">
                {section.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-baseline group/item">
                    <span className="text-zinc-400 font-light group-hover/item:text-zinc-300 transition-colors">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-zinc-800 mx-4 shrink opacity-30"></div>
                    <span className="text-amber-500 font-medium shrink-0">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

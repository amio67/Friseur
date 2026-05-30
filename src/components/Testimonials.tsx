import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'motion/react';

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="py-32 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-zinc-950/20 to-zinc-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500 mb-4">{t.testimonials.section_title}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-zinc-50">{t.testimonials.main_title}</h3>
          </div>
          <a href="https://share.google/ZMRIpbCMs9Hhqa68e" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium border-b border-amber-600 text-amber-500 pb-1 hover:text-amber-400 hover:border-amber-400 transition-colors">
            {t.testimonials.googleLinkText}
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800 p-8 hover:border-amber-900/50 transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-zinc-800" />
                </div>
                <p className="text-zinc-300 font-light leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="border-t border-zinc-800 pt-6">
                <p className="font-serif text-lg text-zinc-50 tracking-wide">{testimonial.author}</p>
                <p className="text-sm text-zinc-500 font-light mt-1">{testimonial.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="sm:hidden text-center mt-12">
          <a href="https://share.google/ZMRIpbCMs9Hhqa68e" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-medium border-b border-amber-600 text-amber-500 pb-1">
            {t.testimonials.googleLinkText}
          </a>
        </div>
      </div>
    </section>
  );
}

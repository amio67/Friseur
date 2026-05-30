import React from 'react';
import { Instagram } from 'lucide-react';
import ig1 from '../assets/images/ig_barber_1_1780167546721.png';
import ig2 from '../assets/images/ig_barber_2_1780167564210.png';
import ig3 from '../assets/images/ig_barber_3_1780167580710.png';
import { useLanguage } from '../i18n/LanguageContext';

export function InstagramFeed() {
  const images = [ig1, ig2, ig3];
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-serif font-medium text-zinc-50 flex items-center gap-3">
            <Instagram className="h-8 w-8 text-amber-500" /> {t.instagram.title}
          </h3>
          <p className="text-zinc-400 font-light mt-3 text-lg">{t.instagram.handle}</p>
        </div>
        <a href="https://www.instagram.com/friseur_yussif" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block text-sm font-medium border-b border-amber-600 text-amber-500 pb-1 hover:text-amber-400 hover:border-amber-400 transition-colors">
          {t.instagram.linkText}
        </a>
      </div>
      
      <div className="flex w-full overflow-x-hidden">
        {images.map((img, idx) => (
          <a href="https://www.instagram.com/friseur_yussif" target="_blank" rel="noopener noreferrer" key={idx} className="w-1/3 group relative aspect-square block overflow-hidden">
            <img 
              src={img} 
              alt={`Instagram post ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-colors duration-500 flex items-center justify-center">
              <Instagram className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 transform drop-shadow-lg" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-zinc-950 text-white py-16 border-t border-zinc-900 overflow-hidden relative">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-amber-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-8 md:mb-0">
            <span className="text-3xl font-serif tracking-widest text-zinc-300">
              YUSSIF
            </span>
          </div>
          
          <div className="flex space-x-8 text-sm font-light text-zinc-500">
            <a href="#" className="hover:text-amber-500 transition-colors uppercase tracking-wider">{t.footer.impressum}</a>
            <a href="#" className="hover:text-amber-500 transition-colors uppercase tracking-wider">{t.footer.datenschutz}</a>
            <a href="#" className="hover:text-amber-500 transition-colors uppercase tracking-wider">{t.footer.agb}</a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs font-light text-zinc-600 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Friseur Yussif Wuppertal. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

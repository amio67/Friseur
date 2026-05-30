import React, { useState } from 'react';
import { Menu, X, Scissors, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="fixed w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-3xl font-serif tracking-widest text-zinc-50">
              YUSSIF
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors">{t.nav.services}</a>
            <a href="#gallery" className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors">{t.nav.gallery}</a>
            <a href="#testimonials" className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors">{t.nav.reviews}</a>
            <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors">{t.nav.contact}</a>
            
            <button 
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-1"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </button>
            <button className="bg-amber-600 text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/20">
              {t.nav.book}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-1"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-white/5">
          <div className="px-4 py-6 space-y-4 shadow-xl">
            <a href="#services" className="block text-lg font-serif text-zinc-300 hover:text-amber-500 transition-colors">{t.nav.services}</a>
            <a href="#gallery" className="block text-lg font-serif text-zinc-300 hover:text-amber-500 transition-colors">{t.nav.gallery}</a>
            <a href="#testimonials" className="block text-lg font-serif text-zinc-300 hover:text-amber-500 transition-colors">{t.nav.reviews}</a>
            <a href="#contact" className="block text-lg font-serif text-zinc-300 hover:text-amber-500 transition-colors">{t.nav.contact}</a>
            <button className="w-full mt-4 bg-amber-600 text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-amber-500 transition-colors">
              {t.nav.book}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

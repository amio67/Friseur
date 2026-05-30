import React from 'react';
import { Scissors } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Scissors className="h-6 w-6 text-white" />
            <span className="ml-2 text-xl font-sans tracking-widest uppercase font-semibold">
              Maison
            </span>
          </div>
          
          <div className="flex space-x-6 text-sm font-light text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs font-light text-neutral-500">
          &copy; {new Date().getFullYear()} Maison Friseur Wuppertal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Scissors className="h-8 w-8 text-neutral-900" />
            <span className="ml-2 text-2xl font-sans tracking-widest uppercase font-semibold text-neutral-900">
              Maison
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Services</a>
            <a href="#gallery" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Gallery</a>
            <a href="#testimonials" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Contact</a>
            <button className="bg-neutral-900 text-white px-6 py-2.5 rounded-none text-sm font-medium hover:bg-neutral-800 transition-colors">
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-neutral-600">Services</a>
            <a href="#gallery" className="block px-3 py-2 text-base font-medium text-neutral-600">Gallery</a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-neutral-600">Reviews</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-neutral-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

import React from 'react';
import galleryCut from '../assets/images/gallery_haircut_1780165186626.png';
import galleryColor from '../assets/images/gallery_color_1780165202967.png';

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-sans font-medium">Our Masterpieces</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden bg-neutral-800">
            <img 
              src={galleryCut} 
              alt="Precision Haircut" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <h4 className="text-xl font-medium">Precision Cuts</h4>
                <p className="text-neutral-300 font-light mt-2">Sculpting shapes that define character.</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden bg-neutral-800">
            <img 
              src={galleryColor} 
              alt="Balayage Color" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <h4 className="text-xl font-medium">Color Mastery</h4>
                <p className="text-neutral-300 font-light mt-2">Seamless blends and dimensional highlights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

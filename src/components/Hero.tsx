import React from 'react';
import heroImg from '../assets/images/hero_salon_1780165168942.png';

export function Hero() {
  return (
    <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[90vh]">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url('${heroImg}')` }}
      >
        <div className="absolute top-0 w-full h-full bg-neutral-900/40"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-white font-sans font-medium text-5xl md:text-7xl tracking-tight mb-6">
                Elevate Your Style.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
                Experience Wuppertal's premier luxury salon. Modern techniques, elegant atmosphere, and stylists dedicated to your unique aesthetic.
              </p>
              <button className="bg-white text-neutral-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-neutral-100 transition-colors shadow-lg">
                Book Your Transformation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

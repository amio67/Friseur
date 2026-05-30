import React from 'react';
import { Instagram } from 'lucide-react';
import ig1 from '../assets/images/ig_feed_1_1780165219084.png';
import ig2 from '../assets/images/ig_feed_2_1780165236108.png';
import ig3 from '../assets/images/ig_feed_3_1780165253115.png';

export function InstagramFeed() {
  const images = [ig1, ig2, ig3];
  
  return (
    <section className="py-16 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-sans font-medium text-neutral-900 flex items-center gap-2">
            <Instagram className="h-6 w-6" /> Follow Along
          </h3>
          <p className="text-neutral-500 font-light mt-2">@maison_wuppertal</p>
        </div>
        <a href="#" className="hidden sm:inline-block text-sm font-medium border-b border-neutral-900 text-neutral-900 pb-1">
          View Instagram
        </a>
      </div>
      
      <div className="flex w-full overflow-x-hidden">
        {images.map((img, idx) => (
          <div key={idx} className="w-1/3 group relative aspect-square">
            <img 
              src={img} 
              alt={`Instagram post ${idx + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Instagram className="h-8 w-8 text-white drop-shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

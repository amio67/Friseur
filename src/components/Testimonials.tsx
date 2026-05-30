import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Absolutely transformed my hair. The balayage blending is seamless, and the atmosphere in the salon is incredibly relaxing. Wuppertal is lucky to have this place.",
    author: "Elena M.",
    service: "Balayage & Styling"
  },
  {
    quote: "I've been looking for a stylist who understands curly hair for years. The team here listens, advises professionally, and delivers exact results.",
    author: "Sarah K.",
    service: "Curly Cut"
  },
  {
    quote: "Top-tier service from the moment you walk in. The scalp detox treatment followed by a precision cut was exactly what I needed.",
    author: "Jan P.",
    service: "Men's Classic Cut"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-sans font-medium text-neutral-900">Client Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 shadow-sm">
              <Quote className="h-8 w-8 text-neutral-200 mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div>
                <p className="font-medium text-neutral-900">{t.author}</p>
                <p className="text-sm text-neutral-400 font-light">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

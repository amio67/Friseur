import React from 'react';

const services = [
  {
    category: "Styling & Cuts",
    items: [
      { name: "Women's Haircut & Blowdry", price: "from €65" },
      { name: "Men's Classic Cut", price: "from €35" },
      { name: "Wash & Blowdry", price: "from €40" },
      { name: "Special Event Styling", price: "from €85" }
    ]
  },
  {
    category: "Color & Highlights",
    items: [
      { name: "Balayage / Ombré", price: "from €140" },
      { name: "Full Color", price: "from €85" },
      { name: "Root Touch-Up", price: "from €60" },
      { name: "Glossing & Toners", price: "from €45" }
    ]
  },
  {
    category: "Treatments",
    items: [
      { name: "Olaplex Intensive", price: "€45" },
      { name: "Keratin Smoothing", price: "from €200" },
      { name: "Scalp Detox", price: "€30" }
    ]
  }
];

export function Pricing() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">Menu</h2>
          <h3 className="text-3xl md:text-4xl font-sans font-medium text-neutral-900">Services & Pricing</h3>
          <p className="mt-4 text-neutral-500 font-light text-lg">
            Every service is tailored to your unique hair type and styling goals. 
            Final pricing may vary based on hair length and complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((section) => (
            <div key={section.category} className="bg-neutral-50 p-8">
              <h4 className="text-xl font-medium text-neutral-900 mb-6 border-b border-neutral-200 pb-4">
                {section.category}
              </h4>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-baseline">
                    <span className="text-neutral-700 font-light">{item.name}</span>
                    <span className="text-neutral-900 font-medium ml-4 shrink-0">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

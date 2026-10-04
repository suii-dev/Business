import React from 'react';
import { MapPin, Phone, Store, ChevronRight, Navigation } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS_DATA } from '../data/businessData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Wordmark & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div>
                <h3 className="text-xl font-black tracking-tight text-white font-heading">
                  AMIT TRADING
                </h3>
                <p className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                  Wholesale & Retail
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Quality products for ice-cream, bakery, beverages, parties, functions and everyday business needs. Serving businesses, caterers, and families in Delhi.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
              <Store className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Wholesale Bulk Cartons & Retail Supply Available</span>
            </div>
          </div>

          {/* Column 2: Products List (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2 font-heading">
              Our Products
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              {PRODUCTS_DATA.map((product) => (
                <li key={product.id}>
                  <a
                    href="#products"
                    className="hover:text-amber-300 transition-colors flex items-center gap-1 py-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{product.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-blue-400 pl-2 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#who-we-serve" className="hover:text-white transition-colors">Who We Serve</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Address & Contact (2 cols / responsive) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-400 pl-2 font-heading">
              Store & Contact
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  3760, Kanhiya Nagar,<br />
                  Tri Nagar, Delhi - 110035
                </span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Contact:</span>
                </div>
                <div className="pl-6 space-y-1 font-mono text-amber-300 font-bold">
                  {BUSINESS_INFO.phoneNumbers.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className="block hover:underline">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 hover:underline"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Local Footprint */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Amit Trading. All Rights Reserved.</p>
          <p className="text-slate-600">
            Wholesale & Retail · 3760, Kanhiya Nagar, Tri Nagar, Delhi - 110035
          </p>
        </div>

      </div>
    </footer>
  );
};

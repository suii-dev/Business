import React from 'react';
import { ArrowRight, Phone, MapPin, CheckCircle2, ShoppingBag, Truck } from 'lucide-react';
import { BUSINESS_INFO, HERO_IMAGE } from '../data/businessData';
import { TiltCard3D } from './TiltCard3D';

interface HeroProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 perspective-1200">
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Business type subtitle kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-700 bg-amber-100/90 px-3.5 py-1.5 rounded-full border border-amber-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>WHOLESALE & RETAIL SUPPLIER IN DELHI</span>
            </div>

            {/* Main Heading with 3D Depth */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-heading drop-shadow-xs">
                AMIT TRADING
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-700 tracking-wide">
                Wholesale & Retail
              </p>
            </div>

            {/* Main Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Quality products for ice-cream, bakery, beverages, parties, functions and everyday business needs.
            </p>

            {/* Quick trust bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ashoka & Amber Cones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Milkshakes & Mocktails</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Plates & Paper Glasses</span>
              </div>
            </div>

            {/* CTAs with 3D tactile button elevation */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#products"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-3d-btn flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-3d-sm hover:shadow-md transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Local business badges & direct call strip */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>3760, Kanhiya Nagar, Tri Nagar, Delhi - 110035</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Call: {BUSINESS_INFO.phoneNumbers[0]} / {BUSINESS_INFO.phoneNumbers[1]}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Tilt Showcase */}
          <div className="lg:col-span-5 relative">
            <TiltCard3D maxTilt={10} glare={true} className="mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-amber-400 via-orange-500 to-blue-600 shadow-2xl transform-style-3d">
                <div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/3] sm:aspect-[16/11] translate-z-20">
                  <img
                    src={HERO_IMAGE}
                    alt="Amit Trading wholesale ice cream cones, mocktails, bakery and party disposables"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  
                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white translate-z-30">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                      Wholesale & Retail Supplies
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white drop-shadow-sm">
                      Cones · Bakery · Mocktails · Disposables · Plates
                    </p>
                  </div>
                </div>

                {/* Floating 3D feature badge 1: Wholesale */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-3d translate-z-40">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Wholesale Sourcing</div>
                    <div className="text-[11px] text-slate-500">Bulk cartons & supply</div>
                  </div>
                </div>

                {/* Floating 3D feature badge 2: Retail & Functions */}
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow translate-z-40">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Retail & Parties</div>
                    <div className="text-[11px] text-slate-500">Shop as per your need</div>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </div>

        </div>
      </div>
    </section>
  );
};

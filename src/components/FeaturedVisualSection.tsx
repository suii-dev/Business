import React from 'react';
import { ArrowRight, CheckCircle, PackageCheck, Sparkles } from 'lucide-react';
import { HERO_IMAGE, PRODUCTS_DATA } from '../data/businessData';
import { TiltCard3D } from './TiltCard3D';

export const FeaturedVisualSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100 overflow-hidden perspective-1200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Visual Showcase & Mosaic Collage */}
          <div className="lg:col-span-6 relative">
            <TiltCard3D maxTilt={8} glare={true}>
              <div className="relative rounded-3xl overflow-hidden shadow-3d-card border-4 border-slate-100 bg-slate-900 group transform-style-3d">
                <img
                  src={HERO_IMAGE}
                  alt="Amit Trading wholesale supplies: ice cream cones, mocktails, bakery and party disposables"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 translate-z-10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 translate-z-30">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    Tri Nagar, Delhi Hub
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                    Ashoka & Amber Cones · Flavours · Disposables · Plates
                  </h3>
                </div>
              </div>
            </TiltCard3D>

            {/* Thumbnail mini cards with 3D elevation */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {PRODUCTS_DATA.slice(0, 3).map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex items-center gap-2 shadow-3d-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-9 h-9 rounded-lg object-cover shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-900 truncate">{item.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{item.categoryLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Key Value Props */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-xs">
              <PackageCheck className="w-4 h-4 text-emerald-600" />
              <span>COMPREHENSIVE LOCAL SUPPLY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
              Everything You Need, In One Place
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Amit Trading deals in a wide range of products for ice-cream businesses, bakeries, beverage businesses, parties, marriages, functions and everyday requirements.
            </p>

            {/* Features check grid with 3D cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 shadow-3d-sm hover:shadow-md transition-all">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Wholesale Cartons
                </div>
                <p className="text-xs text-slate-600">
                  Bulk order discounts for ice-cream parlours & catering agencies.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 shadow-3d-sm hover:shadow-md transition-all">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Retail Friendly
                </div>
                <p className="text-xs text-slate-600">
                  Convenient small packs for birthday parties & household events.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 shadow-3d-sm hover:shadow-md transition-all">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Ready Stock
                </div>
                <p className="text-xs text-slate-600">
                  Direct pickup and quick order processing in Tri Nagar, Delhi.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 shadow-3d-sm hover:shadow-md transition-all">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Reliable Quality
                </div>
                <p className="text-xs text-slate-600">
                  Crisp cones, authentic flavours and sturdy dining plates.
                </p>
              </div>
            </div>

            {/* 3D Button */}
            <div className="pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-3d-btn cursor-pointer"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

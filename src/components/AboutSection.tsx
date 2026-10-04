import React from 'react';
import { MapPin, Phone, Store, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { Logo } from './Logo';
import { TiltCard3D } from './TiltCard3D';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 perspective-1200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-3d-card transform-style-3d">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Text narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-100/90 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <Store className="w-3.5 h-3.5 text-blue-600" />
                <span>Our Story & Commitment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                About Amit Trading
              </h2>

              {/* Exact narrative text */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  <strong className="text-slate-900 font-semibold">Amit Trading</strong> is a wholesale and retail business located in Tri Nagar, Delhi.
                </p>
                <p>
                  We deal in a wide range of products including <strong className="text-slate-800 font-semibold">ASHOKA CONE</strong>, <strong className="text-slate-800 font-semibold">AMBER CONE</strong>, Ice-Cream & Bakery Goods, Milk Shake & Mocktail Flavours, Birthday & Marriage Disposable Items, Silver Plates, Paper Glass and more.
                </p>
                <p>
                  Our goal is to provide customers with a convenient place to source products for businesses, parties, functions and everyday requirements.
                </p>
                <p className="bg-blue-50/70 p-4 rounded-xl border-l-4 border-blue-600 text-slate-800 font-medium shadow-xs">
                  Whether you need products for your business, an event, a party or personal requirements, Amit Trading offers both wholesale and retail options.
                </p>
              </div>

              {/* Location Highlights */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 shadow-3d-sm">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Store Address</div>
                    <div className="text-xs text-slate-600 mt-0.5">3760, Kanhiya Nagar, Tri Nagar, Delhi - 110035</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 shadow-3d-sm">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Direct Contact</div>
                    <div className="text-xs text-slate-600 mt-0.5 font-semibold text-blue-700">
                      {BUSINESS_INFO.phoneNumbers[0]} · {BUSINESS_INFO.phoneNumbers[1]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Tilt Card with Business Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <TiltCard3D maxTilt={9} glare={true}>
                <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 transform-style-3d border border-white/15">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 translate-z-20">
                    <div>
                      <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Business Highlights</p>
                      <h3 className="text-xl font-bold font-heading text-white">AMIT TRADING</h3>
                    </div>
                    <Logo size="sm" />
                  </div>

                  <div className="space-y-3.5 text-sm translate-z-30">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Ashoka & Amber Cone Supplier</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>All Milk Shake & Mocktail Flavours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Birthday & Marriage Event Disposables</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Heavy Silver Catering Plates & Paper Glasses</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Wholesale Cartons & Retail Packets</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 text-xs text-slate-300 translate-z-20">
                    <p>Serving local retailers, catering agencies, food businesses and household customers in Delhi.</p>
                  </div>
                </div>
              </TiltCard3D>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

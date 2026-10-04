import React from 'react';
import {
  Store,
  Layers,
  Award,
  MapPin,
  Package,
  HeartHandshake,
  ShieldCheck
} from 'lucide-react';
import { TRUST_PILLARS } from '../data/businessData';
import { TiltCard3D } from './TiltCard3D';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'store':
        return <Store className="w-6 h-6 text-blue-600" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-amber-600" />;
      case 'award':
        return <Award className="w-6 h-6 text-emerald-600" />;
      case 'map-pin':
        return <MapPin className="w-6 h-6 text-rose-600" />;
      case 'package':
        return <Package className="w-6 h-6 text-indigo-600" />;
      case 'heart-handshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-white border-t border-slate-100 perspective-1200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Reliable Local Partner
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why Choose Amit Trading?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We focus on reliable supply, genuine product quality, and approachable customer service for wholesale and retail buyers alike.
          </p>
        </div>

        {/* 6 Feature Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <TiltCard3D key={idx} maxTilt={6} glare={true} className="h-full">
              <div className="bg-slate-50/90 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 flex flex-col justify-between space-y-4 h-full transform-style-3d group">
                <div className="space-y-3 translate-z-20">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200">
                    {getPillarIcon(pillar.iconName)}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between text-xs font-semibold text-blue-600 translate-z-30">
                  <span>Amit Trading Assurance</span>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
};

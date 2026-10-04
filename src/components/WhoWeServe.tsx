import React from 'react';
import {
  IceCream,
  Cake,
  Coffee,
  Utensils,
  CupSoda,
  ChefHat,
  CalendarCheck,
  PartyPopper,
  Sparkles,
  ShoppingBag,
  Truck,
  Users
} from 'lucide-react';
import { WHO_WE_SERVE_LIST } from '../data/businessData';
import { TiltCard3D } from './TiltCard3D';

export const WhoWeServe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ice-cream':
        return <IceCream className="w-6 h-6 text-amber-600" />;
      case 'cake':
        return <Cake className="w-6 h-6 text-pink-600" />;
      case 'coffee':
        return <Coffee className="w-6 h-6 text-amber-700" />;
      case 'utensils':
        return <Utensils className="w-6 h-6 text-blue-600" />;
      case 'cup-soda':
        return <CupSoda className="w-6 h-6 text-emerald-600" />;
      case 'chef-hat':
        return <ChefHat className="w-6 h-6 text-orange-600" />;
      case 'calendar-check':
        return <CalendarCheck className="w-6 h-6 text-indigo-600" />;
      case 'party-popper':
        return <PartyPopper className="w-6 h-6 text-purple-600" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'truck':
        return <Truck className="w-6 h-6 text-blue-700" />;
      case 'shopping-bag':
      default:
        return <ShoppingBag className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="who-we-serve" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 perspective-1200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100/90 px-3 py-1 rounded-full uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            Wholesale & Retail Clients
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Who We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From local ice cream parlours and wedding caterers to neighborhood families, Amit Trading provides tailored supplies for every scale.
          </p>
        </div>

        {/* 11 Client Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {WHO_WE_SERVE_LIST.map((client, idx) => (
            <TiltCard3D key={idx} maxTilt={6} glare={true} className="h-full">
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 flex flex-col justify-between space-y-4 h-full transform-style-3d group">
                <div className="space-y-3 translate-z-20">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-blue-50/90 border border-slate-100 flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-xs">
                    {getIcon(client.iconName)}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                      {client.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium translate-z-30">
                  <span>{client.suitableFor}</span>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
};

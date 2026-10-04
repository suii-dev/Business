import React from 'react';
import { Store, Layers, Award, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const highlights = [
    {
      title: 'Wholesale & Retail',
      subtitle: 'Bulk & individual quantities',
      icon: Store,
      iconBg: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Wide Product Range',
      subtitle: 'Cones, bakery, drinks & plates',
      icon: Layers,
      iconBg: 'bg-amber-100 text-amber-700',
    },
    {
      title: 'Quality Products',
      subtitle: 'Reliable stock for daily needs',
      icon: Award,
      iconBg: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'Local & Convenient',
      subtitle: 'Kanhiya Nagar, Tri Nagar, Delhi',
      icon: MapPin,
      iconBg: 'bg-indigo-100 text-indigo-700',
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto perspective-1200">
      <div className="bg-white rounded-2xl shadow-3d-card border border-slate-200/90 p-4 sm:p-6 transform-style-3d hover:shadow-3d-hover transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 group p-2 rounded-xl hover:bg-slate-50/80 transition-all duration-200 transform hover:-translate-y-1 ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

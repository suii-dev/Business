import React from 'react';
import { Phone, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface CallToActionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white py-16 sm:py-20 perspective-1200">
      {/* Decorative ambient 3D glowing orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none animate-float-slow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 transform-style-3d">
        
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 uppercase tracking-wider translate-z-20 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick & Reliable Sourcing</span>
        </div>

        {/* Heading with 3D text shadow */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white leading-tight drop-shadow-md translate-z-30">
          Looking for Products?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed translate-z-20">
          Contact Amit Trading for product availability, wholesale requirements, retail purchases and bulk enquiries.
        </p>

        {/* 3D Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 translate-z-40">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-3d-amber-btn flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </a>

          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl shadow-3d-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View Products</span>
          </a>

          <button
            onClick={() => onOpenEnquiry()}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-blue-900 bg-white hover:bg-slate-100 rounded-xl shadow-3d-sm hover:shadow-3d-hover transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>Send Quick Enquiry</span>
          </button>
        </div>

        {/* Direct Phone Numbers Strip */}
        <div className="pt-6 border-t border-white/15 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200 translate-z-20">
          <span className="font-medium">Call directly for instant stock check:</span>
          <div className="flex items-center gap-4 text-amber-300 font-bold">
            {BUSINESS_INFO.phoneNumbers.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>{phone}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

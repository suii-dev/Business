import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface QuickContactFloatingProps {
  onOpenEnquiry: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 perspective-1000">
      {/* 3D Tactile Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`}
        className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all text-xs font-bold cursor-pointer"
        style={{
          boxShadow: '0 4px 0 #047857, 0 8px 16px rgba(5, 150, 105, 0.35)',
        }}
        aria-label="Call Amit Trading"
      >
        <Phone className="w-4 h-4 animate-bounce" />
        <span className="hidden sm:inline">Call Store: {BUSINESS_INFO.phoneNumbers[0]}</span>
        <span className="sm:hidden">Call</span>
      </a>

      {/* 3D Tactile Quick Quote Button */}
      <button
        onClick={onOpenEnquiry}
        className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all text-xs font-bold cursor-pointer shadow-3d-btn"
        aria-label="Quick Price Enquiry"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Quick 3D Enquiry</span>
      </button>
    </div>
  );
};

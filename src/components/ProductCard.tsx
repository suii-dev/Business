import React, { useState } from 'react';
import { ProductItem } from '../types';
import { MessageSquare, Check, ImageOff } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

interface ProductCardProps {
  product: ProductItem;
  onEnquire: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <TiltCard3D maxTilt={7} glare={true} className="h-full">
      <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-400 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 flex flex-col h-full transform-style-3d">
        
        {/* Product Image Frame with 3D Z-elevation */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 translate-z-20">
          {!imageError ? (
            <img
              src={product.image}
              alt={`${product.name} - Amit Trading wholesale and retail`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 text-slate-400 p-4 text-center">
              <ImageOff className="w-10 h-10 mb-2 text-slate-300" />
              <span className="text-xs font-semibold text-slate-600">{product.name}</span>
            </div>
          )}

          {/* Clean 3D Floating Category Label */}
          <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide shadow-md translate-z-30">
            {product.categoryLabel}
          </div>

          {/* 3D Floating Availability Tag */}
          <div className="absolute bottom-3 right-3 bg-emerald-600/95 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md flex items-center gap-1 translate-z-30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            Wholesale & Retail
          </div>
        </div>

        {/* Content Container with layered 3D depth */}
        <div className="p-5 flex flex-col flex-grow justify-between space-y-4 translate-z-30 transform-style-3d">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors leading-snug">
              {product.name}
            </h3>

            <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {product.description}
            </p>

            {/* Highlights checklist */}
            <div className="pt-2 space-y-1">
              {product.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Area with 3D tactile button */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 translate-z-40">
            <span className="text-[11px] text-slate-500 font-semibold truncate">
              Bulk Cartons & Retail
            </span>

            <button
              onClick={() => onEnquire(product)}
              className="px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-3d-btn transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </button>
          </div>
        </div>
      </div>
    </TiltCard3D>
  );
};

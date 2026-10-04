import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS_DATA } from '../data/businessData';
import { ProductItem } from '../types';
import { ChevronLeft, ChevronRight, RotateCw, Sparkles, MessageSquare, Play, Pause } from 'lucide-react';

interface Showcase3DStageProps {
  onEnquire: (product: ProductItem) => void;
}

export const Showcase3DStage: React.FC<Showcase3DStageProps> = ({ onEnquire }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSpinning, setIsAutoSpinning] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentAngleRef = useRef(0);

  const totalItems = PRODUCTS_DATA.length;
  const angleStep = 360 / totalItems;
  const radius = 340; // Pixel depth for 3D cylinder

  // Auto rotation
  useEffect(() => {
    if (!isAutoSpinning) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => {
        const next = prev - angleStep;
        currentAngleRef.current = next;
        return next;
      });
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoSpinning, angleStep, totalItems]);

  const handlePrev = () => {
    setIsAutoSpinning(false);
    const nextAngle = rotationAngle + angleStep;
    currentAngleRef.current = nextAngle;
    setRotationAngle(nextAngle);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setIsAutoSpinning(false);
    const nextAngle = rotationAngle - angleStep;
    currentAngleRef.current = nextAngle;
    setRotationAngle(nextAngle);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  // Drag to rotate in 3D
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    setIsAutoSpinning(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    const newAngle = currentAngleRef.current + deltaX * 0.4;
    setRotationAngle(newAngle);
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    currentAngleRef.current = rotationAngle;
    // Snap to nearest item
    const snappedIndex = Math.round(-rotationAngle / angleStep) % totalItems;
    const normalizedIndex = (snappedIndex + totalItems) % totalItems;
    setCurrentIndex(normalizedIndex);
  };

  const activeProduct = PRODUCTS_DATA[currentIndex];

  return (
    <div className="relative py-12 px-4 overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white shadow-2xl border border-slate-800">
      
      {/* 3D Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-32 rounded-full bg-amber-500/20 blur-2xl pointer-events-none" />

      {/* Top Controls Header */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Spatial Carousel</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
            3D Product Inspection Stage
          </h3>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoSpinning(!isAutoSpinning)}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 transition-colors flex items-center gap-1.5 text-slate-200 cursor-pointer"
            title="Toggle 3D auto rotation"
          >
            {isAutoSpinning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isAutoSpinning ? 'Pause 3D' : 'Auto 3D'}</span>
          </button>

          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Previous 3D item"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Next 3D item"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3D Viewport Stage */}
      <div
        className="relative h-80 sm:h-96 w-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '1200px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* 3D Cylindrical Ring of Cards */}
        <div
          className="relative w-64 h-72 transform-style-3d transition-transform duration-700 ease-out"
          style={{
            transform: `rotateY(${rotationAngle}deg)`,
          }}
        >
          {PRODUCTS_DATA.map((product, idx) => {
            const itemAngle = idx * angleStep;
            return (
              <div
                key={product.id}
                className="absolute inset-0 w-64 h-72 rounded-2xl p-3 bg-slate-900/90 backdrop-blur-md border border-white/15 shadow-2xl transform-style-3d flex flex-col justify-between"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                }}
              >
                {/* 3D Card Image Frame */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-800 translate-z-20 shadow-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute top-2 left-2 bg-slate-950/80 text-[10px] font-bold text-amber-300 px-2 py-0.5 rounded">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* 3D Card Content */}
                <div className="space-y-1.5 translate-z-30 pt-2">
                  <h4 className="text-sm font-bold text-white font-heading truncate">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* 3D Button */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between translate-z-40">
                  <span className="text-[10px] text-emerald-400 font-semibold">Wholesale & Retail</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnquire(product);
                    }}
                    className="px-2.5 py-1 text-[11px] font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Glowing Ground Pedestal */}
        <div
          className="absolute bottom-4 w-72 h-72 rounded-full pointer-events-none"
          style={{
            transform: 'rotateX(80deg) translateZ(-40px)',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(37, 99, 235, 0.25) 45%, transparent 70%)',
            boxShadow: '0 0 60px 10px rgba(37, 99, 235, 0.3)',
          }}
        />
      </div>

      {/* Active Product Spotlight Detail Card */}
      {activeProduct && (
        <div className="relative z-10 max-w-xl mx-auto mt-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
              Selected in 3D Space:
            </span>
            <h4 className="text-lg font-bold text-white font-heading">
              {activeProduct.name}
            </h4>
            <p className="text-xs text-slate-300">
              {activeProduct.bestFor}
            </p>
          </div>

          <button
            onClick={() => onEnquire(activeProduct)}
            className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-slate-900" />
            <span>Enquire For {activeProduct.name}</span>
          </button>
        </div>
      )}

    </div>
  );
};

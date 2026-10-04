import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  theme = 'light',
  className = ''
}) => {
  // Dimension mappings for the ( AT ) brand emblem badge
  const sizeMap = {
    sm: { box: 'w-11 h-8', textTitle: 'text-lg', textSub: 'text-[10px]' },
    md: { box: 'w-13 h-9.5 sm:w-14 sm:h-10', textTitle: 'text-xl sm:text-2xl', textSub: 'text-[11px]' },
    lg: { box: 'w-16 h-12', textTitle: 'text-2xl sm:text-3xl', textSub: 'text-xs' },
    xl: { box: 'w-20 h-14', textTitle: 'text-3xl sm:text-4xl', textSub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Emblem: ( AT ) side-by-side in luxury badge */}
      <div
        className={`${currentSize.box} relative shrink-0 rounded-xl p-[1.5px] bg-gradient-to-r from-amber-400 via-orange-500 to-blue-600 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
      >
        <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-[#0b1728] via-[#0d1e36] to-[#07111e] flex items-center justify-center overflow-hidden relative shadow-inner">
          {/* Subtle inner radial ambient light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.22),transparent_70%)] pointer-events-none" />

          {/* Scalable Vector Emblem: ( A T ) side by side */}
          <svg
            viewBox="0 0 72 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[88%] h-[88%] drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
            aria-label="Amit Trading AT Brand Logo"
          >
            <defs>
              {/* Gold / Amber Gradient */}
              <linearGradient id="atGoldGrad" x1="0" y1="0" x2="72" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="35%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              {/* Sapphire / Royal Blue Gradient */}
              <linearGradient id="atBlueGrad" x1="16" y1="11" x2="34" y2="41" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="30%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>

              {/* Left bracket gradient */}
              <linearGradient id="bracketLeft" x1="0" y1="10" x2="15" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>

              {/* Right bracket gradient */}
              <linearGradient id="bracketRight" x1="57" y1="10" x2="72" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>

              {/* Top metallic glint gradient */}
              <linearGradient id="metalGlint" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              {/* Drop shadow filter */}
              <filter id="elementShadow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="1.2" stdDeviation="0.8" floodColor="#000000" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* 1. Left Bracket '(' */}
            <path
              d="M 11.5 11 C 5.5 19 5.5 33 11.5 41 C 12.5 42.2 10.8 43.5 9.5 41.8 C 2.8 33 2.8 19 9.5 10.2 C 10.8 8.5 12.5 9.8 11.5 11 Z"
              fill="url(#bracketLeft)"
              filter="url(#elementShadow)"
            />

            {/* 2. Letter 'A' (Side-by-side Left) */}
            <g filter="url(#elementShadow)">
              {/* Outer 'A' geometry with clean cutout */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 25 11 L 34 41 L 29.2 41 L 27.2 34 L 22.8 34 L 20.8 41 L 16 41 L 25 11 Z M 25 18.5 L 26.8 28.5 L 23.2 28.5 L 25 18.5 Z"
                fill="url(#atBlueGrad)"
              />
              {/* Golden accent bar on 'A' crossbar */}
              <path
                d="M 22.8 32 L 27.2 32 L 27.5 33.5 L 22.5 33.5 Z"
                fill="url(#atGoldGrad)"
                opacity="0.9"
              />
            </g>

            {/* 3. Letter 'T' (Side-by-side Right) */}
            <g filter="url(#elementShadow)">
              {/* Top horizontal bar of 'T' */}
              <path
                d="M 37.5 13.5 C 37.5 12 38.8 11 40.5 11 L 53.5 11 C 55.2 11 56.5 12 56.5 13.5 L 55 17.5 C 54.5 18 53.8 18 53 18 L 41 18 C 40.2 18 39.5 18 39 17.5 Z"
                fill="url(#atGoldGrad)"
              />
              {/* Metallic highlight on top edge of 'T' */}
              <path
                d="M 40.5 12 L 53.5 12"
                stroke="url(#metalGlint)"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
              {/* Vertical stem of 'T' */}
              <path
                d="M 44.5 18 L 49.5 18 L 49.5 40 C 49.5 40.8 48.8 41.5 48 41.5 L 46 41.5 C 45.2 41.5 44.5 40.8 44.5 40 Z"
                fill="url(#atGoldGrad)"
              />
            </g>

            {/* 4. Right Bracket ')' */}
            <path
              d="M 60.5 11 C 66.5 19 66.5 33 60.5 41 C 59.5 42.2 61.2 43.5 62.5 41.8 C 69.2 33 69.2 19 62.5 10.2 C 61.2 8.5 59.5 9.8 60.5 11 Z"
              fill="url(#bracketRight)"
              filter="url(#elementShadow)"
            />

            {/* 5. Center Trade Dot / Sparkle at top */}
            <circle cx="36" cy="11.5" r="1.2" fill="#FDE68A" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Brand Typography Lockup */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`${currentSize.textTitle} font-black tracking-tight font-heading leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              AMIT TRADING
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`${currentSize.textSub} font-bold text-amber-600 tracking-wider uppercase`}>
              Wholesale & Retail
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">·</span>
            <span className="text-[10px] font-medium text-slate-500 hidden sm:inline">Delhi</span>
          </div>
        </div>
      )}
    </div>
  );
};

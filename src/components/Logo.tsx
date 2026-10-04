import React, { useState } from 'react';
import crownedLogoImg from '../assets/images/crowned_at_orbit_logo_1791105413838.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showText = false
}) => {
  const [imgError, setImgError] = useState(false);

  // Dimension mappings tuned for the circular crowned emblem
  const dimensionMap = {
    sm: { box: 'w-10 h-10', textTitle: 'text-lg', textSub: 'text-[10px]' },
    md: { box: 'w-12 h-12 sm:w-13 sm:h-13', textTitle: 'text-xl sm:text-2xl', textSub: 'text-[11px]' },
    lg: { box: 'w-16 h-16', textTitle: 'text-2xl sm:text-3xl', textSub: 'text-xs' },
    xl: { box: 'w-20 h-20', textTitle: 'text-3xl', textSub: 'text-sm' },
  };

  const current = dimensionMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Crowned AT Orbit Emblem Container */}
      <div
        className={`relative ${current.box} shrink-0 rounded-full bg-white p-0.5 shadow-sm border border-slate-200/90 hover:border-amber-400 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-md flex items-center justify-center overflow-hidden`}
      >
        {!imgError ? (
          <img
            src={crownedLogoImg}
            alt="Amit Trading Crowned AT Orbit Logo"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain rounded-full transform scale-105 hover:rotate-3 transition-transform duration-300"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-amber-500 to-orange-500 flex items-center justify-center text-white font-black text-sm">
            AT
          </div>
        )}
      </div>

      {/* Optional Integrated Text Brand */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${current.textTitle} font-black tracking-tight text-slate-900 font-heading leading-tight group-hover:text-blue-700 transition-colors`}>
            AMIT TRADING
          </span>
          <span className={`${current.textSub} font-bold text-amber-600 tracking-widest uppercase`}>
            Wholesale & Retail
          </span>
        </div>
      )}
    </div>
  );
};

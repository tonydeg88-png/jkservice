/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  variant?: 'icon' | 'navbar' | 'full' | 'footer';
  size?: number;
  className?: string;
  theme?: 'light' | 'dark'; // 'light' background means dark text, 'dark' background means light text
}

export default function Logo({ variant = 'navbar', size, className = '', theme = 'light' }: LogoProps) {
  // Brand color constants to match the uploaded image perfectly
  const brandGreen = '#8CC63F'; // Precise radiant apple green
  const brandBlue = '#106EBE';  // Professional corporate blue
  const brandGray = '#595959';  // Professional slate/charcoal gray for typography
  const brandWhite = '#FFFFFF';

  // Scales or dimensions
  const defaultSize = variant === 'icon' ? 48 : 42;
  const actualSize = size || defaultSize;

  // The Core Emblem SVG
  const Emblem = ({ isDarkBg = false }: { isDarkBg?: boolean }) => {
    // In dark environments, we can use clean high-contrast white for blue/grey elements so they pop beautifully,
    // while keeping the signature brandGreen accent.
    const activeLeftSwoosh = isDarkBg ? brandWhite : brandBlue;
    const activeRightSwoosh = brandGreen;
    const activeLeftBar = isDarkBg ? brandWhite : brandBlue;
    const activeMiddleBar = brandGreen;
    const activeRightBar = isDarkBg ? brandWhite : brandBlue;

    return (
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        className="shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* Left/Inner swoosh - Blue */}
          <path
            d="M 50 12 A 38 38 0 0 0 12 50 A 38 38 0 0 0 54 88"
            stroke={activeLeftSwoosh}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right/Outer swoosh - Green */}
          <path
            d="M 28 80 A 38 38 0 0 0 88 50 A 38 38 0 0 0 56 12"
            stroke={activeRightSwoosh}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left Bar - Blue */}
          <rect
            x="33"
            y="42"
            width="11"
            height="28"
            rx="1.5"
            fill={activeLeftBar}
          />

          {/* Middle Bar - Green */}
          <rect
            x="48"
            y="30"
            width="11"
            height="40"
            rx="1.5"
            fill={activeMiddleBar}
          />

          {/* Right Bar - Blue */}
          <rect
            x="63"
            y="20"
            width="11"
            height="50"
            rx="1.5"
            fill={activeRightBar}
          />
        </g>
      </svg>
    );
  };

  // Render variant styles
  if (variant === 'icon') {
    return (
      <div 
        className={`flex items-center justify-center rounded-xl p-2.5 shadow-md border border-slate-100 bg-white ${className}`} 
        style={{ width: actualSize, height: actualSize }}
      >
        <Emblem isDarkBg={false} />
      </div>
    );
  }

  if (variant === 'navbar') {
    const isDarkText = theme === 'light';
    return (
      <div className={`flex items-center cursor-pointer group ${className}`}>
        {/* Icon part */}
        <div 
          className={`h-10 w-10 min-w-[40px] rounded-lg flex items-center justify-center p-1.5 transition-all duration-300 group-hover:scale-105 ${
            isDarkText 
              ? 'bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100' 
              : 'bg-white/10 backdrop-blur-md border border-white/20'
          }`}
        >
          <Emblem isDarkBg={!isDarkText} />
        </div>

        {/* Brand Text part */}
        <div className="ml-3 transition-colors">
          <div className="flex items-baseline">
            {/* J&K in bright signature corporate Blue (light theme) or White (dark theme) */}
            <span className={`text-xl font-extrabold tracking-tight transition-colors duration-200 ${
              isDarkText ? 'text-[#106EBE] group-hover:text-[#0b5492]' : 'text-white'
            }`}>
              J&K
            </span>
            {/* SERVICES in executive Charcoal/Slate (light theme) or light Slate (dark theme) */}
            <span className={`text-xl font-extrabold tracking-tight ml-1.5 transition-colors duration-200 ${
              isDarkText ? 'text-[#595959]' : 'text-slate-100'
            }`}>
              SERVICES
            </span>
          </div>
          <span className={`text-[9px] font-bold tracking-wider block -mt-1 uppercase transition-colors duration-200 ${
            isDarkText ? 'text-slate-500' : 'text-slate-300'
          }`}>
            Gestion & Administration d’élite
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center cursor-pointer group ${className}`}>
        {/* Icon part */}
        <div className="h-10 w-10 min-w-[40px] rounded-lg flex items-center justify-center p-1.5 bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:scale-105">
          <Emblem isDarkBg={true} />
        </div>

        {/* Brand Text part for dark background */}
        <div className="ml-3">
          <div className="flex items-baseline">
            <span className="text-xl font-extrabold tracking-tight text-white">
              J&K
            </span>
            <span className="text-xl font-extrabold tracking-tight ml-1.5 text-slate-100">
              SERVICES
            </span>
          </div>
          <span className="text-[9px] font-bold tracking-wider block -mt-1 uppercase text-slate-400">
            Gestion & Administration d’élite
          </span>
        </div>
      </div>
    );
  }

  // Full-featured square branding card matching the uploaded file completely
  return (
    <div 
      className={`inline-flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl border border-slate-100 bg-white ${className}`}
      style={{ width: size ? size * 2 : 280 }}
    >
      <div className="mb-6 p-4 bg-slate-50 rounded-full border border-slate-100 w-24 h-24 flex items-center justify-center shadow-inner">
        <div className="w-16 h-16">
          <Emblem isDarkBg={false} />
        </div>
      </div>
      <h2 
        className="text-4xl font-extrabold tracking-tight text-center flex items-center leading-none"
        style={{ color: brandBlue }}
      >
        J&K
      </h2>
      <p 
        className="text-lg font-bold tracking-[0.25em] text-center uppercase mt-1 leading-none"
        style={{ color: brandGray }}
      >
        SERVICES
      </p>
    </div>
  );
}

import React from 'react';

export default function SchoolLogo({ className = "w-11 h-11", showText = true, lightMode = true }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative flex-shrink-0 rounded-xl overflow-hidden bg-white p-0.5 shadow-sm border border-slate-200/80 ${className}`}>
        <img
          src="/images/logo-tutwuri.jpg"
          alt="Logo Resmi Tut Wuri Handayani SDN 1 Laweyan"
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`text-[17px] font-bold tracking-tight leading-tight ${lightMode ? 'text-slate-900' : 'text-white'}`}>
              SDN 1 LAWEYAN
            </span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
              AKREDITASI A
            </span>
          </div>
          <span className={`text-[11px] font-medium tracking-normal leading-tight ${lightMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Kec. Sumberasih • Kab. Probolinggo (Est. 1962)
          </span>
        </div>
      )}
    </div>
  );
}

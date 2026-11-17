import React from 'react';
import { Bell, ArrowRight, Sparkles } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Ticker() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-xs py-2 px-4 shadow-inner border-b border-blue-950/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400 text-blue-950 font-bold text-[10px] uppercase tracking-wider">
            <Bell className="w-2.5 h-2.5" />
            Pengumuman
          </span>
          <span className="hidden md:inline text-blue-200">|</span>
        </div>

        <div className="flex-1 overflow-hidden relative">
          <div className="inline-block animate-pulse truncate font-medium text-slate-100 text-[12px]">
            {schoolData.announcements[0]}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <a
            href="#ppdb"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline decoration-amber-400/50 hover:decoration-amber-300 transition-colors"
          >
            <span>Info PPDB Lengkap</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

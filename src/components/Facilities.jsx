import React from 'react';
import { Building2, Sparkles, Check } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/60 uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            Sarana &amp; Prasarana
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Fasilitas Penunjang Pembelajaran
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Lingkungan belajar yang bersih, aman, representatif, dan memfasilitasi seluruh aktivitas peserta didik secara maksimal.
          </p>
        </div>

        {/* 6 Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {schoolData.facilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-slate-50/50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-subtle hover:shadow-apple transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Photo Frame */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/95 backdrop-blur-sm text-slate-800 shadow-sm border border-slate-200">
                    {fac.tag}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Kondisi Baik &amp; Terawat</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

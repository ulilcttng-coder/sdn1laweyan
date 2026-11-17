import React from 'react';
import { BookOpen, BookMarked, HeartHandshake, Sparkles, Check, ArrowRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Programs() {
  const iconMap = {
    BookOpen: BookOpen,
    BookMarked: BookMarked,
    HeartHandshake: HeartHandshake,
    Sparkles: Sparkles,
  };

  return (
    <section id="program" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/60 uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Program Unggulan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Program Pembelajaran &amp; Pembiasaan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Metode pendidikan holistik yang menggabungkan kecakapan akademik, penguatan karakter religius, dan kemandirian siswa.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {schoolData.programs.map((program) => {
            const IconComp = iconMap[program.icon] || BookOpen;

            return (
              <div
                key={program.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle hover:shadow-apple transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                      {program.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {program.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-200/60">
                    {program.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-xs text-slate-700 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 flex items-center gap-2 text-xs font-semibold text-blue-700 group-hover:text-blue-800">
                  <span>Kurikulum Berbasis Karakter</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

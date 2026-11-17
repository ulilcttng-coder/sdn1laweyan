import React from 'react';
import { Sparkles, Compass, Trophy, Music, Scroll, Lightbulb, Clock, Calendar } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Extracurriculars() {
  const iconMap = {
    Sparkles: Sparkles,
    Compass: Compass,
    Trophy: Trophy,
    Music: Music,
    Scroll: Scroll,
    Lightbulb: Lightbulb,
  };

  return (
    <section id="ekskul" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200/80 uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Minat &amp; Bakat Siswa
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Kegiatan Ekstrakurikuler
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Wadah pengembangan potensi non-akademik, kepemimpinan, sportivitas, dan kecintaan seni budaya tradisional.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolData.extracurriculars.map((ekskul, idx) => {
            const IconComp = iconMap[ekskul.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-apple transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <IconComp className="w-5 h-5" />
                    </div>
                    
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                      ekskul.highlight === 'Unggulan Sekolah' 
                        ? 'bg-amber-100 text-amber-900 border-amber-300' 
                        : ekskul.highlight === 'Wajib'
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {ekskul.highlight}
                    </span>
                  </div>

                  <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-1">
                    {ekskul.category}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {ekskul.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {ekskul.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>{ekskul.schedule}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

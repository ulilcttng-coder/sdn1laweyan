import React from 'react';
import { Users, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Teachers() {
  return (
    <section id="guru" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/60 uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            Tenaga Pendidik &amp; Kependidikan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Dewan Guru &amp; Staf Sekolah
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Pendidik profesional, berdedikasi, tersertifikasi, dan penuh kasih dalam mendampingi putra-putri Anda.
          </p>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolData.teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-slate-50/60 hover:bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle hover:shadow-apple transition-all duration-300 text-center flex flex-col items-center group"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-md mx-auto">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {teacher.role.includes("Kepala") && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shadow-sm">
                    Pimpinan
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {teacher.name}
              </h3>
              
              <div className="text-xs font-semibold text-blue-700 mt-1">
                {teacher.role}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200/60 w-full">
                <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white border border-slate-200/80 text-slate-600">
                  {teacher.note}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Target, Compass, Heart, BookOpen, Sparkles, BookMarked, ShieldCheck, Users, Eye, X } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function VisionMission() {
  const [boardModalOpen, setBoardModalOpen] = useState(false);
  const missionIcons = [Heart, BookOpen, ShieldCheck, Sparkles, BookMarked, Users];

  return (
    <section id="visi-misi" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-800 border border-blue-200/60 uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-700" />
            Landasan &amp; Arah Tujuan Resmi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Visi dan Misi SDN Laweyan I
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Pedoman kurikulum dan pembinaan karakter resmi yang terdokumentasi pada papan profil satuan pendidikan.
          </p>
        </div>

        {/* Big Vision Banner with BERDASI Focus */}
        <div className="mb-12 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            
            {/* Acronym Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-blue-950 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <Target className="w-4 h-4" />
              VISI SEKOLAH: {schoolData.vision.acronym}
            </div>

            <div className="text-sm sm:text-base text-amber-200 font-semibold tracking-wide uppercase mb-3">
              ({schoolData.vision.motto})
            </div>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-white mb-6">
              "{schoolData.vision.full}"
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-6 border-t border-blue-700/60 text-xs sm:text-sm font-medium">
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/15">
                🌸 Berbudi Pekerti Luhur
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/15">
                💡 Cerdas Bernalar Kritis
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/15">
                🛠️ Terampil &amp; Berbudaya
              </div>
            </div>

            {/* View Official Board Button */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setBoardModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Lihat Foto Papan Profil &amp; Visi Misi Asli</span>
              </button>
            </div>

          </div>
        </div>

        {/* 6 Official Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolData.missions.map((mission, idx) => {
            const IconComp = missionIcons[idx % missionIcons.length];

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-subtle hover:shadow-apple transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold font-mono text-slate-300 group-hover:text-blue-300 transition-colors">
                      {mission.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {mission.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {mission.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-700">
                  <span>Misi Resmi #{mission.number}</span>
                  <span className="text-slate-400 font-normal">SDN Laweyan I</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal View Papan Profil Asli */}
      {boardModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setBoardModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Papan Data Profil &amp; Visi Misi Resmi SDN Laweyan I
                </h3>
                <p className="text-xs text-slate-500">
                  Dokumentasi arsip fisik sekolah di Jl. Sukapura No. 25 Sumberasih
                </p>
              </div>
              <button
                type="button"
                onClick={() => setBoardModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={schoolData.meta.images.board}
                alt="Papan Profil dan Visi Misi Sekolah SDN Laweyan I"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex justify-between items-center">
              <span>NPSN: 20546586 • NSS: 101052005026 • Tahun Berdiri: 1962</span>
              <button
                type="button"
                onClick={() => setBoardModalOpen(false)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

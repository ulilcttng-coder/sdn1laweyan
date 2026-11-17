import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  BookOpen, 
  BookmarkSimple, 
  Compass, 
  CheckCircle, 
  Laptop, 
  Sparkle,
  Student,
  HandsPraying
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function AcademicPage() {
  const { programs } = schoolData;

  return (
    <div className="space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Akademik & Kurikulum' }]} />

      <div className="w-[85%] max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-5 text-left">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Kurikulum &amp; KBM
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Akademik &amp; Kurikulum Merdeka
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Pendekatan pembelajaran berpusat pada murid, penguatan karakter Profil Pelajar Pancasila, dan budaya literasi-numerasi.
          </p>
        </div>

        {/* 4 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <BookOpen size={24} weight="bold" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} weight="fill" className="text-emerald-600 flex-shrink-0" />
                      <span className="text-xs text-slate-700 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-semibold text-blue-700">
                Penerapan Kurikulum Merdeka SDN 1 Laweyan
              </div>
            </div>
          ))}
        </div>

        {/* ANBK & Digitalisasi Banner */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-left">
            <span className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500 text-white">
              Digitalisasi Pendidikan
            </span>
            <h3 className="text-xl font-bold">
              Kesiapan Asesmen Nasional Berbasis Komputer (ANBK)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              SD Negeri Laweyan I dilengkapi fasilitas komputer dan Chromebook bantuan Kemendikbudristek untuk membiasakan siswa dengan literasi teknologi serta pelaksanaan asesmen secara mandiri.
            </p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-blue-400">
            <Laptop size={32} weight="bold" />
          </div>
        </div>

      </div>

    </div>
  );
}

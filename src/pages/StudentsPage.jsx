import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  Sparkle, 
  Compass, 
  Trophy, 
  MusicNotes, 
  Scroll, 
  Lightbulb, 
  Clock, 
  CheckCircle,
  Medal,
  Users
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function StudentsPage() {
  const { extracurriculars } = schoolData;

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Compass': return <Compass size={22} weight="bold" />;
      case 'Trophy': return <Trophy size={22} weight="bold" />;
      case 'Music': return <MusicNotes size={22} weight="bold" />;
      case 'Scroll': return <Scroll size={22} weight="bold" />;
      case 'Lightbulb': return <Lightbulb size={22} weight="bold" />;
      default: return <Sparkle size={22} weight="bold" />;
    }
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Kesiswaan & Ekstrakurikuler' }]} />

      <div className="w-[80%] mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-5 text-left">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Pengembangan Minat &amp; Bakat
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Kesiswaan &amp; Ekstrakurikuler
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Wadah berekspresi, pembinaan kepemimpinan Pramuka, prestasi olahraga, seni, dan penguatan karakter Profil Pelajar Pancasila.
          </p>
        </div>

        {/* Banner Kegiatan Siswa */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-3xl p-6 sm:p-10 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3 text-left">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/20">
              Profil Pelajar Pancasila
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Mendidik Generasi BERDASI yang Aktif, Kreatif &amp; Berprestasi
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Di SD Negeri Laweyan I, setiap murid didorong untuk mengeksplorasi potensi diri melalui beragam program ekstrakurikuler terstruktur, bimbingan keagamaan, serta aktivitas kepemimpinan yang menyenangkan dan mendidik.
            </p>
          </div>
        </section>

        {/* Ekstrakurikuler Cards Grid */}
        <section className="space-y-6">
          <div className="text-left">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Aktivitas Pilihan Siswa
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
              Program Ekstrakurikuler Unggulan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((e, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                      {getIcon(e.icon)}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      {e.highlight}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {e.category}
                  </span>
                  
                  <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-2">
                    {e.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {e.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <Clock size={15} className="text-slate-400" />
                  <span>{e.schedule}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}

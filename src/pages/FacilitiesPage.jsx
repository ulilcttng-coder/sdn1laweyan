import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  Buildings, 
  Check, 
  ChalkboardTeacher, 
  UsersThree, 
  Books, 
  Desktop, 
  Drop, 
  ShieldCheck,
  Sparkle
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function FacilitiesPage() {
  const { facilities, generalFacilities } = schoolData;

  const getFacilityIcon = (iconName) => {
    switch(iconName) {
      case 'ChalkboardTeacher': return <ChalkboardTeacher size={24} weight="bold" className="text-blue-600" />;
      case 'UsersThree': return <UsersThree size={24} weight="bold" className="text-indigo-600" />;
      case 'Books': return <Books size={24} weight="bold" className="text-amber-600" />;
      case 'Desktop': return <Desktop size={24} weight="bold" className="text-cyan-600" />;
      case 'Drop': return <Drop size={24} weight="bold" className="text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck size={24} weight="bold" className="text-violet-600" />;
      default: return <Sparkle size={24} weight="bold" className="text-blue-600" />;
    }
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Sarana & Prasarana' }]} />

      <div className="w-[85%] max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-5 text-left">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Lingkungan Belajar
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Sarana &amp; Fasilitas Sekolah
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Gedung dan tanah milik sendiri di Jl. Sukapura No. 25, Desa Laweyan, Kecamatan Sumberasih dengan lingkungan belajar asri, aman, dan nyaman.
          </p>
        </div>

        {/* Section 1: Fasilitas Utama (Foto Asli) */}
        <div className="space-y-6">
          <div className="text-left">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Dokumentasi Resmi
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
              Gedung &amp; Halaman Terverifikasi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow text-left"
              >
                <div className="h-56 bg-slate-100 overflow-hidden relative">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-white/95 text-[11px] font-bold text-slate-900 shadow border border-slate-200">
                      {fac.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <Check size={16} weight="bold" />
                    <span>Kondisi Asli &amp; Terawat</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Prasarana Pembelajaran (Spesifikasi Bersih Tanpa Foto Dummy) */}
        {generalFacilities && generalFacilities.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="text-left border-t border-slate-200 pt-8">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Kelengkapan Ruang &amp; Sanitasi
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
                Prasarana Penunjang Pembelajaran
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Data sarana prasarana fisik resmi yang dikelola secara berkala untuk kenyamanan seluruh siswa dan tenaga pendidik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {generalFacilities.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        {getFacilityIcon(item.icon)}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center gap-1 text-[11px] font-medium text-slate-500">
                    <Check size={14} className="text-emerald-600" weight="bold" />
                    <span>Satuan Pendidikan SD Negeri Laweyan I</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

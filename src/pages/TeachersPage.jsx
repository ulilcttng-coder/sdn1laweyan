import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Users, GraduationCap, IdentificationCard } from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function TeachersPage() {
  const { teachers } = schoolData;

  return (
    <div className="space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Dewan Guru & Tenaga Kependidikan' }]} />

      <div className="w-[80%] mx-auto space-y-10">
        
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-5 text-left">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Sumber Daya Manusia
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Dewan Guru &amp; Tenaga Kependidikan
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Pendidik profesional, tersertifikasi, dan berdedikasi membimbing putra-putri SD Negeri Laweyan I.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <div className="relative mb-4">
                <div className="w-28 h-32 rounded-xl overflow-hidden border-2 border-slate-200 shadow mx-auto bg-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {t.role.includes("Kepala") && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shadow">
                    Kepala Sekolah
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {t.name}
              </h3>
              
              <div className="text-xs font-semibold text-blue-700 mt-1">
                {t.role}
              </div>

              <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                NIP. {t.nip}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 w-full">
                <span className="inline-block px-2.5 py-1 rounded text-[11px] font-medium bg-slate-50 border border-slate-200 text-slate-600">
                  {t.note}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

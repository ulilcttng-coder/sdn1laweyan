import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  Building, 
  Target, 
  Compass, 
  CheckCircle, 
  User, 
  MapPin, 
  CalendarCheck, 
  ShieldCheck,
  GraduationCap
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function ProfilePage() {
  const { meta, headmaster, vision, missions, teachers } = schoolData;

  const schoolIdentityList = [
    { no: "1", label: "NAMA SEKOLAH", value: "SD NEGERI LAWEYAN I" },
    { no: "2", label: "NOMOR INDUK SEKOLAH (NPSN)", value: "20546586", isHighlight: true },
    { no: "3", label: "NOMOR STATISTIK (NSS)", value: "101052005026", isHighlight: true },
    { no: "4", label: "PROPINSI", value: "JAWA TIMUR" },
    { no: "5", label: "OTONOMI DAERAH", value: "KABUPATEN PROBOLINGGO" },
    { no: "6", label: "DESA / KELURAHAN", value: "LAWEYAN" },
    { no: "7", label: "KECAMATAN", value: "SUMBERASIH" },
    { no: "8", label: "JALAN DAN NOMOR", value: "JL. SUKAPURA NO. 25" },
    { no: "9", label: "KODE POS", value: "67251" },
    { no: "10", label: "TELEPON", value: "08283943851" },
    { no: "11", label: "FAKSIMILI / FAX", value: "-" },
    { no: "12", label: "DAERAH", value: "PEDESAAN" },
    { no: "13", label: "STATUS SEKOLAH", value: "NEGERI", isHighlight: true },
    { no: "14", label: "KELOMPOK SEKOLAH", value: "-" },
    { no: "15", label: "AKREDITASI", value: "A (AMAT BAIK)", isHighlight: true },
    { no: "16", label: "SURAT KELEMBAGAAN", value: "-" },
    { no: "17", label: "PENERBIT SK", value: "PEMERINTAH KABUPATEN PROBOLINGGO" },
    { no: "18", label: "TAHUN BERDIRI", value: "1962", isHighlight: true },
    { no: "19", label: "TAHUN PERUBAHAN", value: "-" },
    { no: "20", label: "KEGIATAN BELAJAR MENGAJAR", value: "PAGI HARI" },
    { no: "21", label: "BANGUNAN SEKOLAH", value: "MILIK SENDIRI", isHighlight: true },
    { 
      no: "22", 
      label: "LOKASI SEKOLAH", 
      value: "A. Jarak ke Pusat Kecamatan: 500 M\nB. Jarak ke Pusat Otoda (Kabupaten): 30 KM\nC. Terletak pada Lintasan: Desa & Kecamatan" 
    },
    { no: "23", label: "JUMLAH KEANGGOTAAN RAYON", value: "-" },
    { no: "24", label: "ORGANISASI PENYELENGGARA", value: "PEMERINTAH" },
    { no: "25", label: "PERJALANAN PERUBAHAN SEKOLAH", value: "SD Negeri Sejak 1962" }
  ];

  return (
    <div className="w-full flex flex-col space-y-10 pb-16">
      
      {/* 1. Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Profil Sekolah' }]} />

      {/* 2. Page Header Banner (Full Width) */}
      <section className="w-full bg-white border-b border-slate-200 py-8 text-left">
        <div className="w-[85%] max-w-7xl mx-auto">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Dokumen Resmi Sekolah
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Profil, Identitas, Visi &amp; Misi Sekolah
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Transkrip resmi data pokok identitas sekolah, visi BERDASI, dan 6 misi SD Negeri Laweyan I, Kecamatan Sumberasih, Kabupaten Probolinggo.
          </p>
        </div>
      </section>

      {/* 3. Sambutan Kepala Sekolah */}
      <section className="w-[85%] max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-48 h-60 sm:w-56 sm:h-68 rounded-2xl overflow-hidden border-4 border-slate-100 shadow-md bg-slate-50">
                <img
                  src={headmaster.photo}
                  alt={headmaster.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-3.5">
                {headmaster.name}
              </h3>
              <p className="text-xs font-bold text-blue-700">
                {headmaster.title}
              </p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {headmaster.role}
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                <User size={14} weight="bold" />
                <span>Kepala Satuan Pendidikan</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Sambutan Kepala SD Negeri Laweyan I
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                "{headmaster.speech}"
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck size={18} weight="bold" className="text-emerald-600 flex-shrink-0" />
                <span>SDN 1 Laweyan menjunjung tinggi nilai integritas, sekolah ramah anak, dan bebas dari perundungan.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PAPAN PROFIL & VISI MISI RESMI (REPLIKA TEKS LENGKAP) */}
      <section className="w-[85%] max-w-7xl mx-auto space-y-6 text-left">
        
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Transkrip Papan Profil Sekolah
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
            Papan Data Resmi Satuan Pendidikan
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Berikut adalah transkrip lengkap berupa teks langsung dari papan data profil dan visi-misi resmi yang terpasang di SDN Laweyan I:
          </p>
        </div>

        {/* Big 2-Column Board Replica in Clean Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SISI KIRI: IDENTITAS SEKOLAH (Point 1 - 25) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden flex flex-col">
            
            {/* Header Board Identitas */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 border-b border-blue-950">
              <div className="text-[11px] font-bold tracking-widest text-blue-200 uppercase">
                PROFIL SEKOLAH
              </div>
              <h3 className="text-lg font-black tracking-tight text-amber-300">
                IDENTITAS SEKOLAH
              </h3>
            </div>

            {/* List Table Identitas */}
            <div className="divide-y divide-slate-200 text-xs sm:text-sm">
              {schoolIdentityList.map((item) => (
                <div 
                  key={item.no}
                  className={`grid grid-cols-12 py-2.5 px-4 items-start gap-2 ${
                    item.isHighlight ? 'bg-blue-50/60 font-semibold' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="col-span-1 font-mono font-bold text-slate-400 text-center">
                    {item.no}
                  </div>
                  <div className="col-span-5 font-bold text-slate-700 uppercase tracking-tight text-[11.5px] sm:text-xs">
                    {item.label}
                  </div>
                  <div className="col-span-6 text-slate-900 whitespace-pre-line font-medium">
                    {item.isHighlight ? (
                      <span className="font-extrabold text-blue-950">{item.value}</span>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* SISI KANAN: VISI DAN MISI SEKOLAH */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Box Visi & Misi */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden text-left flex flex-col">
              
              {/* Header Board Visi Misi */}
              <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white p-4 border-b border-slate-800">
                <div className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                  VISI DAN MISI SEKOLAH
                </div>
                <h3 className="text-lg font-black tracking-tight text-amber-300">
                  SDN LAWEYAN I
                </h3>
              </div>

              <div className="p-5 sm:p-6 space-y-6">
                
                {/* Bagian Visi Sekolah */}
                <div className="border-b border-slate-200 pb-5 space-y-2">
                  <span className="inline-block px-3 py-1 rounded bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-wider">
                    VISI SEKOLAH
                  </span>
                  
                  <div className="pt-2">
                    <div className="text-xl font-black text-blue-950 tracking-tight">
                      {vision.acronym}
                    </div>
                    <div className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                      ({vision.motto})
                    </div>
                  </div>

                  <p className="text-base font-bold text-slate-800 leading-snug pt-1 italic">
                    "{vision.full}"
                  </p>
                </div>

                {/* Bagian Misi Sekolah (6 Butir) */}
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
                    MISI SEKOLAH
                  </span>

                  <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    {missions.map((m) => (
                      <li key={m.number} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-mono font-black text-xs flex items-center justify-center mt-0.5">
                          {m.number}
                        </span>
                        <div className="leading-relaxed">
                          <strong className="text-slate-900">{m.title} :</strong>{' '}
                          <span>{m.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

              </div>

            </div>

            {/* Catatan Ringkas */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-800">Catatan Kelembagaan:</div>
              <p>
                SD Negeri Laweyan I berdiri sejak tahun 1962 dan bertempat di tanah serta gedung milik sendiri di Jl. Sukapura No. 25, Desa Laweyan, Kecamatan Sumberasih, Kabupaten Probolinggo.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* 5. Dewan Guru & Staf (Sementara Kepala Sekolah Saja) */}
      <section className="w-[85%] max-w-7xl mx-auto space-y-4 text-left">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Pimpinan Sekolah
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
            Kepala Satuan Pendidikan
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Pimpinan SD Negeri Laweyan I, Kecamatan Sumberasih, Kabupaten Probolinggo:
          </p>
        </div>

        <div className="max-w-md">
          {teachers.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow text-left"
            >
              <div className="w-24 h-28 rounded-xl overflow-hidden border-2 border-slate-200 shadow flex-shrink-0 bg-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider mb-1.5 shadow-sm">
                  Kepala Sekolah
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {t.name}
                </h3>
                <div className="text-xs font-semibold text-blue-700 mt-0.5">
                  {t.role}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  SD Negeri Laweyan I
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

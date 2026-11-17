import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  GraduationCap, 
  Users, 
  Medal, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  CalendarBlank,
  BookOpen,
  Sparkle,
  PhoneCall,
  UserPlus,
  ShieldCheck,
  CaretRight,
  Clock,
  Newspaper,
  Eye,
  FileText
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function HomePage() {
  const { meta, headmaster, vision, news, statistics } = schoolData;

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. Hero Section (Full Width Background with Integrated Stats) */}
      <section className="w-full bg-gradient-to-b from-blue-50/70 via-slate-50 to-white pt-10 pb-16 border-b border-slate-200">
        <div className="w-[85%] max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm text-xs">
                <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold text-[10px]">
                  NPSN {meta.npsn}
                </span>
                <span className="text-slate-700 font-bold text-[11px]">
                  Terakreditasi A (Unggul)
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600 font-medium text-[11px]">
                  Kurikulum Merdeka
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                Membentuk Generasi Cerdas, Berkarakter &amp; Berbudi Luhur
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Selamat datang di portal resmi <strong>SD Negeri Laweyan I</strong>, Kecamatan Sumberasih, Kabupaten Probolinggo. Berdiri sejak tahun 1962, kami mengemban amanah mewujudkan peserta didik <strong>BERDASI</strong> (Berbudi Pekerti Luhur, Cerdas, dan Terampil) yang beriman, bertakwa, serta bernalar kritis.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/ppdb"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
                >
                  <FileText size={16} weight="bold" />
                  <span>Tata Cara Pendaftaran PPDB</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>

                <Link
                  to="/profil"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
                >
                  <BookOpen size={16} weight="bold" className="text-blue-600" />
                  <span>Jelajahi Profil &amp; Visi BERDASI</span>
                </Link>
              </div>

              {/* Badges Info */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} weight="fill" className="text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">100% Bebas SPP (BOSP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} weight="fill" className="text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">Gedung Milik Sendiri (1962)</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle size={18} weight="fill" className="text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">Sekolah Ramah Anak</span>
                </div>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <div className="relative h-80 sm:h-96">
                  <img
                    src={meta.images.building}
                    alt="Gedung Asli SDN 1 Laweyan Sumberasih Probolinggo"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                    <span className="inline-block px-2 py-0.5 rounded bg-blue-600 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      Foto Asli Halaman &amp; Gedung Sekolah
                    </span>
                    <h3 className="text-sm sm:text-base font-bold leading-snug">
                      SD Negeri Laweyan I, Kec. Sumberasih
                    </h3>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Jl. Sukapura No. 25, Desa Laweyan, Kab. Probolinggo (Est. 1962)
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Integrated Statistics Grid Ribbon */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {statistics.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-sm text-left flex flex-col justify-between"
              >
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {s.label}
                </div>
                <div className="text-xl font-black text-slate-900 tracking-tight my-1">
                  {s.value}
                </div>
                <div className="text-[11px] text-blue-700 font-semibold truncate">
                  {s.subtitle}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Sambutan Kepala Sekolah (Full Width White) */}
      <section className="w-full bg-white py-16 border-b border-slate-200">
        <div className="w-[85%] max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Kepala Sekolah Card */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-48 h-60 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-4 border-slate-100 shadow-md bg-slate-50">
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
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                {headmaster.role}
              </p>
            </div>

            {/* Speech Text */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                <Sparkle size={14} weight="bold" className="text-blue-600" />
                <span>Sambutan Pimpinan Sekolah</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Membina Generasi "BERDASI" Berlandaskan Karakter Luhur
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                "{headmaster.speech}"
              </p>

              <div className="pt-3">
                <Link
                  to="/profil"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 underline"
                >
                  <span>Baca Profil Lengkap, Data Pokok &amp; Visi Misi</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Visi & Misi BERDASI (Full Width Dark Navy Banner Band) */}
      <section className="w-full bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="w-[85%] max-w-7xl mx-auto text-center space-y-6">
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-400 text-blue-950 text-xs font-black uppercase tracking-widest">
            VISI SEKOLAH: {vision.acronym}
          </div>

          <div className="text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            ({vision.motto})
          </div>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-black max-w-4xl mx-auto leading-tight text-white/95">
            "{vision.full}"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-4 text-xs font-bold text-slate-300">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              🌸 Berbudi Pekerti Luhur
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              💡 Cerdas Bernalar Kritis
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              🛠️ Terampil &amp; Mandiri
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/profil"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow"
            >
              <Eye size={16} weight="bold" />
              <span>Pelajari 6 Misi &amp; Transkrip Profil Lengkap</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Berita & Pengumuman Sekolah (Full Width White) */}
      <section className="w-full bg-white py-16 border-b border-slate-200">
        <div className="w-[85%] max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Informasi &amp; Pengumuman
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                Kabar Terkini Satuan Pendidikan
              </h2>
            </div>

            <Link
              to="/berita"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
            >
              <span>Lihat Semua Berita</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:bg-white hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2.5">
                    <span className="px-2 py-0.5 rounded font-bold bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarBlank size={13} weight="bold" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span className="text-[11px] font-normal text-slate-400">{item.readTime}</span>
                  <Link to="/berita" className="flex items-center gap-1 hover:underline">
                    Baca <ArrowRight size={12} weight="bold" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Call to Action PPDB (Full Width Blue Band) */}
      <section className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-14">
        <div className="w-[85%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-blue-950 inline-block">
              Penerimaan Siswa Baru
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Informasi &amp; Tata Cara PPDB SDN 1 Laweyan
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
              Pelaksanaan pendaftaran peserta didik baru mengacu pada mekanisme portal resmi pemerintah. Layanan bantuan dan verifikasi berkas tersedia langsung di loket sekolah.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/ppdb"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs bg-white text-blue-900 hover:bg-blue-50 transition-all shadow-lg"
            >
              <FileText size={16} weight="bold" />
              <span>Lihat Tata Cara &amp; Syarat PPDB</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

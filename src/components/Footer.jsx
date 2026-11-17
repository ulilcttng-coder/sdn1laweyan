import React from 'react';
import { Link } from 'react-router-dom';
import SchoolLogo from './SchoolLogo';
import { 
  ArrowUp, 
  MapPin, 
  EnvelopeSimple, 
  Phone, 
  Buildings, 
  ShieldCheck, 
  GraduationCap,
  CaretRight
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="w-[85%] max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Identity & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <SchoolLogo lightMode={false} className="w-12 h-12" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-1">
              SD Negeri Laweyan I adalah satuan pendidikan formal dasar di bawah naungan Dinas Pendidikan dan Kebudayaan Kabupaten Probolinggo. Berdiri sejak tahun 1962 dengan gedung milik sendiri, berkomitmen mendidik siswa berkarakter <strong>BERDASI</strong> (Berbudi Pekerti Luhur, Cerdas, dan Terampil) berlandaskan nilai-nilai Profil Pelajar Pancasila.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-800 text-blue-400 border border-slate-700">
                NPSN: 20546586
              </span>
              <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-800 text-amber-400 border border-slate-700">
                Akreditasi A
              </span>
              <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-800 text-emerald-400 border border-slate-700">
                Kurikulum Merdeka
              </span>
              <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                Est. 1962
              </span>
            </div>
          </div>

          {/* Col 2: Halaman Utama (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Halaman Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link to="/profil" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Profil Sekolah</span>
                </Link>
              </li>
              <li>
                <Link to="/akademik" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Akademik &amp; KBM</span>
                </Link>
              </li>
              <li>
                <Link to="/fasilitas" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Fasilitas Gedung</span>
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Galeri Dokumentasi</span>
                </Link>
              </li>
              <li>
                <Link to="/berita" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Berita &amp; Warta</span>
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Kontak &amp; Lokasi</span>
                </Link>
              </li>
              <li>
                <Link to="/ppdb" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>PPDB Online</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Resmi (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Tautan Eksternal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://kemendikdasmen.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Kemendikdasmen RI</span>
                </a>
              </li>
              <li>
                <a href="https://probolinggokab.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Pemkab Probolinggo</span>
                </a>
              </li>
              <li>
                <a href="https://dapo.kemdikbud.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Dapodik Kemendikbud</span>
                </a>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CaretRight size={12} weight="bold" className="text-blue-500" />
                  <span>Hubungi Sekolah</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak Cepat & Lokasi (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sekretariat &amp; Lokasi
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} weight="bold" className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Sukapura No. 25, Desa Laweyan, Kec. Sumberasih, Kab. Probolinggo 67251</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeSimple size={16} weight="bold" className="text-emerald-400 flex-shrink-0" />
                <span className="break-all">{schoolData.meta.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} weight="bold" className="text-amber-400 flex-shrink-0" />
                <span>{schoolData.meta.contact.phone}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/ppdb"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                Pendaftaran Siswa Baru (PPDB)
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} SD Negeri Laweyan I Probolinggo. Seluruh Hak Cipta Dilindungi.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Desa Laweyan, Kec. Sumberasih, Kab. Probolinggo</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Kembali ke atas"
            >
              <ArrowUp size={14} weight="bold" />
              <span className="text-[11px] font-medium">Ke Atas</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

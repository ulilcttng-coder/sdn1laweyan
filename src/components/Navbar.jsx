import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SchoolLogo from './SchoolLogo';
import { 
  Phone, 
  EnvelopeSimple, 
  Clock, 
  List, 
  X, 
  UserPlus, 
  MapPin, 
  CaretDown,
  Student
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', to: '/' },
    { label: 'Profil Sekolah', to: '/profil' },
    { label: 'Akademik', to: '/akademik' },
    { label: 'Fasilitas', to: '/fasilitas' },
    { label: 'Galeri', to: '/galeri' },
    { label: 'Berita', to: '/berita' },
    { label: 'Kontak', to: '/kontak' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      
      {/* 1. Top Bar Kontak & Data Resmi (Full Width) */}
      <div className="w-full bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="w-[85%] max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={14} weight="bold" className="text-blue-400" />
              <span>Jl. Sukapura No. 25, Sumberasih, Probolinggo</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Phone size={14} weight="bold" className="text-emerald-400" />
              <span>{schoolData.meta.contact.phone}</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <EnvelopeSimple size={14} weight="bold" className="text-amber-400" />
              <span>{schoolData.meta.contact.email}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <Clock size={13} weight="bold" />
              <span>KBM: 06.45 - 12.30 WIB</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-mono font-bold border border-blue-800">
              NPSN: {schoolData.meta.npsn}
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
              Akreditasi A
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Brand & Nav Bar (Full Width) */}
      <div className="w-full border-b border-slate-200">
        <div className="w-[85%] max-w-7xl mx-auto py-3.5 flex items-center justify-between">
          
          {/* Logo & School Header */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 shadow-sm border border-slate-200 flex-shrink-0">
              <img
                src={schoolData.meta.images.logo}
                alt="Logo Tut Wuri Handayani"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-800 transition-colors">
                  SD NEGERI LAWEYAN I
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
                  NEGERI
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Kecamatan Sumberasih, Kabupaten Probolinggo • Berdiri Sejak 1962
              </p>
            </div>
          </Link>

          {/* Right CTA PPDB Button */}
          <div className="hidden lg:flex items-center gap-2.5">
            <NavLink
              to="/ppdb"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all"
            >
              <UserPlus size={16} weight="bold" />
              <span>PPDB Online 2026/2027</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <NavLink
              to="/ppdb"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600"
            >
              PPDB
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Navigation Bar Strip (Full Width, Blue/Clean Tint) */}
      <div className="hidden lg:block w-full bg-slate-50 border-b border-slate-200/90">
        <div className="w-[85%] max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center space-x-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 text-xs font-bold transition-all duration-150 inline-flex items-center gap-1.5 border-b-2 ${
                    isActive
                      ? 'border-blue-600 text-blue-700 bg-white font-extrabold shadow-sm'
                      : 'border-transparent text-slate-600 hover:text-blue-700 hover:bg-slate-100'
                  }`
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="text-[11px] font-semibold text-slate-500">
            Visi: <span className="text-blue-700 font-bold">BERDASI</span> (Berbudi Pekerti Luhur, Cerdas &amp; Terampil)
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 shadow-lg">
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/ppdb"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 text-center"
          >
            <UserPlus size={16} weight="bold" />
            <span>Pendaftaran PPDB Baru</span>
          </NavLink>
        </div>
      )}

    </header>
  );
}

import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Camera, Eye, X, Info, ShieldCheck } from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filters = [
    { id: 'all', label: 'Semua Dokumentasi Asli' },
    { id: 'Fasilitas & Lingkungan', label: 'Gedung & Halaman' },
    { id: 'Identitas Resmi', label: 'Papan Profil & Visi Misi' },
    { id: 'Kepemimpinan', label: 'Kepala Sekolah' }
  ];

  const filteredPhotos = activeFilter === 'all'
    ? schoolData.gallery
    : schoolData.gallery.filter(item => item.category === activeFilter);

  return (
    <div className="w-full flex flex-col space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Galeri Dokumentasi' }]} />

      <div className="w-[85%] max-w-7xl mx-auto space-y-8 text-left">
        
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Dokumentasi Resmi Terverifikasi
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck size={12} weight="bold" />
              100% Foto Asli SDN 1 Laweyan
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Galeri Foto SD Negeri Laweyan I
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Dokumentasi fisik resmi gedung sekolah, halaman aktivitas siswa, papan transparansi visi misi, dan kepemimpinan sekolah.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (3 columns for pristine display) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="h-64 overflow-hidden bg-slate-100 relative">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-xs font-medium">
                    <Eye size={16} weight="bold" />
                    <span>Perbesar Foto</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-white/95 text-[10px] font-bold text-slate-900 shadow border border-slate-200">
                    {photo.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                  <span>Klik untuk melihat resolusi penuh</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Info */}
        <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-3 text-left">
          <Info size={20} className="text-blue-700 flex-shrink-0 mt-0.5" weight="bold" />
          <div className="text-xs text-blue-900 leading-relaxed">
            <span className="font-bold">Informasi Dokumentasi:</span> Seluruh foto di galeri ini merupakan dokumentasi otentik lingkungan SD Negeri Laweyan I. Dokumentasi agenda kegiatan belajar, upacara bendera, dan peringatan hari besar akan ditambahkan secara berkala oleh tim sekolah.
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-slate-900 flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-colors shadow"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            <div className="p-5 text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {selectedPhoto.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] font-medium text-slate-500">
                  SD Negeri Laweyan I
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

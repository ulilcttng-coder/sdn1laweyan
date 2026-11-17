import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Newspaper, CalendarBlank, Clock, ArrowRight, X } from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function NewsPage() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div className="space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Berita & Pengumuman' }]} />

      <div className="w-[85%] max-w-7xl mx-auto space-y-10">
        
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-5 text-left">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Informasi Publik
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Berita &amp; Pengumuman Terkini
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Warta kegiatan sekolah, prestasi murid, dan pengumuman resmi seputar SD Negeri Laweyan I.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolData.news.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-blue-700 border border-blue-100">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarBlank size={14} weight="bold" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-800">
                <span className="flex items-center gap-1 font-normal text-slate-400">
                  <Clock size={14} weight="bold" />
                  {item.readTime}
                </span>
                <span className="flex items-center gap-1">
                  Baca Selengkapnya <ArrowRight size={14} weight="bold" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal Detail Berita */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X size={20} weight="bold" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                {activeArticle.category}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <CalendarBlank size={14} weight="bold" />
                {activeArticle.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
              {activeArticle.title}
            </h3>

            <div className="text-sm text-slate-700 leading-relaxed space-y-4">
              <p>{activeArticle.excerpt}</p>
              <p className="text-slate-600">
                SD Negeri Laweyan I terus berkomitmen memberikan lingkungan pendidikan dasar yang ramah anak, berakar pada budaya luhur, dan mendorong prestasi setiap peserta didik di Desa Laweyan, Sumberasih, Probolinggo.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

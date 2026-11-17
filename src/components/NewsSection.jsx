import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function NewsSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="berita" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200/60 uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5 text-blue-700" />
            Kabar &amp; Informasi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Berita &amp; Agenda Terkini
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Perkembangan terbaru seputar kegiatan akademik, prestasi siswa, dan pengumuman resmi sekolah.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolData.news.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-apple transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {item.readTime}
                </span>
                <span className="flex items-center gap-1">
                  Baca <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              aria-label="Tutup Berita"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                {activeArticle.category}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {activeArticle.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
              {activeArticle.title}
            </h3>

            <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
              <p>{activeArticle.excerpt}</p>
              <p className="text-slate-600">
                SD Negeri Laweyan I senantiasa berkomitmen meningkatkan mutu pendidikan dan kualitas karakter setiap siswa melalui sinergi aktif antara guru, komite sekolah, dan orang tua wali murid di Desa Laweyan, Kecamatan Sumberasih, Probolinggo.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Catatan Redaksi:</span> Untuk informasi resmi lebih lanjut mengenai pengumuman atau agenda ini, silakan menghubungi kantor tata usaha SDN Laweyan I atau mengirimkan pesan WhatsApp ke nomor resmi sekolah.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

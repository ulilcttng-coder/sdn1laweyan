import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  FileText, 
  CheckCircle, 
  ArrowSquareOut, 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  Info,
  CalendarCheck,
  UserCheck,
  ListNumbers,
  ChatCircleText
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function PpdbPage() {
  const { meta } = schoolData;

  const steps = [
    {
      step: "01",
      title: "Pendaftaran Akun & Akses Portal Resmi",
      desc: "Calon wali murid mengakses portal resmi PPDB online pemerintah (Dinas Pendidikan Kabupaten Probolinggo / Kemendikdasmen) untuk registrasi akun calon peserta didik."
    },
    {
      step: "02",
      title: "Pengisian Data & Pemilihan Jalur",
      desc: "Mengisi data diri siswa dan memilih jalur pendaftaran yang sesuai: Jalur Zonasi (Desa Laweyan & sekitarnya), Jalur Afirmasi (KIP/PKH), atau Jalur Perpindahan Tugas Orang Tua."
    },
    {
      step: "03",
      title: "Memilih Satuan Pendidikan SDN Laweyan I",
      desc: "Memilih SDN Laweyan I (NPSN: 20546586) sebagai pilihan sekolah dasar negeri tujuan, kemudian mengunggah dokumen prasyarat yang diminta sistem."
    },
    {
      step: "04",
      title: "Verifikasi Berkas & Konfirmasi di Sekolah",
      desc: "Mencetak bukti pendaftaran online dari portal pemerintah dan membawa berkas asli/fotokopi ke loket panitia di SDN 1 Laweyan untuk verifikasi fisik."
    }
  ];

  return (
    <div className="w-full flex flex-col space-y-10 pb-16">
      
      {/* 1. Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'PPDB Online' }]} />

      {/* 2. Header Banner (Full Width) */}
      <section className="w-full bg-white border-b border-slate-200 py-8 text-left">
        <div className="w-[85%] max-w-7xl mx-auto">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Penerimaan Peserta Didik Baru
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Tata Cara &amp; Informasi PPDB Online
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Sistem penerimaan peserta didik baru di SD Negeri Laweyan I diselenggarakan mengikuti regulasi dan portal resmi pemerintah pusat / Dinas Pendidikan Kabupaten Probolinggo.
          </p>
        </div>
      </section>

      {/* 3. Main Content Container */}
      <div className="w-[85%] max-w-7xl mx-auto space-y-10 text-left">
        
        {/* Notice BOSP Bebas Biaya */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={18} weight="bold" />
              Pendidikan Negeri 100% Bebas Biaya SPP
            </div>
            <h3 className="text-xl font-bold">
              Bebas Uang Gedung &amp; Bebas Biaya Pendaftaran
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
              Seluruh proses PPDB dan kegiatan operasional belajar di SD Negeri Laweyan I didanai penuh oleh BOSP (Bantuan Operasional Satuan Pendidikan) pemerintah.
            </p>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold border border-white/30 whitespace-nowrap">
            NPSN: 20546586
          </div>
        </div>

        {/* Alur & Tata Cara Pendaftaran */}
        <section className="space-y-5">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Panduan Langkah Demi Langkah
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
              Alur Tata Cara Pendaftaran Calon Siswa
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Tata cara pendaftaran peserta didik baru melalui sistem online resmi pemerintah:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div>
                  <div className="text-3xl font-black font-mono text-blue-600 mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-700">
                  Langkah {s.step}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2 Kolom: Syarat Berkas & Jalur Masuk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Kolom Kiri: Persyaratan Berkas */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-blue-700">
              <FileText size={22} weight="bold" />
              <h3 className="text-lg font-bold text-slate-900">
                Persyaratan Berkas Calon Siswa Baru
              </h3>
            </div>
            
            <p className="text-xs text-slate-500">
              Dokumen fisik yang wajib disiapkan oleh orang tua / wali murid untuk verifikasi:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Usia Calon Siswa:</strong> Berusia 7 tahun (wajib diterima) atau berusia minimal 6 tahun per 1 Juli tahun ajaran baru.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Akta Kelahiran:</strong> Fotokopi Akta Kelahiran calon peserta didik (2 lembar) disertai dokumen asli saat verifikasi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kartu Keluarga (KK):</strong> Fotokopi Kartu Keluarga yang diterbitkan minimal 1 tahun sebelum tanggal pendaftaran.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>KTP Orang Tua/Wali:</strong> Fotokopi e-KTP kedua orang tua atau wali murid yang sah.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Ijazah TK/PAUD:</strong> Surat keterangan lulus atau ijazah TK / RA / PAUD (jika sebelumnya bersekolah TK).</span>
              </li>
            </ul>
          </div>

          {/* Kolom Kanan: Jalur Pendaftaran & Akses Portal */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Box Jalur Masuk */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-blue-700">
                <UserCheck size={22} weight="bold" />
                <h3 className="text-lg font-bold text-slate-900">
                  Jalur Pendaftaran Resmi
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-blue-900">1. Jalur Zonasi (Prioritas Utama)</div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Diperuntukkan bagi calon murid yang berdomisili di dalam wilayah zonasi Desa Laweyan dan desa sekitar dalam radius kecamatan Sumberasih.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-blue-900">2. Jalur Afirmasi</div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Bagi keluarga ekonomi tidak mampu pemegang kartu bantuan pemerintah (KIP, PKH, KKS, atau DTKS).
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-blue-900">3. Jalur Perpindahan Tugas Orang Tua / Wali</div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Disertai surat penugasan resmi dari instansi, lembaga, atau perusahaan yang mempekerjakan orang tua.
                  </p>
                </div>
              </div>
            </div>

            {/* Box Tautan Portal Pemerintah */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
              <div className="font-bold text-sm text-blue-950 flex items-center gap-2">
                <Info size={18} weight="bold" className="text-blue-700" />
                <span>Portal Pendaftaran Resmi Pemerintah:</span>
              </div>
              <p className="text-xs text-blue-900 leading-relaxed">
                Pendaftaran secara mandiri dapat dilakukan melalui portal resmi PPDB Dinas Pendidikan Kabupaten Probolinggo / Siap-PPDB Kemendikbud saat jadwal pembukaan dimulai.
              </p>
              
              <div className="pt-1 flex flex-wrap gap-2.5">
                <a
                  href="https://probolinggokab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
                >
                  <span>Buka Portal Resmi Pemkab Probolinggo</span>
                  <ArrowSquareOut size={15} weight="bold" />
                </a>

                <a
                  href="https://kemendikdasmen.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-blue-900 hover:bg-slate-100 border border-blue-200 transition-colors"
                >
                  <span>Portal Kemendikdasmen</span>
                  <ArrowSquareOut size={15} weight="bold" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Layanan Bantuan & Konsultasi Langsung di Sekolah */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              Layanan Bantuan Pendaftaran
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Butuh Pendampingan Pendaftaran? Kunjungi Loket Sekolah Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bagi orang tua / wali murid yang membutuhkan bantuan teknis pendaftaran online atau informasi persyaratan, silakan datang langsung ke loket pelayanan SDN 1 Laweyan di Jl. Sukapura No. 25, Desa Laweyan, Kecamatan Sumberasih (Senin – Sabtu, pukul 07.30 – 12.00 WIB) atau hubungi panitia melalui WhatsApp.
            </p>
          </div>

          <a
            href={`https://wa.me/${meta.contact.whatsapp}?text=Halo%20Panitia%20PPDB%20SDN%201%20Laweyan,%20saya%20ingin%20berkonsultasi%20mengenai%20tata%20cara%20pendaftaran%20siswa%20baru`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow transition-colors"
          >
            <ChatCircleText size={18} weight="bold" />
            <span>Chat WhatsApp Panitia PPDB</span>
          </a>
        </section>

      </div>

    </div>
  );
}

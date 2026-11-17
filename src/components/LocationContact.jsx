import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  MessageSquare, 
  ExternalLink,
  CheckCircle2,
  Building2,
  Navigation
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function LocationContact() {
  const { meta } = schoolData;
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);

    const waText = encodeURIComponent(
      `*PESAN DARI PENGUNJUNG WEBSITE SDN 1 LAWEYAN*\n` +
      `-----------------------------------------\n` +
      `Nama: ${formData.name}\n` +
      `Kontak: ${formData.phone || formData.email}\n` +
      `Perihal: ${formData.subject}\n` +
      `Pesan: ${formData.message}\n` +
      `-----------------------------------------`
    );
    window.open(`https://wa.me/${meta.contact.whatsapp}?text=${waText}`, '_blank');
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/60 uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            Lokasi &amp; Kontak Resmi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Kunjungi Satuan Pendidikan Kami
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Terletak di Jl. Sukapura No. 25, Desa Laweyan, Kecamatan Sumberasih, Kabupaten Probolinggo (500 meter dari Kantor Kecamatan).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards & Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 4 Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Alamat */}
              <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Alamat Lengkap</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {meta.address.street}, {meta.address.village}, {meta.address.district}, {meta.address.regency}, {meta.address.province} {meta.address.postalCode}
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-blue-700 flex items-center gap-1">
                  <Navigation className="w-3 h-3" />
                  <span>{meta.distanceToDistrict}</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Surat Elektronik (Email)</h4>
                    <p className="text-xs text-slate-600 mt-1 break-all">
                      {meta.contact.email}
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${meta.contact.email}`}
                  className="mt-3 text-[11px] font-semibold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <span>Kirim Email Langsung</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* WhatsApp & Telepon */}
              <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Telepon Sekolah</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      {meta.contact.phone}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${meta.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[11px] font-semibold text-amber-700 hover:underline flex items-center gap-1"
                >
                  <span>Konsultasi Informasi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Identitas Bangunan & Status */}
              <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Status Gedung &amp; KBM</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Bangunan Milik Sendiri (Est. 1962)
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-medium text-purple-700">
                  KBM Pagi: 06.45 - 12.30 WIB
                </div>
              </div>

            </div>

            {/* Google Maps Embed Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-72 relative bg-slate-100">
              <iframe
                title="Peta Lokasi SD Negeri Laweyan I Probolinggo"
                src="https://maps.google.com/maps?q=SDN+Laweyan+1+Sumberasih+Probolinggo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-apple h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Kirim Pesan / Pengaduan Sekolah
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Sampaikan pertanyaan, masukan, permohonan informasi kurikulum atau konsultasi pendaftaran kepada tim humas SDN 1 Laweyan.
                </p>

                {messageSent && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Pesan Anda telah diteruskan ke WhatsApp admin sekolah. Kami akan segera merespons.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap Anda <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda / Wali Murid"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nomor HP / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Alamat Email (Opsional)
                      </label>
                      <input
                        type="email"
                        placeholder="email@anda.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Perihal Pesan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Pertanyaan PPDB / Konsultasi Siswa Baru"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Isi Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="3"
                      required
                      placeholder="Tuliskan pertanyaan atau kebutuhan Anda secara jelas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan ke Admin Sekolah</span>
                  </button>
                </form>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500 text-center">
                SD Negeri Laweyan I menjamin kerahasiaan identitas dan data setiap pengunjung.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  MapPin, 
  EnvelopeSimple, 
  Phone, 
  Clock, 
  PaperPlaneTilt, 
  CheckCircle,
  Building,
  NavigationArrow
} from '@phosphor-icons/react';
import { schoolData } from '../data/schoolData';

export default function ContactPage() {
  const { meta } = schoolData;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    const text = encodeURIComponent(
      `*PESAN WEBSITE SDN 1 LAWEYAN*\n` +
      `Nama: ${form.name}\n` +
      `Kontak: ${form.phone}\n` +
      `Perihal: ${form.subject}\n` +
      `Pesan: ${form.message}`
    );
    window.open(`https://wa.me/${meta.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Kontak & Lokasi' }]} />

      <div className="w-[85%] max-w-7xl mx-auto space-y-10">
        
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-5 text-left">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Sekretariat Sekolah
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Kontak &amp; Lokasi Satuan Pendidikan
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Hubungi atau kunjungi SD Negeri Laweyan I di jalur utama Sukapura, Kecamatan Sumberasih.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Cards & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                  <MapPin size={20} weight="bold" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Alamat Sekolah</h4>
                <p className="text-xs text-slate-600 mt-1">
                  {meta.address.street}, {meta.address.village}, {meta.address.district}, {meta.address.regency} {meta.address.postalCode}
                </p>
                <div className="mt-2 text-[11px] font-bold text-blue-700">
                  {meta.distanceToDistrict}
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <Phone size={20} weight="bold" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Telepon &amp; WhatsApp</h4>
                <p className="text-xs text-slate-600 mt-1">{meta.contact.phone}</p>
                <a
                  href={`https://wa.me/${meta.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[11px] font-bold text-emerald-700 block hover:underline"
                >
                  Chat WhatsApp
                </a>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                  <EnvelopeSimple size={20} weight="bold" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Email Resmi</h4>
                <p className="text-xs text-slate-600 mt-1 break-all">{meta.contact.email}</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
                  <Clock size={20} weight="bold" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Jam KBM</h4>
                <p className="text-xs text-slate-600 mt-1">{meta.contact.operationalHours}</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow h-72">
              <iframe
                title="Peta Lokasi SD Negeri Laweyan I Probolinggo"
                src="https://maps.google.com/maps?q=SDN+Laweyan+1+Sumberasih+Probolinggo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Kirim Pesan / Pengaduan Sekolah
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Sampaikan pertanyaan atau saran Anda langsung kepada pihak SDN 1 Laweyan.
              </p>

              {sent && (
                <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle size={18} weight="fill" className="text-emerald-600" />
                  <span>Pesan Anda diteruskan ke nomor admin sekolah. Terima kasih.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor WhatsApp / HP Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08xxxxxxxxxx"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Perihal *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Informasi PPDB / Pertanyaan KBM"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Isi Pesan *
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Tuliskan pesan Anda..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <PaperPlaneTilt size={16} weight="bold" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSeoData = {
  '/': {
    title: 'SDN 1 Laweyan Probolinggo | Website Resmi SD Negeri Laweyan I',
    description: 'Website Resmi SD Negeri Laweyan I (SDN 1 Laweyan), Kec. Sumberasih, Kab. Probolinggo. NPSN 20546586, Akreditasi A, Kurikulum Merdeka, dan pembinaan karakter BERDASI.'
  },
  '/profil': {
    title: 'Profil Sekolah & Visi BERDASI (NPSN 20546586) | SDN 1 Laweyan Probolinggo',
    description: 'Profil lengkap SD Negeri Laweyan I, data identitas resmi sekolah dari Kementerian, Visi BERDASI, dan 6 butir Misi Pendidikan.'
  },
  '/akademik': {
    title: 'Kurikulum Merdeka & Program Belajar | SDN 1 Laweyan Probolinggo',
    description: 'Program akademik, implementasi Kurikulum Merdeka, literasi numerasi, dan pembiasaan karakter di SDN 1 Laweyan.'
  },
  '/kesiswaan': {
    title: 'Kesiswaan & Ekstrakurikuler Unggulan | SDN 1 Laweyan Probolinggo',
    description: 'Aktivitas kesiswaan, Gerakan Pramuka, olahraga voli, seni rebana, BTQ, dan klub sains SD Negeri Laweyan I.'
  },
  '/guru': {
    title: 'Dewan Guru & Tenaga Kependidikan | SDN 1 Laweyan Probolinggo',
    description: 'Profil Kepala Sekolah Ibu Lilik Indrayati, S.Pd. dan dewan pendidik profesional SD Negeri Laweyan I.'
  },
  '/fasilitas': {
    title: 'Sarana & Prasarana Gedung Sekolah | SDN 1 Laweyan Probolinggo',
    description: 'Fasilitas gedung milik sendiri, halaman luas berpaving, arena olahraga voli, dan ruang kelas representatif di Jl. Sukapura No. 25.'
  },
  '/galeri': {
    title: 'Galeri Dokumentasi Foto Resmi | SDN 1 Laweyan Probolinggo',
    description: 'Dokumentasi asli gedung sekolah, papan transparansi visi misi, dan kepemimpinan SD Negeri Laweyan I.'
  },
  '/berita': {
    title: 'Kabar & Pengumuman Sekolah Terkini | SDN 1 Laweyan Probolinggo',
    description: 'Warta kegiatan sekolah, asesmen nasional ANBK, sosialisasi program, dan pengumuman resmi SDN 1 Laweyan.'
  },
  '/ppdb': {
    title: 'Tata Cara & Alur PPDB Online Resmi | SDN 1 Laweyan Probolinggo',
    description: 'Informasi persyaratan berkas, alur pendaftaran calon siswa baru (PPDB) mengikuti portal resmi pemerintah.'
  },
  '/kontak': {
    title: 'Kontak & Lokasi SD Negeri Laweyan I Sumberasih Probolinggo',
    description: 'Alamat lengkap Jl. Sukapura No. 25 Desa Laweyan, Kecamatan Sumberasih, nomor WhatsApp, email resmi, dan peta lokasi.'
  }
};

export default function PageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const data = routeSeoData[pathname] || routeSeoData['/'];
    document.title = data.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', data.description);
    }

    // Update OG title & description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', data.title);
    }
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', data.description);
    }
  }, [pathname]);

  return null;
}

// Data Resmi & Terverifikasi SDN 1 Laweyan (SD Negeri Laweyan I), Sumberasih, Probolinggo

export const schoolData = {
  meta: {
    officialName: "SD Negeri Laweyan I",
    popularName: "SDN 1 Laweyan",
    npsn: "20546586",
    nss: "101052005026",
    yearFounded: "1962",
    status: "Negeri",
    accreditation: "A (Amat Baik)",
    curriculum: "Kurikulum Merdeka",
    organization: "Dinas Pendidikan dan Kebudayaan Kab. Probolinggo",
    buildingStatus: "Milik Sendiri",
    schoolShift: "Pagi",
    distanceToDistrict: "500 Meter ke Pusat Kecamatan Sumberasih",
    distanceToCity: "30 KM ke Pusat Otoda / Kabupaten",
    address: {
      street: "Jl. Sukapura No. 25",
      village: "Desa Laweyan",
      district: "Kecamatan Sumberasih",
      regency: "Kabupaten Probolinggo",
      province: "Jawa Timur",
      postalCode: "67251",
      geoNote: "Jalur Utama Sukapura (Akses Kawasan Wisata Bromo)"
    },
    contact: {
      email: "sdn.laweyan.1@gmail.com",
      phone: "0828-3943-851",
      whatsapp: "628283943851",
      operationalHours: "Senin - Sabtu: 06.45 - 12.30 WIB"
    },
    images: {
      logo: "/images/logo-tutwuri.jpg",
      building: "/images/gedung-sekolah.jpg",
      principal: "/images/kepala-sekolah.jpg",
      board: "/images/papan-profil-visi-misi.jpg"
    }
  },

  headmaster: {
    name: "Lilik Indrayati, S.Pd.",
    title: "Kepala Sekolah SDN Laweyan I",
    role: "Kepala Satuan Pendidikan",
    photo: "/images/kepala-sekolah.jpg",
    speech: "Selamat datang di website resmi SD Negeri Laweyan I, Kecamatan Sumberasih, Kabupaten Probolinggo. Sejak berdiri pada tahun 1962, sekolah kami berkomitmen kuat mencetak generasi 'BERDASI' — Berbudi Pekerti Luhur, Cerdas, dan Terampil. Melalui Kurikulum Merdeka dan lingkungan belajar yang ramah anak, kami membina setiap peserta didik untuk tumbuh menjadi pribadi yang beriman dan bertakwa, bernalar kritis, mandiri, serta berkarakter Profil Pelajar Pancasila."
  },

  statistics: [
    { label: "Status Akreditasi", value: "Akreditasi A", subtitle: "BAN-S/M Unggul", icon: "Award" },
    { label: "Nomor Pokok (NPSN)", value: "20546586", subtitle: "NSS: 101052005026", icon: "ShieldCheck" },
    { label: "Tahun Berdiri", value: "1962", subtitle: "Milik Sendiri", icon: "Building2" },
    { label: "Peserta Didik", value: "± 132", subtitle: "Siswa Aktif", icon: "Users" },
    { label: "Rombongan Belajar", value: "6 Rombel", subtitle: "Kelas 1 sampai 6", icon: "GraduationCap" },
    { label: "Kelulusan", value: "100%", subtitle: "Melanjutkan ke SMP/MTs", icon: "CheckCircle2" }
  ],

  vision: {
    acronym: "BERDASI",
    motto: "BERBUDI PEKERTI LUHUR – CERDAS – TERAMPIL",
    full: "Terciptanya Peserta Didik Yang Berbudi Pekerti Luhur, Cerdas dan Terampil"
  },
  
  missions: [
    {
      number: "01",
      title: "Meningkatkan Keimanan",
      desc: "Melalui berbagai kegiatan keagamaan yang diselenggarakan sekolah secara berkala dan berkesinambungan."
    },
    {
      number: "02",
      title: "Menyediakan Pendidikan Berkualitas",
      desc: "Memberikan kurikulum yang relevan dan inovatif untuk mengembangkan pengetahuan dan ketrampilan siswa."
    },
    {
      number: "03",
      title: "Mengembangkan Karakter Siswa",
      desc: "Melalui program pembinaan karakter budi pekerti luhur dan kegiatan ekstra kurikuler yang mendukung."
    },
    {
      number: "04",
      title: "Mendorong Kreativitas dan Inovasi",
      desc: "Melalui pembelajaran yang berpusat pada siswa dan pemanfaatan teknologi pendidikan."
    },
    {
      number: "05",
      title: "Literasi, Numerasi & Profil Pelajar Pancasila",
      desc: "Melaksanakan kegiatan kokurikuler dan ekstra kurikuler yang mendukung perkembangan kompetensi literasi dan numerasi, dan karakter profil pelajar Pancasila peserta didik."
    },
    {
      number: "06",
      title: "Membangun Kerjasama dengan Komunitas",
      desc: "Melibatkan peran aktif orang tua dan masyarakat dalam seluruh proses ekosistem pendidikan sekolah."
    }
  ],

  programs: [
    {
      id: "kurikulum-merdeka",
      name: "Kurikulum Merdeka & P5",
      badge: "Kurikulum Resmi",
      icon: "BookOpen",
      description: "Pembelajaran berbasis projek penguatan karakter Profil Pelajar Pancasila yang aplikatif, mandiri, dan mengasah nalar kritis.",
      points: ["Projek Gaya Hidup Berkelanjutan", "Projek Kearifan Lokal & Budaya", "Pembelajaran berdiferensiasi berpusat pada siswa"]
    },
    {
      id: "literasi-numerasi",
      name: "Literasi & Numerasi Kreatif",
      badge: "Misi 05",
      icon: "BookMarked",
      description: "Pojok baca di setiap kelas dan perpustakaan sekolah untuk membudayakan kebiasaan membaca dan logika berhitung sejak kelas 1.",
      points: ["15 Menit membaca sebelum KBM", "Pohon literasi karya siswa", "Pemanfaatan media ajar interaktif & ANBK"]
    },
    {
      id: "pembiasaan-karakter",
      name: "Penguatan Keimanan & Budi Pekerti",
      badge: "Misi 01 & 03",
      icon: "HeartHandshake",
      description: "Pembentukan akhlak mulia melalui pembiasaan doa pagi, sholat dhuha berjamaah, hafalan surat pendek, serta budaya 5S.",
      points: ["Kegiatan keagamaan rutin setiap hari", "Hafalan doa harian & surat juz 'Amma", "Penerapan 5S (Senyum, Salam, Sapa, Sopan, Santun)"]
    },
    {
      id: "komunitas-sekolah",
      name: "Sinergi Sekolah, Orang Tua & Komunitas",
      badge: "Misi 06",
      icon: "Sparkles",
      description: "Membangun kolaborasi harmonis bersama komite sekolah, wali murid, dan masyarakat desa Laweyan.",
      points: ["Pertemuan rutin paguyuban orang tua", "Gelar karya siswa bersama warga", "Lingkungan belajar aman, nyaman, bebas perundungan"]
    }
  ],

  extracurriculars: [
    {
      name: "Gerakan Pramuka (Gudep SDN Laweyan I)",
      category: "Kepanduan",
      desc: "Melatih kemandirian, kedisiplinan, kecintaan alam, dan kepemimpinan bagi Siaga dan Penggalang.",
      schedule: "Jumat, 13.30 - 15.00 WIB",
      icon: "Compass",
      highlight: "Wajib"
    },
    {
      name: "Olahraga Bola Voli & Atletik",
      category: "Olahraga Prestasi",
      desc: "Pemanfaatan lapangan voli halaman sekolah untuk mengasah kebugaran fisik dan persiapan O2SN.",
      schedule: "Selasa & Kamis, 15.00 - 16.30 WIB",
      icon: "Trophy",
      highlight: "Prestasi"
    },
    {
      name: "Seni Musik Tradisional & Rebana",
      category: "Seni & Religi",
      desc: "Menyalurkan bakat musikalitas islami dan kesenian ritmis untuk peringatan hari-hari besar Islam.",
      schedule: "Senin, 13.00 - 14.30 WIB",
      icon: "Music",
      highlight: "Favorit"
    },
    {
      name: "Bimbingan Baca Tulis Al-Qur'an (BTQ)",
      category: "Keagamaan",
      desc: "Tahsin makharijul huruf, hafalan juz 30, dan pembiasaan membaca kitab suci dengan fasih.",
      schedule: "Selasa & Kamis, 06.30 - 07.00 WIB",
      icon: "Scroll",
      highlight: "Pembinaan"
    },
    {
      name: "Klub Sains & Literasi Digital",
      category: "Sains & Teknologi",
      desc: "Eksperimen sains sederhana, pemanfaatan perangkat digital, dan karya tulis kreatif.",
      schedule: "Sabtu, 10.00 - 11.30 WIB",
      icon: "Lightbulb",
      highlight: "Eksploratif"
    }
  ],

  facilities: [
    {
      title: "Gedung & Halaman Utama Sekolah",
      desc: "Gedung kokoh milik sendiri yang asri di Jl. Sukapura No. 25, dilengkapi halaman luas berpaving untuk upacara, bermain, dan voli.",
      image: "/images/gedung-sekolah.jpg",
      tag: "Fasilitas Utama"
    },
    {
      title: "Lapangan Olahraga & Arena Voli",
      desc: "Halaman tengah serbaguna dengan jaring voli permanen untuk olahraga siswa, senam bersama, dan latihan baris-berbaris.",
      image: "/images/gedung-sekolah.jpg",
      tag: "Olahraga"
    },
    {
      title: "Papan Informasi & Administrasi Resmi",
      desc: "Papan profil sekolah, data identitas, dan transparansi visi-misi pendidikan yang terpasang jelas di ruang utama.",
      image: "/images/papan-profil-visi-misi.jpg",
      tag: "Informasi Publik"
    }
  ],

  // Prasarana penunjang pembelajaran tanpa foto dummy (disajikan berupa info spesifikasi bersih)
  generalFacilities: [
    {
      name: "Ruang Kelas (6 Rombel)",
      desc: "6 ruang kelas belajar siswa dari Kelas 1 hingga Kelas 6 dengan pencahayaan dan sirkulasi udara baik.",
      icon: "ChalkboardTeacher",
      status: "Tersedia & Aktif"
    },
    {
      name: "Ruang Guru & Kepala Sekolah",
      desc: "Ruang kerja pendidik dan pimpinan sekolah untuk koordinasi KBM dan pelayanan administrasi wali murid.",
      icon: "UsersThree",
      status: "Tersedia"
    },
    {
      name: "Pojok Baca & Literasi",
      desc: "Koleksi buku teks Kurikulum Merdeka dan buku pengayaan literasi di setiap ruang kelas.",
      icon: "Books",
      status: "Tersedia"
    },
    {
      name: "Perangkat Chromebook ANBK",
      desc: "Sarana komputer digital bantuan resmi untuk pelaksanaan Asesmen Nasional Berbasis Komputer.",
      icon: "Desktop",
      status: "Tersedia"
    },
    {
      name: "Sanitasi & Toilet Siswa/Guru",
      desc: "Fasilitas toilet terpisah yang bersih dan sumber air bersih untuk menunjang PHBS sekolah.",
      icon: "Drop",
      status: "Tersedia"
    },
    {
      name: "Halaman Parkir & Akses Gerbang",
      desc: "Akses gerbang masuk langsung di tepi Jalan Raya Sukapura No. 25 dengan area parkir kendaraan dinas/guru.",
      icon: "ShieldCheck",
      status: "Tersedia"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Gedung & Halaman Bermain Siswa SDN 1 Laweyan",
      category: "Fasilitas & Lingkungan",
      desc: "Suasana keceriaan siswa-siswi berolahraga dan beraktivitas di halaman sekolah SDN 1 Laweyan yang asri dan teduh.",
      image: "/images/gedung-sekolah.jpg"
    },
    {
      id: 2,
      title: "Papan Resmi Identitas, Visi & Misi BERDASI",
      category: "Identitas Resmi",
      desc: "Dokumentasi papan informasi resmi profil sekolah yang memuat Visi BERDASI dan 6 butir Misi SDN Laweyan I.",
      image: "/images/papan-profil-visi-misi.jpg"
    },
    {
      id: 3,
      title: "Kepala Sekolah SDN 1 Laweyan",
      category: "Kepemimpinan",
      desc: "Ibu Lilik Indrayati, S.Pd. selaku Kepala Sekolah SD Negeri Laweyan I, Kecamatan Sumberasih, Kabupaten Probolinggo.",
      image: "/images/kepala-sekolah.jpg"
    }
  ],

  news: [
    {
      id: 1,
      title: "Tata Cara dan Informasi PPDB SDN Laweyan I Mengikuti Sistem Resmi Pemerintah",
      date: "14 November 2026",
      category: "Pengumuman",
      excerpt: "Penerimaan Peserta Didik Baru (PPDB) SDN Laweyan I mengacu pada regulasi dan portal resmi pemerintah. Pendaftaran gratis tanpa pungutan biaya.",
      readTime: "3 menit baca",
      featured: true
    },
    {
      id: 2,
      title: "Implementasi Visi BERDASI: Membangun Siswa Berbudi Pekerti, Cerdas dan Terampil",
      date: "08 November 2026",
      category: "Program Sekolah",
      excerpt: "Kepala Sekolah Ibu Lilik Indrayati, S.Pd. memaparkan strategi penguatan 6 pilar misi sekolah dalam memadukan keimanan, karakter, dan teknologi.",
      readTime: "3 menit baca",
      featured: false
    },
    {
      id: 3,
      title: "Gelar Karya P5: Mengasah Kemandirian dan Kreativitas Siswa",
      date: "02 November 2026",
      category: "Kegiatan Siswa",
      excerpt: "Pameran hasil karya projek penguatan profil pelajar Pancasila siswa-siswi SDN Laweyan I mendapat apresiasi tinggi dari para wali murid.",
      readTime: "2 menit baca",
      featured: false
    },
    {
      id: 4,
      title: "Pelaksanaan Asesmen Nasional (ANBK) Siswa Berjalan Tertib dan Lancar",
      date: "20 Oktober 2026",
      category: "Akademik",
      excerpt: "Siswa kelas 5 sukses menempuh Asesmen Nasional Berbasis Komputer dengan sarana perangkat digital yang memadai di sekolah.",
      readTime: "2 menit baca",
      featured: false
    }
  ],

  announcements: [
    "Informasi & Tata Cara Pendaftaran Calon Siswa Baru (PPDB) SDN 1 Laweyan mengikuti portal resmi pemerintah.",
    "Sosialisasi Visi BERDASI (Berbudi Pekerti Luhur, Cerdas, dan Terampil) bersama Komite dan Orang Tua Murid.",
    "Jadwal Pembiasaan Senam Sehat & Jumat Bersih dimulai tepat pukul 06.45 WIB setiap hari Jumat."
  ],

  // Dewan Guru: sementara Kepala Sekolah saja sesuai instruksi user
  teachers: [
    {
      name: "Lilik Indrayati, S.Pd.",
      role: "Kepala Sekolah",
      avatar: "/images/kepala-sekolah.jpg",
      note: "Kepala Satuan Pendidikan"
    }
  ],

  faqs: [
    {
      q: "Apakah biaya pendidikan di SD Negeri Laweyan I gratis?",
      a: "Ya, betul. Sebagai Sekolah Dasar Negeri (SDN) di bawah naungan Dinas Pendidikan dan Kebudayaan Kab. Probolinggo, seluruh operasional pendidikan siswa didanai penuh oleh Bantuan Operasional Satuan Pendidikan (BOSP/Dana BOS). Tidak ada uang gedung maupun SPP bulanan."
    },
    {
      q: "Bagaimana sistem pendaftaran PPDB di SDN Laweyan I?",
      a: "Sistem PPDB di SDN Laweyan I mengikuti ketentuan dan portal resmi pemerintah pusat / Dinas Pendidikan Kabupaten Probolinggo. Calon wali murid dapat mengikuti petunjuk tata cara pendaftaran resmi atau datang langsung ke loket informasi sekolah untuk pendampingan."
    },
    {
      q: "Apa visi utama SDN Laweyan I?",
      a: "Visi SDN 1 Laweyan adalah 'BERDASI' (Berbudi Pekerti Luhur – Cerdas – Terampil) dengan rumusan: 'Terciptanya Peserta Didik Yang Berbudi Pekerti Luhur, Cerdas dan Terampil'."
    },
    {
      q: "Apa saja syarat utama calon siswa kelas 1?",
      a: "Syarat utama antara lain: Berusia 7 tahun (wajib diterima) atau berusia minimal 6 tahun pada 1 Juli tahun berjalan, fotokopi Akta Kelahiran, fotokopi Kartu Keluarga (KK), dan fotokopi KTP orang tua/wali."
    },
    {
      q: "Kapan SDN 1 Laweyan pertama kali didirikan?",
      a: "Berdasarkan data profil resmi sekolah, SDN Laweyan I berdiri sejak tahun 1962 dan menempati gedung milik sendiri di Jl. Sukapura No. 25, Desa Laweyan, Kecamatan Sumberasih."
    }
  ]
};

import { PresetAppTemplate, PromoProject } from '../types';

export const PRESET_TEMPLATES: PresetAppTemplate[] = [
  {
    name: 'RoboPintar AI',
    category: 'Edukasi & Robot AI Anak SD (Kelas 1-3)',
    tagline: 'Sahabat Belajar Interaktif Ceria untuk SD Kelas 1, 2 & 3',
    description: 'Aplikasi robot AI edukasi yang mengajarkan berhitung, eja kata, dan sains dasar dengan metode gamifikasi misi seru bebas bosan.',
    themeColor: '#0284c7',
    gradientBg: 'aurora',
    musicMood: 'upbeat-tech',
    scenes: [
      {
        id: 'rp-1',
        headline: 'Anak Susah Fokus Belajar?',
        subtext: 'Gampang jenuh baca buku teks & kecanduan gadget tanpa faedah.',
        voiceoverText: 'Ayah Bunda, si kecil sering susah diajak belajar dan gampang bosan membaca buku biasa?',
        duration: 3.4,
        deviceType: 'iphone',
        deviceAngle: 'tilt-left',
        mockupScreenType: 'kids-robot',
        floatingBadges: [
          { id: 'rpb1', icon: 'clock', text: 'Belajar Jadi Rebutan', position: 'top-left', color: '#ef4444' },
          { id: 'rpb2', icon: 'shield', text: 'Cepat Jenuh & Bosan', position: 'bottom-right', color: '#f59e0b' }
        ],
        transitionEffect: 'zoom-in',
      },
      {
        id: 'rp-2',
        headline: 'Kenalkan RoboPintar AI! 🤖',
        subtext: 'Robot Belajar Interaktif untuk Siswa SD Kelas 1, 2 & 3.',
        voiceoverText: 'Kini hadir RoboPintar AI! Sahabat belajar ceria yang bikin pelajaran berhitung, membaca, dan sains seasyik main game!',
        duration: 3.6,
        deviceType: 'iphone',
        deviceAngle: 'front',
        mockupScreenType: 'kids-robot',
        floatingBadges: [
          { id: 'rpb3', icon: 'spark', text: 'Kurikulum Merdeka SD', position: 'top-right', color: '#38bdf8' },
          { id: 'rpb4', icon: 'shield', text: '100% Aman Tanpa Iklan', position: 'bottom-left', color: '#10b981' }
        ],
        transitionEffect: 'rotate-in',
      },
      {
        id: 'rp-3',
        headline: 'Tanya Jawab Suara Robot 🎤',
        subtext: 'Anak bicara langsung dengan robot AI yang ramah & sabar.',
        voiceoverText: 'Cukup ajak bicara, si robot AI akan menjawab pertanyaan anak dengan suara hangat dan bahasa yang mudah dipahami.',
        duration: 3.6,
        deviceType: 'iphone',
        deviceAngle: 'floating',
        mockupScreenType: 'kids-robot',
        floatingBadges: [
          { id: 'rpb5', icon: 'bolt', text: 'Respon Suara Ramah', position: 'top-left', color: '#06b6d4' },
          { id: 'rpb6', icon: 'check', text: 'Sabar Menjelaskan', position: 'bottom-right', color: '#8b5cf6' }
        ],
        transitionEffect: 'slide-up',
      },
      {
        id: 'rp-4',
        headline: 'Petualangan Angka & Eja 🚀',
        subtext: 'Kuis seru berhadiah trofi bintang & misi angkasa harian.',
        voiceoverText: 'Latihan matematika penjumlahan, pengurangan, dan ejaan kata dikemas dalam misi petualangan penuh hadiah bintang!',
        duration: 3.5,
        deviceType: 'iphone',
        deviceAngle: 'isometric',
        mockupScreenType: 'kids-robot',
        floatingBadges: [
          { id: 'rpb7', icon: 'star', text: '+100 Bintang Harian', position: 'top-right', color: '#facc15' },
          { id: 'rpb8', icon: 'rocket', text: 'Seru Seperti Game', position: 'bottom-left', color: '#ec4899' }
        ],
        transitionEffect: 'pop',
      },
      {
        id: 'rp-5',
        headline: 'Pantauan Rapor Bunda 📊',
        subtext: 'Laporan perkembangan belajar & batasan waktu layar otomatis.',
        voiceoverText: 'Bunda dan Ayah bisa memantau perkembangan nilai dan membatasi waktu layar si kecil langsung dari HP.',
        duration: 3.4,
        deviceType: 'tablet',
        deviceAngle: 'close-up',
        mockupScreenType: 'kids-robot',
        floatingBadges: [
          { id: 'rpb9', icon: 'check', text: 'Kontrol Screen Time', position: 'top-left', color: '#3b82f6' },
          { id: 'rpb10', icon: 'users', text: 'Rapor Kemajuan AI', position: 'bottom-right', color: '#10b981' }
        ],
        transitionEffect: 'zoom-in',
      },
      {
        id: 'rp-6',
        headline: 'Coba RoboPintar Gratis! 🎉',
        subtext: 'Dapatkan 7 Hari Percobaan Bebas Biaya untuk Siswa SD.',
        voiceoverText: 'Wujudkan si kecil cerdas dan juara kelas! Unduh RoboPintar AI sekarang di App Store dan Google Play!',
        duration: 3.8,
        deviceType: 'iphone',
        deviceAngle: 'front',
        mockupScreenType: 'kids-robot',
        floatingBadges: [
          { id: 'rpb11', icon: 'rocket', text: 'Coba Gratis 7 Hari', position: 'top-right', color: '#f97316' },
          { id: 'rpb12', icon: 'heart', text: '150.000+ Siswa Ceria', position: 'bottom-left', color: '#ef4444' }
        ],
        transitionEffect: 'pop',
      }
    ]
  },
  {
    name: 'DanaKilat',
    category: 'Finansial & Dompet Digital',
    tagline: 'Kelola Keuangan Lebih Cerdas & Cepat',
    description: 'Aplikasi pembayaran QRIS instan, investasi otomatis, dan analitik pengeluaran harian.',
    themeColor: '#6366f1',
    gradientBg: 'aurora',
    musicMood: 'upbeat-tech',
    scenes: [
      {
        id: 'scene-1',
        headline: 'Pusing Catat Keuangan Manual?',
        subtext: 'Banyak bon hilang dan saldo tiba-tiba habis tanpa jejak.',
        voiceoverText: 'Masih pusing catat keuangan manual dan bingung saldo habis ke mana?',
        duration: 3.2,
        deviceType: 'iphone',
        deviceAngle: 'tilt-left',
        mockupScreenType: 'welcome',
        floatingBadges: [
          { id: 'b1', icon: 'clock', text: 'Buang Waktu 2 Jam/Hari', position: 'top-left', color: '#ef4444' },
          { id: 'b2', icon: 'shield', text: 'Rentan Salah Hitung', position: 'bottom-right', color: '#f59e0b' }
        ],
        transitionEffect: 'zoom-in',
      },
      {
        id: 'scene-2',
        headline: 'Kenalkan DanaKilat!',
        subtext: 'Solusi All-in-One Keuangan Modern Generasi Baru.',
        voiceoverText: 'Kini hadir DanaKilat! Solusi cerdas untuk semua kebutuhan finansialmu.',
        duration: 3.0,
        deviceType: 'iphone',
        deviceAngle: 'front',
        mockupScreenType: 'fintech',
        floatingBadges: [
          { id: 'b3', icon: 'rocket', text: 'Solusi #1 Indonesia', position: 'top-right', color: '#6366f1' },
          { id: 'b4', icon: 'spark', text: 'Desain Ultra Elegan', position: 'bottom-left', color: '#ec4899' }
        ],
        transitionEffect: 'rotate-in',
      },
      {
        id: 'scene-3',
        headline: 'Transfer & Bayar 1 Detik',
        subtext: 'Dukungan QRIS Nasional, Biaya Rp 0, dan Bebas Antre.',
        voiceoverText: 'Transfer uang dan bayar QRIS kilat hanya dalam satu detik tanpa biaya admin.',
        duration: 3.4,
        deviceType: 'iphone',
        deviceAngle: 'tilt-right',
        mockupScreenType: 'fintech',
        floatingBadges: [
          { id: 'b5', icon: 'bolt', text: 'Transfer Kilat 0.5s', position: 'top-left', color: '#10b981' },
          { id: 'b6', icon: 'check', text: 'Gratis Admin 100x', position: 'bottom-right', color: '#06b6d4' }
        ],
        transitionEffect: 'slide-up',
      },
      {
        id: 'scene-4',
        headline: 'Analitik AI Real-Time',
        subtext: 'Ketahui pos pengeluaranmu dengan prediksi cerdas otomatis.',
        voiceoverText: 'Dapatkan laporan pengeluaran harian dan rekomendasi tabungan berbasis kecerdasan buatan.',
        duration: 3.2,
        deviceType: 'iphone',
        deviceAngle: 'floating',
        mockupScreenType: 'dashboard',
        floatingBadges: [
          { id: 'b7', icon: 'spark', text: 'Prediksi Hemat 30%', position: 'top-right', color: '#8b5cf6' },
          { id: 'b8', icon: 'shield', text: 'Enkripsi 256-Bit', position: 'bottom-left', color: '#3b82f6' }
        ],
        transitionEffect: 'pop',
      },
      {
        id: 'scene-5',
        headline: 'Dipercaya 500.000+ Orang',
        subtext: 'Rating 4.9 di Google Play & App Store dengan review bintang 5.',
        voiceoverText: 'Telah dipercaya lebih dari setengah juta pengguna di seluruh Indonesia dengan rating 4.9.',
        duration: 3.2,
        deviceType: 'iphone',
        deviceAngle: 'close-up',
        mockupScreenType: 'fintech',
        floatingBadges: [
          { id: 'b9', icon: 'star', text: 'Rating 4.9 (45K Review)', position: 'top-left', color: '#eab308' },
          { id: 'b10', icon: 'users', text: 'Komunitas 500K+', position: 'bottom-right', color: '#10b981' }
        ],
        transitionEffect: 'zoom-in',
      },
      {
        id: 'scene-6',
        headline: 'Download DanaKilat Sekarang',
        subtext: 'Dapatkan Bonus Saldo Awal Rp 50.000 untuk Pendaftar Baru!',
        voiceoverText: 'Tunggu apa lagi? Download DanaKilat sekarang di Google Play dan App Store!',
        duration: 3.5,
        deviceType: 'iphone',
        deviceAngle: 'front',
        mockupScreenType: 'welcome',
        floatingBadges: [
          { id: 'b11', icon: 'rocket', text: 'Download Gratis', position: 'top-right', color: '#6366f1' },
          { id: 'b12', icon: 'spark', text: 'Bonus Rp 50.000', position: 'bottom-left', color: '#f43f5e' }
        ],
        transitionEffect: 'pop',
      }
    ]
  },
  {
    name: 'KenyangYuk',
    category: 'Kuliner & Food Delivery',
    tagline: 'Makanan Hangat Tiba dalam 15 Menit',
    description: 'Pesan makanan dari ribuan resto favorit dengan promo ongkir murah & tracking kurir live.',
    themeColor: '#f97316',
    gradientBg: 'sunset-glow',
    musicMood: 'energetic-trap',
    scenes: [
      {
        id: 'ky-1',
        headline: 'Lapar Melanda di Jam Genting?',
        subtext: 'Mager keluar dan nunggu pesanan datang berjam-jam.',
        voiceoverText: 'Lapar tapi mager antre keluar? Mau makan enak tanpa nunggu lama?',
        duration: 3.0,
        deviceType: 'android',
        deviceAngle: 'tilt-left',
        mockupScreenType: 'welcome',
        floatingBadges: [
          { id: 'kb1', icon: 'clock', text: 'Nunggu Lama = Bad Mood', position: 'top-left', color: '#ef4444' }
        ],
        transitionEffect: 'zoom-in'
      },
      {
        id: 'ky-2',
        headline: 'Pesan di KenyangYuk!',
        subtext: 'Ribuan merchant pilihan dengan garansi makanan fresh.',
        voiceoverText: 'Buka KenyangYuk! Puluhan ribu kuliner lezat siap diantar ke depan pintumu.',
        duration: 3.2,
        deviceType: 'android',
        deviceAngle: 'front',
        mockupScreenType: 'delivery',
        floatingBadges: [
          { id: 'kb2', icon: 'star', text: '10.000+ Restoran', position: 'top-right', color: '#f59e0b' },
          { id: 'kb3', icon: 'bolt', text: '15 Menit Sampai', position: 'bottom-left', color: '#10b981' }
        ],
        transitionEffect: 'slide-up'
      },
      {
        id: 'ky-3',
        headline: 'Live GPS Tracking Kurir',
        subtext: 'Pantau posisi kurir secara real-time langsung di peta.',
        voiceoverText: 'Pantau posisi kurir secara langsung di layar dengan estimasi waktu akurat.',
        duration: 3.2,
        deviceType: 'android',
        deviceAngle: 'isometric',
        mockupScreenType: 'delivery',
        floatingBadges: [
          { id: 'kb4', icon: 'rocket', text: 'Driver Terdekat', position: 'top-left', color: '#06b6d4' }
        ],
        transitionEffect: 'pop'
      },
      {
        id: 'ky-4',
        headline: 'Nikmati Makananmu Sekarang',
        subtext: 'Voucher Diskon 50% untuk Pesanan Pertamamu!',
        voiceoverText: 'Unduh KenyangYuk sekarang dan klaim voucher diskon hingga lima puluh persen!',
        duration: 3.5,
        deviceType: 'android',
        deviceAngle: 'front',
        mockupScreenType: 'welcome',
        floatingBadges: [
          { id: 'kb5', icon: 'spark', text: 'Diskon 50% Pertama', position: 'bottom-right', color: '#f97316' }
        ],
        transitionEffect: 'zoom-in'
      }
    ]
  },
  {
    name: 'MindGen AI',
    category: 'AI Productivity & Chat',
    tagline: 'Asisten Cerdas Serba Bisa di Saku Anda',
    description: 'Tulis dokumen, coding, analisis data, dan brainstorming ide dalam hitungan detik.',
    themeColor: '#8b5cf6',
    gradientBg: 'neon-cyber',
    musicMood: 'upbeat-tech',
    scenes: [
      {
        id: 'mg-1',
        headline: 'Tugas Menumpuk Tiap Hari?',
        subtext: 'Deadline mepet dan ide kreatif lagi buntu total.',
        voiceoverText: 'Tugas kerja menumpuk dan butuh ide brilian dalam hitungan detik?',
        duration: 3.0,
        deviceType: 'iphone',
        deviceAngle: 'tilt-right',
        mockupScreenType: 'welcome',
        floatingBadges: [
          { id: 'mb1', icon: 'clock', text: 'Hemat Waktu 80%', position: 'top-left', color: '#8b5cf6' }
        ],
        transitionEffect: 'zoom-in'
      },
      {
        id: 'mg-2',
        headline: 'Ketik Apapun, MindGen Selesaikan',
        subtext: 'Ditenagai model kecerdasan buatan mutakhir tercanggih.',
        voiceoverText: 'MindGen AI hadir menjawab pertanyaanmu, membuat artikel, dan menganalisis data seketika.',
        duration: 3.5,
        deviceType: 'iphone',
        deviceAngle: 'front',
        mockupScreenType: 'ai-assistant',
        floatingBadges: [
          { id: 'mb2', icon: 'spark', text: 'Respon 0.8 Detik', position: 'top-right', color: '#ec4899' },
          { id: 'mb3', icon: 'bolt', text: 'Multi-Modal AI', position: 'bottom-left', color: '#06b6d4' }
        ],
        transitionEffect: 'slide-up'
      },
      {
        id: 'mg-3',
        headline: 'Tingkatkan Produktivitas 10x Lipat',
        subtext: 'Coba gratis hari ini di iOS dan Android.',
        voiceoverText: 'Tingkatkan produktivitasmu sekarang juga. Download MindGen AI gratis!',
        duration: 3.4,
        deviceType: 'macbook',
        deviceAngle: 'front',
        mockupScreenType: 'ai-assistant',
        floatingBadges: [
          { id: 'mb4', icon: 'star', text: 'Rating 4.9 Bintang', position: 'top-left', color: '#eab308' }
        ],
        transitionEffect: 'pop'
      }
    ]
  },
  {
    name: 'PulseFit',
    category: 'Kesehatan & Olahraga',
    tagline: 'Bentuk Tubuh Impian dengan AI Trainer',
    description: 'Program latihan personal, pemantau kalori otomatis, dan hitung detak jantung harian.',
    themeColor: '#10b981',
    gradientBg: 'emerald-luxe',
    musicMood: 'energetic-trap',
    scenes: [
      {
        id: 'pf-1',
        headline: 'Ingin Hidup Sehat & Bugar?',
        subtext: 'Sulit konsisten olahraga dan atur pola makan harian.',
        voiceoverText: 'Ingin rutin olahraga dan capai target berat badan ideal tanpa stres?',
        duration: 3.0,
        deviceType: 'iphone',
        deviceAngle: 'tilt-left',
        mockupScreenType: 'welcome',
        floatingBadges: [
          { id: 'pb1', icon: 'heart', text: 'Tubuh Bugar & Sehat', position: 'top-left', color: '#10b981' }
        ],
        transitionEffect: 'zoom-in'
      },
      {
        id: 'pf-2',
        headline: 'Pantau Kalori & Aktivitas',
        subtext: 'Rekomendasi gerakan dan meal plan yang disesuaikan untukmu.',
        voiceoverText: 'PulseFit memandu setiap sesi latihanmu dengan sensor akurat dan rencana diet personal.',
        duration: 3.4,
        deviceType: 'iphone',
        deviceAngle: 'floating',
        mockupScreenType: 'fitness',
        floatingBadges: [
          { id: 'pb2', icon: 'bolt', text: 'Bakar 600 Kkal', position: 'top-right', color: '#f59e0b' },
          { id: 'pb3', icon: 'check', text: 'Target Harian 100%', position: 'bottom-left', color: '#10b981' }
        ],
        transitionEffect: 'slide-up'
      },
      {
        id: 'pf-3',
        headline: 'Mulai Transformasimu Hari Ini',
        subtext: 'Bergabung dengan 200.000 pejuang hidup sehat.',
        voiceoverText: 'Mulai langkah sehatmu hari ini. Download PulseFit sekarang!',
        duration: 3.4,
        deviceType: 'iphone',
        deviceAngle: 'front',
        mockupScreenType: 'welcome',
        floatingBadges: [
          { id: 'pb4', icon: 'users', text: '200K+ Member', position: 'top-right', color: '#06b6d4' }
        ],
        transitionEffect: 'pop'
      }
    ]
  }
];

export const INITIAL_PROJECT: PromoProject = {
  id: 'promo-project-robopintar',
  appName: PRESET_TEMPLATES[0].name,
  appIcon: '🤖',
  tagline: PRESET_TEMPLATES[0].tagline,
  aspectRatio: '9:16',
  musicMood: 'upbeat-tech',
  musicVolume: 0.65,
  voiceoverEnabled: true,
  voiceRate: 1.05,
  themeColor: PRESET_TEMPLATES[0].themeColor,
  gradientBg: PRESET_TEMPLATES[0].gradientBg,
  scenes: PRESET_TEMPLATES[0].scenes,
  ctaHeadline: 'Unduh RoboPintar AI Sekarang',
  ctaSubtext: 'Tersedia gratis di App Store dan Google Play',
  ctaAppStore: true,
  ctaGooglePlay: true,
  ctaButtonText: 'Download Gratis 7 Hari',
  websiteUrl: 'robopintar.id'
};

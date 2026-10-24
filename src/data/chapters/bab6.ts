import { Chapter } from '../curriculumTypes';

export const BAB_6: Chapter = {
  id: 'bab-6',
  number: 'Bab VI',
  title: 'Sampaikan Melalui Surat',
  islandName: 'Kantor Pos Nusantara',
  themeColor: '#f97316',
  badgeGradient: 'from-orange-500 to-amber-600',
  icon: '✉️',
  description: 'Menyambung silaturahmi dan etika formal melalui surat pribadi, surat dinas resmi, dan adab berkomunikasi di ruang bincang digital modern.',
  subChapters: [
    {
      id: 'bab6-a',
      code: 'A',
      title: 'Mengenal Surat Pribadi dan Surat Resmi',
      summary: 'Membedah perbedaan mendasar antara surat pribadi (antarindividu/kerabat) dan surat dinas resmi (instansi/sekolah).',
      buddyGuideId: 'liling',
      materialSections: [
        {
          heading: 'Surat Pribadi vs Surat Dinas Resmi',
          body: '1. Surat Pribadi: Ditulis oleh perseorangan kepada orang lain (sahabat, keluarga, kakek/nenek). Sifatnya akrab, santai namun tetap santun. Tidak menggunakan kop surat, nomor surat, atau stempel resmi.\n2. Surat Dinas Resmi: Ditulis oleh instansi, organisasi (seperti OSIS atau Sekolah), atau lembaga resmi untuk urusan kedinasan. Memiliki unsur wajib:\n- Kepala Surat (Kop Surat) & Logo\n- Nomor Surat, Lampiran, dan Perihal\n- Tanggal Surat\n- Alamat Tujuan\n- Salam Pembuka Formal\n- Isi Surat Dinas (singkat, lugas, baku)\n- Salam Penutup\n- Tanda Tangan, Nama Terang, Jabatan, dan Stempel Resmi.',
        },
      ],
      questions: [
        {
          id: 'b6a-q1',
          questionText: 'Unsur yang HANYA terdapat pada surat dinas/resmi dan TIDAK ADA pada surat pribadi adalah...',
          options: [
            'Kepala surat (kop surat), nomor surat, dan stempel instansi',
            'Nama pengirim surat',
            'Alamat yang dituju',
            'Salam pembuka'
          ],
          correctAnswer: 0,
          explanation: 'Kop surat, nomor surat, perihal, dan stempel adalah identitas legalitas khusus surat dinas/resmi.',
          characterTip: { characterId: 'liling', tipText: 'Kop surat dan stempel resmi hanya ada di surat dinas!' },
        },
        {
          id: 'b6a-q2',
          questionText: 'Bahasa yang digunakan dalam penulisan surat pribadi kepada sahabat sebaya adalah...',
          options: [
            'Bahasa baku kaku seperti undang-undang perdata',
            'Bahasa yang akrab, hangat, komunikatif, namun tetap memegang norma kesantunan',
            'Bahasa kasar penuh caci maki',
            'Bahasa sandi kode morse'
          ],
          correctAnswer: 1,
          explanation: 'Surat pribadi bersifat akrab dan personal, tetapi tetap menjunjung kesopanan antarsahabat.',
          characterTip: { characterId: 'lulu', tipText: 'Akrab dan hangat, tapi tetap santun dan penuh perhatian.' },
        },
        {
          id: 'b6a-q3',
          questionText: 'Contoh salam pembuka yang lazim dan resmi dalam surat dinas sekolah adalah...',
          options: [
            'Hai bro, apa kabar?',
            'Dengan hormat,',
            'Halo kawan lama yang kurindukan,',
            'Selamat pagi sahabatku yang imut,'
          ],
          correctAnswer: 1,
          explanation: '"Dengan hormat," adalah formula salam pembuka resmi yang baku dalam persuratan dinas.',
          characterTip: { characterId: 'robo', tipText: '"Dengan hormat," diikuti tanda koma adalah salam resmi universal!' },
        },
        {
          id: 'b6a-q4',
          questionText: 'Bagian "Kop Surat" atau kepala surat pada surat dinas OSIS memuat informasi...',
          options: [
            'Nama organisasi/sekolah, alamat lengkap, nomor telepon, pos-el/email, dan logo',
            'Daftar nilai rapor seluruh siswa',
            'Koleksi foto liburan pengurus',
            'Nomor rekening tabungan pribadi ketua OSIS'
          ],
          correctAnswer: 0,
          explanation: 'Kop surat menunjukkan identitas resmi lembaga pengirim surat beserta kontak resminya.',
          characterTip: { characterId: 'agogo', tipText: 'Kop surat itu kop resmi paling atas yang ada logonya!' },
        },
        {
          id: 'b6a-q5',
          questionText: 'Penulisan tanggal surat dinas yang sudah memiliki kop surat resmi adalah...',
          options: [
            'Jakarta, 24 Oktober 2026 (salah karena nama kota sudah ada di kop surat)',
            '24 Oktober 2026 (cukup tanggal, bulan, tahun karena nama kota sudah tertera di kop surat)',
            'Jakarta: 24-10-2026.',
            'Tgl. 24 Okt 2026'
          ],
          correctAnswer: 1,
          explanation: 'Pada surat dinas berkop, nama kota tidak perlu ditulis lagi sebelum tanggal surat.',
          characterTip: { characterId: 'liling', tipText: 'Kaidah penting: Jika sudah ada kop surat, tidak perlu tulis nama kota lagi!' },
        },
        {
          id: 'b6a-q6',
          questionText: 'Tujuan dari penulisan surat pribadi adalah...',
          options: [
            'Menjalin silaturahmi, menanyakan kabar, atau menyampaikan urusan kekeluargaan personal',
            'Memberhentikan kepala sekolah dari jabatannya',
            'Mengumumkan undang-undang perpajakan nasional',
            'Menetapkan kurikulum baru'
          ],
          correctAnswer: 0,
          explanation: 'Surat pribadi berfungsi menjalin relasi kekeluargaan atau persahabatan antarindividu.',
          characterTip: { characterId: 'lulu', tipText: 'Menyambung tali silaturahmi dan menanyakan kabar kerabat yang jauh.' },
        },
        {
          id: 'b6a-q7',
          questionText: 'Bagian "Perihal" dalam surat dinas berfungsi untuk...',
          options: [
            'Menyatakan pokok inti maksud surat secara singkat (contoh: Permohonan Izin Tempat)',
            'Mencatat nomor sepatu penerima surat',
            'Menuliskan nama orang tua pengirim',
            'Menghitung jumlah kata'
          ],
          correctAnswer: 0,
          explanation: 'Perihal memuat subjek atau inti masalah surat agar penerima langsung tahu kepentingannya.',
          characterTip: { characterId: 'tyro', tipText: 'Perihal itu rangkuman maksud suratnya, misal: Undangan Rapat OSIS!' },
        },
        {
          id: 'b6a-q8',
          questionText: 'Contoh salam penutup yang tepat untuk surat pribadi kepada kakek dan nenek di desa adalah...',
          options: [
            'Wassalam, salam hormat dan rindu dari cucumu,',
            'Hormat kami, Kepala Bagian Keuangan,',
            'Sekian terima kasih bos,',
            'Tanda tangan di bawah ini,'
          ],
          correctAnswer: 0,
          explanation: 'Salam penutup bernada rindu dan takzim sangat pas mencerminkan adab cucu kepada kakek-nenek.',
          characterTip: { characterId: 'lulu', tipText: 'Salam rindu dari cucu mencerminkan rasa hormat dan cinta.' },
        },
        {
          id: 'b6a-q9',
          questionText: 'Jika sebuah surat tidak memiliki lampiran berkas dokumen tambahan, maka penulisan pada baris "Lampiran" adalah...',
          options: ['Lampiran: - (atau ditiadakan baris lampirannya)', 'Lampiran: Tidak ada berkas sama sekali jangan dicari', 'Lampiran: Kosong melompong', 'Lampiran: 0 lembar uang'],
          correctAnswer: 0,
          explanation: 'Jika tidak ada lampiran, baris lampiran diberi tanda hubung (-) atau ditiadakan.',
          characterTip: { characterId: 'robo', tipText: 'Cukup beri tanda strip (-) atau tidak perlu dicantumkan baris lampiran.' },
        },
        {
          id: 'b6a-q10',
          questionText: 'Fungsi stempel/cap dinas pada surat resmi adalah...',
          options: [
            'Sebagai bukti pengesahan legalitas hukum bahwa surat tersebut benar-benar diterbitkan oleh instansi terkait',
            'Hanya sebagai mainan cap warna merah atau ungu',
            'Untuk menutupi nama pengirim agar tidak terbaca',
            'Sebagai tanda bahwa kertasnya boleh disobek'
          ],
          correctAnswer: 0,
          explanation: 'Stempel basah mengesahkan keabsahan dan keaslian dokumen resmi suatu organisasi.',
          characterTip: { characterId: 'agogo', tipText: 'Stempel membuktikan surat itu asli dari instansi resmi!' },
        },
      ],
    },
    {
      id: 'bab6-b',
      code: 'B',
      title: 'Berkomunikasi Melalui Surat dengan Santun',
      summary: 'Menerapkan tata krama kesantunan berbahasa, pilihan kata hormat, struktur permohonan yang santun, dan salam takzim.',
      buddyGuideId: 'lulu',
      materialSections: [
        {
          heading: 'Prinsip Kesantunan dalam Berkirim Surat',
          body: 'Menulis surat adalah cermin kepribadian dan budi pekerti penulisnya.\nPrinsip penting:\n1. Memilih sapaan yang tepat: "Bapak/Ibu Guru yang saya hormati", "Kakak yang kurindukan", "Sahabatku yang baik".\n2. Menggunakan kalimat permohonan yang rendah hati: "Sudilah kiranya Bapak/Ibu memberikan izin...", "Besar harapan kami...".\n3. Menghindari kata-kata yang bernada menuntut kasar atau meremehkan.\n4. Mengucapkan terima kasih yang tulus atas perhatian penerima surat.',
        },
      ],
      questions: [
        {
          id: 'b6b-q1',
          questionText: 'Kalimat permohonan izin sakit kepada wali kelas yang PALING SANTUN adalah...',
          options: [
            'Saya sakit hari ini, jadi saya tidak bisa masuk sekolah ya Bu!',
            'Dengan ini saya memohon izin tidak dapat mengikuti kegiatan belajar di sekolah hari ini karena sedang sakit demam.',
            'Tolong jangan anggap saya alpa karena saya malas bangun.',
            'Ibu guru harus maklum saya sakit.'
          ],
          correctAnswer: 1,
          explanation: 'Kalimat kedua menggunakan pilihan kata formal, jelas alasannya, dan sangat menghormati guru.',
          characterTip: { characterId: 'lulu', tipText: 'Sopan, jelas alasannya, dan menghormati bapak/ibu guru.' },
        },
        {
          id: 'b6b-q2',
          questionText: 'Kata sapaan penghormatan yang tepat digunakan dalam surat permohonan narasumber kepada seorang profesor atau kepala dinas adalah...',
          options: ['Kamu', 'Anda atau Saudara', 'Yang Terhormat Bapak/Ibu (Yth. Bapak/Ibu)', 'Hei kawan'],
          correctAnswer: 2,
          explanation: '"Yang Terhormat (Yth.) Bapak/Ibu" adalah bentuk sapaan takzim standar persuratan resmi di Indonesia.',
          characterTip: { characterId: 'liling', tipText: 'Gunakan singkatan "Yth." diikuti nama jabatan atau nama orang!' },
        },
        {
          id: 'b6b-q3',
          questionText: 'Penulisan alamat surat yang BENAR sesuai kaidah bahasa Indonesia adalah...',
          options: [
            'Kepada Yth. Bapak Kepala Sekolah (salah karena kata "Kepada" mubazir)',
            'Yth. Kepala SMP Negeri 1 Nusantara\nJalan Pemuda No. 10\nJakarta',
            'Kepada Yth: Bpk Kepala Sekolah.',
            'Yth, Bpk. Kepala Sekolah di Jakarta.'
          ],
          correctAnswer: 1,
          explanation: 'Kata "Kepada" tidak perlu dipakai jika sudah menggunakan "Yth.", dan singkatan jalan tidak disingkat berlebihan serta tanpa titik di ujung baris.',
          characterTip: { characterId: 'liling', tipText: 'Kaidah sakti: Jangan gabung "Kepada" dengan "Yth."! Cukup tulis "Yth." saja!' },
        },
        {
          id: 'b6b-q4',
          questionText: 'Kalimat penutup surat permohonan izin yang santun dan baku adalah...',
          options: [
            'Atas perhatian dan izin yang Bapak berikan, saya mengucapkan terima kasih.',
            'Atas perhatiannya, saya ucapkan beribu-ribu terima kasih banyak.',
            'Sekian dulu ya Pak jangan lupa acc.',
            'Terima kasih atas perhatiannya yang amat sangat baik.'
          ],
          correctAnswer: 0,
          explanation: '"Atas perhatian... Bapak/Ibu, saya mengucapkan terima kasih" adalah bentuk baku, menghindari akhiran "-nya" untuk menyapa orang kedua.',
          characterTip: { characterId: 'robo', tipText: 'Hindari kata "perhatian-nya", gunakan "perhatian Bapak/Ibu"!' },
        },
        {
          id: 'b6b-q5',
          questionText: 'Dalam surat pribadi kepada teman lama, ungkapan kerinduan yang santun dan hangat tampak pada kalimat...',
          options: [
            'Kenapa kamu tidak pernah menghubungiku lagi, dasar sombong!',
            'Sudah hampir satu tahun sejak kepindahanmu ke Padang, semoga kamu dan keluarga di sana senantiasa sehat dan bahagia.',
            'Cepat balas surat ini sebelum saya marah!',
            'Saya lupa nama kamu siapa.'
          ],
          correctAnswer: 1,
          explanation: 'Mendoakan kesehatan dan kebahagiaan sahabat mencerminkan ketulusan persahabatan yang santun.',
          characterTip: { characterId: 'lulu', tipText: 'Mendoakan keselamatan dan kebahagiaan sahabat dengan tulus.' },
        },
        {
          id: 'b6b-q6',
          questionText: 'Penggunaan huruf kapital pada kata sapaan "Bapak", "Ibu", atau "Saudara" di tengah kalimat surat berlaku ketika...',
          options: [
            'Kata tersebut digunakan sebagai kata sapaan langsung kepada orang kedua penerima surat',
            'Kapan saja penulis ingin memakai huruf besar',
            'Hanya di awal tahun ajaran baru',
            'Jika tintanya berwarna biru'
          ],
          correctAnswer: 0,
          explanation: 'Kata sapaan penunjuk orang kedua langsung (Bapak, Ibu, Saudara, Anda) wajib diawali huruf kapital.',
          characterTip: { characterId: 'liling', tipText: 'Kata sapaan langsung kepada orang kedua wajib berhuruf kapital!' },
        },
        {
          id: 'b6b-q7',
          questionText: 'Jika kita menerima surat undangan peringatan Hari Kemerdekaan di sekolah tetapi tidak dapat hadir, respons santun yang sebaiknya kita berikan adalah...',
          options: [
            'Mengabaikan surat itu dan membuangnya ke tempat sampah',
            'Menyampaikan ucapan terima kasih atas undangan serta memohon maaf dan menyampaikan alasan ketidakhadiran secara baik',
            'Menertawakan acara tersebut di depan umum',
            'Menghasut orang lain agar tidak hadir'
          ],
          correctAnswer: 1,
          explanation: 'Menyampaikan permohonan maaf dan ucapan terima kasih adalah wujud tata krama pergaulan yang luhur.',
          characterTip: { characterId: 'tyro', tipText: 'Tetap ucapkan terima kasih dan minta maaf jika berhalangan hadir!' },
        },
        {
          id: 'b6b-q8',
          questionText: 'Kalimat pembuka surat pribadi yang menanyakan kabar kerabat secara sopan adalah...',
          options: [
            'Kakek masih hidup kan?',
            'Bagaimana kabar Kakek dan Nenek di desa? Ananda selalu berdoa agar Kakek dan Nenek senantiasa dilimpahi kesehatan.',
            'Cepat kirimi saya uang jajan!',
            'Kakek harus membelikan saya sepeda baru.'
          ],
          correctAnswer: 1,
          explanation: 'Menanyakan kabar disertai doa tulus mencerminkan akhlak mulia seorang cucu.',
          characterTip: { characterId: 'lulu', tipText: 'Doakan kesehatan kakek nenek di desa.' },
        },
        {
          id: 'b6b-q9',
          questionText: 'Kesantunan dalam surat dinas tecermin dari penggunaan kalimat yang...',
          options: [
            'Lugas, jelas intinya, tidak bertele-tele, dan menghargai kedudukan penerima surat',
            'Sangat puitis seperti surat cinta',
            'Memuat ancaman hukuman penjara',
            'Menggunakan banyak singkatan tidak baku seperti "yg", "dgn", "bkn"'
          ],
          correctAnswer: 0,
          explanation: 'Surat dinas harus lugas, hemat kata, menghormati penerima, dan menggunakan ejaan resmi tanpa singkatan sms.',
          characterTip: { characterId: 'agogo', tipText: 'Jangan pakai singkatan seperti "yg", "dgn"! Tulis lengkap dan rapi!' },
        },
        {
          id: 'b6b-q10',
          questionText: 'Tanda tangan di akhir surat pribadi dan surat dinas berfungsi sebagai...',
          options: [
            'Hiasan gambar tangan saja',
            'Tanda tanggung jawab pribadi atau keabsahan identitas pengirim atas isi pesan yang disampaikan',
            'Tanda bahwa tinta pulpen masih ada',
            'Agar kertas tidak terbang ditiup angin'
          ],
          correctAnswer: 1,
          explanation: 'Tanda tangan membuktikan komitmen dan tanggung jawab hukum/moral pengirim surat.',
          characterTip: { characterId: 'robo', tipText: 'Tanda tangan adalah bukti otentik komitmen si pengirim pesan!' },
        },
      ],
    },
    {
      id: 'bab6-c',
      code: 'C',
      title: 'Menganalisis Informasi di Ruang Bincang',
      summary: 'Menerapkan etika berkomunikasi digital (netiket) di ruang obrolan (chat), email/surel formal kepada guru, dan forum belajar daring.',
      buddyGuideId: 'monk',
      materialSections: [
        {
          heading: 'Etika Berkomunikasi di Ruang Bincang (Netiket)',
          body: 'Di era digital, komunikasi sering berlangsung di WhatsApp, Google Classroom, atau Email.\nAturan Emas Netiket Pelajar:\n1. Perhatikan Waktu: Hindari mengirim pesan di larut malam (di atas pukul 20.00) kecuali darurat.\n2. Awali Salam & Sapaan Sopan: "Selamat pagi Bapak/Ibu Guru...".\n3. Perkenalkan Diri: Sebutkan nama lengkap dan kelas (misal: "Saya Ahmad, siswa kelas 7A").\n4. Sampaikan Keperluan dengan Jelas & Singkat.\n5. Akhiri dengan Terima Kasih.\n6. Hindari Mengetik Seluruh Kalimat dengan HURUF KAPITAL (karena diartikan berteriak/marah).',
        },
      ],
      questions: [
        {
          id: 'b6c-q1',
          questionText: 'Dalam etika komunikasi digital (netiket), menulis pesan obrolan dengan SEMUA HURUF BESAR/KAPITAL dianggap...',
          options: [
            'Tanda orang yang sangat pintar',
            'Sangat kasar karena diartikan sedang membentak atau berteriak marah kepada lawan bicara',
            'Kewajiban dalam pelajaran bahasa Indonesia',
            'Membuat pesan lebih cepat sampai di tujuan'
          ],
          correctAnswer: 1,
          explanation: 'Di dunia internet, all-caps (huruf kapital semua) melambangkan emosi berteriak atau membentak.',
          characterTip: { characterId: 'monk', tipText: 'Jangan ketik pakai HURUF BESAR SEMUA, nanti dikira marah membentak!' },
        },
        {
          id: 'b6c-q2',
          questionText: 'Format pesan chat yang BENAR dan SANTUN dari seorang siswa kepada guru untuk menanyakan tugas adalah...',
          options: [
            '"Pak tugasnya apa ya?" (tanpa salam dan tanpa nama)',
            '"P", "P", "P" (hanya mengirim huruf P berkali-kali)',
            '"Selamat siang Bu Rina, mohon maaf mengganggu waktunya. Saya Nabila dari kelas 7B, izin bertanya terkait tugas portofolio halaman 45, apakah dikumpulkan hari Senin? Terima kasih Bu."',
            '"Woy Bu, bales dong!"'
          ],
          correctAnswer: 2,
          explanation: 'Memuat salam, permohonan maaf mengganggu, identitas nama/kelas, inti pertanyaan yang jelas, dan terima kasih.',
          characterTip: { characterId: 'liling', tipText: 'Formula 5 langkah: Salam -> Maaf ganggu -> Nama & Kelas -> Inti pesan -> Terima kasih!' },
        },
        {
          id: 'b6c-q3',
          questionText: 'Mengirim pesan chat singkat hanya berupa huruf "P" berkali-kali kepada guru atau teman yang lebih tua dinilai...',
          options: [
            'Sangat sopan dan modern',
            'Tidak sopan, mengganggu, dan tidak beretika karena memaksa notifikasi berbunyi tanpa ada kalimat maksud',
            'Kebiasaan para ilmuwan hebat',
            'Tanda cinta tanah air'
          ],
          correctAnswer: 1,
          explanation: 'Spam huruf "P" (ping) melanggar tata krama komunikasi santun generasi terpelajar.',
          characterTip: { characterId: 'tyro', tipText: 'Jangan pernah kirim huruf "P P P" ke guru ya! Itu tidak sopan!' },
        },
        {
          id: 'b6c-q4',
          questionText: 'Waktu yang paling tepat dan sopan untuk mengirim pesan keperluan sekolah kepada guru adalah...',
          options: [
            'Tengah malam pukul 01.30 dini hari',
            'Saat jam kerja/sekolah aktif (pagi hingga sore hari kerja)',
            'Saat guru sedang melaksanakan salat berjemaah',
            'Subuh buta sebelum ayam berkokok'
          ],
          correctAnswer: 1,
          explanation: 'Menghormati waktu istirahat dan privasi guru adalah bagian penting kesantunan netiket.',
          characterTip: { characterId: 'lulu', tipText: 'Kirimlah di jam kerja pagi sampai sore, hormati waktu istirahat guru.' },
        },
        {
          id: 'b6c-q5',
          questionText: 'Subjek email (Subject) saat mengirim tugas Bahasa Indonesia ke pos-el guru sebaiknya diisi...',
          options: [
            'Dikosongkan saja',
            'Tugas Bahasa Indonesia - Teks Deskripsi - Fajar Pratama (Kelas 7C)',
            'Tolong dibuka ya bu jangan malas',
            'Surat cinta rahasia'
          ],
          correctAnswer: 1,
          explanation: 'Subjek yang jelas memuat nama tugas, materi, nama siswa, dan kelas memudahkan guru mendokumentasikan nilai.',
          characterTip: { characterId: 'robo', tipText: 'Subjek email harus jelas: Nama Tugas - Nama Lengkap - Kelas!' },
        },
        {
          id: 'b6c-q6',
          questionText: 'Penggunaan emotikon/stiker dalam ruang bincang resmi sekolah sebaiknya...',
          options: [
            'Digunakan secara berlebihan ratusan stiker bergerak hingga layar penuh',
            'Digunakan secara bijak, wajar, dan secukupnya untuk mendukung kesantunan nada bicara',
            'Menggunakan stiker mengejek atau menertawakan teman yang salah',
            'Dilarang tersenyum sama sekali'
          ],
          correctAnswer: 1,
          explanation: 'Emotikon secukupnya (seperti senyum sopan atau salam) mencairkan ketegangan tanpa mengurangi formalitas.',
          characterTip: { characterId: 'monk', tipText: 'Pakai stiker secukupnya yang sopan, jangan spam stiker usil di grup kelas!' },
        },
        {
          id: 'b6c-q7',
          questionText: 'Jika di dalam grup bincang kelas terjadi perdebatan panas yang mengarah pada saling ejek antarteman, tindakan terpuji yang dapat dilakukan adalah...',
          options: [
            'Ikut memanaskan suasana dengan kata-kata kasar',
            'Mengingatkan teman dengan santun agar tetap rukun dan kembali pada tujuan utama grup untuk belajar bersama',
            'Merekam dan membagikannya ke media sosial untuk dipermalukan',
            'Menghina kedua belah pihak'
          ],
          correctAnswer: 1,
          explanation: 'Menjadi juru damai yang mengingatkan etika kerukunan mencerminkan kedewasaan karakter pelajar Pancasila.',
          characterTip: { characterId: 'lulu', tipText: 'Ajak teman-teman berdamai dan kembali fokus belajar bersama.' },
        },
        {
          id: 'b6c-q8',
          questionText: 'Penyebaran tangkapan layar (screenshot) obrolan pribadi teman ke ruang publik tanpa izin pemiliknya merupakan tindakan...',
          options: [
            'Hebat dan patut dicontoh',
            'Melanggar etika privasi dan dapat merusak kepercayaan serta hubungan pertemanan',
            'Kewajiban setiap pengguna ponsel',
            'Tugas ekstrakurikuler'
          ],
          correctAnswer: 1,
          explanation: 'Membocorkan rahasia percakapan privat melanggar hak privasi dan adab pertemanan.',
          characterTip: { characterId: 'agogo', tipText: 'Jaga rahasia teman, jangan asal sebar screenshot sembarangan!' },
        },
        {
          id: 'b6c-q9',
          questionText: 'Sebelum menekan tombol "Kirim" (Send) pada email atau pesan chat penting, hal yang harus kita lakukan adalah...',
          options: [
            'Membaca ulang sekali lagi untuk memastikan tidak ada salah ketik (typo), kalimat sudah sopan, dan lampiran berkas sudah terpasang',
            'Langsung melempar ponsel ke kasur',
            'Menutup aplikasi tanpa mengirimnya',
            'Mengganti kata sandi email'
          ],
          correctAnswer: 0,
          explanation: 'Membaca ulang mencegah kesalahan lampiran lupa diunggah atau salah ketik kata penting.',
          characterTip: { characterId: 'liling', tipText: 'Cek lagi: lampiran tugasnya sudah terpasang belum? Ejaannya sudah benar?' },
        },
        {
          id: 'b6c-q10',
          questionText: 'Tujuan utama mempelajari netiket (etika berinternet) di kelas 7 SMP adalah...',
          options: [
            'Membentuk generasi pelajar yang berakhlak mulia, cerdas digital, dan dihormati dalam berkomunikasi di dunia maya',
            'Agar tidak boleh memegang ponsel sama sekali',
            'Membuat internet menjadi sepi',
            'Hanya untuk lulus ujian semester'
          ],
          correctAnswer: 0,
          explanation: 'Netiket melahirkan generasi digital yang berbudaya, santun, dan saling menghargai martabat sesama manusia.',
          characterTip: { characterId: 'tyro', tipText: 'Jadilah petualang digital yang cerdas, sopan, dan membanggakan!' },
        },
      ],
    },
    {
      id: 'bab6-d',
      code: 'D',
      title: 'Berkomunikasi Melalui Surat',
      summary: 'Praktik langsung menyusun surat pribadi untuk sahabat/keluarga dan menyusun surat dinas permohonan izin/undangan kegiatan sekolah.',
      buddyGuideId: 'robo',
      materialSections: [
        {
          heading: 'Panduan Praktik Menulis Surat',
          body: 'Langkah praktis menyusun dua jenis surat:\n1. Menyusun Surat Pribadi:\n- Tulis tempat dan tanggal pembuatan surat (pojok kanan atas).\n- Tulis salam pembuka hangat.\n- Buka dengan menanyakan kabar dan ungkapan rindu.\n- Tuliskan isi pesan (cerita liburan, kabar sekolah, atau pengalaman seru).\n- Akhiri dengan harapan balasan dan salam penutup.\n- Cantumkan tanda tangan dan namamu.\n\n2. Menyusun Surat Dinas (OSIS):\n- Cantumkan Kop Surat OSIS.\n- Nomor, Lampiran, dan Perihal.\n- Tanggal surat (tanpa nama kota).\n- Alamat Yth. Penerima.\n- Salam pembuka formal ("Dengan hormat,").\n- Isi surat: Pembuka, Hari/Tanggal/Waktu/Tempat kegiatan, dan Penutup.\n- Tanda tangan Ketua OSIS dan Pembina/Kepala Sekolah berserta stempel.',
        },
      ],
      questions: [
        {
          id: 'b6d-q1',
          questionText: 'Penulisan tempat dan tanggal pembuatan surat pribadi di pojok kanan atas yang BENAR adalah...',
          options: [
            'Bandung, 24 Oktober 2026',
            'Bandung: 24/Oktober/2026.',
            'bandung, 24 oktober 2026',
            'Bandung. 24-10-2026'
          ],
          correctAnswer: 0,
          explanation: 'Nama kota diawali huruf kapital, dipisahkan koma dengan tanggal, dan nama bulan ditulis lengkap tanpa titik di akhir.',
          characterTip: { characterId: 'liling', tipText: 'Nama kota diawali kapital, beri koma, lalu tanggal, bulan huruf, dan tahun!' },
        },
        {
          id: 'b6d-q2',
          questionText: 'Dalam surat permohonan izin penyelenggaraan Lomba Cerdas Cermat OSIS, bagian rincian waktu kegiatan ditulis secara runtut, yaitu...',
          options: [
            'hari/tanggal, waktu, tempat kegiatan',
            'harga tiket, makanan panitia, warna kaos',
            'nama presiden, nama menteri, nama gubernur',
            'hanya nama sekolah saja'
          ],
          correctAnswer: 0,
          explanation: 'Rincian hari/tanggal, waktu, dan tempat merupakan informasi mutlak dalam surat izin kegiatan.',
          characterTip: { characterId: 'robo', tipText: 'Rincian waktu dan tempat harus tercatat jelas dan runtut!' },
        },
        {
          id: 'b6d-q3',
          questionText: 'Penulisan rincian data kegiatan pada surat dinas yang tepat menggunakan huruf awal kecil karena merupakan lanjutan kalimat sebelumnya adalah...',
          options: [
            'hari, tanggal : Sabtu, 28 Oktober 2026\nwaktu : pukul 08.00 s.d. 12.00 WIB\ntempat : Aula SMP Merdeka',
            'Hari, Tanggal : Sabtu\nWaktu : Pagi\nTempat : Disana',
            'HARI/TANGGAL : SABTU\nWAKTU : SIANG',
            'hari, tanggal: kemaren\nwaktu: kapan saja'
          ],
          correctAnswer: 0,
          explanation: 'Kata "hari", "waktu", dan "tempat" diawali huruf kecil jika merupakan lanjutan kalimat pengantar sebelumnya.',
          characterTip: { characterId: 'liling', tipText: 'Kaidah teliti: kata hari, waktu, tempat ditulis huruf kecil di awal baris perincian!' },
        },
        {
          id: 'b6d-q4',
          questionText: 'Singkatan penulisan waktu yang baku untuk "sampai dengan" dalam surat dinas adalah...',
          options: ['s.d.', 's/d', 'sd.', 's-d'],
          correctAnswer: 0,
          explanation: 'Bentuk baku sesuai PUEBI/EYD untuk sampai dengan adalah "s.d." (dengan titik di setiap huruf).',
          characterTip: { characterId: 'monk', tipText: 'Ingat: s.d. pakai titik dua-duanya, bukan garis miring s/d!' },
        },
        {
          id: 'b6d-q5',
          questionText: 'Kalimat penutup yang efektif dan baku untuk surat dinas undangan rapat adalah...',
          options: [
            'Demikian surat undangan ini kami sampaikan. Atas perhatian dan kehadiran Bapak/Ibu, kami mengucapkan terima kasih.',
            'Demikian surat ini kami buat, semoga bapak ibu tidak berhalangan hadir ya terima kasih banyak sekali.',
            'Sekian dan terima kasih atas perhatiannya.',
            'Harap datang tepat waktu kalau tidak mau kena sanksi.'
          ],
          correctAnswer: 0,
          explanation: 'Kalimat pertama baku, santun, lugas, dan menghargai Bapak/Ibu penerima undangan.',
          characterTip: { characterId: 'lulu', tipText: 'Kalimat penutup resmi yang anggun dan santun.' },
        },
        {
          id: 'b6d-q6',
          questionText: 'Di mana posisi peletakan tanda tangan Ketua OSIS dan Sekretaris OSIS pada surat dinas?',
          options: [
            'Di bagian bawah surat (Ketua di sebelah kiri dan Sekretaris di sebelah kanan atau berdampingan) sebelum stempel dan pengesahan Pembina',
            'Di bagian kop surat paling atas',
            'Di balik kertas yang tidak terlihat',
            'Di amplop luar saja'
          ],
          correctAnswer: 0,
          explanation: 'Tanda tangan pengurus diletakkan di bagian bawah surat sebelum nama terang dan jabatan.',
          characterTip: { characterId: 'tyro', tipText: 'Di bagian bawah surat resmi, lengkap dengan stempelnya!' },
        },
        {
          id: 'b6d-q7',
          questionText: 'Dalam surat pribadi, jika kita ingin menambahkan satu kalimat pesan singkat setelah surat ditandatangani, bagian itu dinamakan...',
          options: ['P.S. (Postscript) / Catatan Kaki Tambahan', 'Kop surat', 'Perihal', 'Lampiran rahasia'],
          correctAnswer: 0,
          explanation: 'P.S. (Postscript / Catatan) digunakan untuk menyisipkan pesan kilat di bawah tanda tangan surat pribadi.',
          characterTip: { characterId: 'monk', tipText: 'P.S. = Catatan tambahan: "P.S. Jangan lupa bawa oleh-oleh ya!"' },
        },
        {
          id: 'b6d-q8',
          questionText: 'Cermati kutipan: "Keluarga kami berencana berlibur ke rumah Bibi di Yogyakarta saat liburan semester genap nanti." Kutipan ini tepat diletakkan pada...',
          options: ['Bagian isi surat pribadi kepada Bibi', 'Kop surat dinas kementerian', 'Nomor surat dinas', 'Glosarium'],
          correctAnswer: 0,
          explanation: 'Kutipan memuat rencana silaturahmi kekeluargaan pada surat pribadi.',
          characterTip: { characterId: 'agogo', tipText: 'Ini isi pesan kabar liburan ke rumah Bibi tersayang!' },
        },
        {
          id: 'b6d-q9',
          questionText: 'Kertas yang paling layak dan sopan digunakan untuk mengirim surat resmi dinas OSIS ke Kepala Sekolah adalah...',
          options: [
            'Kertas robekan buku tulis bergaris yang kucal',
            'Kertas HVS putih bersih ukuran A4 atau F4 (Folio) berkop surat resmi sekolah',
            'Kertas bungkus makanan berminyak',
            'Kertas tisu'
          ],
          correctAnswer: 1,
          explanation: 'Kertas HVS bersih ukuran standar mencerminkan formalitas dan penghargaan kepada institusi sekolah.',
          characterTip: { characterId: 'liling', tipText: 'Gunakan kertas HVS putih bersih ukuran standar A4 atau Folio!' },
        },
        {
          id: 'b6d-q10',
          questionText: 'Kelebihan membiasakan diri menulis surat dengan tata bahasa yang baik sejak usia SMP adalah...',
          options: [
            'Membangun keterampilan komunikasi profesional, memperhalus budi pekerti, dan siap menghadapi dunia kerja di masa depan',
            'Membuat kuota internet habis sia-sia',
            'Menjadi orang yang ditakuti teman',
            'Hanya membuang-buang waktu bermain game'
          ],
          correctAnswer: 0,
          explanation: 'Keterampilan menulis surat mengasah adab berelasi dan kemampuan komunikasi profesional seumur hidup.',
          characterTip: { characterId: 'robo', tipText: 'Keterampilan ini bekal berharga untuk menjadi pemimpin masa depan!' },
        },
      ],
    },
  ],
};

import { Chapter } from '../curriculumTypes';

export const BAB_4: Chapter = {
  id: 'bab-4',
  number: 'Bab IV',
  title: 'Aksi Nyata Para Pelindung Bumi',
  islandName: 'Hutan Pelindung Bumi',
  themeColor: '#059669',
  badgeGradient: 'from-emerald-600 to-green-700',
  icon: '🌍',
  description: 'Menjadi jurnalis muda pelindung bumi dengan menguasai teks berita, analisis ADIKSIMBA, dan kemampuan menepis berita palsu.',
  subChapters: [
    {
      id: 'bab4-a',
      code: 'A',
      title: 'Menganalisis Teks Berita',
      summary: 'Memahami hakikat teks berita: peristiwa nyata (faktual), terkini (aktual), penting, dan menarik bagi khalayak ramai.',
      buddyGuideId: 'tyro',
      materialSections: [
        {
          heading: 'Pengertian & Ciri Pokok Berita',
          body: 'Teks berita adalah teks yang melaporkan kejadian, peristiwa, atau informasi mengenai sesuatu yang telah atau sedang terjadi di masyarakat.\nSyarat utama berita:\n1. Faktual: Nyata dan berdasarkan fakta objektif (bukan rekaan/fiksi).\n2. Aktual: Hangat dan baru saja terjadi (bukan peristiwa usang).\n3. Penting & Bermanfaat: Berdampak bagi kepentingan orang banyak (misal: pelestarian lingkungan, penanaman mangrove, pengurangan sampah plastik).\n4. Seimbang (Objektif): Tidak memihak.',
          example: '"Ratusan pelajar SMP di Denpasar menggelar aksi bersih pantai dan berhasil mengumpulkan dua ton sampah plastik dalam peringatan Hari Bumi."',
        },
      ],
      questions: [
        {
          id: 'b4a-q1',
          questionText: 'Syarat utama sebuah peristiwa layak diangkat menjadi berita adalah...',
          options: [
            'Harus berupa cerita karangan khayalan yang seram',
            'Faktual (berdasarkan fakta nyata) dan aktual (peristiwa hangat terkini)',
            'Hanya boleh membicarakan kehidupan artis luar negeri',
            'Harus menimbulkan perkelahian di masyarakat'
          ],
          correctAnswer: 1,
          explanation: 'Berita wajib berlandaskan fakta nyata (faktual) dan baru saja terjadi (aktual).',
          characterTip: { characterId: 'tyro', tipText: 'Faktual = Fakta Nyata! Aktual = Hangat Terkini!' },
        },
        {
          id: 'b4a-q2',
          questionText: 'Manakah peristiwa yang paling bernilai berita tinggi (news value) bagi lingkungan hidup?',
          options: [
            'Seorang anak menjatuhkan sebutir permen di kamarnya',
            'Komunitas muda menanam 10.000 bibit mangrove di pesisir pantai untuk cegah abrasi',
            'Kucing tidur siang di bawah pohon mangga',
            'Seseorang membeli pensil baru di koperasi sekolah'
          ],
          correctAnswer: 1,
          explanation: 'Penanaman 10.000 mangrove memiliki dampak luas bagi ekosistem dan masyarakat pesisir.',
          characterTip: { characterId: 'liling', tipText: 'Pilihlah peristiwa yang berdampak besar bagi kelestarian bumi kita!' },
        },
        {
          id: 'b4a-q3',
          questionText: 'Sikap seorang jurnalis atau pewarta berita yang baik adalah...',
          options: [
            'Menambah-nambahi cerita bohong agar terlihat dramatis',
            'Objektif, netral, dan memverifikasi kebenaran data dari narasumber tepercaya',
            'Menerima suap untuk menutupi pencemaran pabrik',
            'Hanya memberitakan keluarga sendiri'
          ],
          correctAnswer: 1,
          explanation: 'Objektivitas dan verifikasi sumber adalah kode etik utama jurnalistik.',
          characterTip: { characterId: 'robo', tipText: 'Jurnalis sejati selalu jujur, netral, dan memeriksa data faktanya!' },
        },
        {
          id: 'b4a-q4',
          questionText: 'Kalimat berikut yang merupakan FAKTA dalam teks berita adalah...',
          options: [
            'Menurut saya, udara hari ini mungkin akan terasa sangat panas sekali.',
            'Badan Meteorologi mencatat suhu udara di Surabaya mencapai 35 derajat Celsius pada pukul 12.00 WIB.',
            'Tampaknya semua orang akan menyukai cuaca mendung ini.',
            'Bencana banjir mungkin saja terjadi jika warga tidak hati-hati.'
          ],
          correctAnswer: 1,
          explanation: 'Pernyataan Badan Meteorologi memuat data angka, tempat, dan waktu yang terverifikasi secara ilmiah.',
          characterTip: { characterId: 'agogo', tipText: 'Fakta itu ada bukti angka, waktu, dan lembaga resminya!' },
        },
        {
          id: 'b4a-q5',
          questionText: 'Sedangkan kalimat yang menyatakan OPINI (pendapat subjektif) dalam berita adalah...',
          options: [
            'Banjir merendam 50 rumah di bantaran Sungai Ciliwung.',
            'Aksi bersih sungai ini dinilai sebagai langkah terbaik yang pernah ada di dunia.',
            'Kegiatan reboisasi dihadiri oleh 200 relawan.',
            'Pemerintah daerah menyiapkan posko pengungsian di balai desa.'
          ],
          correctAnswer: 1,
          explanation: '"Langkah terbaik yang pernah ada di dunia" adalah klaim subjektif dan berlebihan (opini).',
          characterTip: { characterId: 'monk', tipText: 'Ada kata "dinilai sebagai terbaik di dunia", itu pendapat orang, bukan fakta!' },
        },
        {
          id: 'b4a-q6',
          questionText: 'Fungsi utama teks berita tentang lingkungan bagi generasi muda adalah...',
          options: [
            'Menakut-nakuti agar anak tidak berani keluar rumah',
            'Meningkatkan kesadaran kritis dan menginspirasi aksi nyata melestarikan alam',
            'Menjual produk plastik sekali pakai',
            'Membuat orang malas menjaga kebersihan'
          ],
          correctAnswer: 1,
          explanation: 'Berita lingkungan bertujuan mengedukasi dan menggerakkan partisipasi aktif warga menjaga bumi.',
          characterTip: { characterId: 'tyro', tipText: 'Ayo jadilah pahlawan pelindung bumi!' },
        },
        {
          id: 'b4a-q7',
          questionText: 'Ciri bahasa berita yang baik adalah...',
          options: [
            'Baku, komunikatif, lugas, dan tidak berbelit-belit',
            'Penuh kata kiasan puitis yang sulit dipahami orang awam',
            'Menggunakan bahasa gaul alay tanpa tanda baca',
            'Berupa bait-bait pantun bersampiran'
          ],
          correctAnswer: 0,
          explanation: 'Bahasa jurnalistik mengutamakan kelugasan, kebakuan, dan kemudahan dipahami publik.',
          characterTip: { characterId: 'liling', tipText: 'Lugas, jelas, dan baku agar semua orang langsung mengerti beritanya.' },
        },
        {
          id: 'b4a-q8',
          questionText: 'Berita yang memuat pandangan dari dua belah pihak secara berimbang disebut memenuhi prinsip...',
          options: ['Clickbait', 'Cover both sides (keberimbangan)', 'Sensasional', 'Monolog'],
          correctAnswer: 1,
          explanation: 'Cover both sides berarti meliput keterangan dari pihak-pihak terkait secara seimbang dan adil.',
          characterTip: { characterId: 'robo', tipText: 'Cover both sides = dengarkan kedua belah pihak secara adil!' },
        },
        {
          id: 'b4a-q9',
          questionText: 'Bagian teks berita yang berfungsi memancing minat baca sekaligus merangkum inti peristiwa disebut...',
          options: ['Judul berita (headline)', 'Daftar indeks', 'Kaki halaman', 'Kata pengantar editor'],
          correctAnswer: 0,
          explanation: 'Judul berita (headline) merangkum intisari peristiwa dan memikat pembaca untuk membaca kelanjutannya.',
          characterTip: { characterId: 'monk', tipText: 'Headline itu judul utama di paling atas!' },
        },
        {
          id: 'b4a-q10',
          questionText: 'Perbedaan teks berita dengan teks cerita fantasi adalah...',
          options: [
            'Berita terikat pada fakta nyata empiris, sedangkan cerita fantasi bersumber dari imajinasi bebas',
            'Berita tidak boleh memuat kalimat langsung',
            'Cerita fantasi selalu ditulis oleh wartawan',
            'Berita hanya boleh dibaca di koran kertas'
          ],
          correctAnswer: 0,
          explanation: 'Berita harus 100% fakta nyata, sedangkan fantasi bersumber dari daya khayal imajinatif.',
          characterTip: { characterId: 'agogo', tipText: 'Berita itu kenyataan bumi kita, fantasi itu dunia imajinasi!' },
        },
      ],
    },
    {
      id: 'bab4-b',
      code: 'B',
      title: 'Mengidentifikasi Unsur-Unsur Berita',
      summary: 'Mengurai formula pokok berita ADIKSIMBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana / 5W+1H).',
      buddyGuideId: 'liling',
      materialSections: [
        {
          heading: 'Rumus ADIKSIMBA (5W+1H)',
          body: 'Setiap teks berita yang lengkap memuat enam pertanyaan dasar:\n1. A (Apa / What): Peristiwa apa yang terjadi?\n2. Di (Di mana / Where): Di mana peristiwa itu berlangsung?\n3. K (Kapan / When): Kapan waktu kejadiannya?\n4. Si (Siapa / Who): Siapa yang terlibat dalam peristiwa tersebut?\n5. M (Mengapa / Why): Mengapa peristiwa itu bisa terjadi (penyebab/latar belakang)?\n6. Ba (Bagaimana / How): Bagaimana proses kejadian dan akibat yang ditimbulkan?',
          keyRule: 'Ingat jembatan keledai: A-Di-K-Si-M-Ba (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana).',
        },
      ],
      questions: [
        {
          id: 'b4b-q1',
          questionText: 'Akronim "ADIKSIMBA" dalam jurnalistik bahasa Indonesia merupakan padanan dari formula...',
          options: ['SPOK', '5W + 1H', 'KTSP', 'KBBI'],
          correctAnswer: 1,
          explanation: 'ADIKSIMBA memadankan What, Where, When, Who, Why, dan How ke dalam bahasa Indonesia.',
          characterTip: { characterId: 'liling', tipText: 'A-Di-K-Si-M-Ba = Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana!' },
        },
        {
          id: 'b4b-q2',
          questionText: 'Bacalah kutipan: "Minggu pagi (22/10), puluhan siswa SMP Cendekia menanam 500 pohon ketapang di pesisir Pantai Baron guna menahan laju abrasi." Unsur KAPAN (When) pada kutipan tersebut adalah...',
          options: [
            'Siswa SMP Cendekia',
            'Minggu pagi (22/10)',
            'Pesisir Pantai Baron',
            'Guna menahan laju abrasi'
          ],
          correctAnswer: 1,
          explanation: '"Minggu pagi (22/10)" menunjukkan keterangan waktu berlangsungnya peristiwa.',
          characterTip: { characterId: 'agogo', tipText: 'Kapan = menanyakan waktu kejadiannya.' },
        },
        {
          id: 'b4b-q3',
          questionText: 'Pada kutipan soal sebelumnya, unsur MENGAPA (Why) adalah...',
          options: [
            'Pesisir Pantai Baron',
            'Puluhan siswa SMP Cendekia',
            'Guna menahan laju abrasi',
            'Menanam 500 pohon'
          ],
          correctAnswer: 2,
          explanation: '"Guna menahan laju abrasi" menjelaskan alasan atau tujuan dilakukannya penanaman pohon.',
          characterTip: { characterId: 'lulu', tipText: 'Mengapa = menanyakan alasan dan tujuannya!' },
        },
        {
          id: 'b4b-q4',
          questionText: 'Unsur "SIAPA" (Who) dalam teks berita merujuk pada...',
          options: [
            'Subjek atau pihak (orang, kelompok, lembaga) yang terlibat dalam peristiwa',
            'Tempat berdirinya kantor bupati',
            'Waktu matahari terbit',
            'Alat yang digunakan untuk memotong kayu'
          ],
          correctAnswer: 0,
          explanation: 'Unsur "Siapa" menjawab identitas pelaku, korban, atau narasumber yang terlibat.',
          characterTip: { characterId: 'tyro', tipText: 'Siapa = orang atau lembaga yang melakukan aksi!' },
        },
        {
          id: 'b4b-q5',
          questionText: 'Pertanyaan untuk menggali unsur "BAGAIMANA" (How) dalam berita bencana banjir adalah...',
          options: [
            'Siapa nama kepala desa setempat?',
            'Bagaimana kronologi air sungai meluap hingga menjebol tanggul dan merendam perumahan?',
            'Berapa harga sekilo beras saat ini?',
            'Apakah banjir itu basah?'
          ],
          correctAnswer: 1,
          explanation: 'Unsur "Bagaimana" menguraikan kronologi proses terjadinya peristiwa secara runtut.',
          characterTip: { characterId: 'robo', tipText: 'Bagaimana = urutan proses dan jalannya peristiwa!' },
        },
        {
          id: 'b4b-q6',
          questionText: 'Unsur "DI MANA" (Where) dalam berita kebakaran hutan dan lahan berikut adalah:\n"Kebakaran hutan seluas 20 hektare melanda lereng Gunung Lawu sisi selatan."',
          options: [
            'Kebakaran hutan seluas 20 hektare',
            'Lereng Gunung Lawu sisi selatan',
            'Melanda tadi malam',
            'Petugas pemadam kebakaran'
          ],
          correctAnswer: 1,
          explanation: '"Lereng Gunung Lawu sisi selatan" adalah lokasi geografis terjadinya kebakaran.',
          characterTip: { characterId: 'agogo', tipText: 'Di mana menanyakan lokasi tempatnya berada.' },
        },
        {
          id: 'b4b-q7',
          questionText: 'Jika sebuah berita hanya memuat "Apa" dan "Siapa" tanpa menyebutkan "Kapan" dan "Di mana", maka berita tersebut dianggap...',
          options: [
            'Sangat sempurna dan ringkas',
            'Kurang lengkap karena tidak memiliki kejelasan waktu dan tempat kejadian',
            'Berita rahasia negara',
            'Karya sastra puisi kuno'
          ],
          correctAnswer: 1,
          explanation: 'Ketiadaan waktu dan tempat membuat berita diragukan kebenarannya dan tidak informatif.',
          characterTip: { characterId: 'liling', tipText: 'Berita harus lengkap 6 unsur ADIKSIMBA agar tidak diragukan!' },
        },
        {
          id: 'b4b-q8',
          questionText: 'Unsur "APA" (What) dalam berita "Komunitas Peduli Kali Bersihkan 3 Ton Sampah di Sungai Brantas" adalah...',
          options: [
            'Aksi pembersihan 3 ton sampah di sungai',
            'Komunitas Peduli Kali',
            'Sungai Brantas',
            'Pagi hari kemarin'
          ],
          correctAnswer: 0,
          explanation: 'Peristiwa yang terjadi adalah pembersihan 3 ton sampah di sungai.',
          characterTip: { characterId: 'tyro', tipText: 'Peristiwa utamanya: Aksi pembersihan sampah!' },
        },
        {
          id: 'b4b-q9',
          questionText: 'Dalam teras berita (lead/paragraf pertama), unsur-unsur yang paling sering dirangkum sekaligus adalah...',
          options: [
            'Apa, Siapa, Di mana, dan Kapan',
            'Hanya Mengapa saja',
            'Daftar nomor telepon narasumber',
            'Kisah masa kecil wartawan'
          ],
          correctAnswer: 0,
          explanation: 'Paragraf pertama berita (lead) memuat rangkuman Apa, Siapa, Kapan, dan Di mana agar pembaca langsung tahu intinya.',
          characterTip: { characterId: 'robo', tipText: 'Paragraf pertama langsung memuat 4 unsur terpenting!' },
        },
        {
          id: 'b4b-q10',
          questionText: 'Cermati kalimat: "Diduga korsleting listrik di ruang panel menjadi pemicu kobaran api." Kalimat ini menjawab pertanyaan...',
          options: ['Di mana?', 'Kapan?', 'Mengapa?', 'Siapa?'],
          correctAnswer: 2,
          explanation: 'Menjelaskan penyebab terjadinya kebakaran (unsur Mengapa / Why).',
          characterTip: { characterId: 'lulu', tipText: 'Penyebab api menyala menjawab unsur Mengapa!' },
        },
      ],
    },
    {
      id: 'bab4-c',
      code: 'C',
      title: 'Mengenali Karakteristik Berbagai Media Informasi',
      summary: 'Membandingkan media cetak (surat kabar/koran), media daring (portal berita online), dan media audio-visual (televisi/video digital).',
      buddyGuideId: 'robo',
      materialSections: [
        {
          heading: 'Karakteristik Tiga Media Berita Utama',
          body: '1. Media Cetak (Koran/Majalah): Dicetak di kertas, terbit harian/mingguan, redaksi ketat melalui proses sunting cetak, tulisan mendalam.\n2. Media Daring (Online Portal): Cepat terbit hitungan menit (real-time), dilengkapi tautan/hiperlink, interaktif dengan kolom komentar, format bisa diperbarui.\n3. Media Audio-Visual (TV/Siaran Web): Memadukan suara reporter lisan dan video rekaman nyata di tempat kejadian.',
        },
      ],
      questions: [
        {
          id: 'b4c-q1',
          questionText: 'Keunggulan utama media daring (portal berita online) dibandingkan media cetak koran adalah...',
          options: [
            'Dapat menyampaikan informasi secara seketika (real-time) dalam hitungan detik setelah peristiwa terjadi',
            'Tidak membutuhkan jaringan internet sama sekali',
            'Kertasnya dapat dilipat menjadi topi mainan',
            'Pasti selalu 100% benar tanpa perlu diedit'
          ],
          correctAnswer: 0,
          explanation: 'Media daring unggul dalam kecepatan diseminasi informasi terkini.',
          characterTip: { characterId: 'robo', tipText: 'Kecepatan internet membuat media daring super cepat terbit!' },
        },
        {
          id: 'b4c-q2',
          questionText: 'Kelebihan surat kabar cetak dibandingkan sebagian portal berita online yang terburu-buru adalah...',
          options: [
            'Umumnya memiliki proses penyuntingan (editing) dan verifikasi data yang lebih mendalam dan teliti',
            'Bisa memutar lagu otomatis saat halamannya dibuka',
            'Dapat berganti warna sendiri di malam hari',
            'Selalu gratis tanpa perlu dibeli'
          ],
          correctAnswer: 0,
          explanation: 'Media cetak memiliki ruang waktu verifikasi lebih tenang sehingga akurasi tata bahasa dan faktanya cenderung tinggi.',
          characterTip: { characterId: 'liling', tipText: 'Koran cetak melewati proses redaksi dan koreksi yang sangat ketat.' },
        },
        {
          id: 'b4c-q3',
          questionText: 'Unsur khas yang hanya dijumpai pada media berita audio-visual (televisi / siaran video) adalah...',
          options: [
            'Kombinasi gerak gambar visual nyata, suara narasumber asli, dan intonasi presenter',
            'Bau tinta cetak pada lembaran kertas',
            'Teks yang tidak bisa dibaca sama sekali',
            'Halaman yang harus dibalik manual dengan tangan'
          ],
          correctAnswer: 0,
          explanation: 'Media audio-visual memadukan citraan visual gerak dan audio suara secara simultan.',
          characterTip: { characterId: 'agogo', tipText: 'Kita bisa dengar suara orangnya dan lihat rekaman videonya langsung!' },
        },
        {
          id: 'b4c-q4',
          questionText: 'Istilah "Running Text" pada layar siaran berita televisi berfungsi untuk...',
          options: [
            'Menampilkan teks berjalan memuat rangkuman berita kilat atau kabar darurat terkini',
            'Menutupi pakaian presenter yang kotor',
            'Menampilkan lirik lagu karaoke anak-anak',
            'Mengganti fungsi antena televisi'
          ],
          correctAnswer: 0,
          explanation: 'Teks berjalan (running text / ticker) menampilkan kilasan berita penting dan kabar cepat.',
          characterTip: { characterId: 'monk', tipText: 'Itu tulisan yang melintas jalan di bawah layar TV!' },
        },
        {
          id: 'b4c-q5',
          questionText: 'Tantangan terbesar yang dihadapi pembaca media daring saat ini adalah...',
          options: [
            'Banjir informasi yang belum tentu akurat serta maraknya judul clickbait yang menjebak',
            'Harga ponsel pintar yang semakin murah',
            'Tidak adanya huruf alfabet dalam berita',
            'Koneksi Wi-Fi yang terlalu kencang'
          ],
          correctAnswer: 0,
          explanation: 'Banjir informasi menuntut literasi kritis pembaca agar tidak terkelabui judul sensasional (clickbait).',
          characterTip: { characterId: 'lulu', tipText: 'Hati-hati dengan judul heboh yang isinya mengecewakan!' },
        },
        {
          id: 'b4c-q6',
          questionText: 'Brosur dinding atau majalah dinding (mading) di sekolah tergolong media informasi...',
          options: ['Media cetak / visual ruang terbatas komunitas', 'Media televisi satelit', 'Media podcast audio', 'Media satelit ruang angkasa'],
          correctAnswer: 0,
          explanation: 'Mading sekolah adalah media cetak/tulis visual komunitas lokal siswa.',
          characterTip: { characterId: 'tyro', tipText: 'Mading sekolah kita adalah tempat terbaik memajang karya karya keren!' },
        },
        {
          id: 'b4c-q7',
          questionText: 'Fitur "Hiperlink" (tautan rujukan) pada portal berita online berfungsi untuk...',
          options: [
            'Menghapus isi berita secara otomatis',
            'Menghubungkan pembaca ke artikel berita terkait atau dokumen sumber data resmi',
            'Mengunci ponsel pembaca',
            'Mengubah ukuran layar monitor'
          ],
          correctAnswer: 1,
          explanation: 'Tautan biru (hyperlink) memudahkan verifikasi dan eksplorasi topik terkait secara mendalam.',
          characterTip: { characterId: 'robo', tipText: 'Klik tautannya untuk membaca dokumen resmi rujukan beritanya!' },
        },
        {
          id: 'b4c-q8',
          questionText: 'Media informasi berbentuk rekaman suara digital berseri yang dapat diunduh atau didengar daring disebut...',
          options: ['Podcast (Siniar)', 'Koran dinding', 'Baliho jalan raya', 'Surat kabar harian'],
          correctAnswer: 0,
          explanation: 'Podcast (siniar) adalah siaran audio digital yang sangat populer untuk diskusi berita dan wawasan.',
          characterTip: { characterId: 'agogo', tipText: 'Podcast itu seperti radio modern yang bisa didengar kapan saja di HP!' },
        },
        {
          id: 'b4c-q9',
          questionText: 'Ciri judul berita yang tergolong "Clickbait" (umpan klik) yang tidak etis adalah...',
          options: [
            '"Banjir Menggenangi Jalan Protokol Setinggi 30 Cm"',
            '"Gawat! Jangan Lakukan Ini Kalau Tidak Mau Menyesal Seumur Hidup! Nomor 3 Bikin Merinding!"',
            '"Kementerian Lingkungan Rilis Program Pengurangan Sampah 2026"',
            '"Hasil Pertandingan Futsal SMP Juara: Skor 3-1"'
          ],
          correctAnswer: 1,
          explanation: 'Judul berlebihan dan memanipulasi emosi tanpa menyebutkan subjek konkret adalah ciri khas umpan klik (clickbait).',
          characterTip: { characterId: 'monk', tipText: 'Judul heboh lebay tapi isinya kosong melompong!' },
        },
        {
          id: 'b4c-q10',
          questionText: 'Sikap bijak seorang pelajar SMP saat membaca informasi dari media sosial adalah...',
          options: [
            'Langsung membagikan (forward) ke semua grup tanpa membaca isinya',
            'Menyaring sebelum membagikan (Saring sebelum Sharing) dan memverifikasi ke media resmi tepercaya',
            'Mempercayai semua informasi asalkan memiliki banyak gambar',
            'Menolak semua buku dan hanya membaca status anonim'
          ],
          correctAnswer: 1,
          explanation: 'Slogan "Saring sebelum Sharing" merupakan prinsip literasi digital penting bagi siswa.',
          characterTip: { characterId: 'liling', tipText: 'Ingat pesan bijak: Saring dulu sebelum kamu sharing ke teman!' },
        },
      ],
    },
    {
      id: 'bab4-d',
      code: 'D',
      title: 'Menelaah Unsur Kebahasaan dalam Teks Berita',
      summary: 'Menganalisis penggunaan bahasa baku, kalimat langsung dan tidak langsung, konjungsi temporal, serta verba pewarta.',
      buddyGuideId: 'agogo',
      materialSections: [
        {
          heading: 'Kaidah Kebahasaan Teks Berita',
          body: '1. Bahasa Baku: Menggunakan kosa kata sesuai KBBI dan ejaan resmi.\n2. Kalimat Langsung & Tidak Langsung: Kutipan wawancara narasumber.\n3. Verba Pewarta: Kata kerja penanda tuturan (contoh: mengatakan, memaparkan, menegaskan, menjelaskan, membantah).\n4. Konjungsi Temporal & Kronologis: kemudian, setelah itu, sejak saat itu.\n5. Keterangan Waktu & Tempat yang akurat.',
          example: '"Kepala Dinas Lingkungan Hidup menyatakan (verba pewarta) bahwa (penghubung tidak langsung) penanaman pohon ini akan diperluas."',
        },
      ],
      questions: [
        {
          id: 'b4d-q1',
          questionText: 'Kata di bawah ini yang merupakan VERBA PEWARTA adalah...',
          options: [
            'Menegaskan, menyatakan, memaparkan',
            'Berlari, melompat, menari',
            'Merah, hijau, biru',
            'Meja, kursi, lemari'
          ],
          correctAnswer: 0,
          explanation: 'Verba pewarta adalah kata kerja yang mengindikasikan perkataan narasumber.',
          characterTip: { characterId: 'liling', tipText: 'Verba pewarta = kata kerja yang memberitakan ucapan orang!' },
        },
        {
          id: 'b4d-q2',
          questionText: 'Manakah pengubahan kalimat langsung menjadi kalimat tidak langsung yang TEPAT?\nKalimat langsung: Lurah berkata, "Kami akan mendirikan bank sampah di setiap RW."',
          options: [
            'Lurah berkata bahwa mereka akan mendirikan bank sampah di setiap RW.',
            'Lurah berkata, saya tidak mau ada bank sampah di setiap RW.',
            'Lurah mengatakan bahwa kami tetap memakai sampah.',
            'Lurah bertanya mengapa sampah tidak dibuang.'
          ],
          correctAnswer: 0,
          explanation: 'Kata ganti "Kami" berubah menjadi "mereka" dan kata penghubung "bahwa" disisipkan.',
          characterTip: { characterId: 'robo', tipText: 'Gunakan kata "bahwa" dan sesuaikan kata gantinya!' },
        },
        {
          id: 'b4d-q3',
          questionText: 'Penulisan kalimat langsung yang BENAR sesuai kaidah ejaan bahasa Indonesia adalah...',
          options: [
            '"Sampah plastik membutuhkan ratusan tahun untuk terurai," tegas Dr. Amira.',
            '"Sampah plastik membutuhkan ratusan tahun untuk terurai", Tegas Dr. Amira.',
            'Sampah plastik membutuhkan ratusan tahun untuk terurai: "tegas Dr. Amira."',
            '"Sampah plastik membutuhkan ratusan tahun untuk terurai" tegas Dr. Amira.'
          ],
          correctAnswer: 0,
          explanation: 'Tanda koma diletakkan di DALAM tanda petik penutup sebelum kata pengiring ("...terurai," tegas...).',
          characterTip: { characterId: 'liling', tipText: 'Tanda koma ada di dalam tanda petik dua penutup!' },
        },
        {
          id: 'b4d-q4',
          questionText: 'Manakah di antara kata berikut yang tergolong KATA BAKU sesuai KBBI?',
          options: ['Apotik, antri, jaman', 'Apotek, antre, zaman', 'Apotik, antre, jaman', 'Apotek, antri, jaman'],
          correctAnswer: 1,
          explanation: 'Bentuk baku menurut KBBI: apotek (bukan apotik), antre (bukan antri), zaman (bukan jaman).',
          characterTip: { characterId: 'monk', tipText: 'Ingat: apoteker -> apotek! Dan antre dengan huruf E!' },
        },
        {
          id: 'b4d-q5',
          questionText: 'Fungsi konjungsi "bahwa" dalam teks berita adalah...',
          options: [
            'Sebagai penerang kata yang diikuti dalam pengubahan kalimat langsung ke tidak langsung',
            'Sebagai penanda waktu lampau',
            'Sebagai kata tanya tempat',
            'Sebagai penanda perumpamaan majas'
          ],
          correctAnswer: 0,
          explanation: 'Konjungsi "bahwa" berfungsi sebagai penerang isi pernyataan pada kalimat tidak langsung.',
          characterTip: { characterId: 'agogo', tipText: '"Bahwa" menerangkan apa yang diucapkan oleh narasumber.' },
        },
        {
          id: 'b4d-q6',
          questionText: 'Cermati kutipan: "Mula-mula relawan memilah sampah organik, KEMUDIAN mengolahnya menjadi pupuk kompos cair." Kata "kemudian" berfungsi sebagai...',
          options: [
            'Konjungsi temporal urutan peristiwa',
            'Kata depan penunjuk tempat',
            'Kata seru kekaguman',
            'Verba pewarta'
          ],
          correctAnswer: 0,
          explanation: '"Kemudian" menghubungkan urutan tindakan pemilahan dan pengolahan sampah secara kronologis.',
          characterTip: { characterId: 'tyro', tipText: 'Menunjukkan urutan langkah aksi pelindung bumi!' },
        },
        {
          id: 'b4d-q7',
          questionText: 'Bentuk kata serapan baku dari istilah bahasa Inggris "activity" dan "system" adalah...',
          options: [
            'Aktifitas dan sistim',
            'Aktivitas dan sistem',
            'Aktivitas dan sistim',
            'Aktifitas dan sistem'
          ],
          correctAnswer: 1,
          explanation: 'Serapan baku yang benar berakhiran -itas ("aktivitas") dan berhuruf e ("sistem").',
          characterTip: { characterId: 'liling', tipText: 'Aktivitas (pakai V) dan sistem (pakai E)!' },
        },
        {
          id: 'b4d-q8',
          questionText: 'Kalimat berita yang menggunakan KETERANGAN WAKTU yang spesifik adalah...',
          options: [
            'Peristiwa itu terjadi kapan-kapan saja.',
            'Aksi bersih sungai dimulai pada hari Sabtu, 28 Oktober 2026, pukul 07.30 WIB.',
            'Dulu sekali pernah ada banjir.',
            'Nanti kalau sempat kita akan menanam pohon.'
          ],
          correctAnswer: 1,
          explanation: 'Hari, tanggal, tahun, dan jam disebutkan secara presisi.',
          characterTip: { characterId: 'robo', tipText: 'Ada tanggal dan jam pasti: Sabtu, 28 Oktober 2026, pukul 07.30 WIB!' },
        },
        {
          id: 'b4d-q9',
          questionText: 'Penggunaan verba mental (kata kerja yang menyatakan persepsi/pemikiran) tampak pada kalimat...',
          options: [
            'Masyarakat KHAWATIR terhadap dampak limbah pabrik yang mencemari sumur warga.',
            'Warga membuang sampah ke truk pengangkut.',
            'Petugas menyiram bibit pohon trembesi.',
            'Siswa memungut botol air mineral.'
          ],
          correctAnswer: 0,
          explanation: 'Kata "khawatir" menyatakan perasaan batin/kondisi mental, bukan tindakan fisik motorik.',
          characterTip: { characterId: 'lulu', tipText: 'Khawatir itu perasaan di dalam hati manusia.' },
        },
        {
          id: 'b4d-q10',
          questionText: 'Perbaikan kalimat berita rancu: "Di dalam rapat itu membicarakan tentang masalah sampah." Kalimat yang efektif dan baku adalah...',
          options: [
            'Rapat itu membicarakan masalah sampah.',
            'Di dalam rapat itu membicarakan masalah sampah.',
            'Rapat itu berbicara tentang masalah sampah sekali.',
            'Masalah sampah itu di dalam rapat dibicarakan tentang.'
          ],
          correctAnswer: 0,
          explanation: 'Menghilangkan kata depan "Di dalam" dan "tentang" menjadikan kalimat memiliki subjek jelas ("Rapat itu") dan predikat transitif ("membicarakan masalah sampah").',
          characterTip: { characterId: 'robo', tipText: 'Hilangkan kata depan yang mengaburkan subjek kalimat!' },
        },
      ],
    },
    {
      id: 'bab4-e',
      code: 'E',
      title: 'Menelisik Berita Palsu',
      summary: 'Mengembangkan kecerdasan literasi digital untuk membedakan fakta vs hoaks, mendeteksi manipulasi foto, dan memeriksa sumber terpercaya.',
      buddyGuideId: 'monk',
      materialSections: [
        {
          heading: 'Ciri-Ciri Utama Berita Palsu (Hoaks)',
          body: '1. Judul bombastis, memicu kepanikan, kemarahan, atau rasa benci.\n2. Menggunakan huruf kapital berlebihan dan banyak tanda seru (!!!).\n3. Tidak mencantumkan nama penulis berita, tanggal kejadian, atau alamat redaksi yang jelas.\n4. Menggunakan foto lama dari peristiwa lain yang ditempel teks baru (disinformasi).\n5. Tautan situs web aneh/tiruan (misal: bukan .go.id, .kemdikbud, atau media resmi terdaftar di Dewan Pers).',
          keyRule: 'Rumus Cek Fakta: Cek Sumbernya -> Cek Tanggalnya -> Cek Foto di Google Reverse Image -> Cek di Situs CekFakta.com.',
        },
      ],
      questions: [
        {
          id: 'b4e-q1',
          questionText: 'Tanda peringatan (red flag) yang paling sering muncul pada pesan berantai hoaks di aplikasi chat adalah...',
          options: [
            'Disertai tautan ke situs resmi kementerian pemerintah',
            'Ada tulisan: "VIRALKAN! SEBARKAN KE SEMUA GRUP! JANGAN BERHENTI DI KAMU!" dengan huruf kapital dan tanda seru banyak',
            'Bahasa yang digunakan sangat sopan, objektif, dan terukur',
            'Memuat rujukan data statistik resmi BPS'
          ],
          correctAnswer: 1,
          explanation: 'Instruksi memaksa menyebarkan pesan adalah ciri khas pesan penipuan dan manipulasi emosi pembaca.',
          characterTip: { characterId: 'monk', tipText: 'Kalau ada tulisan "SEBARKAN KE SEMUA GRUP SEKARANG!", curigai itu hoaks!' },
        },
        {
          id: 'b4e-q2',
          questionText: 'Langkah pertama yang harus dilakukan ketika menerima kabar mengejutkan tentang bencana alam di media sosial adalah...',
          options: [
            'Langsung panik dan menelepon semua orang',
            'Mengecek kebenaran informasi ke situs resmi BMKG atau portal berita terverifikasi Dewan Pers',
            'Menambah bumbu cerita agar semakin menegangkan',
            'Menghapus akun media sosial'
          ],
          correctAnswer: 1,
          explanation: 'Verifikasi ke lembaga berwenang (seperti BMKG untuk cuaca/gempa) adalah tindakan literasi yang tepat.',
          characterTip: { characterId: 'liling', tipText: 'Cek situs BMKG atau media resmi terpercaya terlebih dahulu!' },
        },
        {
          id: 'b4e-q3',
          questionText: 'Apa yang dimaksud dengan "Misinformasi"?',
          options: [
            'Informasi yang salah, tetapi disebarkan oleh orang yang tidak tahu bahwa informasi itu salah (tanpa niat jahat)',
            'Berita yang ditulis dalam bahasa Prancis',
            'Kamus bahasa daerah',
            'Informasi yang selalu benar'
          ],
          correctAnswer: 0,
          explanation: 'Misinformasi adalah kabar keliru yang beredar karena ketidaktahuan penyebarnya, berbeda dengan disinformasi yang disengaja untuk menipu.',
          characterTip: { characterId: 'robo', tipText: 'Misinformasi = salah karena tidak tahu. Disinformasi = sengaja bohong untuk menipu!' },
        },
        {
          id: 'b4e-q4',
          questionText: 'Untuk memastikan apakah sebuah foto pemandangan atau peristiwa itu asli atau hasil manipulasi foto lama, kita dapat memanfaatkan teknologi...',
          options: [
            'Pencarian gambar terbalik (Google Reverse Image Search / Lens)',
            'Memotret layar komputer dengan kamera instan',
            'Mencetak foto di kertas kalkir',
            'Menutup mata rapat-rapat'
          ],
          correctAnswer: 0,
          explanation: 'Reverse Image Search melacak jejak digital kapan dan di mana foto tersebut pertama kali diunggah di internet.',
          characterTip: { characterId: 'robo', tipText: 'Pakai Google Lens untuk melihat asal-usul foto yang sebenarnya!' },
        },
        {
          id: 'b4e-q5',
          questionText: 'Alamat situs web (domain) yang paling kredibel dan resmi mewakili lembaga pemerintah Indonesia berakhiran...',
          options: ['.com.xyz', '.go.id', '.blogspot.com', '.free-hosting.net'],
          correctAnswer: 1,
          explanation: 'Domain ".go.id" (government Indonesia) hanya dapat didaftarkan secara resmi oleh instansi pemerintah Republik Indonesia.',
          characterTip: { characterId: 'agogo', tipText: '".go.id" adalah tanda resmi instansi pemerintah kita!' },
        },
        {
          id: 'b4e-q6',
          questionText: 'Dampak buruk menyebarkan berita palsu (hoaks) tentang isu lingkungan dan kesehatan adalah...',
          options: [
            'Masyarakat menjadi semakin cerdas',
            'Menimbulkan kepanikan massal, salah penanganan, perpecahan sosial, dan bisa dijerat hukum UU ITE',
            'Mendapat piagam penghargaan dari sekolah',
            'Bumi langsung terbebas dari polusi'
          ],
          correctAnswer: 1,
          explanation: 'Hoaks merugikan keselamatan masyarakat, menimbulkan keresahan, dan melanggar hukum.',
          characterTip: { characterId: 'tyro', tipText: 'Hoaks itu berbahaya dan bisa merugikan banyak orang, jangan ikut menyebarkan!' },
        },
        {
          id: 'b4e-q7',
          questionText: 'Situs independen di Indonesia yang fokus memverifikasi dan membongkar kebohongan berita hoaks adalah...',
          options: ['Cekfakta.com dan Mafindo (TurnBackHoax)', 'Situs toko baju online', 'Portal download game bajakan', 'Forum gosip artis'],
          correctAnswer: 0,
          explanation: 'Cekfakta.com dan Mafindo adalah konsorsium media terpercaya pencegah peredaran hoaks di Indonesia.',
          characterTip: { characterId: 'liling', tipText: 'Buka TurnBackHoax atau Cekfakta.com jika ragu pada suatu kabar!' },
        },
        {
          id: 'b4e-q8',
          questionText: 'Cermati judul ini: "Ajaib! Daun Ini Bisa Sembuhkan Segala Penyakit Kanker dalam 1 Menit Tanpa Obat Dokter!" Judul ini mencurigakan karena...',
          options: [
            'Klaim medis tidak masuk akal, tanpa rujukan jurnal ilmiah, dan bermotif mencari sensasi',
            'Menggunakan kata bahasa Indonesia yang baik',
            'Tidak ada huruf vokal di dalamnya',
            'Ditulis oleh dokter spesialis ternama'
          ],
          correctAnswer: 0,
          explanation: 'Klaim medis instan tanpa uji klinis ilmiah adalah modus klasik hoaks kesehatan.',
          characterTip: { characterId: 'monk', tipText: 'Klaim sembuh ajaib 1 menit itu pasti bohong besar!' },
        },
        {
          id: 'b4e-q9',
          questionText: 'Jika kamu mengetahui ada teman kelas yang membagikan hoaks di grup belajar sekolah, tindakan santun yang sebaiknya kamu lakukan adalah...',
          options: [
            'Memaki-maki teman tersebut di depan semua orang',
            'Menyampaikan bukti klarifikasi cek fakta secara sopan bahwa informasi tersebut keliru agar tidak disebarkan lebih lanjut',
            'Ikut menyebarkan hoaks ke grup lain',
            'Keluar dari sekolah'
          ],
          correctAnswer: 1,
          explanation: 'Menunjukkan bukti klarifikasi secara sopan dan berbasis data mendidik kawan tanpa mempermalukannya.',
          characterTip: { characterId: 'lulu', tipText: 'Tegur dengan sopan dan tunjukkan link berita klarifikasinya ya.' },
        },
        {
          id: 'b4e-q10',
          questionText: 'Membaca secara utuh (tidak hanya membaca judulnya saja) sebelum mengambil kesimpulan dinamakan kebiasaan...',
          options: ['Literasi membaca kritis', 'Membaca cepat asal selesai', 'Memindai tulisan acak', 'Membaca pura-pura'],
          correctAnswer: 0,
          explanation: 'Literasi kritis memastikan pembaca memahami konteks isi berita seutuhnya sebelum bersikap.',
          characterTip: { characterId: 'robo', tipText: 'Jangan cuma baca judul, baca isinya sampai tuntas!' },
        },
      ],
    },
    {
      id: 'bab4-f',
      code: 'F',
      title: 'Menulis Berita',
      summary: 'Menyusun teks berita pelindung bumi dengan struktur piramida terbalik: Judul, Teras Berita (Lead), Tubuh Berita, dan Ekor Berita.',
      buddyGuideId: 'tyro',
      materialSections: [
        {
          heading: 'Struktur Piramida Terbalik',
          body: '1. Judul Berita (Headline): Singkat, padat, menarik, mencerminkan inti peristiwa.\n2. Kepala / Teras Berita (Lead): Paragraf pembuka memuat jawaban ADIKSIMBA terpenting.\n3. Tubuh Berita (Body): Penjelasan detail kronologi, kutipan narasumber, dan latar belakang.\n4. Ekor Berita (Tail): Informasi tambahan yang sifatnya melengkapi (jika dipotong editor tidak merusak inti berita).',
        },
      ],
      questions: [
        {
          id: 'b4f-q1',
          questionText: 'Prinsip "Piramida Terbalik" dalam penulisan berita berarti...',
          options: [
            'Informasi paling penting diletakkan di bagian atas (kepala berita), makin ke bawah informasinya semakin rinci dan tambahan',
            'Tulisan harus dicetak menyerupai bentuk segitiga Mesir kuno',
            'Paragraf pertama adalah bagian yang tidak penting sama sekali',
            'Bagian akhir berita adalah rahasia yang tidak boleh dibaca'
          ],
          correctAnswer: 0,
          explanation: 'Piramida terbalik menempatkan informasi paling krusial di awal agar pembaca langsung mengetahui inti kabar.',
          characterTip: { characterId: 'liling', tipText: 'Paling penting di puncak teras berita, makin ke bawah makin rincian tambahan!' },
        },
        {
          id: 'b4f-q2',
          questionText: 'Unsur yang WAJIB ada di paragraf teras berita (lead) adalah...',
          options: [
            'Rangkuman Apa peristiwanya, Siapa pelakunya, Di mana lokasinya, dan Kapan terjadinya',
            'Daftar menu makan siang wartawan',
            'Ucapan terima kasih kepada sponsor',
            'Ramalan zodiak bintang hari ini'
          ],
          correctAnswer: 0,
          explanation: 'Lead bertugas menjawab apa, siapa, di mana, dan kapan secara ringkas dan padat.',
          characterTip: { characterId: 'tyro', tipText: 'Teras berita langsung menjawab: Apa, Siapa, Di mana, dan Kapan!' },
        },
        {
          id: 'b4f-q3',
          questionText: 'Manakah contoh teras berita yang padat dan informatif?',
          options: [
            'Kemarin hari yang cerah sekali waktu saya bangun tidur.',
            'Sebanyak 300 siswa SMP Negeri 1 Palembang menanam 1.000 bibit mangrove di Pesisir Sungsang pada Sabtu (24/10) untuk mencegah abrasi pantai.',
            'Ada sebuah pohon yang ditanam oleh seseorang di suatu tempat.',
            'Tahukah kalian bahwa mangrove itu sangat hijau warnanya?'
          ],
          correctAnswer: 1,
          explanation: 'Kalimat kedua secara sempurna memuat Siapa (300 siswa), Apa (menanam 1000 mangrove), Di mana (Pesisir Sungsang), Kapan (Sabtu 24/10), dan Mengapa (cegah abrasi).',
          characterTip: { characterId: 'robo', tipText: 'Lengkap dan padat dalam satu kalimat pembuka yang kuat!' },
        },
        {
          id: 'b4f-q4',
          questionText: 'Kutipan wawancara langsung narasumber dalam teks berita bertujuan untuk...',
          options: [
            'Membuat berita menjadi cerpen dongeng',
            'Meningkatkan kredibilitas, keaslian, dan bobot informasi fakta di lapangan',
            'Mengganti peran editor berita',
            'Menambah jumlah halaman secara sia-sia'
          ],
          correctAnswer: 1,
          explanation: 'Pernyataan narasumber ahli atau saksi mata menguatkan validitas dan fakta berita.',
          characterTip: { characterId: 'agogo', tipText: 'Pendapat ahli membuktikan bahwa berita itu bukan karangan sendiri!' },
        },
        {
          id: 'b4f-q5',
          questionText: 'Bagian "Ekor Berita" (tail) biasanya memuat...',
          options: [
            'Inti pokok bencana alam',
            'Informasi pelengkap seperti sejarah singkat organisasi atau jadwal kegiatan berikutnya',
            'Daftar nomor rekening bank',
            'Gambar komik lucu'
          ],
          correctAnswer: 1,
          explanation: 'Ekor berita berisi informasi pelengkap konteks tambahan.',
          characterTip: { characterId: 'lulu', tipText: 'Ekor berita itu info tambahan yang melengkapi keseluruhan cerita.' },
        },
        {
          id: 'b4f-q6',
          questionText: 'Judul berita lingkungan yang efektif dan memenuhi kaidah bahasa jurnalistik adalah...',
          options: [
            'Siswa SMP Bersihkan Dua Ton Sampah di Sungai Code',
            'Wah Hebat Banget Anak-Anak Ini Ngapain Ya di Sungai',
            'Sungai Code Kemarin Airnya Mengalir',
            'Jangan Sampai Ketinggalan Berita Ini Ya Teman'
          ],
          correctAnswer: 0,
          explanation: 'Judul pertama singkat, lugas, memuat subjek dan tindakan nyata tanpa bumbu sensasional.',
          characterTip: { characterId: 'liling', tipText: 'Judul berita harus padat: Subjek + Tindakan + Objek + Lokasi!' },
        },
        {
          id: 'b4f-q7',
          questionText: 'Sebelum menulis berita aksi pelindung bumi, langkah pengumpulan data yang dapat dilakukan siswa adalah...',
          options: [
            'Wawancara penggiat lingkungan, observasi langsung di lapangan, dan mencatat data berat sampah',
            'Mengarang angka semaunya di rumah',
            'Menyalin artikel lama tahun 1990',
            'Menunggu kabar burung di media sosial'
          ],
          correctAnswer: 0,
          explanation: 'Observasi langsung dan wawancara narasumber memastikan data berita akurat.',
          characterTip: { characterId: 'agogo', tipText: 'Datang langsung ke lokasi, catat datanya, dan wawancarai orangnya!' },
        },
        {
          id: 'b4f-q8',
          questionText: 'Cermati kutipan: "Kepala Sekolah mengapresiasi tinggi kepedulian siswa terhadap bumi hijau." Kutipan tersebut berada pada bagian...',
          options: ['Teras berita (lead)', 'Tubuh berita (body)', 'Judul berita', 'Kaki cetak'],
          correctAnswer: 1,
          explanation: 'Pernyataan dan tanggapan narasumber dijabarkan di bagian tubuh berita.',
          characterTip: { characterId: 'monk', tipText: 'Komentar narasumber ada di bagian tubuh berita.' },
        },
        {
          id: 'b4f-q9',
          questionText: 'Hal yang harus dihindari jurnalis pemula dalam menulis teks berita adalah...',
          options: [
            'Memasukkan opini atau perasaan pribadi yang memihak ke dalam kalimat berita fakta',
            'Mengecek kembali ejaan nama narasumber',
            'Menggunakan kalimat efektif',
            'Mencantumkan tanggal kejadian'
          ],
          correctAnswer: 0,
          explanation: 'Wartawan harus netral dan objektif, tidak boleh memasukkan prasangka atau opini pribadi ke teks fakta.',
          characterTip: { characterId: 'robo', tipText: 'Jaga netralitas: fakta adalah fakta, jangan dicampur opini pribadi!' },
        },
        {
          id: 'b4f-q10',
          questionText: 'Langkah terakhir dalam proses jurnalistik sebelum berita dipublikasikan di mading sekolah adalah...',
          options: [
            'Menyunting (editing) ketepatan ejaan huruf kapital, akurasi fakta angka, dan kohesi antarkalimat',
            'Membakar naskah beritanya',
            'Mengubah nama narasumber menjadi nama samaran kartun',
            'Menghapus semua paragraf'
          ],
          correctAnswer: 0,
          explanation: 'Penyuntingan akhir menjamin berita bebas salah ketik dan faktanya dapat dipertanggungjawabkan.',
          characterTip: { characterId: 'tyro', tipText: 'Sunting sampai rapi agar hasil karyamu membanggakan sekolah!' },
        },
      ],
    },
  ],
};

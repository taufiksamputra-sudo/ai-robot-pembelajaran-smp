import { Chapter } from '../curriculumTypes';

export const BAB_3: Chapter = {
  id: 'bab-3',
  number: 'Bab III',
  title: 'Hal yang Baik bagi Tubuh',
  islandName: 'Lembah Sehat Bugar',
  themeColor: '#10b981',
  badgeGradient: 'from-emerald-500 to-teal-600',
  icon: '🍎',
  description: 'Membimbing gaya hidup sehat melalui teks prosedur yang runtut, praktis, dan mudah dipraktikkan sehari-hari.',
  subChapters: [
    {
      id: 'bab3-a',
      code: 'A',
      title: 'Mengidentifikasi Karakteristik Teks Prosedur',
      summary: 'Mengenal struktur umum teks prosedur (tujuan, alat/bahan, langkah-langkah urut, dan penutup) serta jenis-jenisnya.',
      buddyGuideId: 'liling',
      materialSections: [
        {
          heading: 'Pengertian & Ciri Teks Prosedur',
          body: 'Teks prosedur adalah teks yang memberikan petunjuk atau langkah-langkah secara urut dan logis agar pembaca dapat melakukan, membuat, atau memainkan sesuatu dengan benar dan sukses.',
          example: 'Contoh teks prosedur: "Cara Membuat Infused Water Lemon yang Menyegarkan", "Langkah Cuci Tangan 6 Langkah WHO", "Cara Memainkan Alat Musik Angklung".',
        },
        {
          heading: 'Struktur Teks Prosedur',
          body: '1. Tujuan: Menyatakan apa yang akan dicapai atau dibuat.\n2. Alat dan Bahan: Rincian material beserta takaran akurat.\n3. Langkah-Langkah: Urutan instruksi terperinci nomor demi nomor.\n4. Penutup/Simpulan: Kalimat apresiasi atau tips opsional.',
          keyRule: 'Karakteristik Kunci: Urutan langkah TIDAK BOLEH ditukar-tukar karena bersifat sekuensial dan logis.',
        },
      ],
      questions: [
        {
          id: 'b3a-q1',
          questionText: 'Tujuan penulisan teks prosedur adalah...',
          options: [
            'Menghibur pembaca dengan dongeng jenaka',
            'Memberikan petunjuk langkah demi langkah agar pembaca dapat mencapai hasil yang diinginkan dengan tepat',
            'Melukiskan keindahan pemandangan alam secara mendalam',
            'Menyampaikan pendapat pro dan kontra mengenai suatu isu'
          ],
          correctAnswer: 1,
          explanation: 'Teks prosedur memandu pembaca melakukan suatu proses secara benar dan sistematis.',
          characterTip: { characterId: 'liling', tipText: 'Prosedur = panduan langkah demi langkah agar berhasil!' },
        },
        {
          id: 'b3a-q2',
          questionText: 'Urutan struktur baku dalam teks prosedur pembuatan sesuatu adalah...',
          options: [
            'Tujuan -> Alat dan Bahan -> Langkah-Langkah -> Penutup',
            'Orientasi -> Komplikasi -> Resolusi',
            'Identifikasi -> Deskripsi Bagian -> Kesan',
            'Tesis -> Rangkaian Argumen -> Simpulan'
          ],
          correctAnswer: 0,
          explanation: 'Struktur teks prosedur diawali Tujuan, diikuti Alat/Bahan, Langkah, dan Penutup opsional.',
          characterTip: { characterId: 'robo', tipText: 'Tujuan dulu, siapkan alat/bahan, lakukan langkahnya, baru penutup!' },
        },
        {
          id: 'b3a-q3',
          questionText: 'Manakah judul di bawah ini yang tergolong teks prosedur CARA MEMAINKAN sesuatu?',
          options: [
            'Cara Membuat Salad Buah Madu',
            'Langkah Mengoperasikan Mesin Cuci Otomatis',
            'Panduan Memainkan Alat Musik Sasando Khas Rote',
            'Tips Menjaga Kebugaran Tubuh di Musim Hujan'
          ],
          correctAnswer: 2,
          explanation: 'Panduan memainkan sasando tergolong prosedur cara memainkan alat musik.',
          characterTip: { characterId: 'agogo', tipText: 'Sasando itu alat musik petik indah dari Nusa Tenggara Timur!' },
        },
        {
          id: 'b3a-q4',
          questionText: 'Bagian "Alat dan Bahan" dalam teks prosedur harus memuat ukuran yang akurat, misalnya...',
          options: [
            '"Ambil garam secukupnya tanpa ukuran"',
            '"Tuang 250 ml susu segar rendah lemak dan 1 sendok teh madu murni"',
            '"Gunakan air yang banyak sekali"',
            '"Masukkan beberapa potong buah apa saja"'
          ],
          correctAnswer: 1,
          explanation: 'Takaran "250 ml" dan "1 sendok teh" memberikan kepastian ukuran yang presisi bagi pembaca.',
          characterTip: { characterId: 'liling', tipText: 'Ukuran pasti seperti "250 ml" mencegah adonan gagal!' },
        },
        {
          id: 'b3a-q5',
          questionText: 'Mengapa urutan langkah-langkah dalam teks prosedur tidak boleh dibolak-balik secara sembarangan?',
          options: [
            'Karena hurufnya bisa terhapus otomatis',
            'Karena setiap langkah bergantung pada langkah sebelumnya untuk menjamin keberhasilan dan keselamatan',
            'Karena dilarang oleh aturan penerbit buku',
            'Agar pembaca merasa bosan'
          ],
          correctAnswer: 1,
          explanation: 'Teks prosedur bersifat sekuensial (berurutan logis); menukar langkah bisa menggagalkan hasil atau berbahaya.',
          characterTip: { characterId: 'tyro', tipText: 'Masak telur sebelum kompor dinyalakan tentu tidak bisa matang!' },
        },
        {
          id: 'b3a-q6',
          questionText: 'Kutipan: "Senam peregangan ini sangat cocok dilakukan di sela-sela belajar agar otot leher dan punggung kembali rileks." Kutipan ini tepat diletakkan pada bagian...',
          options: ['Alat dan bahan', 'Tujuan / Pengantar', 'Langkah inti', 'Daftar pustaka'],
          correctAnswer: 1,
          explanation: 'Kutipan menjelaskan manfaat dan tujuan senam sebagai pengantar pembuka teks prosedur.',
          characterTip: { characterId: 'lulu', tipText: 'Ini menjelaskan tujuan mengapa senam peregangan ini bermanfaat.' },
        },
        {
          id: 'b3a-q7',
          questionText: 'Ciri bahasa teks prosedur yang paling menonjol pada bagian langkah-langkah adalah penggunaan...',
          options: [
            'Kalimat tanya yang membingungkan',
            'Kalimat perintah (imperatif) yang lugas dan jelas',
            'Majas metafora yang berbelit-belit',
            'Ungkapan sindiran tajam'
          ],
          correctAnswer: 1,
          explanation: 'Langkah prosedur didominasi kalimat imperatif (perintah): "potonglah", "aduklah", "rebuslah".',
          characterTip: { characterId: 'monk', tipText: 'Gunakan kata kerja perintah: cuci, potong, masukkan, aduk!' },
        },
        {
          id: 'b3a-q8',
          questionText: 'Manakah yang tergolong teks prosedur jenis "Prosedur Protokol" (yang langkahnya fleksibel tidak harus kaku berurutan)?',
          options: [
            'Urutan merakit komputer dari komponen prosesor',
            'Tips membersihkan kamar tidur (bisa mulai dari menyapu lantai atau merapikan seprai)',
            'Resep memanggang kue bolu di oven',
            'Urutan menyalakan mesin sepeda motor'
          ],
          correctAnswer: 1,
          explanation: 'Prosedur protokol memiliki kelonggaran urutan langkah tanpa merusak hasil akhir.',
          characterTip: { characterId: 'robo', tipText: 'Merapikan kamar boleh dari bantal dulu atau lantai dulu, hasilnya tetap bersih!' },
        },
        {
          id: 'b3a-q9',
          questionText: 'Bagian penutup teks prosedur sering kali memuat kalimat...',
          options: [
            'Ucapan selamat mencoba dan harapan manfaat bagi pembaca',
            'Daftar harga semua alat yang digunakan',
            'Riwayat hidup nenek moyang penulis',
            'Kalimat permohonan maaf karena salah menulis'
          ],
          correctAnswer: 0,
          explanation: 'Penutup memberi motivasi: "Selamat mencoba minuman sehat ini dan rasakan tubuh kembali bugar!".',
          characterTip: { characterId: 'lulu', tipText: 'Kalimat hangat: "Selamat mencoba di rumah ya sahabat!"' },
        },
        {
          id: 'b3a-q10',
          questionText: 'Kriteria teks prosedur yang baik adalah...',
          options: [
            'Bahasanya puitis dan maknanya tersamar',
            'Jelas, logis, terperinci, mudah dipahami, dan dapat dipraktikkan dengan aman',
            'Sangat panjang hingga 50 halaman tanpa gambar',
            'Hanya boleh dibaca oleh ahli gizi'
          ],
          correctAnswer: 1,
          explanation: 'Teks prosedur harus komunikatif, presisi, dan aman untuk dipraktikkan langsung oleh pembaca.',
          characterTip: { characterId: 'tyro', tipText: 'Jelas dan mudah dipraktekkan, itu kuncinya!' },
        },
      ],
    },
    {
      id: 'bab3-b',
      code: 'B',
      title: 'Mengidentifikasi Tujuan Ragam Teks Prosedur',
      summary: 'Membedakan tujuan teks prosedur pola makan gizi seimbang, kebersihan diri, olahraga, dan keselamatan tubuh.',
      buddyGuideId: 'tyro',
      materialSections: [
        {
          heading: 'Ragam Teks Prosedur Kesehatan & Kebugaran',
          body: 'Teks prosedur kesehatan bertujuan mengajak pembaca merawat tubuh melalui kebiasaan baik.\nRagamnya meliputi:\n1. Nutrisi Sehat: Membuat sarapan oatmeal buah, jus detoks sayur.\n2. Kebugaran Fisik: Panduan pemanasan sebelum lari santai, latihan push-up yang aman.\n3. Higienitas: Langkah mencuci tangan 20 detik, memakai masker yang benar.\n4. Keselamatan Kerja: Prosedur penggunaan laboratorium IPA di sekolah.',
        },
      ],
      questions: [
        {
          id: 'b3b-q1',
          questionText: 'Apa tujuan utama dari teks prosedur berjudul "Panduan 6 Langkah Mencuci Tangan Bersih Menurut Standar WHO"?',
          options: [
            'Menghabiskan sabun mandi di rumah',
            'Mengedukasi masyarakat agar membersihkan kuman di seluruh sela jari dan kuku guna mencegah penularan penyakit',
            'Menjelaskan sejarah penemuan sabun cair di dunia',
            'Menguji ketahanan air mengalir dari kran'
          ],
          correctAnswer: 1,
          explanation: 'Tujuannya adalah membersihkan tangan dari patogen penyakit secara tuntas dan higienis.',
          characterTip: { characterId: 'liling', tipText: 'Cuci tangan 6 langkah menjaga kita dari kuman jahat!' },
        },
        {
          id: 'b3b-q2',
          questionText: 'Dalam teks prosedur "Cara Membuat Bekal Sekolah Sehat Bergizi Seimbang", komponen yang paling ditekankan adalah...',
          options: [
            'Banyaknya micin dan pewarna buatan',
            'Keseimbangan karbohidrat, protein, serat sayur, dan buah segar tanpa pengawet berlebih',
            'Wadah kotak bekal yang harus berharga mahal',
            'Hanya menyertakan makanan instan siap saji'
          ],
          correctAnswer: 1,
          explanation: 'Teks prosedur gizi sehat mengutamakan proporsi piring gizi seimbang (Isi Piringku).',
          characterTip: { characterId: 'tyro', tipText: 'Tubuh kuat butuh protein dan sayur segar setiap hari!' },
        },
        {
          id: 'b3b-q3',
          questionText: 'Manakah pernyataan tujuan yang tepat untuk teks prosedur senam peregangan mata setelah menatap layar komputer?',
          options: [
            'Membantu merelaksasi otot mata dan mencegah mata lelah atau minus bertambah',
            'Membuat mata bisa melihat menembus tembok',
            'Mengganti kebutuhan tidur malam hari',
            'Agar layar komputer tidak cepat panas'
          ],
          correctAnswer: 0,
          explanation: 'Tujuannya adalah meredakan ketegangan otot optik akibat paparan radiasi layar gawai.',
          characterTip: { characterId: 'robo', tipText: 'Penting bagi siswa yang sering belajar di depan gadget!' },
        },
        {
          id: 'b3b-q4',
          questionText: 'Teks prosedur "Langkah Pertolongan Pertama pada Kaki Terkilir (Metode RICE)" bertujuan untuk...',
          options: [
            'Memasak beras menjadi bubur hangat',
            'Memberi pertolongan awal yang benar (Rest, Ice, Compression, Elevation) guna mencegah pembengkakan parah',
            'Mengganti fungsi dokter bedah rumah sakit',
            'Menambah rasa nyeri pada sendi kaki'
          ],
          correctAnswer: 1,
          explanation: 'Metode RICE bertujuan meminimalkan radang dan cedera ligamen sebelum ditangani medis.',
          characterTip: { characterId: 'agogo', tipText: 'RICE itu istirahatkan, kompres es, balut tekan, dan tinggikan kakinya!' },
        },
        {
          id: 'b3b-q5',
          questionText: 'Audiens atau sasaran pembaca utama dari teks prosedur "Jadwal dan Pola Olahraga Rutin 15 Menit bagi Pelajar SMP" adalah...',
          options: [
            'Para atlet maraton profesional olimpiade',
            'Remaja sekolah yang ingin tetap aktif dan bugar di tengah padatnya jadwal belajar',
            'Bayi di bawah umur satu tahun',
            'Orang tua lanjut usia yang sakit keras'
          ],
          correctAnswer: 1,
          explanation: 'Sasaran teks tersebut disesuaikan dengan kapasitas fisik dan rutinitas siswa usia SMP.',
          characterTip: { characterId: 'tyro', tipText: 'Cocok banget buat teman-teman kelas 7 biar gak lesu di kelas!' },
        },
        {
          id: 'b3b-q6',
          questionText: 'Kalimat peringatan (caution) dalam teks prosedur kesehatan berfungsi untuk...',
          options: [
            'Menakut-nakuti pembaca agar tidak membaca teks',
            'Mengingatkan pembaca agar terhindar dari bahaya atau efek samping yang merugikan tubuh',
            'Menghiasi halaman dengan warna merah',
            'Memperpanjang kalimat'
          ],
          correctAnswer: 1,
          explanation: 'Peringatan berfungsi menjaga keselamatan, misalnya: "Hati-hati, jangan gunakan air mendidih pada madu karena merusak enzim".',
          characterTip: { characterId: 'lulu', tipText: 'Peringatan menjaga kita agar tidak salah langkah!' },
        },
        {
          id: 'b3b-q7',
          questionText: 'Jika tujuan teks prosedur adalah "Mengurangi Konsumsi Gula Harian", langkah yang relevan adalah...',
          options: [
            'Menambah tiga sendok gula pada setiap cangkir teh',
            'Mengganti minuman bersoda dengan air mineral atau air infus buah segar',
            'Makan permen manis setiap satu jam sekali',
            'Menghindari minum air putih'
          ],
          correctAnswer: 1,
          explanation: 'Mengganti soda manis dengan air putih atau infused water selaras dengan tujuan pengurangan gula.',
          characterTip: { characterId: 'monk', tipText: 'Ganti minuman manis dengan air putih segar!' },
        },
        {
          id: 'b3b-q8',
          questionText: 'Teks prosedur "Cara Mengatur Pernapasan Diafragma untuk Meredakan Cemas Sebelum Ujian" memiliki fokus pada...',
          options: [
            'Kesehatan mental dan ketenangan psikologis siswa',
            'Kecepatan menulis di atas kertas jawaban',
            'Membeli pulpen keberuntungan',
            'Menghafal rumus matematika'
          ],
          correctAnswer: 0,
          explanation: 'Teknik napas diafragma membantu menenangkan sistem saraf dan meredakan ketegangan mental.',
          characterTip: { characterId: 'lulu', tipText: 'Tarik napas dalam dari perut... hembuskan perlahan agar rileks.' },
        },
        {
          id: 'b3b-q9',
          questionText: 'Kesesuaian antara alat/bahan dan tujuan tampak pada contoh...',
          options: [
            'Tujuan: Membersihkan gigi -> Alat: Sabun cuci piring dan spons kasar',
            'Tujuan: Membuat jus wortel tomat -> Alat: Blender, pisau buah, saringan, dan gelas saji',
            'Tujuan: Latihan lompat tali -> Alat: Raket bulu tangkis dan kok',
            'Tujuan: Mengompres dahi panas -> Alat: Air mendidih 100 derajat'
          ],
          correctAnswer: 1,
          explanation: 'Blender dan pisau adalah peralatan yang pas dan logis untuk membuat jus buah sayur.',
          characterTip: { characterId: 'agogo', tipText: 'Alatnya harus sesuai dengan apa yang mau dibuat!' },
        },
        {
          id: 'b3b-q10',
          questionText: 'Evaluasi hasil akhir dalam teks prosedur kebugaran ditunjukkan dengan...',
          options: [
            'Menghitung berapa banyak uang yang keluar',
            'Memeriksa apakah detak jantung teratur, napas lega, dan tubuh terasa lebih berenergi',
            'Memotret sepatu olahraga baru',
            'Tidur sepanjang hari setelahnya'
          ],
          correctAnswer: 1,
          explanation: 'Tolok ukur keberhasilan prosedur kebugaran tampak dari respons positif fisik tubuh.',
          characterTip: { characterId: 'robo', tipText: 'Tubuh terasa segar dan bersemangat menandakan prosedurnya berhasil!' },
        },
      ],
    },
    {
      id: 'bab3-c',
      code: 'C',
      title: 'Mengenali Unsur Kebahasaan dalam Teks Prosedur',
      summary: 'Menganalisis kalimat perintah/imperatif, kalimat larangan, konjungsi urutan waktu, kata keterangan cara/alat/derajat, dan akhiran -kan/-i.',
      buddyGuideId: 'agogo',
      materialSections: [
        {
          heading: 'Kaidah Bahasa Teks Prosedur',
          body: '1. Kalimat Perintah (Imperatif): Kata kerja dasar + partikel -lah atau akhiran -kan/-i (contoh: cucilah, masukkan, taburi).\n2. Kalimat Larangan / Saran: Menggunakan kata "jangan", "hindari", "sebaiknya", "usahakan".\n3. Konjungsi Temporal (Urutan): pertama, kedua, lalu, kemudian, selanjutnya, setelah itu, terakhir.\n4. Keterangan Cara, Alat, dan Ukuran: "dengan perlahan", "menggunakan garpu", "hingga berwarna kecokelatan".',
          example: '"Aduklah (perintah) madu tersebut dengan sendok kayu (keterangan alat) hingga larut sempurna (keterangan derajat)."',
        },
      ],
      questions: [
        {
          id: 'b3c-q1',
          questionText: 'Kalimat berikut yang merupakan KALIMAT PERINTAH (imperatif) adalah...',
          options: [
            'Apakah sayuran ini sudah dicuci bersih?',
            'Rebuslah air hingga mendidih di atas api sedang.',
            'Sayuran itu memiliki kandungan vitamin C yang tinggi.',
            'Kemarin saya membeli madu di pasar swalayan.'
          ],
          correctAnswer: 1,
          explanation: '"Rebuslah" berakhiran partikel -lah dan menginstruksikan tindakan secara langsung.',
          characterTip: { characterId: 'liling', tipText: 'Ada partikel "-lah" yang memerintahkan tindakan langsung!' },
        },
        {
          id: 'b3c-q2',
          questionText: 'Kata penghubung yang menyatakan URUTAN WAKTU (temporal) adalah...',
          options: [
            'Karena, sebab, oleh karena itu',
            'Kemudian, selanjutnya, setelah itu',
            'Tetapi, melainkan, sedangkan',
            'Walaupun, meskipun, kendati'
          ],
          correctAnswer: 1,
          explanation: '"Kemudian, selanjutnya, setelah itu" menghubungkan langkah yang terjadi secara berurutan waktu.',
          characterTip: { characterId: 'agogo', tipText: 'Kata-kata ini memandu kita langkah demi langkah!' },
        },
        {
          id: 'b3c-q3',
          questionText: 'Kalimat larangan yang tepat dalam teks pembuatan minuman herbal adalah...',
          options: [
            'Tuangkan air hangat ke dalam cangkir.',
            'Jangan menambahkan pemanis buatan berlebihan agar khasiat alaminya tidak rusak.',
            'Aduk ramuan hingga rata.',
            'Sajikan selagi hangat di pagi hari.'
          ],
          correctAnswer: 1,
          explanation: 'Adanya kata "Jangan" menandai kalimat larangan pencegah efek buruk.',
          characterTip: { characterId: 'lulu', tipText: 'Kata "Jangan" memberi peringatan agar tidak salah.' },
        },
        {
          id: 'b3c-q4',
          questionText: 'Cermati kalimat: "Blenderlah buah mangga dan yogurt itu DENGAN KECEPATAN TINGGI." Bagian yang dicetak kapital merupakan frasa keterangan...',
          options: ['Keterangan alat', 'Keterangan waktu', 'Keterangan cara', 'Keterangan tempat'],
          correctAnswer: 2,
          explanation: '"Dengan kecepatan tinggi" menjelaskan cara melakukan pembelenderan.',
          characterTip: { characterId: 'monk', tipText: 'Menjelaskan cara memutarnya: kencang atau lambat!' },
        },
        {
          id: 'b3c-q5',
          questionText: 'Manakah kalimat yang memuat KETERANGAN UKURAN yang akurat?',
          options: [
            'Tambahkan sedikit garam dapur.',
            'Campurkan 10 gram bubuk kayu manis ke dalam 200 ml air hangat.',
            'Berikan air beberapa teguk saja.',
            'Masaklah sampai selesai.'
          ],
          correctAnswer: 1,
          explanation: '"10 gram" dan "200 ml" adalah keterangan ukuran yang terukur dan presisi.',
          characterTip: { characterId: 'robo', tipText: 'Ada angka dan satuan pasti: 10 gram dan 200 ml!' },
        },
        {
          id: 'b3c-q6',
          questionText: 'Perbedaan akhiran -kan dan -i pada kalimat prosedur terlihat pada contoh...',
          options: [
            '"Taburkan wijen di atas roti" (memindahkan wijen) vs "Taburi roti dengan wijen" (roti sebagai sasaran tempat)',
            'Kedua kalimat itu memiliki makna yang salah sama sekali',
            'Akhiran -i hanya untuk hewan saja',
            'Akhiran -kan tidak boleh dipakai dalam teks prosedur'
          ],
          correctAnswer: 0,
          explanation: 'Objek pada akhiran -kan adalah benda yang digerakkan, sedangkan akhiran -i menyasar tempat/lokasi yang dikenai tindakan.',
          characterTip: { characterId: 'liling', tipText: 'Taburkan garam (garamnya yang dilempar), garam-i sayur (sayurnya yang kena garam)!' },
        },
        {
          id: 'b3c-q7',
          questionText: 'Kalimat saran yang santun dalam teks prosedur kebugaran adalah...',
          options: [
            'Kamu harus lari sekarang juga!',
            'Sebaiknya lakukan pemanasan selama lima menit agar otot tidak mengalami kram.',
            'Jangan banyak mengeluh saat latihan.',
            'Cepat selesaikan push-up itu.'
          ],
          correctAnswer: 1,
          explanation: 'Kata "Sebaiknya" mengindikasikan kalimat saran yang persuasif dan sopan.',
          characterTip: { characterId: 'lulu', tipText: 'Kata "sebaiknya" terasa hangat dan menyejukkan hati.' },
        },
        {
          id: 'b3c-q8',
          questionText: 'Frasa yang menyatakan KETERANGAN TUJUAN adalah...',
          options: [
            'Menggunakan pisau tajam',
            'Agar nutrisinya tidak hilang terserap panas',
            'Di dalam mangkuk kaca',
            'Secara perlahan-lahan'
          ],
          correctAnswer: 1,
          explanation: 'Kata "agar" atau "supaya" menyatakan maksud atau tujuan dilakukannya tindakan.',
          characterTip: { characterId: 'agogo', tipText: 'Ada kata "agar" atau "supaya" yang menandai tujuannya!' },
        },
        {
          id: 'b3c-q9',
          questionText: 'Bentuk pasif petunjuk dari kalimat "Peraslah jeruk nipis itu ke dalam gelas" adalah...',
          options: [
            'Jeruk nipis diperas ke dalam gelas.',
            'Memeras jeruk nipis di gelas.',
            'Jeruk nipis memeras dirinya sendiri.',
            'Jangan memeras jeruk nipis.'
          ],
          correctAnswer: 0,
          explanation: 'Bentuk pasif menggunakan awalan di- ("diperas") dengan fokus pada objek jeruk nipis.',
          characterTip: { characterId: 'tyro', tipText: 'Fokus ke bendanya: jeruk nipis diperas!' },
        },
        {
          id: 'b3c-q10',
          questionText: 'Pilihan kata kerja aksi (action verbs) yang tepat untuk resep salad sayur adalah...',
          options: [
            'Menghayalkan, merenungkan, memimpikan',
            'Mencuci, mengiris, mengaduk, menuangkan',
            'Mendengar, merasakan, membayangkan',
            'Mengetahui, meyakini, menyimpulkan'
          ],
          correctAnswer: 1,
          explanation: 'Mencuci, mengiris, mengaduk, dan menuangkan adalah kata kerja aksi fisik nyata.',
          characterTip: { characterId: 'monk', tipText: 'Kata kerja fisik yang langsung dikerjakan tangan kita!' },
        },
      ],
    },
    {
      id: 'bab3-d',
      code: 'D',
      title: 'Menyajikan Teks Prosedur Melalui Berbagai Media',
      summary: 'Mengemas teks prosedur ke dalam format infografis visual, video tutorial kreatif, dan poster digital yang memikat.',
      buddyGuideId: 'monk',
      materialSections: [
        {
          heading: 'Kreativitas Penyajian Teks Prosedur',
          body: 'Di era digital, teks prosedur tidak hanya dicetak di buku, tetapi juga disajikan melalui:\n1. Video Tutorial Singkat (TikTok/Reels/Shorts): Teks subtitle jelas, peragaan langsung, durasi ringkas 30-60 detik.\n2. Infografis Poster: Alur bernomor, ikon ilustrasi menarik, warna kontras, poin-poin singkat.\n3. Lembar Resep Digital: Foto hidangan menggugah selera disertai daftar bahan dan tip anti-gagal.',
        },
      ],
      questions: [
        {
          id: 'b3d-q1',
          questionText: 'Keunggulan utama menyajikan teks prosedur dalam bentuk video tutorial singkat adalah...',
          options: [
            'Membuat kuota internet cepat habis',
            'Pembaca dapat melihat secara langsung contoh gerakan atau teknik memasak yang sulit dijelaskan hanya dengan kata-kata',
            'Tidak memerlukan persiapan sama sekali',
            'Pasti menjadi viral di seluruh dunia'
          ],
          correctAnswer: 1,
          explanation: 'Visual gerak video memperjelas teknik praktis (seperti gerakan memotong atau melipat) secara nyata.',
          characterTip: { characterId: 'monk', tipText: 'Bisa langsung lihat contoh gerakannya di video, jadi anti-bingung!' },
        },
        {
          id: 'b3d-q2',
          questionText: 'Unsur wajib yang harus ada pada poster infografis prosedur cuci tangan adalah...',
          options: [
            'Nomor urut langkah 1 sampai 6 disertai ilustrasi tangan dan teks instruksi ringkas',
            'Daftar harga semua merk sabun di dunia',
            'Lirik lagu pop barat sepanjang sepuluh bait',
            'Foto pembuat poster berukuran besar'
          ],
          correctAnswer: 0,
          explanation: 'Penomoran urut dan ilustrasi tangan adalah inti pemandu infografis prosedur.',
          characterTip: { characterId: 'liling', tipText: 'Harus ada nomor urut 1, 2, 3 dan gambar tangan yang jelas!' },
        },
        {
          id: 'b3d-q3',
          questionText: 'Dalam pembuatan video tutorial kesehatan, peran teks keterangan (subtitle / caption) di layar adalah...',
          options: [
            'Menutupi wajah pemeran video',
            'Membantu penonton yang mematikan suara atau memiliki gangguan pendengaran agar tetap memahami langkah-langkahnya',
            'Membuat ukuran file video menjadi raksasa',
            'Mengganti musik latar'
          ],
          correctAnswer: 1,
          explanation: 'Teks takarir (caption) meningkatkan aksesibilitas dan memudahkan pemahaman instruksi.',
          characterTip: { characterId: 'robo', tipText: 'Sangat membantu penonton yang menonton tanpa menyalakan speaker!' },
        },
        {
          id: 'b3d-q4',
          questionText: 'Kombinasi warna yang ideal untuk infografis tema "Hal yang Baik bagi Tubuh" umumnya menggunakan nuansa...',
          options: [
            'Hijau segar, putih bersih, dan aksen oranye buah yang membangkitkan kesegaran alami',
            'Hitam pekat, abu-abu kusam, dan merah darah yang menyeramkan',
            'Kuning neon menyilaukan mata tanpa kontras',
            'Cokelat gelap seperti tanah gersang'
          ],
          correctAnswer: 0,
          explanation: 'Warna hijau, putih, dan oranye diasosiasikan dengan kesegaran sayur, buah, dan higienitas.',
          characterTip: { characterId: 'tyro', tipText: 'Warna hijau daun dan oranye buah bikin mata segar!' },
        },
        {
          id: 'b3d-q5',
          questionText: 'Hal yang harus diperhatikan dalam merekam video tutorial peregangan senam di rumah adalah...',
          options: [
            'Pencahayaan yang cukup, sudut kamera yang menampilkan postur tubuh secara utuh, dan gerakan yang tidak terburu-buru',
            'Kamera yang sengaja digoyang-goyangkan kencang',
            'Ruangan yang sangat gelap tanpa lampu',
            'Musik yang sangat bising hingga suara instruktur tidak terdengar'
          ],
          correctAnswer: 0,
          explanation: 'Pencahayaan terang dan sudut pandang utuh memastikan penonton meniru gerakan dengan aman.',
          characterTip: { characterId: 'agogo', tipText: 'Postur badan harus kelihatan jelas dari kepala sampai kaki.' },
        },
        {
          id: 'b3d-q6',
          questionText: 'Saat menuliskan langkah teks prosedur pada media poster vertikal, susunan alur baca yang paling nyaman bagi mata manusia adalah...',
          options: [
            'Melingkar acak tanpa nomor',
            'Dari atas ke bawah atau pola Z dari kiri ke kanan',
            'Dari sudut bawah melompat ke pojok atas',
            'Ditulis terbalik dari belakang'
          ],
          correctAnswer: 1,
          explanation: 'Pola membaca alami adalah dari atas ke bawah atau kiri ke kanan dengan panduan penomoran.',
          characterTip: { characterId: 'liling', tipText: 'Mata kita membaca runtut dari atas ke bawah!' },
        },
        {
          id: 'b3d-q7',
          questionText: 'Trik agar resep salad sayur di media sosial menarik minat remaja untuk hidup sehat adalah...',
          options: [
            'Memberi judul yang kaku seperti "Instruksi Bahan Nabati"',
            'Menampilkan foto hidangan berwarna-warni yang menggugah selera dan membagikan tips dressing yang lezat',
            'Menyuruh penonton makan sayur mentah pahit tanpa bumbu',
            'Mengunggah resep tanpa foto'
          ],
          correctAnswer: 1,
          explanation: 'Visual warna-warni sayuran segar dan saus nikmat mengubah persepsi sayur menjadi lezat.',
          characterTip: { characterId: 'monk', tipText: 'Bikin tampilannya cantik dan menggoda selera!' },
        },
        {
          id: 'b3d-q8',
          questionText: 'Format media yang paling ringkas dan praktis dibawa di saku saat bepergian adalah...',
          options: [
            'Buku ensiklopedia sepuluh jilid tebal',
            'Kartu saku infografis digital yang tersimpan di ponsel',
            'Papan tulis kapur besar',
            'Spanduk kain sepuluh meter'
          ],
          correctAnswer: 1,
          explanation: 'Infografis digital di ponsel ringkas dan mudah dibuka kapan saja dibutuhkan.',
          characterTip: { characterId: 'robo', tipText: 'Simpan gambarnya di ponsel, praktis dibuka kapan saja!' },
        },
        {
          id: 'b3d-q9',
          questionText: 'Sebelum membagikan video tutorial ke publik, uji coba yang sebaiknya dilakukan pembuat konten adalah...',
          options: [
            'Meminta teman atau anggota keluarga mempraktikkan langkah dalam video untuk mengecek kejelasannya',
            'Langsung menghapus file videonya',
            'Menambahkan 100 iklan yang menutupi layar',
            'Tidak perlu mengeceknya sama sekali'
          ],
          correctAnswer: 0,
          explanation: 'Uji coba pada orang lain membuktikan apakah instruksi benar-benar mudah dipahami dan bebas celah salah tafsir.',
          characterTip: { characterId: 'lulu', tipText: 'Minta sahabat kita mencoba dulu: kalau mereka paham, berarti sukses!' },
        },
        {
          id: 'b3d-q10',
          questionText: 'Pemberian apresiasi atau ucapan selamat di akhir video tutorial kesehatan ("Semoga harimu semakin bugar!") bertujuan untuk...',
          options: [
            'Membangun kedekatan emosional dan memotivasi penonton agar konsisten menjaga kesehatan',
            'Memperpanjang durasi agar membosankan',
            'Menagih bayaran dari penonton',
            'Menghabiskan baterai kamera'
          ],
          correctAnswer: 0,
          explanation: 'Kalimat penutup positif menyemangati penonton untuk mempraktikkan gaya hidup sehat secara konsisten.',
          characterTip: { characterId: 'tyro', tipText: 'Kalimat semangat dari Tyro: "Ayo hidup sehat, kamu pasti bisa!"' },
        },
      ],
    },
  ],
};

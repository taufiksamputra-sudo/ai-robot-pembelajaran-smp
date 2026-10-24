import { Chapter } from '../curriculumTypes';

export const BAB_5: Chapter = {
  id: 'bab-5',
  number: 'Bab V',
  title: 'Membuka Gerbang Dunia',
  islandName: 'Menara Gerbang Dunia',
  themeColor: '#d97706',
  badgeGradient: 'from-amber-500 to-yellow-600',
  icon: '📖',
  description: 'Membuka cakrawala ilmu pengetahuan dengan membedah anatomi buku, merangkum intisari, dan menyajikan teks tanggapan kritis yang santun.',
  subChapters: [
    {
      id: 'bab5-a',
      code: 'A',
      title: 'Membedah Buku Bergambar',
      summary: 'Menganalisis hubungan sinergis antara teks narasi dan gambar ilustrasi dalam buku bergambar (picture book / komik edukasi).',
      buddyGuideId: 'lulu',
      materialSections: [
        {
          heading: 'Kekuatan Buku Bergambar',
          body: 'Buku bergambar memadukan dua bahasa: bahasa visual (gambar, ekspresi tokoh, warna, sudut pandang kamera) dan bahasa verbal (kata-kata, dialog, narasi).\nFungsi ilustrasi:\n1. Memperjelas pesan teks.\n2. Menggambarkan emosi tokoh yang sulit diungkapkan hanya dengan kata-kata.\n3. Membangun suasana (riang, menegangkan, misterius, hangat).\n4. Menarik minat baca sejak usia dini hingga remaja.',
        },
      ],
      questions: [
        {
          id: 'b5a-q1',
          questionText: 'Dalam buku bergambar, fungsi utama gambar ilustrasi adalah...',
          options: [
            'Hanya sebagai pemboros tinta cetak',
            'Saling melengkapi dengan teks untuk memperjelas alur dan menghidupkan emosi karakter',
            'Menggantikan seluruh teks sehingga buku tidak perlu diberi judul',
            'Menutupi kesalahan cetak tulisan'
          ],
          correctAnswer: 1,
          explanation: 'Ilustrasi dan teks bekerja sama secara sinergis untuk menyampaikan makna cerita secara mendalam.',
          characterTip: { characterId: 'lulu', tipText: 'Gambar dan kata-kata bekerja sama seperti sahabat karib!' },
        },
        {
          id: 'b5a-q2',
          questionText: 'Jika ilustrasi menampilkan raut wajah tokoh dengan alis bertaut, mata melotot, dan mulut terbuka lebar, emosi yang ditunjukkan adalah...',
          options: ['Sedih terharu', 'Marah atau geram', 'Mengantuk', 'Gembira ria'],
          correctAnswer: 1,
          explanation: 'Alis bertaut dan mata melotot adalah penanda visual kemarahan atau kegeraman.',
          characterTip: { characterId: 'tyro', tipText: 'Lihat ekspresi wajahnya: itu tanda sedang marah membara!' },
        },
        {
          id: 'b5a-q3',
          questionText: 'Warna ilustrasi yang didominasi warna biru kelabu pucat dan hujan rintik-rintik biasanya bertujuan menciptakan suasana...',
          options: ['Pesta gembira', 'Kesedihan, kesepian, atau duka', 'Semangat membara', 'Marah besar'],
          correctAnswer: 1,
          explanation: 'Warna dingin (biru kusam/kelabu) secara psikologis membangun nuansa melankolis atau sedih.',
          characterTip: { characterId: 'lulu', tipText: 'Warna biru kusam dan rintik hujan melambangkan rasa sedih dan sepi.' },
        },
        {
          id: 'b5a-q4',
          questionText: 'Perbedaan buku bergambar (picture book) dengan novel teks murni adalah...',
          options: [
            'Buku bergambar tidak boleh dibaca oleh siswa SMP',
            'Pada buku bergambar, gambar memegang peran kunci dalam membangun alur cerita, bukan sekadar hiasan',
            'Novel teks murni tidak memiliki tokoh',
            'Buku bergambar tidak memiliki pesan moral'
          ],
          correctAnswer: 1,
          explanation: 'Pada buku bergambar, gambar menyampaikan informasi penting yang tidak tertulis pada teks.',
          characterTip: { characterId: 'robo', tipText: 'Gambar pada picture book bercerita secara aktif, bukan cuma hiasan tempel!' },
        },
        {
          id: 'b5a-q5',
          questionText: 'Balon kata (speech balloon) dengan tepi bergerigi tajam pada komik edukasi menandakan bahwa tokoh sedang...',
          options: ['Berbisik pelan', 'Berteriak kencang atau terkejut', 'Tidur mendengkur', 'Berpikir dalam hati'],
          correctAnswer: 1,
          explanation: 'Balon kata bergerigi runcing mengekspresikan teriakan, bentakan, atau keterkejutan dramatis.',
          characterTip: { characterId: 'monk', tipText: 'Tepi bergerigi tajam = suara keras berteriak kencang!' },
        },
        {
          id: 'b5a-q6',
          questionText: 'Sedangkan balon kata berbentuk awan berderet lingkaran kecil ke kepala menandakan...',
          options: ['Tokoh sedang berbicara normal', 'Tokoh sedang berpikir dalam hati (pikiran tokoh)', 'Radio sedang berbunyi', 'Suara petir'],
          correctAnswer: 1,
          explanation: 'Balon pikiran (thought bubble) berbentuk awan menandakan suara batin yang tidak diucapkan secara lisan.',
          characterTip: { characterId: 'agogo', tipText: 'Bentuk awan kecil = suara di dalam pikiran sang tokoh!' },
        },
        {
          id: 'b5a-q7',
          questionText: 'Sudut pandang kamera visual dari bawah ke atas (low angle) pada ilustrasi tokoh bertujuan menampilkan kesan...',
          options: ['Tokoh terlihat lemah dan kecil', 'Tokoh tampak megah, berwibawa, atau perkasa', 'Tokoh sedang tidur telungkup', 'Gambar terbalik'],
          correctAnswer: 1,
          explanation: 'Sudut bawah (katak/low angle) memberi kesan tokoh tampak menjulang tinggi dan dominan berwibawa.',
          characterTip: { characterId: 'tyro', tipText: 'Seperti melihat Tyro si T-Rex dari bawah, tampak perkasa!' },
        },
        {
          id: 'b5a-q8',
          questionText: 'Hubungan yang tepat antara teks dan ilustrasi dalam buku cerita anak adalah...',
          options: [
            'Ilustrasi harus membantah teks secara konyol',
            'Ilustrasi memperluas imajinasi dan memperjelas rincian yang belum tuntas diurai teks',
            'Teks harus menutupi seluruh gambar ilustrasi',
            'Gambar harus dihilangkan agar anak cepat pintar'
          ],
          correctAnswer: 1,
          explanation: 'Keduanya berkolaborasi memperluas daya imajinasi dan pemahaman pembaca.',
          characterTip: { characterId: 'liling', tipText: 'Keduanya saling melengkapi seperti melodi dan lirik lagu!' },
        },
        {
          id: 'b5a-q9',
          questionText: 'Ciri buku bergambar yang ramah pembaca remaja dan anak adalah...',
          options: [
            'Bebas dari unsur pornografi dan kekerasan sadis, serta memuat pesan moral positif',
            'Hanya memuat gambar seram yang menakutkan',
            'Gambarnya tidak boleh berwarna sama sekali',
            'Kertasnya terbuat dari logam berat'
          ],
          correctAnswer: 0,
          explanation: 'Buku bacaan edukatif harus aman (family-friendly) dan menumbuhkan karakter mulia.',
          characterTip: { characterId: 'lulu', tipText: 'Aman, mendidik, dan membawa kebaikan bagi budi pekerti kita.' },
        },
        {
          id: 'b5a-q10',
          questionText: 'Aktivitas "bedah buku bergambar" melatih keterampilan siswa dalam hal...',
          options: [
            'Merusak dan menyobek lembaran buku',
            'Literasi visual, apresiasi seni ilustrasi, dan pemahaman cerita secara kritis',
            'Mewarnai dinding sekolah dengan cat minyak',
            'Menghafal nomor seri percetakan'
          ],
          correctAnswer: 1,
          explanation: 'Membedah buku mengasah kecerdasan literasi visual dan kemampuan berpikir kritis siswa.',
          characterTip: { characterId: 'robo', tipText: 'Melatih mata dan otak kita membaca makna di balik gambar dan teks!' },
        },
      ],
    },
    {
      id: 'bab5-b',
      code: 'B',
      title: 'Mengenal Bagian-Bagian Buku',
      summary: 'Mempelajari anatomi fisik buku: sampul depan/belakang, punggung buku, halaman hak cipta, kata pengantar, daftar isi, glosarium, dan indeks.',
      buddyGuideId: 'liling',
      materialSections: [
        {
          heading: 'Anatomi Lengkap Bagian-Bagian Buku',
          body: 'Sebuah buku terbagi atas tiga bagian besar:\n1. Bagian Awal (Preliminaries):\n- Sampul (Cover): Memuat judul, nama penulis, penerbit.\n- Halaman Hak Cipta (Kredit): Memuat tahun terbit, ISBN, penerbit.\n- Kata Pengantar & Prakata: Sambutan dan ucapan syukur penulis.\n- Daftar Isi: Peta bab dan halaman buku.\n2. Bagian Isi (Text Matter): Bab-bab materi atau cerita.\n3. Bagian Akhir (Postliminaries):\n- Glosarium: Kamus kecil arti kata-kata sulit.\n- Indeks: Daftar istilah penting disertai nomor halaman kemunculannya.\n- Daftar Pustaka: Sumber referensi rujukan buku.',
          example: 'ISBN (International Standard Book Number) adalah nomor identifikasi unik buku sedunia.',
        },
      ],
      questions: [
        {
          id: 'b5b-q1',
          questionText: 'Bagian buku yang memuat daftar istilah kata-kata sulit disertai dengan penjelasannya dinamakan...',
          options: ['Daftar isi', 'Glosarium', 'Indeks', 'Kata pengantar'],
          correctAnswer: 1,
          explanation: 'Glosarium adalah kamus ringkas di bagian belakang buku yang memuat arti istilah khusus.',
          characterTip: { characterId: 'liling', tipText: 'Glosarium = kamus kecil arti istilah sulit di akhir buku!' },
        },
        {
          id: 'b5b-q2',
          questionText: 'Bagian buku yang memuat daftar kata/nama penting yang disusun menurut abjad (alfabetis) disertai nomor halaman tempat kata itu berada disebut...',
          options: ['Glosarium', 'Indeks', 'Daftar pustaka', 'Katalog'],
          correctAnswer: 1,
          explanation: 'Indeks membantu pembaca mencari letak nomor halaman dari suatu kata kunci secara cepat.',
          characterTip: { characterId: 'robo', tipText: 'Indeks disusun urut A-Z disertai nomor halaman kemunculannya!' },
        },
        {
          id: 'b5b-q3',
          questionText: 'Informasi yang tercantum pada sampul depan (front cover) sebuah buku adalah...',
          options: [
            'Judul buku, nama penulis/pengarang, dan nama penerbit',
            'Daftar pustaka dan indeks',
            'Seluruh isi bab pertama',
            'Tanda tangan semua pembeli buku'
          ],
          correctAnswer: 0,
          explanation: 'Sampul depan memuat judul utama, subjudul jika ada, nama penulis, dan logo/nama penerbit.',
          characterTip: { characterId: 'agogo', tipText: 'Di depan ada judul keren dan nama penulisnya!' },
        },
        {
          id: 'b5b-q4',
          questionText: 'Apa fungsi utama dari "Daftar Isi"?',
          options: [
            'Mengetahui daftar makanan kesukaan penulis',
            'Sebagai peta penunjuk letak bab dan sub-bab beserta nomor halamannya agar mudah dicari',
            'Sebagai penanda bahwa buku sudah tamat',
            'Menggantikan daftar pustaka'
          ],
          correctAnswer: 1,
          explanation: 'Daftar isi memetakan struktur isi buku agar pembaca bisa langsung melompat ke halaman bab yang dituju.',
          characterTip: { characterId: 'tyro', tipText: 'Daftar isi memudahkan kita menemukan bab yang mau dibaca!' },
        },
        {
          id: 'b5b-q5',
          questionText: 'Nomor identifikasi standar internasional yang bersifat unik untuk setiap buku yang diterbitkan di dunia adalah...',
          options: ['ISBN (International Standard Book Number)', 'SIM', 'NIK', 'KTP'],
          correctAnswer: 0,
          explanation: 'ISBN adalah kode identitas 13 digit buku yang diakui secara internasional.',
          characterTip: { characterId: 'robo', tipText: 'ISBN adalah barcode unik nomor KTP-nya buku sedunia!' },
        },
        {
          id: 'b5b-q6',
          questionText: 'Bagian yang menghubungkan sampul depan dan sampul belakang buku serta memuat judul saat buku ditata di rak perpustakaan disebut...',
          options: ['Punggung buku (spine)', 'Kaki buku', 'Telinga buku', 'Leher buku'],
          correctAnswer: 0,
          explanation: 'Punggung buku (spine) memudahkan identifikasi judul saat buku tersusun di rak perpustakaan.',
          characterTip: { characterId: 'monk', tipText: 'Punggung buku yang terlihat saat buku berdiri di rak!' },
        },
        {
          id: 'b5b-q7',
          questionText: 'Ringkasan singkat isi buku yang sering dicetak di sampul belakang (back cover) untuk memikat calon pembaca disebut...',
          options: ['Sinopsis / Blurb', 'Indeks', 'Kata pengantar', 'Glosarium'],
          correctAnswer: 0,
          explanation: 'Blurb atau sinopsis di sampul belakang memuat cuplikan cerita yang memikat pembeli/pembaca.',
          characterTip: { characterId: 'lulu', tipText: 'Blurb di sampul belakang bikin kita penasaran ingin membaca!' },
        },
        {
          id: 'b5b-q8',
          questionText: 'Perbedaan "Kata Pengantar" dan "Prakata" adalah...',
          options: [
            'Prakata ditulis langsung oleh pengarang buku, sedangkan Kata Pengantar ditulis oleh pihak lain/ahli untuk menyambut buku',
            'Prakata hanya boleh ditulis dalam bahasa Belanda',
            'Kata pengantar selalu berada di halaman paling terakhir',
            'Keduanya adalah hal yang sama sekali salah'
          ],
          correctAnswer: 0,
          explanation: 'Prakata (preface) dari penulis sendiri; Kata Pengantar (foreword) dari pakar/orang lain yang memberi apresiasi.',
          characterTip: { characterId: 'liling', tipText: 'Prakata = tulisan pengarang sendiri. Kata pengantar = sambutan dari ahli lain!' },
        },
        {
          id: 'b5b-q9',
          questionText: 'Daftar buku, artikel, dan rujukan ilmiah yang digunakan penulis dalam menyusun karyanya dicatat pada...',
          options: ['Daftar Pustaka (Bibliografi)', 'Halaman dedikasi', 'Halaman judul', 'Daftar tabel'],
          correctAnswer: 0,
          explanation: 'Daftar pustaka memuat sumber literatur yang dirujuk penulis sebagai bentuk kejujuran akademik.',
          characterTip: { characterId: 'robo', tipText: 'Daftar pustaka mencatat semua sumber rujukan terpercaya.' },
        },
        {
          id: 'b5b-q10',
          questionText: 'Biodata singkat mengenai riwayat pendidikan dan prestasi pengarang biasanya dicantumkan pada bagian...',
          options: ['Tentang Penulis (Biografi Pengarang)', 'Daftar isi', 'Halaman persembahan', 'Glosarium'],
          correctAnswer: 0,
          explanation: 'Profil penulis memperkenalkan latar belakang kepengarangan kepada pembaca di bagian akhir buku.',
          characterTip: { characterId: 'tyro', tipText: 'Bisa kenalan dengan profil penulis hebat di halaman belakang!' },
        },
      ],
    },
    {
      id: 'bab5-c',
      code: 'C',
      title: 'Merangkum Buku',
      summary: 'Menguasai teknik merangkum buku fiksi dan nonfiksi menggunakan gagasan pokok, peta konsep (mind mapping), dan teknik intisari.',
      buddyGuideId: 'agogo',
      materialSections: [
        {
          heading: 'Teknik Efektif Merangkum Buku',
          body: 'Merangkum bukan menyalin ulang seluruh kalimat, melainkan mengambil intisari atau gagasan pokok tanpa mengubah makna aslinya.\nLangkah merangkum buku nonfiksi:\n1. Baca daftar isi untuk melihat alur pikir penulis.\n2. Temukan kalimat utama/gagasan pokok tiap bab atau paragraf.\n3. Susun kembali intisari kalimat pokok menggunakan bahasa sendiri yang padat.\n4. Gunakan bantuan Peta Konsep (Mind Map) bercabang warna-warni.',
        },
      ],
      questions: [
        {
          id: 'b5c-q1',
          questionText: 'Tujuan utama membuat rangkuman buku adalah...',
          options: [
            'Membuat tulisan menjadi lebih tebal dari buku aslinya',
            'Menangkap dan menyajikan intisari pokok pikiran buku secara ringkas, padat, dan jelas',
            'Mengkritik semua kesalahan tanda baca penulis',
            'Mengubah alur cerita menjadi dongeng baru'
          ],
          correctAnswer: 1,
          explanation: 'Rangkuman memadatkan informasi pokok agar mudah diingat dan dipahami intisarinya.',
          characterTip: { characterId: 'agogo', tipText: 'Mengambil intinya saja supaya mudah diingat otak kita!' },
        },
        {
          id: 'b5c-q2',
          questionText: 'Langkah pertama yang tepat saat akan merangkum satu bab buku nonfiksi adalah...',
          options: [
            'Menutup buku dan mengarang sendiri',
            'Membaca teks secara saksama untuk menemukan ide pokok atau kalimat utama tiap paragraf',
            'Menghitung jumlah titik dan koma',
            'Menyalin kata pertama dan kata terakhir saja'
          ],
          correctAnswer: 1,
          explanation: 'Membaca dan menemukan ide pokok adalah kunci mengekstraksi informasi penting.',
          characterTip: { characterId: 'liling', tipText: 'Cari ide pokok di kalimat utama tiap paragraf!' },
        },
        {
          id: 'b5c-q3',
          questionText: 'Metode mencatat intisari materi menggunakan diagram visual bercabang dengan kata kunci, simbol, dan warna disebut...',
          options: ['Mind Mapping (Peta Pikiran / Peta Konsep)', 'Fotokopi', 'Dikte lisan', 'Sketsa wajah'],
          correctAnswer: 0,
          explanation: 'Peta pikiran (mind map) mengorganisasi konsep secara visual bercabang sesuai cara kerja otak.',
          characterTip: { characterId: 'monk', tipText: 'Mind map bercabang-cabang seperti pohon ide warna-warni!' },
        },
        {
          id: 'b5c-q4',
          questionText: 'Dalam merangkum, kalimat penjelas yang berulang-ulang atau contoh ilustrasi panjang sebaiknya...',
          options: [
            'Ditulis berkali-kali sampai halaman penuh',
            'Ditinggalkan atau dipadatkan, fokus pada gagasan pokoknya',
            'Diberi tanda tanya besar',
            'Diharuskan ada di setiap baris'
          ],
          correctAnswer: 1,
          explanation: 'Contoh pendukung tidak perlu disalin utuh agar rangkuman tetap ringkas.',
          characterTip: { characterId: 'robo', tipText: 'Fokus ke ide utamanya, contoh-contoh panjang bisa dipadatkan!' },
        },
        {
          id: 'b5c-q5',
          questionText: 'Saat merangkum buku cerita fiksi/novel, unsur yang dirangkum adalah alur peristiwa yang meliputi...',
          options: [
            'Orientasi (pengenalan), rangkaian konflik, klimaks, dan resolusi akhir cerita',
            'Hanya nama-nama makanan yang dimakan tokoh',
            'Harga tiket bioskop',
            'Jumlah kata dalam buku'
          ],
          correctAnswer: 0,
          explanation: 'Rangkuman fiksi (sinopsis) mengikuti kerangka alur cerita utama secara kronologis.',
          characterTip: { characterId: 'lulu', tipText: 'Rangkum alur peristiwanya: dari awal mula, masalah seru, sampai penyelesaian.' },
        },
        {
          id: 'b5c-q6',
          questionText: 'Syarat bahasa dalam rangkuman yang baik adalah...',
          options: [
            'Menggunakan kalimat sendiri yang efektif, runtut, dan tetap setia pada makna asli pengarang',
            'Menambahkan pendapat pribadi yang menentang isi buku',
            'Mengubah nama tokoh utama menjadi nama sendiri',
            'Menggunakan bahasa sandi rahasia'
          ],
          correctAnswer: 0,
          explanation: 'Bahasa rangkuman harus orisinal kalimat sendiri tetapi tidak boleh menyimpang dari gagasan asli pengarang.',
          characterTip: { characterId: 'tyro', tipText: 'Pakai bahasamu sendiri tapi intinya tetap setia sama isi buku aslinya!' },
        },
        {
          id: 'b5c-q7',
          questionText: 'Rangkuman yang disusun dalam bentuk poin-poin bernomor (bullet points) memiliki keuntungan...',
          options: [
            'Mudah dibaca cepat dan terstruktur rapi untuk mengulang pelajaran sebelum ujian',
            'Tampak seperti rumus kimia kuno',
            'Tidak dapat dicetak',
            'Menghilangkan semua kata kerja'
          ],
          correctAnswer: 0,
          explanation: 'Format butir-butir memudahkan penelaahan cepat saat belajar mandiri.',
          characterTip: { characterId: 'liling', tipText: 'Poin bernomor sangat enak dibaca saat persiapan ulangan harian!' },
        },
        {
          id: 'b5c-q8',
          questionText: 'Kalimat utama yang berada di awal paragraf dinamakan paragraf...',
          options: ['Deduktif', 'Induktif', 'Campuran', 'Naratif bebas'],
          correctAnswer: 0,
          explanation: 'Paragraf deduktif menempatkan ide pokok di awal, diikuti kalimat-kalimat penjelas.',
          characterTip: { characterId: 'agogo', tipText: 'Deduktif = Depan (ide pokok di awal kalimat)!' },
        },
        {
          id: 'b5c-q9',
          questionText: 'Sedangkan paragraf yang kalimat utamanya berada di akhir paragraf dinamakan paragraf...',
          options: ['Induktif', 'Deduktif', 'Deskriptif murni', 'Inovatif'],
          correctAnswer: 0,
          explanation: 'Paragraf induktif menyajikan uraian penjelas terlebih dahulu dan menyimpulkan ide pokok di akhir.',
          characterTip: { characterId: 'agogo', tipText: 'Induktif = Intelejen di ujung akhir paragraf!' },
        },
        {
          id: 'b5c-q10',
          questionText: 'Manfaat membiasakan diri merangkum buku bacaan sejak kelas 7 SMP adalah...',
          options: [
            'Melatih daya ingat, mengasah kemampuan sintesis informasi, dan memperluas wawasan berpikir',
            'Membuat tangan kram tanpa hasil',
            'Menghabiskan kertas buku tulis',
            'Membuat nilai rapor turun'
          ],
          correctAnswer: 0,
          explanation: 'Merangkum mengasah kemampuan bernalar kritis dan efisiensi belajar jangka panjang.',
          characterTip: { characterId: 'robo', tipText: 'Merangkum adalah kebiasaan para juara dan ilmuwan dunia!' },
        },
      ],
    },
    {
      id: 'bab5-d',
      code: 'D',
      title: 'Menyajikan Tanggapan terhadap Buku',
      summary: 'Menyusun resensi/ulasan buku yang memuat keunggulan, kelemahan, serta rekomendasi pembaca secara objektif dan santun.',
      buddyGuideId: 'tyro',
      materialSections: [
        {
          heading: 'Struktur Resensi / Teks Tanggapan Buku',
          body: '1. Identitas Buku: Judul, pengarang, penerbit, tahun terbit, tebal halaman, nomor ISBN.\n2. Gambaran Umum (Sinopsis): Ringkasan isi buku secara garis besar.\n3. Analisis Keunggulan: Hal-hal hebat dari buku (gaya bahasa memikat, ilustrasi apik, pesan moral mendalam).\n4. Analisis Kelemahan: Catatan kekurangan secara santun (huruf terlalu kecil, alur agak lambat di tengah).\n5. Rekomendasi/Penutup: Siapa yang sangat cocok membaca buku ini.',
        },
      ],
      questions: [
        {
          id: 'b5d-q1',
          questionText: 'Teks yang menyajikan ulasan, penilaian, kelebihan, dan kekurangan suatu karya buku disebut...',
          options: ['Teks tanggapan / resensi buku', 'Teks laporan keuangan', 'Teks prosedur pembuatan buku', 'Teks iklan penjualan'],
          correctAnswer: 0,
          explanation: 'Teks tanggapan buku (resensi) mengevaluasi kualitas dan nilai manfaat sebuah buku.',
          characterTip: { characterId: 'tyro', tipText: 'Resensi buku = penilaian jujur tentang serunya sebuah buku!' },
        },
        {
          id: 'b5d-q2',
          questionText: 'Identitas fisik buku dalam sebuah teks tanggapan biasanya mencakup...',
          options: [
            'Judul buku, nama penulis, nama penerbit, tahun terbit, dan jumlah halaman',
            'Daftar menu makanan penulis',
            'Komentar warganet di media sosial',
            'Warna baju pembeli buku'
          ],
          correctAnswer: 0,
          explanation: 'Identitas buku memberikan data bibliografi resmi karya yang diulas.',
          characterTip: { characterId: 'liling', tipText: 'Identitas buku mencatat judul, pengarang, penerbit, dan tebal halaman.' },
        },
        {
          id: 'b5d-q3',
          questionText: 'Contoh kalimat yang mengulas KEUNGGULAN sebuah buku adalah...',
          options: [
            'Sayangnya, buku ini menggunakan jenis huruf yang terlalu kecil sehingga cepat melelahkan mata.',
            'Bahasa yang digunakan penulis sangat mengalir, segar, dan dipenuhi ilustrasi berwarna yang memikat imajinasi pembaca.',
            'Buku ini dijual dengan harga yang sangat mahal sekali di toko.',
            'Kertas yang digunakan mudah sobek jika terkena air.'
          ],
          correctAnswer: 1,
          explanation: 'Mengapresiasi gaya bahasa mengalir dan ilustrasi memikat adalah telaah keunggulan karya.',
          characterTip: { characterId: 'lulu', tipText: 'Kalimat kedua memuji bahasa dan ilustrasinya yang memikat!' },
        },
        {
          id: 'b5d-q4',
          questionText: 'Contoh kalimat yang mengulas KELEMAHAN buku secara santun dan konstruktif adalah...',
          options: [
            'Buku ini sangat jelek dan tidak pantas dibaca siapapun di dunia!',
            'Penulis sangat bodoh karena tidak tahu cara menggambar.',
            'Alur cerita di bagian tengah terasa agak lambat, namun dapat dipahami demi membangun ketegangan menuju bab penutup.',
            'Jangan pernah membeli buku sampah ini!'
          ],
          correctAnswer: 2,
          explanation: 'Kritik konstruktif menunjukkan kelemahan secara sopan disertai alasan dan alternatif pemahaman.',
          characterTip: { characterId: 'lulu', tipText: 'Kritiklah dengan sopan dan santun, jangan menghina!' },
        },
        {
          id: 'b5d-q5',
          questionText: 'Bagian rekomendasi dalam teks tanggapan buku bertujuan untuk...',
          options: [
            'Memberi saran kepada pembaca sasaran yang cocok membaca buku tersebut',
            'Mengharuskan semua orang membelikan buku untuk penulis',
            'Menghina buku karya orang lain',
            'Menutup toko buku'
          ],
          correctAnswer: 0,
          explanation: 'Rekomendasi membantu calon pembaca menentukan apakah buku tersebut sesuai dengan minat dan usianya.',
          characterTip: { characterId: 'monk', tipText: 'Kasih tahu siapa yang cocok baca: misalnya cocok buat anak SMP!' },
        },
        {
          id: 'b5d-q6',
          questionText: 'Sikap penanggap buku yang profesional adalah...',
          options: [
            'Hanya memuji karena kenal baik dengan penulisnya',
            'Objektif, adil, menimbang kelebihan dan kekurangan secara berimbang berdasarkan fakta isi buku',
            'Memberi nilai buruk karena tidak suka dengan warna sampulnya semata',
            'Menilai buku tanpa pernah membacanya sama sekali'
          ],
          correctAnswer: 1,
          explanation: 'Penanggap yang baik menilai secara adil dan objektif berdasarkan isi tulisan seutuhnya.',
          characterTip: { characterId: 'robo', tipText: 'Nilai secara adil: sebutkan kelebihannya dan berikan masukan kekurangannya!' },
        },
        {
          id: 'b5d-q7',
          questionText: 'Kutipan: "Buku ini sangat direkomendasikan bagi pelajar kelas 7 yang ingin memperdalam wawasan cinta lingkungan." Kalimat ini termasuk bagian...',
          options: ['Identitas buku', 'Rekomendasi / Simpulan penutup', 'Sinopsis awal', 'Kritik huruf'],
          correctAnswer: 1,
          explanation: 'Kalimat ini adalah rekomendasi pembaca sasaran di bagian penutup resensi.',
          characterTip: { characterId: 'tyro', tipText: 'Ini rekomendasi penutup yang menyarankan buku ini buat kita!' },
        },
        {
          id: 'b5d-q8',
          questionText: 'Unsur estetika buku yang dapat dinilai dalam teks tanggapan buku bergambar adalah...',
          options: [
            'Kesesuaian palet warna ilustrasi dengan emosi cerita serta tata letak teks yang artistik',
            'Nomor seri mesin percetakan',
            'Berapa berat timbangan buku dalam kilogram',
            'Warna cat tembok rumah penerbit'
          ],
          correctAnswer: 0,
          explanation: 'Palet warna dan tata letak artistik merupakan aspek estetika seni visual buku.',
          characterTip: { characterId: 'lulu', tipText: 'Keindahan gambar, perpaduan warna, dan kerapian tata letaknya.' },
        },
        {
          id: 'b5d-q9',
          questionText: 'Manfaat membaca teks tanggapan buku sebelum membeli buku di toko buku adalah...',
          options: [
            'Mendapatkan gambaran awal mengenai kualitas dan isi buku sehingga tidak salah pilih bacaan',
            'Agar tidak perlu membaca bukunya sama sekali',
            'Menghilangkan minat baca',
            'Membuat uang jajan hilang'
          ],
          correctAnswer: 0,
          explanation: 'Teks tanggapan menjadi panduan referensi berbelanja buku yang bijak dan sesuai kebutuhan.',
          characterTip: { characterId: 'agogo', tipText: 'Kita jadi tahu bukunya bagus atau tidak sebelum membelinya!' },
        },
        {
          id: 'b5d-q10',
          questionText: 'Hal yang harus dihindari saat menulis resensi novel cerita misteri adalah...',
          options: [
            'Membocorkan identitas pelaku rahasia di akhir cerita (spoiler) yang merusak kejutan pembaca',
            'Menyebutkan nama tokoh utama',
            'Menjelaskan latar tempat cerita',
            'Mengapresiasi gaya bahasa pengarang'
          ],
          correctAnswer: 0,
          explanation: 'Membocorkan rahasia ending (spoiler) merusak keasyikan dan rasa penasaran calon pembaca.',
          characterTip: { characterId: 'monk', tipText: 'Jangan bocorkan siapa pelakunya ya, nanti spoilernya bikin gak asyik!' },
        },
      ],
    },
    {
      id: 'bab5-e',
      code: 'E',
      title: 'Mengenali Ragam Kalimat dan Struktur Teks Tanggapan',
      summary: 'Menguasai kalimat pujian, kalimat kritik santun, kalimat sanggahan, konjungsi antarkalimat, dan struktur konteks-deskripsi-penilaian.',
      buddyGuideId: 'monk',
      materialSections: [
        {
          heading: 'Struktur Formal Teks Tanggapan',
          body: '1. Konteks: Pengenalan karya yang ditanggapi (apa karyanya, siapa penciptanya, di mana diterbitkan).\n2. Deskripsi Karya: Gambaran isi, bagian-bagian buku, gaya penceritaan secara netral.\n3. Penilaian: Pertimbangan kelebihan, kelemahan, serta simpulan rekomendasi penanggap.',
        },
        {
          heading: 'Etika Berbahasa: Pujian vs Kritik Santun',
          body: 'Pujian: Mengapresiasi kelebihan dengan tulus tanpa berlebihan.\nKritik Santun: Mengemukakan kekurangan secara objektif menggunakan bahasa yang santun, tidak menyerang pribadi pengarang, dan memberi saran perbaikan.',
          example: 'Kritik santun: "Akan lebih sempurna lagi jika glosarium di bagian akhir dilengkapi contoh kalimat penggunaannya."',
        },
      ],
      questions: [
        {
          id: 'b5e-q1',
          questionText: 'Tiga bagian struktur baku teks tanggapan adalah...',
          options: [
            'Konteks -> Deskripsi Karya -> Penilaian',
            'Orientasi -> Komplikasi -> Resolusi',
            'Tujuan -> Alat Bahan -> Langkah',
            'Identifikasi -> Deskripsi Bagian -> Kesan'
          ],
          correctAnswer: 0,
          explanation: 'Struktur teks tanggapan terdiri atas Konteks, Deskripsi Karya, dan Penilaian.',
          characterTip: { characterId: 'liling', tipText: 'Konteks (pengenalan), Deskripsi karya, lalu Penilaian akhir!' },
        },
        {
          id: 'b5e-q2',
          questionText: 'Kalimat berikut yang merupakan bentuk PUJIAN yang tulus dan santun adalah...',
          options: [
            'Buku ini sangat luar biasa karena ilustrasinya mampu menggetarkan hati dan sarat pesan moral yang mendalam.',
            'Buku ini biasa saja tidak ada bagus-bagusnya.',
            'Pengarang buku ini tampaknya hanya ingin mencari uang.',
            'Buku ini lumayanlah daripada tidak ada buku lain.'
          ],
          correctAnswer: 0,
          explanation: 'Kalimat pertama menyampaikan apresiasi mendalam terhadap ilustrasi dan pesan moral secara tulus.',
          characterTip: { characterId: 'lulu', tipText: 'Pujian yang tulus mengapresiasi keindahan karya dengan indah.' },
        },
        {
          id: 'b5e-q3',
          questionText: 'Manakah kalimat KRITIK SANTUN yang layak digunakan dalam teks tanggapan?',
          options: [
            'Tulisan ini sangat membosankan dan membuat saya mengantuk parah!',
            'Penggunaan beberapa istilah asing tanpa padanan arti di glosarium sedikit menyulitkan pembaca pemula memahami maksud cerita.',
            'Jangan pernah baca buku ini kalau tidak mau buang waktu!',
            'Penulis tidak mengerti tata bahasa sama sekali.'
          ],
          correctAnswer: 1,
          explanation: 'Menjelaskan kendala pembaca pemula secara santun dan spesifik adalah teladan kritik membangun.',
          characterTip: { characterId: 'liling', tipText: 'Jelaskan apa yang menyulitkan pembaca secara sopan dan objektif.' },
        },
        {
          id: 'b5e-q4',
          questionText: 'Konjungsi antarkalimat yang menyatakan PERTENTANGAN adalah...',
          options: ['Akan tetapi, namun demikian', 'Selain itu, lagipula', 'Oleh karena itu, sehingga', 'Dengan demikian, akibatnya'],
          correctAnswer: 0,
          explanation: '"Akan tetapi" dan "namun demikian" mempertentangkan gagasan kalimat sebelumnya dengan kalimat berikutnya.',
          characterTip: { characterId: 'agogo', tipText: '"Akan tetapi" membalikkan suasana ide kalimat sebelumnya!' },
        },
        {
          id: 'b5e-q5',
          questionText: 'Konjungsi antarkalimat yang menyatakan AKIBAT atau simpulan adalah...',
          options: ['Oleh sebab itu / Oleh karena itu', 'Bahkan', 'Sebaliknya', 'Walaupun demikian'],
          correctAnswer: 0,
          explanation: '"Oleh karena itu" dan "oleh sebab itu" mengaitkan sebab pada kalimat sebelumnya dengan akibat/simpulan.',
          characterTip: { characterId: 'robo', tipText: '"Oleh karena itu" menarik kesimpulan akibat dari sebab sebelumnya.' },
        },
        {
          id: 'b5e-q6',
          questionText: 'Kalimat sanggahan yang disampaikan dengan santun saat diskusi buku di kelas adalah...',
          options: [
            'Pendapatmu itu salah total dan tidak masuk akal!',
            'Saya sependapat dengan bagian alur ceritanya, namun izinkan saya menyampaikan sudut pandang berbeda mengenai watak tokoh utama.',
            'Diam kamu, biar saya yang bicara!',
            'Tidak ada yang setuju dengan idemu itu.'
          ],
          correctAnswer: 1,
          explanation: 'Menghargai lawan bicara sebelum menyampaikan perbedaan perspektif adalah adab sanggahan yang luhur.',
          characterTip: { characterId: 'lulu', tipText: 'Hargai dulu pendapat teman, lalu sampaikan pandanganmu dengan lembut.' },
        },
        {
          id: 'b5e-q7',
          questionText: 'Bagian "Konteks" dalam teks tanggapan berfungsi untuk...',
          options: [
            'Mengenalkan identitas karya yang akan ditanggapi, seperti judul buku, penulis, dan latar belakang penerbitan',
            'Menghukum penulis yang melakukan kesalahan ketik',
            'Menutup diskusi',
            'Menggambar kartun'
          ],
          correctAnswer: 0,
          explanation: 'Konteks memberikan landasan pengenalan mengenai karya apa yang sedang diulas.',
          characterTip: { characterId: 'robo', tipText: 'Konteks = perkenalan karya apa yang sedang dibahas!' },
        },
        {
          id: 'b5e-q8',
          questionText: 'Perbedaan mendasar antara kritik yang membangun (konstruktif) dan celaan (hinaan) adalah...',
          options: [
            'Kritik membangun berpijak pada fakta dan disertai alasan serta solusi, sedangkan celaan menyerang pribadi dengan kata kasar',
            'Kritik membangun selalu menggunakan bahasa daerah',
            'Celaan selalu menghasilkan karya baru',
            'Keduanya sama persis tanpa beda'
          ],
          correctAnswer: 0,
          explanation: 'Kritik konstruktif bertujuan memajukan mutu karya, bukan merendahkan martabat pengarang.',
          characterTip: { characterId: 'tyro', tipText: 'Kritik membangun memberi solusi, bukan mencaci maki!' },
        },
        {
          id: 'b5e-q9',
          questionText: 'Cermati kutipan: "Meskipun buku ini ditujukan untuk anak usia 10 tahun, pesan pelestarian alam di dalamnya SANGAT RELEVAN direnungkan oleh pembaca dewasa." Kata "sangat relevan" menunjukkan ungkapan...',
          options: ['Penilaian apresiasi keunggulan karya', 'Kutukan terhadap buku', 'Kesalahan tata bahasa', 'Rasa putus asa'],
          correctAnswer: 0,
          explanation: 'Menyatakan bahwa pesan buku sangat relevan bagi segala usia adalah bentuk apresiasi keunggulan karya.',
          characterTip: { characterId: 'monk', tipText: 'Menilai bahwa pesannya luar biasa bermanfaat untuk semua usia!' },
        },
        {
          id: 'b5e-q10',
          questionText: 'Dalam menulis teks tanggapan, kata emotif yang berlebihan seperti "karya terjelek sepanjang sejarah peradaban manusia" harus dihindari karena...',
          options: [
            'Bersifat subjektif ekstrem, tidak adil, tidak ilmiah, dan melanggar etika kesantunan berbahasa',
            'Halaman kertas bisa terbakar',
            'Dilarang oleh aturan tanda baca',
            'Membuat tulisan terlalu indah'
          ],
          correctAnswer: 0,
          explanation: 'Penilaian kritis harus mengedepankan objektivitas berbasis bukti tekstual, bukan emosi amarah.',
          characterTip: { characterId: 'robo', tipText: 'Gunakan argumen objektif berbasis fakta, bukan luapan emosi berlebihan!' },
        },
      ],
    },
  ],
};

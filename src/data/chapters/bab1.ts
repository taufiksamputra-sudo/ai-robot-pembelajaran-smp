import { Chapter } from '../curriculumTypes';

export const BAB_1: Chapter = {
  id: 'bab-1',
  number: 'Bab I',
  title: 'Jelajah Nusantara',
  islandName: 'Kepulauan Jelajah Nusantara',
  themeColor: '#0284c7',
  badgeGradient: 'from-sky-500 to-blue-600',
  icon: '🌴',
  description: 'Mengarungi pesona alam dan budaya nusantara melalui keindahan teks deskripsi yang memikat panca indra.',
  subChapters: [
    {
      id: 'bab1-a',
      code: 'A',
      title: 'Memahami Isi Teks Deskripsi',
      summary: 'Mengenal tujuan, objek, dan ciri isi teks deskripsi yang menggambarkan suatu objek secara rinci dan konkret.',
      buddyGuideId: 'tyro',
      materialSections: [
        {
          heading: 'Pengertian & Tujuan Teks Deskripsi',
          body: 'Teks deskripsi adalah teks yang melukiskan atau menggambarkan suatu objek (tempat, benda, orang, atau suasana) secara rinci dan jelas, sehingga pembaca seolah-olah melihat, mendengar, merasakan, atau mengalami sendiri objek yang dideskripsikan.',
          example: '"Pantai Parangtritis di kala senja memancarkan kilau keemasan. Deburan ombak putih berkejaran membasahi butiran pasir hitam yang halus."',
          keyRule: 'Tujuan utama: Mengajak pembaca merasakan pengalaman indrawi yang sama seperti penulis.',
        },
        {
          heading: 'Ciri-Ciri Teks Deskripsi',
          body: '1. Menggambarkan objek khusus atau personal.\n2. Bersifat fisik/indrawi (melibatkan mata, telinga, kulit, hidung).\n3. Banyak memuat kata sifat dan kalimat perincian.\n4. Membangkitkan kesan emosional (kagum, nyaman, syahdu).',
          example: 'Bukan sekadar "Gunung Bromo indah", tetapi "Kabut tipis menyelimuti kawah Bromo yang mengepulkan asap putih ke langit fajar."',
        },
      ],
      questions: [
        {
          id: 'b1a-q1',
          questionText: 'Apakah tujuan utama dari penulisan teks deskripsi?',
          options: [
            'Menjelaskan langkah-langkah membuat sesuatu',
            'Menggambarkan objek sehingga pembaca seolah melihat dan merasakannya',
            'Menyampaikan pendapat untuk meyakinkan pembaca dalam perdebatan',
            'Menceritakan rentetan peristiwa sejarah secara kronologis'
          ],
          correctAnswer: 1,
          explanation: 'Tujuan teks deskripsi adalah menggambarkan objek secara konkret dan rinci agar pembaca seolah melihat, mendengar, dan merasakan sendiri.',
          characterTip: { characterId: 'tyro', tipText: 'Ingat kata kuncinya: "Melukiskan dengan kata-kata"!' },
        },
        {
          id: 'b1a-q2',
          questionText: 'Manakah dari kalimat berikut yang paling mencerminkan ciri teks deskripsi yang melibatkan indra penglihatan?',
          passageSnippet: 'Pagi itu di Lembah Harau, tebing-tebing granit berdiri kokoh menjulang berwarna kelabu kemerahan disinari fajar keemasan.',
          options: [
            'Lembah Harau sangat terkenal di kalangan para wisatawan.',
            'Tebing granit berdiri kokoh berwarna kelabu kemerahan disinari fajar keemasan.',
            'Banyak orang mengatakan berlibur ke sana sangat mengasyikkan.',
            'Wisatawan sebaiknya membawa bekal yang cukup saat mendaki.'
          ],
          correctAnswer: 1,
          explanation: 'Kalimat tersebut memuat citraan penglihatan yang sangat spesifik (tebing granit, kelabu kemerahan, fajar keemasan).',
          characterTip: { characterId: 'liling', tipText: 'Perhatikan warna dan bentuk fisik objek yang digambarkan!' },
        },
        {
          id: 'b1a-q3',
          questionText: 'Objek yang dideskripsikan dalam teks deskripsi umumnya bersifat...',
          options: [
            'Umum dan abstrak tanpa batas',
            'Khusus dan personal sesuai sudut pandang penulis',
            'Fiktif mutlak tanpa kaitan dengan dunia nyata',
            'Hanya terbatas pada makhluk hidup'
          ],
          correctAnswer: 1,
          explanation: 'Objek teks deskripsi bersifat khusus (spesifik), misalnya mendeskripsikan "Kucingku Si Belang", bukan sekadar kucing secara umum biologi.',
          characterTip: { characterId: 'agogo', tipText: 'Agogo mengamati satu objek khusus, bukan semua hal sekaligus!' },
        },
        {
          id: 'b1a-q4',
          questionText: 'Cermati kutipan: "Aroma tanah basah tersiram hujan pertama menyapa penciuman saat kami melangkah di kebun teh." Kutipan tersebut melibatkan citra indra...',
          options: [
            'Penglihatan (visual)',
            'Penciuman (pembau)',
            'Pendengaran (auditif)',
            'Perabaan (taktil)'
          ],
          correctAnswer: 1,
          explanation: 'Frasa "Aroma tanah basah... menyapa penciuman" secara langsung melibatkan indra penciuman.',
          characterTip: { characterId: 'lulu', tipText: 'Aroma wangi atau bau tanah basah (petrikor) selalu terasa lewat hidung!' },
        },
        {
          id: 'b1a-q5',
          questionText: 'Manakah topik yang paling tepat untuk dikembangkan menjadi teks deskripsi keindahan nusantara?',
          options: [
            'Cara Memasak Rendang Daging Khas Padang yang Empuk',
            'Sejarah Terbentuknya Kerajaan Majapahit di Abad ke-13',
            'Pesona Gradasi Air Laut dan Terumbu Karang di Raja Ampat',
            'Mengapa Sampah Plastik Menjadi Ancaman Ekosistem Laut'
          ],
          correctAnswer: 2,
          explanation: 'Pesona Raja Ampat adalah objek fisik tempat yang kaya visual dan indrawi, sangat pas untuk teks deskripsi.',
          characterTip: { characterId: 'monk', tipText: 'Pilih yang melukiskan keindahan pemandangan ya!' },
        },
        {
          id: 'b1a-q6',
          questionText: 'Perasaan yang biasanya diharapkan timbul dalam diri pembaca setelah membaca teks deskripsi tentang tempat wisata nusantara adalah...',
          options: [
            'Kekhawatiran dan rasa was-was mendalam',
            'Kekaguman, rasa bangga, dan ketertarikan untuk mengunjungi',
            'Keinginan untuk memperdebatkan kebenaran teks',
            'Keraguan terhadap keberadaan tempat tersebut'
          ],
          correctAnswer: 1,
          explanation: 'Teks deskripsi tempat wisata bertujuan membangkitkan rasa kagum, cinta tanah air, dan daya tarik wisata.',
          characterTip: { characterId: 'tyro', tipText: 'Bikin kita bangga sama keindahan Indonesia!' },
        },
        {
          id: 'b1a-q7',
          questionText: 'Kalimat berikut yang TIDAK termasuk kalimat deskripsi adalah...',
          options: [
            'Air terjun Coban Rondo mengalir deras dari tebing setinggi 84 meter.',
            'Dinding gua itu dipenuhi stalaktit runcing yang meneteskan air jernih.',
            'Untuk pergi ke lokasi ini, beloklah ke kiri lalu jalan 500 meter lagi.',
            'Hamparan pasir putih membentang sejauh mata memandang di Pantai Nihiwatu.'
          ],
          correctAnswer: 2,
          explanation: '"Beloklah ke kiri lalu jalan 500 meter" adalah kalimat petunjuk/prosedur, bukan melukiskan rincian fisik objek.',
          characterTip: { characterId: 'liling', tipText: 'Cari yang isinya petunjuk arah atau perintah, itu bukan deskripsi!' },
        },
        {
          id: 'b1a-q8',
          questionText: 'Dalam teks deskripsi, perincian objek berfungsi untuk...',
          options: [
            'Membuat tulisan menjadi sangat panjang dan tebal',
            'Menghadirkan gambaran nyata sehingga objek tidak ambigu atau samar',
            'Membingungkan pembaca dengan istilah-istilah rumit',
            'Mengganti fakta dengan imajinasi liar yang tidak logis'
          ],
          correctAnswer: 1,
          explanation: 'Perincian berfungsi memperjelas objek agar pembaca mendapatkan gambaran yang utuh dan jelas.',
          characterTip: { characterId: 'agogo', tipText: 'Makin detail perinciannya, makin jelas kita bayangkan!' },
        },
        {
          id: 'b1a-q9',
          questionText: 'Kutipan: "Angin sepoi-sepoi membelai lembut kulit para pelancong yang duduk di gazebo bambu." Citraan indra pada kalimat ini adalah...',
          options: [
            'Pengecapan',
            'Perabaan',
            'Pendengaran',
            'Penglihatan semata'
          ],
          correctAnswer: 1,
          explanation: 'Frasa "membelai lembut kulit" melibatkan indra perabaan (kulit/taktil).',
          characterTip: { characterId: 'lulu', tipText: 'Sentuhan angin pada kulit adalah perabaan.' },
        },
        {
          id: 'b1a-q10',
          questionText: 'Perbedaan mendasar antara teks deskripsi dan teks laporan hasil observasi (LHO) adalah...',
          options: [
            'Teks deskripsi melukiskan objek secara personal dan mendalam, sedangkan LHO bersifat ilmiah umum',
            'Teks deskripsi hanya boleh ditulis dalam bentuk bait pantun',
            'LHO menggunakan bahasa kiasan, sedangkan deskripsi selalu kaku',
            'Teks deskripsi tidak boleh memuat fakta sama sekali'
          ],
          correctAnswer: 0,
          explanation: 'Teks deskripsi memuat kesan personal dan kaya indrawi, sedangkan LHO mendeskripsikan objek secara klasifikasi ilmiah objektif.',
          characterTip: { characterId: 'robo', tipText: 'Deskripsi itu personal & emosional, LHO itu klasifikasi ilmiah!' },
        },
      ],
    },
    {
      id: 'bab1-b',
      code: 'B',
      title: 'Memahami Unsur Bahasa dalam Teks Deskripsi',
      summary: 'Menguasai kata konkret, kalimat perincian, majas personifikasi & metafora, kata sifat, serta penulisan kata berimbuhan meN-.',
      buddyGuideId: 'liling',
      materialSections: [
        {
          heading: 'Kata Konkret & Kalimat Perincian',
          body: 'Kata konkret adalah kata yang acuannya dapat diserap oleh panca indra (bukan kata abstrak). Contoh kata konkret: "karang terjal", "pasir putih berkilau", "pohon beringin rindang".\nKalimat perincian menjelaskan kata umum menjadi lebih spesifik.',
          example: 'Kata umum: "Ibuku sangat baik." -> Kalimat perincian: "Beliau selalu tersenyum ramah menyapa tetangga dan sabar mendengarkan keluh kesah kami."',
        },
        {
          heading: 'Majas Personifikasi & Metafora',
          body: 'Majas Personifikasi: Mengumpamakan benda mati seolah-olah memiliki sifat atau bertindak seperti manusia hidup (contoh: "Ombak berkejar-kejaran menyapa bibir pantai").\nMajas Metafora: Membandingkan dua hal secara langsung tanpa kata pembanding (contoh: "Candi Borobudur adalah mahakarya abadi").',
          keyRule: 'Rumus meN- + k/t/s/p: Huruf k, t, s, p akan luluh jika diikuti huruf vokal (contoh: meN- + sapu -> menyapu; meN- + pesona -> mempesona salah, yang benar memesona).',
        },
      ],
      questions: [
        {
          id: 'b1b-q1',
          questionText: 'Kalimat berikut yang mengandung majas personifikasi adalah...',
          options: [
            'Hawa dingin menusuk hingga ke sumsum tulang.',
            'Nyiur melambai-lambai di tepi pantai seolah memanggil kami pulang.',
            'Batu karang itu sangat keras seperti baja.',
            'Raja Ampat adalah surga tersembunyi di timur Indonesia.'
          ],
          correctAnswer: 1,
          explanation: 'Nyiur (pohon kelapa) yang "melambai-lambai seolah memanggil" mengumpamakan benda mati bersikap seperti manusia (personifikasi).',
          characterTip: { characterId: 'liling', tipText: 'Personifikasi = benda bertingkah laku layaknya manusia!' },
        },
        {
          id: 'b1b-q2',
          questionText: 'Manakah bentuk kata berimbuhan meN- yang BENAR sesuai kaidah peluluhan fonem K, T, S, P?',
          options: [
            'Mempersonakan',
            'Memesona',
            'Mempesona',
            'Menpesona'
          ],
          correctAnswer: 1,
          explanation: 'Kata dasar "pesona" berawalan P diikuti huruf vokal E, sehingga huruf P luluh menjadi "memesona".',
          characterTip: { characterId: 'liling', tipText: 'K, T, S, P yang bertemu vokal wajib luluh! Jadi "memesona", bukan "mempesona"!' },
        },
        {
          id: 'b1b-q3',
          questionText: 'Manakah contoh pasangan kata umum dan kalimat perincian yang tepat?',
          options: [
            'Kata umum: "Pemandangan indah." -> Perincian: "Air laut berwarna pirus jernih dan terumbu karang beraneka warna tampak jelas."',
            'Kata umum: "Makanan enak." -> Perincian: "Harganya sangat mahal sekali."',
            'Kata umum: "Orang pintar." -> Perincian: "Dia suka bermain layang-layang di lapangan."',
            'Kata umum: "Buku tebal." -> Perincian: "Bukunya dibeli kemarin sore."'
          ],
          correctAnswer: 0,
          explanation: 'Air laut berwarna pirus dan terumbu karang warna-warni secara spesifik merinci aspek "keindahan pemandangan".',
          characterTip: { characterId: 'tyro', tipText: 'Perincian harus benar-benar menjelaskan wujud keindahannya!' },
        },
        {
          id: 'b1b-q4',
          questionText: 'Di antara kata-kata berikut, manakah yang merupakan KATA KONKRET?',
          options: [
            'Keadilan',
            'Kedamaian',
            'Batu karang',
            'Keberanian'
          ],
          correctAnswer: 2,
          explanation: '"Batu karang" dapat dilihat dan diraba secara fisik indrawi, sedangkan keadilan, kedamaian, dan keberanian adalah kata konsep abstrak.',
          characterTip: { characterId: 'agogo', tipText: 'Batu karang bisa dipegang tangan Agogo, jadi konkret!' },
        },
        {
          id: 'b1b-q5',
          questionText: 'Cermati kalimat: "Gunung Sinabung memuntahkan abu vulkanik pekat ke angkasa raya." Kalimat ini menggunakan majas...',
          options: [
            'Hiperbola berlebihan',
            'Personifikasi',
            'Asosiasi',
            'Litotes merendah'
          ],
          correctAnswer: 1,
          explanation: 'Kata "memuntahkan" adalah tindakan manusia/makhluk hidup yang dilekatkan pada gunung (personifikasi).',
          characterTip: { characterId: 'lulu', tipText: 'Gunung bertindak seperti makhluk yang memuntahkan sesuatu.' },
        },
        {
          id: 'b1b-q6',
          questionText: 'Bentuk berimbuhan meN- dari kata dasar "tiup" yang benar adalah...',
          options: [
            'Mentiup',
            'Meniup',
            'Menyiup',
            'Mengtiup'
          ],
          correctAnswer: 1,
          explanation: 'Huruf T pada "tiup" bertemu vokal I sehingga luluh menjadi "meniup".',
          characterTip: { characterId: 'liling', tipText: 'Huruf T luluh menjadi N: meN- + tiup = meniup.' },
        },
        {
          id: 'b1b-q7',
          questionText: 'Kelompok kata di bawah ini yang semuanya tergolong KATA SIFAT (adjektiva) adalah...',
          options: [
            'Jernih, kokoh, sejuk, ramah',
            'Berlari, menyanyi, melompat, duduk',
            'Pantai, gunung, danau, sungai',
            'Dengan, dari, ke, pada'
          ],
          correctAnswer: 0,
          explanation: 'Jernih, kokoh, sejuk, dan ramah merupakan kata sifat yang mendeskripsikan keadaan objek.',
          characterTip: { characterId: 'monk', tipText: 'Kata sifat bisa diawali "sangat", misalnya: sangat jernih, sangat sejuk!' },
        },
        {
          id: 'b1b-q8',
          questionText: 'Kalimat: "Senyum gadis desa itu semanis madu hutan." Kalimat ini menggunakan majas perbandingan...',
          options: [
            'Simile (perumpamaan berpenanda kata pembanding "semanis")',
            'Ironi sindiran',
            'Personifikasi',
            'Sinekdoke pars pro toto'
          ],
          correctAnswer: 0,
          explanation: 'Adanya kata pembanding "semanis" (seperti/bagai/laksana) menandai majas asosiasi/simile.',
          characterTip: { characterId: 'lulu', tipText: 'Ada kata "semanis" yang membandingkan senyum dengan madu.' },
        },
        {
          id: 'b1b-q9',
          questionText: 'Imbuhan meN- pada kata "menguning" bermakna...',
          options: [
            'Menjadi seperti atau berwarna kuning',
            'Membuat orang lain marah',
            'Mencari benda kuning',
            'Membeli barang kuning'
          ],
          correctAnswer: 0,
          explanation: 'Padi yang menguning berarti padi yang berubah menjadi berwarna kuning.',
          characterTip: { characterId: 'agogo', tipText: 'Padi di sawah menjadi kuning saat panen tiba!' },
        },
        {
          id: 'b1b-q10',
          questionText: 'Manakah penulisan kata dasar berawalan K yang luluh dengan benar?',
          options: [
            'meN- + kristal -> mengkristal (tidak luluh karena gugus konsonan kr)',
            'meN- + kirim -> mengkirim',
            'meN- + kejar -> mengkejar',
            'meN- + kunci -> mengkunci'
          ],
          correctAnswer: 0,
          explanation: 'Kata yang berawalan konsonan ganda (kristal, kritik, produksi, transfer) TIDAK luluh: mengkristal, mengkritik, memproduksi.',
          characterTip: { characterId: 'robo', tipText: 'Pengecualian penting: jika huruf kedua adalah konsonan (kr, pr, tr), tidak luluh!' },
        },
      ],
    },
    {
      id: 'bab1-c',
      code: 'C',
      title: 'Menganalisis Teks Deskripsi dalam Sajian Visual',
      summary: 'Mengevaluasi kesesuaian antara gambar, infografis, warna, dan teks deskripsi pemandangan nusantara.',
      buddyGuideId: 'agogo',
      materialSections: [
        {
          heading: 'Peran Sajian Visual dalam Teks Deskripsi',
          body: 'Sajian visual seperti foto resolusi tinggi, infografis peta wisata, ikon, dan palet warna memperkuat daya imajinasi pembaca. Teks deskripsi yang baik saling melengkapi dengan gambar pengiringnya.',
          example: 'Sebuah infografis Candi Prambanan menyajikan foto relief candi disertai kotak teks deskripsi tentang ukiran kisah Ramayana.',
        },
        {
          heading: 'Menilai Keselarasan Visual dan Teks',
          body: '1. Apakah gambar sesuai dengan isi deskripsi?\n2. Apakah tata letak (layout) memudahkan mata pembaca menyerap informasi?\n3. Apakah perpaduan warna teks dan latar belakang memiliki kontras yang nyaman dibaca?',
        },
      ],
      questions: [
        {
          id: 'b1c-q1',
          questionText: 'Fungsi utama penyertaan foto atau infografis pada brosur wisata teks deskripsi adalah...',
          options: [
            'Mempertegas dan memverifikasi gambaran nyata objek yang dideskripsikan',
            'Menghabiskan ruang kosong pada kertas cetak',
            'Menggantikan seluruh teks sehingga pembaca tidak perlu membaca',
            'Membuat harga tiket wisata menjadi lebih mahal'
          ],
          correctAnswer: 0,
          explanation: 'Visual mempertegas dan membuktikan keaslian deskripsi kata-kata yang dituliskan.',
          characterTip: { characterId: 'agogo', tipText: 'Gambar bikin Agogo langsung paham bentuk aslinya!' },
        },
        {
          id: 'b1c-q2',
          questionText: 'Jika teks mendeskripsikan "lembutnya pasir merah muda di Pink Beach Pulau Komodo", visual yang paling selaras adalah...',
          options: [
            'Foto monokrom hitam putih tebing karang',
            'Foto jarak dekat butiran pasir bersemu merah muda tersapu ombak bening',
            'Peta rute penerbangan pesawat komersial',
            'Diagram batang jumlah pengunjung tahun lalu'
          ],
          correctAnswer: 1,
          explanation: 'Foto close-up pasir merah muda dan air bening selaras dengan perincian teks.',
          characterTip: { characterId: 'lulu', tipText: 'Visual harus cocok dengan detail yang sedang diceritakan.' },
        },
        {
          id: 'b1c-q3',
          questionText: 'Dalam infografis deskriptif, aspek tipografi yang baik adalah...',
          options: [
            'Menggunakan 10 jenis huruf berbeda dalam satu paragraf',
            'Ukuran judul lebih menonjol dan teks isi mudah terbaca dengan kontras yang cukup',
            'Warna tulisan kuning di atas latar belakang putih terang',
            'Teks ditulis rapat-rapat tanpa spasi'
          ],
          correctAnswer: 1,
          explanation: 'Hierarki tipografi yang baik memiliki kontras tinggi dan ukuran judul proporsional agar mudah dibaca.',
          characterTip: { characterId: 'liling', tipText: 'Judul harus jelas, warna tulisan tidak boleh samar dengan latar!' },
        },
        {
          id: 'b1c-q4',
          questionText: 'Kelebihan teks deskripsi yang disajikan dalam media digital interaktif dibandingkan buku cetak konvensional adalah...',
          options: [
            'Dapat dilengkapi audio suara alam, video 360 derajat, dan peta dinamis',
            'Pasti bebas dari kesalahan ketik selamanya',
            'Tidak memerlukan listrik sama sekali',
            'Bisa dibaca tanpa layar gadget'
          ],
          correctAnswer: 0,
          explanation: 'Media digital memperkaya pengalaman indrawi dengan audio, video, dan interaktivitas.',
          characterTip: { characterId: 'robo', tipText: 'Media digital bisa memadukan suara deburan ombak dan animasi!' },
        },
        {
          id: 'b1c-q5',
          questionText: 'Jika sebuah foto menampilkan suasana pasar terapung Banjarmasin yang padat dengan perahu jukung, kalimat deskripsi visual yang tepat adalah...',
          options: [
            'Puluhan perahu kayu jukung sarat buah pisang dan sayuran segar saling bersenggolan di riak Sungai Martapura.',
            'Pasar modern ini memiliki eskalator dan pendingin ruangan yang sangat dingin.',
            'Semua pedagang di sana menggunakan mobil bak terbuka.',
            'Tidak terlihat satu pun perahu di atas perairan sungai itu.'
          ],
          correctAnswer: 0,
          explanation: 'Kalimat pertama mendeskripsikan secara tepat isi foto pasar terapung.',
          characterTip: { characterId: 'tyro', tipText: 'Cocokkan detail perahu jukung dan suasananya!' },
        },
        {
          id: 'b1c-q6',
          questionText: 'Komposisi warna yang hangat (oranye, kuning keemasan, merah lembut) pada visual deskripsi paling cocok melukiskan suasana...',
          options: [
            'Malam gulita di hutan belantara yang dingin',
            'Matahari terbit (sunrise) atau terbenam (sunset) di pantai',
            'Badai salju di puncak gunung Jayawijaya',
            'Kedalaman palung laut tanpa cahaya'
          ],
          correctAnswer: 1,
          explanation: 'Warna hangat merepresentasikan cahaya mentari senja atau fajar.',
          characterTip: { characterId: 'monk', tipText: 'Kuning keemasan dan jingga itu warna khas senja pantai!' },
        },
        {
          id: 'b1c-q7',
          questionText: 'Unsur visual berupa "garis penunjuk / label" pada gambar anatomi Rumah Adat Tongkonan Toraja berfungsi untuk...',
          options: [
            'Menutupi bagian rumah yang rusak',
            'Menghubungkan nama bagian atap dan ukiran dinding dengan wujud fisiknya',
            'Membuat gambar terlihat seperti peta rahasia',
            'Mengurangi keindahan arsitektur aslinya'
          ],
          correctAnswer: 1,
          explanation: 'Label penunjuk memudahkan pembaca mengenali nama bagian bangunan tradisional secara presisi.',
          characterTip: { characterId: 'agogo', tipText: 'Label garis membantu kita tahu mana atap perahu dan mana ukirannya!' },
        },
        {
          id: 'b1c-q8',
          questionText: 'Pernyataan yang TIDAK tepat mengenai hubungan teks dan visual dalam teks deskripsi adalah...',
          options: [
            'Visual bertindak sebagai pelengkap yang menegaskan teks deskripsi',
            'Teks dan visual harus saling bertentangan agar pembaca bingung menebak',
            'Keterangan gambar (caption) membantu pembaca memahami konteks foto',
            'Tata letak yang rapi meningkatkan kenyamanan membaca'
          ],
          correctAnswer: 1,
          explanation: 'Teks dan visual justru harus saling menguatkan, tidak boleh bertentangan.',
          characterTip: { characterId: 'liling', tipText: 'Jangan sampai teks bilang pantai pasir putih tapi fotonya gurun salju!' },
        },
        {
          id: 'b1c-q9',
          questionText: 'Caption (keterangan foto) yang efektif untuk foto Danau Toba adalah...',
          options: [
            'Gambar 1: Danau air tawar terbesar di Asia Tenggara dengan Pulau Samosir di tengahnya dinaungi langit cerah.',
            'Gambar 1: Air.',
            'Gambar 1: Jangan dilihat terlalu lama nanti lelah.',
            'Gambar 1: Beli tiket sekarang juga sebelum habis.'
          ],
          correctAnswer: 0,
          explanation: 'Caption yang informatif memuat nama objek dan rincian penting yang tampak pada foto.',
          characterTip: { characterId: 'robo', tipText: 'Caption harus ringkas, padat, dan memperjelas foto!' },
        },
        {
          id: 'b1c-q10',
          questionText: 'Ketika menganalisis sajian visual infografis, pembaca yang kritis akan memperhatikan...',
          options: [
            'Hanya ukuran gambar yang paling besar saja',
            'Kebenaran sumber data foto, kejelasan teks, serta keselarasan makna keseluruhan',
            'Berapa jumlah like yang didapatkan di media sosial',
            'Warna bingkai pigura yang dipasang'
          ],
          correctAnswer: 1,
          explanation: 'Analisis kritis menilai akurasi sumber, kejelasan pesan, dan keharmonisan antara teks dan visual.',
          characterTip: { characterId: 'tyro', tipText: 'Jadilah penjelajah kritis yang memeriksa fakta dan sumbernya!' },
        },
      ],
    },
    {
      id: 'bab1-d',
      code: 'D',
      title: 'Menganalisis Informasi Lisan',
      summary: 'Menyimak rekaman audio atau tuturan lisan tentang objek wisata nusantara serta mencatat gagasan pokok dan rinciannya.',
      buddyGuideId: 'lulu',
      materialSections: [
        {
          heading: 'Keterampilan Menyimak Kritis',
          body: 'Menyimak deskripsi lisan membutuhkan fokus pada intonasi penutur, tempo bicara, serta kata-kata kunci indrawi yang diucapkan. Siswa dilatih mencatat apa objeknya, di mana lokasinya, bagaimana suasananya, dan daya tarik utamanya.',
        },
        {
          heading: 'Strategi 5W: Mencatat Deskripsi Lisan',
          body: '1. Objek apa yang diceritakan penutur?\n2. Di mana letak geografisnya?\n3. Indra apa yang paling ditekankan penutur (suara deburan, semerbak bunga, sejuknya angin)?\n4. Kesan apa yang ingin disampaikan penutur?',
        },
      ],
      questions: [
        {
          id: 'b1d-q1',
          questionText: 'Langkah pertama yang harus dilakukan saat menyimak teks deskripsi lisan adalah...',
          options: [
            'Langsung menyela dan mendebat pembicara',
            'Fokus mendengarkan dan mencatat kata kunci nama objek serta ciri-cirinya',
            'Menghafal setiap kata tanpa memahami artinya',
            'Menutup telinga dan membayangkan hal lain'
          ],
          correctAnswer: 1,
          explanation: 'Fokus menyimak dan mencatat kata kunci adalah kunci utama menangkap informasi lisan.',
          characterTip: { characterId: 'lulu', tipText: 'Dengarkan baik-baik dengan konsentrasi penuh.' },
        },
        {
          id: 'b1d-q2',
          questionText: 'Simak kalimat lisan ini: "Begitu fajar menyingsing, kabut perlahan terangkat menyingkapkan gugusan Pulau Wayag yang menyerupai zamrud di atas permadani samudra." Apa gagasan pokok tuturan tersebut?',
          options: [
            'Harga perahu sewa di Papua sangat mahal',
            'Keindahan panorama fajar di gugusan Pulau Wayag yang menghijau seperti zamrud',
            'Cara menghindari kabut tebal saat berlayar',
            'Waktu terbaik menambang batu zamrud di pulau'
          ],
          correctAnswer: 1,
          explanation: 'Tuturan menggambarkan terungkapnya pesona gugusan Pulau Wayag saat kabut fajar terangkat.',
          characterTip: { characterId: 'liling', tipText: 'Zamrud itu batu permata hijau, melambangkan pulau yang hijau subur!' },
        },
        {
          id: 'b1d-q3',
          questionText: 'Intonasi suara seorang pemandu wisata saat mendeskripsikan tempat yang sakral dan hening sebaiknya...',
          options: [
            'Berteriak histeris dan tergesa-gesa',
            'Tenang, syahdu, penuh rasa hormat, dan tertata',
            'Monoton tanpa nada sama sekali seperti robot rusak',
            'Tertawa terbahak-bahak sepanjang penjelasan'
          ],
          correctAnswer: 1,
          explanation: 'Intonasi harus disesuaikan dengan suasana objek yang dideskripsikan.',
          characterTip: { characterId: 'agogo', tipText: 'Kalau tempatnya hening, suara pemandu juga harus lembut dan takzim.' },
        },
        {
          id: 'b1d-q4',
          questionText: 'Dalam menyimak deskripsi lisan, kata-kata seperti "di sebelah kanan", "melangkah lima meter ke depan", dan "tepat di hadapan kita" berfungsi sebagai...',
          options: [
            'Penanda kata makian',
            'Penanda rincian spasial (tata ruang dan arah)',
            'Kata penghubung antarparagraf sejarah',
            'Kata penutup pidato formal'
          ],
          correctAnswer: 1,
          explanation: 'Penanda spasial membantu pendengar memetakan tata letak objek dalam imajinasinya.',
          characterTip: { characterId: 'monk', tipText: 'Itu petunjuk kompas di mana posisi objek berada!' },
        },
        {
          id: 'b1d-q5',
          questionText: 'Ciri seorang pendengar yang aktif dan santun saat menyimak deskripsi lisan teman di depan kelas adalah...',
          options: [
            'Bermain game di ponsel sembunyi-sembunyi',
            'Menatap pembicara, menyimak runtutan deskripsi, dan memberikan apresiasi',
            'Memotong kalimat sebelum teman selesai berbicara',
            'Mengobrol dengan teman sebangku tentang hal lain'
          ],
          correctAnswer: 1,
          explanation: 'Menatap pembicara dan mencatat poin penting adalah etika menyimak yang santun.',
          characterTip: { characterId: 'tyro', tipText: 'Hargai teman yang sedang tampil dengan mendengarkan sungguh-sungguh!' },
        },
        {
          id: 'b1d-q6',
          questionText: 'Manakah pertanyaan kritis yang tepat diajukan setelah menyimak deskripsi lisan tentang rute pendakian Gunung Rinjani?',
          options: [
            'Mengapa kamu memakai baju warna biru?',
            'Berapa jam rata-rata waktu tempuh dari pos 2 menuju Pelawangan Sembalun?',
            'Apakah kamu kenal dengan semua pendaki di sana?',
            'Bisakah kita membuat gunung baru di sampingnya?'
          ],
          correctAnswer: 1,
          explanation: 'Pertanyaan tentang estimasi waktu tempuh relevan dan memperdalam informasi rute pendakian.',
          characterTip: { characterId: 'robo', tipText: 'Tanyakan rincian penting yang melengkapi deskripsi rute!' },
        },
        {
          id: 'b1d-q7',
          questionText: 'Jika penutur lisan menggunakan jeda (pause) yang agak lama sebelum menyebutkan suatu kata kunci, tujuannya adalah...',
          options: [
            'Karena penutur lupa nama temannya',
            'Memberi penekanan emosional agar pendengar bersiap mengantisipasi hal istimewa',
            'Menunggu bel istirahat sekolah berbunyi',
            'Menandakan bahwa mikrofonnya kehabisan baterai'
          ],
          correctAnswer: 1,
          explanation: 'Jeda dramatik digunakan untuk menarik atensi pendengar pada hal penting berikutnya.',
          characterTip: { characterId: 'lulu', tipText: 'Jeda itu seperti jeda sebelum mengungkapkan kejutan besar!' },
        },
        {
          id: 'b1d-q8',
          questionText: 'Ketika mendengarkan deskripsi bunyi deburan ombak dan gemercik air sungai, indra yang dirangsang adalah...',
          options: [
            'Penciuman',
            'Pendengaran (auditori)',
            'Pengecapan',
            'Perabaan semata'
          ],
          correctAnswer: 1,
          explanation: 'Bunyi deburan ombak dan gemercik air merupakan citraan pendengaran.',
          characterTip: { characterId: 'agogo', tipText: 'Telinga kita yang menangkap suara gemercik air itu.' },
        },
        {
          id: 'b1d-q9',
          questionText: 'Rangkuman hasil menyimak teks deskripsi lisan yang baik harus memuat...',
          options: [
            'Seluruh kalimat yang diucapkan kata demi kata tanpa ada yang diubah',
            'Gagasan pokok objek, perincian fisik utama, dan kesan umum penutur',
            'Komentar pribadi tanpa menyebutkan nama objek yang dibahas',
            'Daftar kata-kata sulit yang tidak diketahui artinya'
          ],
          correctAnswer: 1,
          explanation: 'Rangkuman harus memuat objek utama, detail fisik kunci, dan kesan indrawinya.',
          characterTip: { characterId: 'liling', tipText: 'Tulis intinya saja: objek apa, bagaimana ciri fisiknya, dan apa kesannya.' },
        },
        {
          id: 'b1d-q10',
          questionText: 'Manakah ungkapan simpulan yang tepat setelah menyimak deskripsi tentang Desa Wisata Penglipuran di Bali?',
          options: [
            'Desa Penglipuran terbukti merupakan desa terbersih dengan tata ruang bambu yang asri dan kearifan lokal yang terjaga.',
            'Desa Penglipuran adalah tempat paling berisik yang pernah saya dengar.',
            'Sebaiknya semua rumah di desa itu diganti dengan gedung bertingkat.',
            'Tidak ada hal menarik yang bisa diceritakan dari desa tersebut.'
          ],
          correctAnswer: 0,
          explanation: 'Simpulan tersebut merangkum esensi kebersihan dan tata ruang budaya Penglipuran secara objektif.',
          characterTip: { characterId: 'tyro', tipText: 'Desa Penglipuran memang terkenal sebagai salah satu desa terbersih di dunia!' },
        },
      ],
    },
    {
      id: 'bab1-e',
      code: 'E',
      title: 'Menyunting Teks Deskripsi',
      summary: 'Memperbaiki kesalahan ejaan huruf kapital, tanda baca koma & titik, penulisan kata depan di/ke vs awalan di-/ke-, serta pilihan kata yang tepat.',
      buddyGuideId: 'monk',
      materialSections: [
        {
          heading: 'Pedoman Ejaan Huruf Kapital & Tanda Baca',
          body: '1. Huruf kapital dipakai pada huruf pertama awal kalimat, nama diri geografi (nama pulau, selat, gunung: Danau Toba, Selat Sunda, Gunung Bromo).\nCatatan: Jika bukan nama diri, tidak kapital (contoh: mandi di danau, mendaki gunung).\n2. Tanda koma (,) digunakan untuk memisahkan unsur perincian (contoh: apel, jeruk, dan mangga).',
          example: 'Benar: "Kami berkunjung ke Danau Singkarak di Sumatra Barat."\nSalah: "kami berkunjung ke danau singkarak di sumatra barat."',
        },
        {
          heading: 'Kata Depan vs Awalan (Prefiks)',
          body: 'Kata Depan "di" dan "ke": Menunjukkan arah atau tempat, ditulis TERPISAH (contoh: di pantai, ke Raja Ampat, di atas batu).\nAwalan "di-" dan "ke-": Membentuk kata kerja pasif atau kata bilangan, ditulis SERANGKAI (contoh: dikagumi, ditulis, dilihat, ketiga).',
          keyRule: 'Trik Uji: Jika bisa diganti dengan "ke" atau "dari" (di pasar -> ke pasar), maka itu kata depan dan wajib DIPISAH!',
        },
      ],
      questions: [
        {
          id: 'b1e-q1',
          questionText: 'Manakah penulisan kata depan "di" yang BENAR?',
          options: [
            'Pantai Kuta terletak dikabupaten Badung.',
            'Pantai Kuta terletak di Kabupaten Badung.',
            'Pantai Kuta terletak dikabupaten badung.',
            'Pantai Kuta terletak di-kabupaten Badung.'
          ],
          correctAnswer: 1,
          explanation: '"di" sebagai penunjuk tempat ditulis terpisah, dan nama diri geografi ditulis dengan huruf kapital (Kabupaten Badung).',
          characterTip: { characterId: 'monk', tipText: 'Ingat trik Monk: Tempat = DIPISAH! Nama kota/kabupaten = KAPITAL!' },
        },
        {
          id: 'b1e-q2',
          questionText: 'Manakah kalimat dengan penggunaan huruf kapital yang PALING TEPAT?',
          options: [
            'Kami berlayar menyeberangi selat sunda menuju pulau Sumatra.',
            'Kami berlayar menyeberangi Selat Sunda menuju Pulau Sumatra.',
            'Kami berlayar menyeberangi Selat sunda menuju pulau sumatra.',
            'Kami berlayar menyeberangi selat Sunda menuju Pulau sumatra.'
          ],
          correctAnswer: 1,
          explanation: 'Nama diri geografi yang diikuti nama spesifik wajib diawali huruf kapital: "Selat Sunda" dan "Pulau Sumatra".',
          characterTip: { characterId: 'liling', tipText: 'Selat Sunda dan Pulau Sumatra adalah nama resmi geografi, dua-duanya kapital!' },
        },
        {
          id: 'b1e-q3',
          questionText: 'Cermati kalimat berikut: "Keindahan biota laut Wakatobi sangat dikagumi wisatawan dari berbagai negara." Kata "dikagumi" ditulis serangkai karena...',
          options: [
            'Merupakan kata depan penunjuk tempat',
            'Merupakan kata kerja pasif bentukan awalan di- + kagum',
            'Merupakan kata sifat asli',
            'Merupakan singkatan kata'
          ],
          correctAnswer: 1,
          explanation: '"di-" pada "dikagumi" adalah awalan pembentuk verba pasif, sehingga wajib ditulis serangkai tanpa spasi.',
          characterTip: { characterId: 'robo', tipText: 'Bisa diganti aktif: mengagumi -> dikagumi. Jadi ditulis serangkai!' },
        },
        {
          id: 'b1e-q4',
          questionText: 'Manakah kalimat dengan penggunaan tanda koma (,) perincian yang benar?',
          options: [
            'Taman Nasional Komodo dihuni oleh komodo rusa, babi hutan dan berbagai burung.',
            'Taman Nasional Komodo dihuni oleh komodo, rusa, babi hutan, dan berbagai burung.',
            'Taman Nasional Komodo dihuni oleh, komodo, rusa, babi hutan dan berbagai burung.',
            'Taman Nasional Komodo dihuni oleh komodo, rusa babi hutan, dan berbagai burung.'
          ],
          correctAnswer: 1,
          explanation: 'Unsur perincian tiga atau lebih dipisahkan tanda koma pada setiap unsurnya, termasuk sebelum kata "dan".',
          characterTip: { characterId: 'tyro', tipText: 'Sebelum kata "dan" pada perincian 3 hal atau lebih harus ada tanda koma!' },
        },
        {
          id: 'b1e-q5',
          questionText: 'Perhatikan kalimat: "air terjun tumpak sewu berada di perbatasan lumajang dan malang." Perbaikan huruf kapital yang tepat adalah...',
          options: [
            'Air terjun Tumpak Sewu berada di perbatasan Lumajang dan Malang.',
            'Air Terjun Tumpak Sewu berada di perbatasan Lumajang dan Malang.',
            'Air terjun tumpak sewu berada di perbatasan Lumajang dan malang.',
            'Air Terjun tumpak sewu berada di Perbatasan lumajang dan Malang.'
          ],
          correctAnswer: 1,
          explanation: 'Nama diri alam yang spesifik diawali huruf kapital: "Air Terjun Tumpak Sewu" dan nama kota "Lumajang dan Malang".',
          characterTip: { characterId: 'liling', tipText: 'Semua nama diri geografinya wajib diawali huruf kapital!' },
        },
        {
          id: 'b1e-q6',
          questionText: 'Kalimat berikut yang TIDAK efektif karena pemborosan kata adalah...',
          options: [
            'Pemandangan di puncak Bromo sangat amat indah sekali.',
            'Pemandangan di puncak Bromo sangat indah.',
            'Pemandangan di puncak Bromo indah sekali.',
            'Pemandangan di puncak Bromo memesona.'
          ],
          correctAnswer: 0,
          explanation: '"Sangat amat indah sekali" adalah pleonasme (pemborosan kata berlebihan). Cukup gunakan salah satu: "sangat indah" atau "indah sekali".',
          characterTip: { characterId: 'monk', tipText: 'Pilih salah satu saja, jangan boros kata!' },
        },
        {
          id: 'b1e-q7',
          questionText: 'Manakah penulisan kata turunan gabungan kata yang benar?',
          options: [
            'Mempertanggung jawabkan (salah, harus serangkai)',
            'Mempertanggungjawabkan (benar karena mendapat awalan dan akhiran sekaligus)',
            'Tanggungjawab (salah, harus dipisah)',
            'Ber tanda tangan (salah, harus bertandatangan)'
          ],
          correctAnswer: 1,
          explanation: 'Gabungan kata yang mendapat awalan dan akhiran sekaligus (konfiks me-kan) ditulis serangkai: mempertanggungjawabkan.',
          characterTip: { characterId: 'robo', tipText: 'Diapit awalan & akhiran sekaligus = ditulis serangkai!' },
        },
        {
          id: 'b1e-q8',
          questionText: 'Tanda titik dua (:) digunakan secara tepat pada kalimat...',
          options: [
            'Ibu membeli sayuran: bayam, kangkung, dan wortel.',
            'Wisatawan dapat menikmati tiga aktivitas utama: menyelam, berselancar, dan mendaki bukit.',
            'Di pantai itu terdapat: pasir putih dan karang.',
            'Saya ingin pergi ke: Yogyakarta dan Bali.'
          ],
          correctAnswer: 1,
          explanation: 'Tanda titik dua dipakai pada akhir pernyataan lengkap yang diikuti perincian.',
          characterTip: { characterId: 'agogo', tipText: 'Pernyataan awalnya harus lengkap dulu, baru titik dua dan perincian!' },
        },
        {
          id: 'b1e-q9',
          questionText: 'Penulisan kata baku yang tepat adalah...',
          options: [
            'Objek, fotocopy, ijin',
            'Objek, fotokopi, izin',
            'Obyek, photokopi, ijin',
            'Obyek, fotokopi, idzin'
          ],
          correctAnswer: 1,
          explanation: 'Bentuk baku menurut KBBI adalah: objek (bukan obyek), fotokopi, dan izin (bukan ijin).',
          characterTip: { characterId: 'liling', tipText: 'Baku: objek dan izin dengan huruf Z!' },
        },
        {
          id: 'b1e-q10',
          questionText: 'Suntinglah kalimat ini: "bunga edelweis itu di petik oleh pendaki yang tidak bertanggung jawab." Perbaikan yang benar adalah...',
          options: [
            'Bunga edelweis itu dipetik oleh pendaki yang tidak bertanggung jawab.',
            'Bunga Edelweis itu di petik oleh pendaki yang tidak bertanggungjawab.',
            'Bunga edelweis itu dipetik oleh pendaki yang tidak bertanggungjawab.',
            'bunga edelweis itu dipetik oleh pendaki yang tidak bertanggung jawab.'
          ],
          correctAnswer: 0,
          explanation: 'Awal kalimat kapital ("Bunga"), kata kerja pasif serangkai ("dipetik"), dan gabungan kata tidak berimbuhan utuh dipisah ("tidak bertanggung jawab").',
          characterTip: { characterId: 'tyro', tipText: 'Jangan petik edelweis liar ya! Dan tulis "dipetik" serangkai!' },
        },
      ],
    },
    {
      id: 'bab1-f',
      code: 'F',
      title: 'Menyajikan Teks Deskripsi Sederhana',
      summary: 'Menyusun teks deskripsi secara utuh dengan struktur lengkap: Identifikasi (Deskripsi Umum), Deskripsi Bagian, dan Simpulan/Kesan.',
      buddyGuideId: 'robo',
      materialSections: [
        {
          heading: 'Struktur Teks Deskripsi',
          body: '1. Identifikasi / Deskripsi Umum: Mengenalkan nama objek, lokasi, sejarah singkat, atau gambaran umum pembuka.\n2. Deskripsi Bagian: Merinci bagian-bagian objek secara spesifik (bentuk, warna, suasana, aroma, suara).\n3. Simpulan / Kesan: Penutup yang memuat kesan pribadi, kebanggaan, atau rekomendasi penulis.',
          example: 'Identifikasi: "Pantai Ora terletak di Maluku Tengah..."\nDeskripsi Bagian: "Pondok kayu berdiri terapung di atas air laut sebening kaca..."\nSimpulan: "Pantai Ora sungguh surga tersembunyi yang membanggakan Indonesia."',
        },
        {
          heading: 'Langkah Menulis Teks Deskripsi yang Menarik',
          body: '1. Tentukan objek wisata atau budaya yang ingin ditulis.\n2. Buat kerangka karangan berdasarkan struktur.\n3. Kumpulkan data indrawi (apa yang dilihat, didengar, diraba).\n4. Gunakan kata konkret dan majas personifikasi.\n5. Sunting ejaan sebelum dipublikasikan.',
        },
      ],
      questions: [
        {
          id: 'b1f-q1',
          questionText: 'Urutan struktur teks deskripsi yang baku dan benar adalah...',
          options: [
            'Identifikasi -> Deskripsi Bagian -> Simpulan/Kesan',
            'Orientasi -> Komplikasi -> Resolusi',
            'Tesis -> Argumentasi -> Penegasan Ulang',
            'Tujuan -> Langkah-Langkah -> Penutup'
          ],
          correctAnswer: 0,
          explanation: 'Struktur teks deskripsi adalah Identifikasi (Deskripsi Umum), Deskripsi Bagian, dan Simpulan/Kesan.',
          characterTip: { characterId: 'robo', tipText: 'Ingat rumus: Kenalkan objeknya dulu, rincikan bagiannya, lalu beri kesan penutup!' },
        },
        {
          id: 'b1f-q2',
          questionText: 'Bagian teks deskripsi yang memuat nama objek, lokasi, dan gambaran umum disebut...',
          options: [
            'Deskripsi bagian',
            'Identifikasi (Deskripsi umum)',
            'Simpulan akhir',
            'Koda peristiwa'
          ],
          correctAnswer: 1,
          explanation: 'Identifikasi bertugas mengenalkan identitas objek kepada pembaca di awal tulisan.',
          characterTip: { characterId: 'liling', tipText: 'Identifikasi = identitas awal objek.' },
        },
        {
          id: 'b1f-q3',
          questionText: 'Bacalah kutipan: "Kain tenun ikat Flores ini memiliki corak geometris yang rumit dengan pewarna alami akar mengkudu dan daun nila." Kutipan ini termasuk bagian...',
          options: [
            'Identifikasi awal',
            'Deskripsi bagian',
            'Simpulan penutup',
            'Orientasi tokoh'
          ],
          correctAnswer: 1,
          explanation: 'Kutipan tersebut merinci motif corak dan bahan pewarna kain, yang merupakan deskripsi bagian.',
          characterTip: { characterId: 'agogo', tipText: 'Ini merinci motif dan warna kain tenun secara detail.' },
        },
        {
          id: 'b1f-q4',
          questionText: 'Kutipan penutup: "Mengunjungi Desa Wae Rebo membuat saya menyadari betapa luhurnya warisan leluhur bangsa kita." Kutipan ini tepat diletakkan pada bagian...',
          options: [
            'Identifikasi',
            'Deskripsi bagian',
            'Simpulan / Kesan',
            'Daftar pustaka'
          ],
          correctAnswer: 2,
          explanation: 'Kutipan tersebut mengungkapkan perasaan dan kesan pribadi penulis sebagai penutup.',
          characterTip: { characterId: 'lulu', tipText: 'Kesan dan rasa bangga penulis selalu ada di penutup.' },
        },
        {
          id: 'b1f-q5',
          questionText: 'Dalam menyusun deskripsi bagian tentang sebuah gunung, pola pengembangan spasial yang runtut adalah...',
          options: [
            'Dari kaki gunung, lereng, pos pendakian, hingga puncak kawah',
            'Melompat acak dari puncak ke rumah penjual suvenir lalu ke awan',
            'Menjelaskan nama presiden yang pernah berkunjung saja',
            'Hanya mencatat jumlah tiket masuk yang terjual'
          ],
          correctAnswer: 0,
          explanation: 'Pengembangan spasial bergerak teratur dari bawah ke atas (kaki gunung menuju puncak).',
          characterTip: { characterId: 'tyro', tipText: 'Runtut dari bawah mendaki sampai ke puncak tertinggi!' },
        },
        {
          id: 'b1f-q6',
          questionText: 'Judul teks deskripsi yang paling menarik dan menggugah rasa ingin tahu adalah...',
          options: [
            'Teks Deskripsi Nomor 1',
            'Menyibak Selendang Bidadari di Kawah Ijen',
            'Suatu Tempat yang Berada di Jawa Timur',
            'Makalah Bahasa Indonesia Kelas Tujuh'
          ],
          correctAnswer: 1,
          explanation: '"Menyibak Selendang Bidadari di Kawah Ijen" menggunakan metafora puitis yang sangat memikat.',
          characterTip: { characterId: 'monk', tipText: 'Judul yang puitis dan keren bikin orang langsung mau baca!' },
        },
        {
          id: 'b1f-q7',
          questionText: 'Hal yang harus dihindari saat menulis teks deskripsi adalah...',
          options: [
            'Menggunakan kata konkret',
            'Memasukkan opini perdebatan politik yang keluar dari topik fisik objek',
            'Menggunakan kalimat perincian',
            'Menyelipkan majas personifikasi yang indah'
          ],
          correctAnswer: 1,
          explanation: 'Teks deskripsi fokus melukiskan objek, tidak boleh beralih menjadi teks debat politik.',
          characterTip: { characterId: 'robo', tipText: 'Tetap fokus pada objek keindahan nusantara ya!' },
        },
        {
          id: 'b1f-q8',
          questionText: 'Kutipan: "Tari Kecak Bali dipentaskan di pelataran Pura Uluwatu saat matahari terbenam." Kalimat ini sangat cocok dijadikan bagian...',
          options: [
            'Identifikasi pengantar',
            'Daftar pustaka',
            'Simpulan penutup',
            'Catatan kaki'
          ],
          correctAnswer: 0,
          explanation: 'Kalimat mengenalkan nama tarian, lokasi pementasan, dan waktu secara umum sebagai identifikasi.',
          characterTip: { characterId: 'liling', tipText: 'Ini kalimat pembuka yang memperkenalkan tariannya.' },
        },
        {
          id: 'b1f-q9',
          questionText: 'Agar teks deskripsi yang kita tulis terasa hidup dan berjiwa, teknik yang paling ampuh adalah...',
          options: [
            'Menyalin tulisan orang lain di internet tanpa izin',
            'Menggunakan kata-kata serapan bahasa asing sebanyak mungkin',
            'Melibatkan variasi panca indra (warna, aroma, tekstur, suara) dan majas',
            'Mengulang-ulang satu kata sifat yang sama di setiap baris'
          ],
          correctAnswer: 2,
          explanation: 'Kekayaan indrawi dan majas menjadikan pembaca merasakan langsung objek yang dilukiskan.',
          characterTip: { characterId: 'agogo', tipText: 'Sentuh panca indra: mata, telinga, kulit, hidung!' },
        },
        {
          id: 'b1f-q10',
          questionText: 'Setelah teks deskripsi selesai ditulis, langkah terakhir yang wajib dilakukan sebelum dibagikan adalah...',
          options: [
            'Langsung menghapusnya dari buku catatan',
            'Membaca ulang dan menyunting ejaan, tanda baca, serta keefektifan kalimat',
            'Mengubah judul menjadi nama makanan favorit',
            'Menyobek halaman buku'
          ],
          correctAnswer: 1,
          explanation: 'Menyunting dan memeriksa ulang memastikan teks rapi, baku, dan nyaman dibaca pembaca.',
          characterTip: { characterId: 'lulu', tipText: 'Baca ulang sekali lagi agar tulisanmu sempurna tanpa salah ketik!' },
        },
      ],
    },
  ],
};

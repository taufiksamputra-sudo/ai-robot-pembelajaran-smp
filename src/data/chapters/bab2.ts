import { Chapter } from '../curriculumTypes';

export const BAB_2: Chapter = {
  id: 'bab-2',
  number: 'Bab II',
  title: 'Berkelana di Dunia Imajinasi',
  islandName: 'Kastel Dunia Imajinasi',
  themeColor: '#8b5cf6',
  badgeGradient: 'from-violet-500 to-purple-600',
  icon: '🏰',
  description: 'Menembus batas realitas bersama puisi rakyat warisan leluhur dan kisah petualangan fantasi yang magis.',
  subChapters: [
    {
      id: 'bab2-a',
      code: 'A',
      title: 'Mengenal dan Mengidentifikasi Unsur Puisi Rakyat',
      summary: 'Membedah karakteristik, struktur rima, jumlah suku kata, dan pesan moral dalam Pantun, Syair, dan Gurindam.',
      buddyGuideId: 'lulu',
      materialSections: [
        {
          heading: 'Pantun: Ciri & Struktur',
          body: '1. Terdiri atas 4 baris per bait.\n2. Tiap baris terdiri atas 8-12 suku kata.\n3. Baris 1 & 2 adalah SAMPIRAN (pengantar rima), baris 3 & 4 adalah ISI (makna/nasihat).\n4. Bersajak silang a-b-a-b.',
          example: 'Pohon randu berbuah lebat, (a)\nTumbuh subur di dekat kolam. (b)\nRajin belajar jadilah hebat, (a)\nBudi pekerti teguh mendalam. (b)',
        },
        {
          heading: 'Syair & Gurindam',
          body: 'Syair: 4 baris per bait, semua baris adalah ISI, bersajak a-a-a-a, berisi petuah, kisah sejarah, atau nasihat agama.\nGurindam: 2 baris per bait, bersajak a-a, baris 1 berisi soal/perjanjian, baris 2 berisi jawaban/akibat (sebab-akibat).',
          example: 'Gurindam:\nKurang pikir kurang siasat, (a)\nTentu dirimu kelak tersesat. (a)',
          keyRule: 'Rumus Cepat: Pantun = a-b-a-b (sampiran + isi) | Syair = a-a-a-a (isi semua) | Gurindam = a-a (2 baris sebab-akibat).',
        },
      ],
      questions: [
        {
          id: 'b2a-q1',
          questionText: 'Pola rima akhir yang menjadi ciri khas pantun adalah...',
          options: ['a-a-a-a', 'a-b-a-b', 'a-a-b-b', 'a-b-b-a'],
          correctAnswer: 1,
          explanation: 'Pantun memiliki pola rima akhir silang a-b-a-b.',
          characterTip: { characterId: 'lulu', tipText: 'Sajak pantun silang berselang: baris 1 sama dengan 3, baris 2 sama dengan 4!' },
        },
        {
          id: 'b2a-q2',
          questionText: 'Bagian pantun yang terletak pada baris pertama dan kedua disebut...',
          options: ['Isi', 'Sampiran', 'Amanat', 'Koda'],
          correctAnswer: 1,
          explanation: 'Baris 1 dan 2 pantun adalah sampiran yang menyiapkan rima dan membangkitkan suasana alam.',
          characterTip: { characterId: 'liling', tipText: 'Dua baris atas itu sampiran, dua baris bawah baru isinya!' },
        },
        {
          id: 'b2a-q3',
          questionText: 'Cermati bait berikut:\n"Wahai ananda dengarlah madah,\nIbumu melahirkan susah payah,\nTaati perintah jangan membantah,\nAgar hidupmu beroleh berkah."\nPuisi rakyat di atas tergolong...',
          options: ['Pantun jenaka', 'Syair', 'Gurindam', 'Mantra'],
          correctAnswer: 1,
          explanation: 'Bait ini terdiri atas 4 baris, rima akhir a-a-a-a (madah, payah, membantah, berkah), dan semua baris berisi nasihat (syair).',
          characterTip: { characterId: 'lulu', tipText: 'Empat baris rima sama a-a-a-a dan isinya nasihat panjang, itu syair!' },
        },
        {
          id: 'b2a-q4',
          questionText: 'Ciri utama dari gurindam adalah...',
          options: [
            'Terdiri atas 4 baris dengan rima a-b-a-b',
            'Terdiri atas 2 baris bersajak a-a yang memiliki hubungan sebab-akibat',
            'Bebas tanpa aturan rima dan suku kata',
            'Hanya boleh diucapkan oleh dukun'
          ],
          correctAnswer: 1,
          explanation: 'Gurindam hanya terdiri atas 2 baris sebait, berima a-a, baris 1 sebab/kondisi, baris 2 akibat.',
          characterTip: { characterId: 'agogo', tipText: 'Cuma dua baris berpasangan: baris satu sebab, baris dua akibat!' },
        },
        {
          id: 'b2a-q5',
          questionText: 'Jumlah suku kata yang ideal pada setiap baris pantun adalah...',
          options: ['4 sampai 6 suku kata', '8 sampai 12 suku kata', '15 sampai 20 suku kata', 'Tepat 2 suku kata'],
          correctAnswer: 1,
          explanation: 'Standar suku kata pantun tradisional Melayu/Indonesia adalah 8-12 suku kata per baris.',
          characterTip: { characterId: 'robo', tipText: 'Hitung ketukan suku katanya: biasanya 8 hingga 12 ketukan!' },
        },
        {
          id: 'b2a-q6',
          questionText: 'Lengkapilah sampiran pantun ini agar bersajak tepat:\n"...\n...\nBelajarlah tekun sepanjang hari,\nKelak berguna bagi negeri."',
          options: [
            'Ke pasar beli buah naga,\nJangan lupa beli semangka.',
            'Burung gelatik terbang ke mari,\nHinggap sebentar di dahan turi.',
            'Matahari terbit di waktu pagi,\nKucing melompat tinggi sekali.',
            'Adik menangis mencari ibu,\nMinta dibelikan baju baru.'
          ],
          correctAnswer: 1,
          explanation: 'Isi berakhiran "hari" (-ri) dan "negeri" (-ri), maka sampiran yang cocok berakhiran "mari" (-ri) dan "turi" (-ri).',
          characterTip: { characterId: 'monk', tipText: 'Cari bunyi ujung yang serasi: ma-ri & tu-ri dengan ha-ri & ne-ge-ri!' },
        },
        {
          id: 'b2a-q7',
          questionText: 'Gurindam: "Barang siapa meninggalkan sembahyang, / Tiada beroleh manfaat dan sayang." Pesan yang terkandung adalah...',
          options: [
            'Pentingnya menjaga ibadah salat agar mendapatkan keberkahan dan kasih sayang Tuhan',
            'Orang yang rajin salat pasti kaya raya mendadak',
            'Meninggalkan salat boleh dilakukan saat lelah',
            'Ibadah tidak ada hubungannya dengan kehidupan'
          ],
          correctAnswer: 0,
          explanation: 'Gurindam karya Raja Ali Haji ini menasihati pembaca agar senantiasa mendirikan salat/sembahyang.',
          characterTip: { characterId: 'liling', tipText: 'Ini nasihat moral agama tentang pentingnya kewajiban ibadah.' },
        },
        {
          id: 'b2a-q8',
          questionText: 'Perbedaan paling mencolok antara pantun dan syair terletak pada...',
          options: [
            'Syair punya sampiran, pantun tidak punya',
            'Pantun bersajak a-b-a-b (ada sampiran), sedangkan syair bersajak a-a-a-a (isi semua)',
            'Pantun selalu sedih, syair selalu gembira',
            'Syair berasal dari Eropa, pantun dari Amerika'
          ],
          correctAnswer: 1,
          explanation: 'Syair tidak memiliki sampiran (keempat barisnya adalah isi) dan rimanya a-a-a-a, berbeda dengan pantun.',
          characterTip: { characterId: 'tyro', tipText: 'Pantun = ada sampirannya. Syair = semuanya isi bait cerita!' },
        },
        {
          id: 'b2a-q9',
          questionText: 'Pantun: "Buah cempedak di luar pagar, / Tarik galah tolong jolokkan. / Saya budak baru belajar, / Kalau salah tolong tunjukkan." Pantun ini bertema...',
          options: ['Pantun teka-teki', 'Pantun kiasan jenaka', 'Pantun nasihat kerendahan hati dalam belajar', 'Pantun perniagaan'],
          correctAnswer: 2,
          explanation: 'Pantun ini mencerminkan sikap rendah hati seorang penuntut ilmu yang siap menerima bimbingan.',
          characterTip: { characterId: 'lulu', tipText: 'Sikap santun dan rendah hati saat belajar dari guru dan kawan.' },
        },
        {
          id: 'b2a-q10',
          questionText: 'Manakah baris kedua yang tepat melengkapi gurindam berikut: "Jika hendak mengenal orang mulia, ..."',
          options: [
            'Lihatlah kepada kelakuan dia',
            'Makanlah buah sampai kenyang',
            'Larilah kencang ke tengah rimba',
            'Beli baju di pasar raya'
          ],
          correctAnswer: 0,
          explanation: '"Lihatlah kepada kelakuan dia" berima sama (-ia) dan memiliki kaitan makna bahwa kemuliaan seseorang tampak dari akhlak perilakunya.',
          characterTip: { characterId: 'robo', tipText: 'Rima "mu-li-a" berpasangan dengan "di-a"!' },
        },
      ],
    },
    {
      id: 'bab2-b',
      code: 'B',
      title: 'Mengidentifikasi Elemen dalam Teks Naratif',
      summary: 'Menganalisis unsur intrinsik cerita fantasi: tema, tokoh & penokohan, alur cerita, latar waktu/tempat/suasana, sudut pandang, dan amanat.',
      buddyGuideId: 'tyro',
      materialSections: [
        {
          heading: 'Unsur Intrinsik Cerita Fantasi',
          body: 'Cerita fantasi adalah teks naratif imajinatif yang memuat unsur keajaiban, hal supranatural, atau futuristik yang melampaui kenyataan.\n1. Tema: Gagasan dasar cerita.\n2. Tokoh: Karakter (Protagonis = tokoh baik; Antagonis = tokoh penentang; Tritagonis = penengah).\n3. Alur (Plot): Rangkaian peristiwa (Maju, Mundur, Campuran).\n4. Latar (Setting): Tempat, Waktu, dan Suasana.',
          example: '"Natar membuka liontin gioknya, seketika portal biru berpendar membuka jalan menuju dimensi masa depan di tahun 3025."',
        },
        {
          heading: 'Struktur Teks Naratif',
          body: '1. Orientasi: Pengenalan tokoh, latar, dan situasi awal.\n2. Komplikasi: Timbulnya masalah, keajaiban, hingga puncak ketegangan (klimaks).\n3. Resolusi: Penyelesaian masalah dan nasib akhir tokoh.',
        },
      ],
      questions: [
        {
          id: 'b2b-q1',
          questionText: 'Ciri khas yang membedakan cerita fantasi dari teks naratif realistik adalah...',
          options: [
            'Adanya keajaiban, kekuatan supranatural, atau latar lintas ruang dan waktu yang tidak ada di dunia nyata',
            'Tidak memiliki alur cerita sama sekali',
            'Hanya boleh ditulis dalam bahasa kuno',
            'Semua tokohnya harus berupa hewan berbicara tanpa manusia'
          ],
          correctAnswer: 0,
          explanation: 'Cerita fantasi ditandai dengan hadirnya keajaiban, sihir, teknologi futuristik fiksi, atau dimensi magis.',
          characterTip: { characterId: 'tyro', tipText: 'Ada keajaiban ajaib yang bikin petualangan makin seru!' },
        },
        {
          id: 'b2b-q2',
          questionText: 'Tahap dalam struktur teks naratif di mana masalah mulai muncul hingga mencapai puncak konflik disebut...',
          options: ['Orientasi', 'Komplikasi', 'Resolusi', 'Koda'],
          correctAnswer: 1,
          explanation: 'Komplikasi memuat rentetan konflik, rintangan, dan puncak ketegangan (klimaks) yang dialami tokoh.',
          characterTip: { characterId: 'liling', tipText: 'Komplikasi = saat masalah rumit dan rintangan menyerang tokoh utama!' },
        },
        {
          id: 'b2b-q3',
          questionText: 'Kutipan: "Di sebuah lembah tersembunyi bernama Lembah Harapan, hiduplah seorang anak bernama Arka bersama robot kecilnya, Bip." Kutipan ini merupakan bagian...',
          options: ['Orientasi', 'Komplikasi', 'Resolusi', 'Evaluasi'],
          correctAnswer: 0,
          explanation: 'Kutipan mengenalkan latar tempat (Lembah Harapan) dan tokoh utama (Arka dan Bip), ciri khas orientasi.',
          characterTip: { characterId: 'agogo', tipText: 'Orientasi itu perkenalan awal tokoh dan tempat tinggalnya.' },
        },
        {
          id: 'b2b-q4',
          questionText: 'Tokoh penentang tokoh utama yang sering kali memicu timbulnya konflik dalam cerita disebut...',
          options: ['Protagonis', 'Antagonis', 'Tritagonis', 'Figuran'],
          correctAnswer: 1,
          explanation: 'Tokoh antagonis adalah pihak yang berlawanan watak atau tujuan dengan protagonis.',
          characterTip: { characterId: 'monk', tipText: 'Antagonis itu tokoh musuh atau lawan yang bikin ulah!' },
        },
        {
          id: 'b2b-q5',
          questionText: 'Latar tempat, latar waktu, dan latar suasana pada kutipan berikut adalah...\n"Malam itu, petir menyambar kencang di atas Menara Kristal, membuat jantung Elina berdegup kencang ketakutan."',
          options: [
            'Menara Kristal, malam hari, mencekam/menegangkan',
            'Pantai cerah, siang hari, gembira ria',
            'Hutan bambu, sore hari, damai tenteram',
            'Sekolah, pagi hari, ramai'
          ],
          correctAnswer: 0,
          explanation: 'Latar tempat: Menara Kristal; waktu: malam hari; suasana: mencekam ketakutan.',
          characterTip: { characterId: 'lulu', tipText: 'Lihat kata kuncinya: malam itu, Menara Kristal, berdegup ketakutan.' },
        },
        {
          id: 'b2b-q6',
          questionText: 'Cerita fantasi yang menggunakan dua latar waktu berbeda, misalnya zaman sekarang dan zaman purba, tergolong cerita fantasi...',
          options: ['Fantasi sezaman', 'Fantasi lintas waktu', 'Fantasi total', 'Fantasi irisan ilmiah'],
          correctAnswer: 1,
          explanation: 'Fantasi lintas waktu berpindah dari satu periode masa ke masa lain (masa kini ke masa lampau atau masa depan).',
          characterTip: { characterId: 'robo', tipText: 'Seperti mesin waktu yang melintasi abad!' },
        },
        {
          id: 'b2b-q7',
          questionText: 'Sudut pandang "orang pertama pelaku utama" ditandai dengan penggunaan kata ganti...',
          options: ['Aku atau Saya', 'Dia atau Beliau', 'Mereka atau Kalian', 'Ia atau Tokoh'],
          correctAnswer: 0,
          explanation: 'Sudut pandang orang pertama memakai kata ganti "aku" atau "saya" sebagai pencerita sekaligus tokoh.',
          characterTip: { characterId: 'tyro', tipText: '"Aku melompat ke punggung dinosaurus!" -> Orang pertama!' },
        },
        {
          id: 'b2b-q8',
          questionText: 'Pesan moral atau pelajaran hidup berharga yang ingin disampaikan pengarang kepada pembaca disebut...',
          options: ['Alur', 'Latar', 'Amanat', 'Penokohan'],
          correctAnswer: 2,
          explanation: 'Amanat adalah nilai moral atau petuah kebaikan yang terkandung dalam cerita.',
          characterTip: { characterId: 'liling', tipText: 'Amanat = pesan kebaikan yang bisa kita teladani.' },
        },
        {
          id: 'b2b-q9',
          questionText: 'Kutipan: "Dengan bersatunya ketiga batu kristal, kabut hitam lenyap dan kedamaian kembali menyinari seluruh kerajaan." Kutipan ini berada pada bagian...',
          options: ['Orientasi', 'Resolusi', 'Konflik awal', 'Klimaks ketakutan'],
          correctAnswer: 1,
          explanation: 'Masalah terselesaikan dan keadaan kembali damai, menandai bagian resolusi.',
          characterTip: { characterId: 'agogo', tipText: 'Masalahnya beres dan bahagia lagi, itu resolusi!' },
        },
        {
          id: 'b2b-q10',
          questionText: 'Manakah watak tokoh yang dapat disimpulkan dari kutipan ini?\n"Meski kakinya terluka parah, Danu tetap memapah adiknya melewati jembatan gantung yang hampir putus."',
          options: [
            'Penakut dan egois',
            'Rela berkorban, bertanggung jawab, dan penyayang',
            'Sombong dan keras kepala',
            'Pemalas dan acuh tak acuh'
          ],
          correctAnswer: 1,
          explanation: 'Tindakan tetap memapah adiknya saat dirinya terluka membuktikan watak rela berkorban dan penuh kasih sayang.',
          characterTip: { characterId: 'lulu', tipText: 'Tindakannya menunjukkan cinta kasih seorang kakak yang luar biasa.' },
        },
      ],
    },
    {
      id: 'bab2-c',
      code: 'C',
      title: 'Berkreasi dengan Teks Naratif',
      summary: 'Mengembangkan ide cerita fantasi sendiri dengan menghadirkan keunikan tokoh ajaib, alur menegangkan, dan dialog ekspresif.',
      buddyGuideId: 'monk',
      materialSections: [
        {
          heading: 'Menemukan Ide & Merancang Karakter Fantasi',
          body: 'Ide cerita fantasi bisa berawal dari mengamati benda sehari-hari lalu menambahkan keajaiban. Karakter harus memiliki kekuatan unik, tetapi juga kelemahan manusiawi agar menarik.',
          example: 'Sebuah pensil kayu kuno yang jika digunakan menggambar, gambarnya akan hidup dan keluar dari kertas.',
        },
        {
          heading: 'Menyusun Alur yang Menegangkan',
          body: '1. Mulai dengan adegan pembuka yang memikat.\n2. Munculkan rintangan tak terduga (mistake/twist).\n3. Puncak pertarungan/klimaks kecerdikan.\n4. Akhir cerita yang memuaskan dan berkesan.',
        },
      ],
      questions: [
        {
          id: 'b2c-q1',
          questionText: 'Langkah awal yang paling tepat dalam menulis cerita fantasi adalah...',
          options: [
            'Menulis daftar pustaka',
            'Menemukan ide keajaiban dan menentukan tema serta karakter tokoh',
            'Langsung mencetak buku di percetakan',
            'Menjiplak seluruh cerita film kartun terkenal tanpa modifikasi'
          ],
          correctAnswer: 1,
          explanation: 'Menentukan ide keajaiban, tema, dan karakter tokoh adalah fondasi awal penulisan naratif.',
          characterTip: { characterId: 'monk', tipText: 'Cari ide gila yang unik dan belum pernah ada sebelumnya!' },
        },
        {
          id: 'b2c-q2',
          questionText: 'Dialog yang efektif dalam cerita fantasi berfungsi untuk...',
          options: [
            'Menghidupkan watak tokoh dan mendorong jalannya alur cerita',
            'Menghabiskan ruang halaman kertas',
            'Menyalin kamus bahasa asing',
            'Menghilangkan tokoh utama'
          ],
          correctAnswer: 0,
          explanation: 'Dialog menghidupkan karakter, menunjukkan emosi, dan memicu peristiwa selanjutnya.',
          characterTip: { characterId: 'liling', tipText: 'Dialog mencerminkan isi hati dan watak si tokoh!' },
        },
        {
          id: 'b2c-q3',
          questionText: 'Manakah kalimat pembuka orientasi yang paling menggugah rasa penasaran pembaca?',
          options: [
            'Pada suatu hari ada anak sekolah.',
            'Tepat ketika jam kuno berdenting tiga belas kali, cermin di kamarku mulai bergetar dan meneteskan air bercahaya perak.',
            'Saya menulis cerita ini di meja belajar.',
            'Hari ini hari Selasa yang biasa saja.'
          ],
          correctAnswer: 1,
          explanation: 'Jam berdenting 13 kali dan cermin bercahaya perak langsung menghadirkan misteri dan keajaiban.',
          characterTip: { characterId: 'tyro', tipText: 'Bikin pembaca langsung melotot penasaran sejak kalimat pertama!' },
        },
        {
          id: 'b2c-q4',
          questionText: 'Dalam cerita fantasi, "kelemahan tokoh sakti" sangat penting diciptakan agar...',
          options: [
            'Tokoh langsung kalah di menit pertama',
            'Cerita menjadi lebih seru, realistis secara emosional, dan penuh perjuangan mengatasi rintangan',
            'Pengarang tidak perlu melanjutkan cerita',
            'Pembaca membenci tokoh tersebut'
          ],
          correctAnswer: 1,
          explanation: 'Kelemahan membuat perjuangan tokoh terasa mendebarkan dan relatable bagi pembaca.',
          characterTip: { characterId: 'robo', tipText: 'Bahkan superhero hebat pun punya titik kelemahan agar ceritanya dramatis!' },
        },
        {
          id: 'b2c-q5',
          questionText: 'Kata sambung penanda urutan waktu yang sering dipakai dalam cerita naratif adalah...',
          options: [
            'Seketika, kemudian, setelah itu, tiba-tiba',
            'Karena, sebab, akibatnya',
            'Meskipun, walaupun, kendatipun',
            'Yaitu, adalah, merupakan'
          ],
          correctAnswer: 0,
          explanation: '"Seketika, kemudian, setelah itu, tiba-tiba" adalah konjungsi temporal penanda pergantian waktu.',
          characterTip: { characterId: 'agogo', tipText: 'Kata-kata ini menggerakkan waktu dari pagi ke malam atau tiba-tiba!' },
        },
        {
          id: 'b2c-q6',
          questionText: 'Kalimat langsung dalam cerita naratif ditandai dengan tanda baca...',
          options: [
            'Tanda petik ganda ("...")',
            'Tanda kurung siku ([...])',
            'Tanda garis miring (/)',
            'Tanda pagar (#)'
          ],
          correctAnswer: 0,
          explanation: 'Kalimat langsung mengapit tuturan tokoh menggunakan tanda petik ganda.',
          characterTip: { characterId: 'liling', tipText: 'Gunakan tanda petik dua untuk ucapan langsung sang tokoh!' },
        },
        {
          id: 'b2c-q7',
          questionText: 'Cermati kutipan: "Kunci rahasia itu bukan berada di puncak gunung, melainkan tertanam di dasar hatimu sendiri!" Teknik alur ini dinamakan...',
          options: [
            'Pemberitahuan awal (foreshadowing)',
            'Kejutan / Pembalikan tak terduga (plot twist)',
            'Pengulangan membosankan',
            'Kesalahan alur pengarang'
          ],
          correctAnswer: 1,
          explanation: 'Plot twist adalah perubahan tak terduga dari apa yang selama ini diduga pembaca.',
          characterTip: { characterId: 'monk', tipText: 'Plot twist bikin pembaca berseru: "Wah, ternyata begitu!"' },
        },
        {
          id: 'b2c-q8',
          questionText: 'Penggunaan kata sifat bermakna kuat (ekspresif) pada kalimat fantasi berikut adalah...',
          options: [
            'Ia melihat pohon biasa.',
            'Mata naga itu memancarkan kilat merah murka yang membakar bebatuan hingga melepuh.',
            'Ada batu di jalan.',
            'Rumah itu memiliki atap.'
          ],
          correctAnswer: 1,
          explanation: '"Merah murka" dan "membakar hingga melepuh" adalah pilihan diksi kuat yang menghidupkan imajinasi.',
          characterTip: { characterId: 'tyro', tipText: 'Kata-katanya tajam dan membakar imajinasi!' },
        },
        {
          id: 'b2c-q9',
          questionText: 'Ending (akhir cerita) di mana tokoh utama berhasil mengalahkan kegelapan tetapi harus berpisah dengan sahabat robotnya disebut...',
          options: [
            'Happy ending murni',
            'Bittersweet ending (manis bercampur haru)',
            'Ending macet tanpa akhir',
            'Komplikasi gantung'
          ],
          correctAnswer: 1,
          explanation: 'Kemenangan yang diiringi perpisahan mengharukan adalah tipe akhir manis sekaligus sedih (bittersweet).',
          characterTip: { characterId: 'lulu', tipText: 'Bikin menang tapi juga bikin mata berkaca-kaca terharu.' },
        },
        {
          id: 'b2c-q10',
          questionText: 'Saat menyunting draf cerita fantasi buatan sendiri, hal yang paling penting dicek konsistensinya adalah...',
          options: [
            'Aturan kekuatan magis tokoh dan konsistensi sudut pandang pencerita',
            'Warna baju penulis saat mengetik',
            'Jumlah spasi di tepi kertas',
            'Harga pulpen yang dipakai'
          ],
          correctAnswer: 0,
          explanation: 'Konsistensi logika dunia magis dan konsistensi kata ganti sudut pandang menjaga keutuhan cerita.',
          characterTip: { characterId: 'robo', tipText: 'Dunia fantasi tetap butuh logika aturan sihir yang konsisten!' },
        },
      ],
    },
  ],
};

export interface CharacterProfile {
  id: string;
  name: string;
  title: string;
  quote: string;
  color: string;
  bgGradient: string;
  textColor: string;
  avatarEmoji: string;
  badge: string;
  traits: string[];
  personality: string;
  greetingVoice: string;
}

export const CHARACTERS: Record<string, CharacterProfile> = {
  robo: {
    id: 'robo',
    name: 'ROBO',
    title: 'Robot AI Penjelajah',
    quote: 'Belajar, bertualang, dan menemukan hal baru!',
    color: '#0284c7',
    bgGradient: 'from-sky-500 to-indigo-600',
    textColor: 'text-sky-400',
    avatarEmoji: '🤖',
    badge: 'AI Guide',
    traits: ['Cerdas', 'Analitis', 'Ramah', 'Futuristik'],
    personality: 'Pemandu utama Robo Adventure yang membantumu memahami materi dan memandu kuis bahasa!',
    greetingVoice: 'Beep boop! Halo Petualang Muda! Siap menjelajah keajaiban Bahasa Indonesia hari ini?',
  },
  tyro: {
    id: 'tyro',
    name: 'TYRO',
    title: 'Si T-Rex Bersemangat Membara',
    quote: 'AKU PASTI BISA!',
    color: '#16a34a',
    bgGradient: 'from-emerald-500 to-green-600',
    textColor: 'text-green-400',
    avatarEmoji: '🦖',
    badge: 'Pemberani',
    traits: ['Berani', 'Energik', 'Spontan', 'Pantang Menyerah'],
    personality: 'Teman setia yang tak pernah menyerah dan selalu menyemangatimu saat soal terasa menantang!',
    greetingVoice: 'Roaaar! Aku Tyro! Jangan takut salah, kita selesaikan semua tantangan 10 soal ini bersama!',
  },
  agogo: {
    id: 'agogo',
    name: 'AGOGO',
    title: 'Manusia Purba yang Selalu Penasaran',
    quote: 'Tapi... kenapa bisa begitu?',
    color: '#d97706',
    bgGradient: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-400',
    avatarEmoji: '🪵',
    badge: 'Penasaran',
    traits: ['Penasaran', 'Polos', 'Banyak Bertanya', 'Kritis'],
    personality: 'Selalu ingin tahu alasan di balik setiap aturan bahasa, majas, dan struktur teks berita!',
    greetingVoice: 'Halo teman! Agogo punya banyak pertanyaan seru tentang teks deskripsi dan berita!',
  },
  liling: {
    id: 'liling',
    name: 'LILING',
    title: 'Gadis Pintar dan Baik Hati',
    quote: 'Aku tahu jawabannya!',
    color: '#2563eb',
    bgGradient: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    avatarEmoji: '👧🏻',
    badge: 'Cendekia',
    traits: ['Cerdas', 'Tenang', 'Suka Menjelaskan', 'Suka Membantu Teman'],
    personality: 'Teman belajar yang siap memberikan tips ringkas, rumus cepat memahami pantun, dan tata bahasa baku!',
    greetingVoice: 'Halo sahabat! Tenang saja, Liling siap membantumu memahami setiap konsep sampai tuntas!',
  },
  lulu: {
    id: 'lulu',
    name: 'LULU',
    title: 'Gadis Lembut Penuh Perhatian',
    quote: 'K-kita harus menolongnya...',
    color: '#db2777',
    bgGradient: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    avatarEmoji: '🌸',
    badge: 'Penuh Empati',
    traits: ['Lembut', 'Pemalu', 'Peduli', 'Peka Bahasa'],
    personality: 'Peka terhadap keindahan puisi rakyat, cerita fantasi naratif, dan etika kesantunan surat pribadi/resmi!',
    greetingVoice: 'Halo... Lulu senang sekali belajar puisi dan cerita imajinasi bersamamu hari ini.',
  },
  monk: {
    id: 'monk',
    name: 'MONK',
    title: 'Monyet Kecil yang Usil & Cerdik',
    quote: 'Hehehe... aku punya ide!',
    color: '#ea580c',
    bgGradient: 'from-orange-500 to-amber-600',
    textColor: 'text-orange-400',
    avatarEmoji: '🐒',
    badge: 'Kreatif',
    traits: ['Jahil', 'Lucu', 'Aktif', 'Punya Ide Tak Terduga'],
    personality: 'Suka membuat teka-teki, pantun jenaka, dan trik membedakan hoaks vs fakta dengan cara yang bikin tertawa!',
    greetingVoice: 'Hehehe! Monk bawa ide rahasia supaya kamu bisa dapat skor 100 tanpa stres!',
  },
};

export const ROBO_ADVENTURE_IMAGE_PATH = '/assets/aistudio/file_000000008f58820cb49dd94868062258_ca3492d1.png';

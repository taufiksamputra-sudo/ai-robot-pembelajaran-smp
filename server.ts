import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize GoogleGenAI server-side with User-Agent header as required
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// API endpoint to generate complete video promo storyboard
app.post('/api/generate-promo', async (req, res) => {
  try {
    const {
      appName = 'Aplikasi Keren',
      category = 'Fintech',
      description = '',
      targetAudience = 'Umum',
      style = 'Energetic',
      language = 'id',
      features = [],
    } = req.body;

    const prompt = `Anda adalah seorang Creative Video Director & Motion Graphics Designer profesional spesialis pembuatan video promosi aplikasi mobile & web (app store promo, TikTok/Reels ads, YouTube promo).

Buatkan storyboard video promosi yang sangat menarik, berkonversi tinggi, dan sinematik untuk aplikasi berikut:
- Nama Aplikasi: ${appName}
- Kategori: ${category}
- Deskripsi: ${description || 'Aplikasi modern dengan antarmuka elegan dan fitur canggih'}
- Target Pengguna: ${targetAudience}
- Gaya Visual & Mood: ${style} (misal: Energetic, Minimalist Cupertino, Cyberpunk Tech, Clean Elegant)
- Bahasa Skrip: ${language === 'id' ? 'Bahasa Indonesia yang persuasif, gaul/modern, dan menggugah rasa ingin tahu' : 'English - punchy, compelling, and modern'}
- Fitur Kunci: ${Array.isArray(features) && features.length > 0 ? features.join(', ') : 'Otomatisasi pintar, antarmuka mudah, keamanan data, analitik real-time'}

Buat 5 sampai 6 adegan (scenes) berurutan:
1. Scene 1: Hook / Masalah yang dialami pengguna (Pain point yang relatable)
2. Scene 2: Reveal Solusi / Kenalkan nama aplikasi dengan animasi megah
3. Scene 3: Fitur Unggulan Utama #1 (Demonstrasi interaktif & visual data)
4. Scene 4: Fitur Unggulan Utama #2 atau Kecepatan / Kemudahan (Highlight kemudahan)
5. Scene 5: Social Proof atau Keunggulan / Testimoni / Statistik ("Dipercaya ribuan pengguna", dsb.)
6. Scene 6: Outro & Call to Action (Ajakan download sekarang di App Store / Google Play)`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            tagline: { type: Type.STRING },
            musicMood: { 
              type: Type.STRING,
              description: 'One of: upbeat-tech, chill-saas, energetic-trap, cinematic-rise'
            },
            themeColor: {
              type: Type.STRING,
              description: 'Hex color for primary theme, e.g. #6366f1, #10b981, #f43f5e, #06b6d4, #8b5cf6'
            },
            gradientBg: {
              type: Type.STRING,
              description: 'Preset name: aurora, neon-cyber, midnight-navy, sunset-glow, emerald-luxe, minimal-dark'
            },
            scenes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  headline: { type: Type.STRING, description: 'Short bold headline (max 5 words)' },
                  subtext: { type: Type.STRING, description: 'Secondary descriptive text' },
                  voiceoverText: { type: Type.STRING, description: 'Spoken narration text for TTS' },
                  duration: { type: Type.NUMBER, description: 'Duration in seconds (e.g. 2.5 to 4.0)' },
                  deviceType: { 
                    type: Type.STRING, 
                    description: 'iphone, android, tablet, or macbook' 
                  },
                  deviceAngle: { 
                    type: Type.STRING, 
                    description: 'front, tilt-left, tilt-right, floating, isometric, close-up' 
                  },
                  floatingBadges: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        icon: { type: Type.STRING, description: 'Icon type: star, bolt, shield, spark, users, check, rocket' },
                        text: { type: Type.STRING, description: 'Badge label text (e.g. "Rating 4.9", "Instant Setup")' },
                        position: { type: Type.STRING, description: 'top-left, top-right, bottom-left, bottom-right' }
                      },
                      required: ['icon', 'text', 'position']
                    }
                  },
                  mockupScreenType: {
                    type: Type.STRING,
                    description: 'Preset screen template: kids-robot, fintech, delivery, ai-assistant, fitness, ecommerce, dashboard, welcome'
                  },
                  transitionEffect: {
                    type: Type.STRING,
                    description: 'zoom-in, slide-up, rotate-in, pop, fade'
                  }
                },
                required: ['id', 'headline', 'subtext', 'voiceoverText', 'duration', 'deviceType', 'deviceAngle', 'mockupScreenType']
              }
            }
          },
          required: ['title', 'tagline', 'musicMood', 'themeColor', 'gradientBg', 'scenes']
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return res.json({ success: true, data: result });
  } catch (error: any) {
    console.error('Error generating promo video script:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Gagal menghasilkan skrip promosi dengan AI',
    });
  }
});

// API endpoint to refine a specific scene copy
app.post('/api/enhance-scene', async (req, res) => {
  try {
    const { headline, subtext, appName, goal, language = 'id' } = req.body;
    const prompt = `Perbaiki dan buat kalimat promosi ini jauh lebih punchy, menarik, dan berenergi tinggi untuk video iklan singkat:
Aplikasi: ${appName}
Tujuan adegan: ${goal || 'Menarik perhatian penonton'}
Headline saat ini: "${headline}"
Subteks saat ini: "${subtext}"
Bahasa: ${language === 'id' ? 'Bahasa Indonesia' : 'English'}

Berikan respons JSON dengan:
- headline: teks headline singkat (3-5 kata)
- subtext: penjelasan singkat padat (1 kalimat)
- voiceover: skrip narasi suara yang natural`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            subtext: { type: Type.STRING },
            voiceover: { type: Type.STRING }
          },
          required: ['headline', 'subtext', 'voiceover']
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return res.json({ success: true, data: result });
  } catch (error: any) {
    console.error('Error enhancing scene:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Gagal menyempurnakan adegan',
    });
  }
});

// AI Tutor RoboKids for Bahasa Indonesia SMP Kelas 7
app.post('/api/ai-tutor', async (req, res) => {
  try {
    const { message, character = 'robo', topic = 'Bahasa Indonesia Kelas 7', chatHistory = [] } = req.body;

    const charPersonas: Record<string, string> = {
      robo: 'Kamu adalah ROBO, robot AI cilik pintar dari RoboKids. Karaktermu ramah, bersemangat, canggih, dan suka petualangan ilmu pengetahuan. Sapa dengan ramah seperti "Beep boop! Halo Petualang Muda!".',
      liling: 'Kamu adalah LILING, gadis kecil pintar dan baik hati dengan motto "Aku tahu jawabannya!". Karaktermu cerdas, tenang, sabar, dan sangat jago menjelaskan tata bahasa, puisi rakyat, dan struktur teks secara runtut.',
      tyro: 'Kamu adalah TYRO, si T-Rex kecil hijau yang penuh semangat membara dengan motto "AKU PASTI BISA!". Karaktermu energik, berapi-api, selalu membakar semangat belajar anak SMP agar tidak menyerah.',
      agogo: 'Kamu adalah AGOGO, anak manusia purba yang selalu penasaran dengan motto "Tapi... kenapa bisa begitu?". Karaktermu polos, kagum pada keindahan bahasa, suka bertanya hal-hal menarik di balik materi.',
      lulu: 'Kamu adalah LULU, gadis manis berjaket pink yang penuh perhatian dan lembut dengan motto "K-kita harus menolongnya...". Karaktermu sangat empati, pandai menganalisis perasaan di balik puisi dan cerita narasi.',
      monk: 'Kamu adalah MONK, monyet kecil usil dan jenaka dengan motto "Hehehe... aku punya ide!". Karaktermu lucu, cerdik, suka menyelipkan pantun lucu atau tebak-tebakan kata yang mendidik agar anak tidak bosan.',
    };

    const persona = charPersonas[character] || charPersonas.robo;

    const systemInstruction = `${persona}
Kamu adalah sahabat belajar Bahasa Indonesia untuk siswa SMP Kelas 7 (Kurikulum Merdeka).
Materi yang kamu kuasai mencakup:
- Bab I: Jelajah Nusantara (Teks Deskripsi, Ciri Kebahasaan, Majas Personifikasi/Metafora, Huruf Kapital/Tanda Baca, Sajian Visual)
- Bab II: Berkelana di Dunia Imajinasi (Puisi Rakyat: Pantun/Syair/Gurindam, Teks Naratif/Fantasi, Struktur Orientasi-Komplikasi-Resolusi)
- Bab III: Hal yang Baik bagi Tubuh (Teks Prosedur, Kalimat Imperatif, Konjungsi Urutan Waktu)
- Bab IV: Aksi Nyata Para Pelindung Bumi (Teks Berita, ADIKSIMBA 5W+1H, Unsur Bahasa Baku & Pewarta, Menelisik Hoaks)
- Bab V: Membuka Gerbang Dunia (Bedah Buku Bergambar, Bagian Buku, Merangkum, Teks Tanggapan & Resensi)
- Bab VI: Sampaikan Melalui Surat (Surat Pribadi vs Surat Dinas Resmi, Etika Santun, Ruang Bincang Digital)

TUGAS UTAMA:
1. Jawab pertanyaan siswa dengan ramah, komunikatif, mudah dipahami anak SMP usia 12-14 tahun, dan jangan kaku seperti robot ensiklopedia.
2. Selalu berikan contoh konkret yang seru (misal: contoh pantun jenaka, contoh deskripsi keindahan Raja Ampat, tips membedakan hoaks).
3. Jika siswa meminta koreksi teks atau latihan, berikan apresiasi dulu, lalu jelaskan perbaikannya dengan santun.
4. Gunakan gaya bahasa sahabat sebaya yang mendidik, beri emoji yang ekspresif, dan akhiri dengan pertanyaan pemancing atau kalimat penyemangat!`;

    const promptText = `Topik saat ini: ${topic}
Pertanyaan/Pesan Siswa:
"${message}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({
      success: true,
      reply: response.text || 'Wah, koneksi ke Robo Valley sedikit terganggu, tapi jangan menyerah! Coba tanyakan lagi ya!',
      character,
    });
  } catch (error: any) {
    console.error('AI Tutor error:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Gagal menghubungi Robo-Tutor',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// Start server with Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PromoCraft Studio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

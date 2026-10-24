import React, { useState } from 'react';
import { Sparkles, X, Wand2, Lightbulb, Check, AlertCircle } from 'lucide-react';
import { PromoProject, PromoScene } from '../types';

interface AIPromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyGeneratedProject: (newProject: Partial<PromoProject>) => void;
}

export const AIPromoModal: React.FC<AIPromoModalProps> = ({
  isOpen,
  onClose,
  onApplyGeneratedProject,
}) => {
  const [appName, setAppName] = useState('');
  const [category, setCategory] = useState('Fintech');
  const [description, setDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('Mahasiswa & Profesional Muda');
  const [features, setFeatures] = useState('');
  const [style, setStyle] = useState('Energetic');
  const [language, setLanguage] = useState('id');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [generationStep, setGenerationStep] = useState(0);

  if (!isOpen) return null;

  const quickIdeas = [
    {
      name: 'RoboPintar AI',
      category: 'Edukasi & Pembelajaran',
      desc: 'Robot AI interaktif pendamping belajar membaca, berhitung cepat matematika, dan sains seru untuk anak SD kelas 1, 2, dan 3.',
      features: 'Tanya jawab suara robot ramah, kuis berhadiah bintang & trofi, kurikulum merdeka SD, laporan rapor kemajuan orang tua, tanpa iklan',
    },
    {
      name: 'SmartKasir',
      category: 'Produktivitas & Bisnis UMKM',
      desc: 'Aplikasi kasir POS berbasis cloud dengan laporan laba rugi instan dan cetak struk Bluetooth.',
      features: 'Kelola stok otomatis, multi-cabang, laporan penjualan real-time, QRIS statis & dinamis',
    },
    {
      name: 'RasaLokal',
      category: 'Kuliner & Food Delivery',
      desc: 'Pesan jajanan pasar dan makanan lokal favorit dengan pengantaran cepat dan harga bersahabat.',
      features: 'Ribuan kuliner legendaris, diskon ongkir harian, live GPS tracking kurir',
    },
    {
      name: 'KamusPintar AI',
      category: 'Edukasi & Pembelajaran',
      desc: 'Belajar bicara bahasa Inggris lancar dengan latihan percakapan AI interaktif kapan saja.',
      features: 'Koreksi aksen otomatis, 100+ skenario dunia nyata, latihan 5 menit per hari',
    },
    {
      name: 'SehatPagi',
      category: 'Kesehatan & Olahraga',
      desc: 'Panduan olahraga di rumah dan hitung kalori makanan hanya dengan foto kamera.',
      features: 'Deteksi kalori otomatis lewat foto, pengingat minum air, program workout tanpa alat',
    },
  ];

  const handleApplyIdea = (idea: typeof quickIdeas[0]) => {
    setAppName(idea.name);
    setCategory(idea.category);
    setDescription(idea.desc);
    setFeatures(idea.features);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appName.trim()) {
      setErrorMsg('Mohon masukkan nama aplikasi Anda.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    setGenerationStep(1);

    const stepInterval = setInterval(() => {
      setGenerationStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1200);

    try {
      const res = await fetch('/api/generate-promo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appName,
          category,
          description,
          targetAudience,
          style,
          language,
          features: features.split(',').map((f) => f.trim()).filter(Boolean),
        }),
      });

      const data = await res.json();
      clearInterval(stepInterval);

      if (!res.ok || !data.success || !data.data) {
        throw new Error(data.error || 'Gagal menghasilkan skrip');
      }

      const generated = data.data;

      // Map generated scenes into project format
      const formattedScenes: PromoScene[] = (generated.scenes || []).map((s: any, idx: number) => ({
        id: `gen-scene-${idx + 1}-${Date.now()}`,
        headline: s.headline || `Fitur Unggulan #${idx + 1}`,
        subtext: s.subtext || '',
        voiceoverText: s.voiceoverText || s.headline || '',
        duration: Math.max(2.0, Math.min(6.0, Number(s.duration) || 3.2)),
        deviceType: (['iphone', 'android', 'tablet', 'macbook'].includes(s.deviceType)
          ? s.deviceType
          : 'iphone') as any,
        deviceAngle: (['front', 'tilt-left', 'tilt-right', 'floating', 'isometric', 'close-up'].includes(
          s.deviceAngle
        )
          ? s.deviceAngle
          : 'front') as any,
        mockupScreenType: (['kids-robot', 'fintech', 'delivery', 'ai-assistant', 'fitness', 'dashboard', 'welcome'].includes(
          s.mockupScreenType
        )
          ? s.mockupScreenType
          : 'kids-robot') as any,
        floatingBadges: (s.floatingBadges || []).map((b: any, bIdx: number) => ({
          id: `gb-${idx}-${bIdx}`,
          icon: b.icon || 'spark',
          text: b.text || 'Unggulan',
          position: b.position || (bIdx % 2 === 0 ? 'top-right' : 'bottom-left'),
          color: generated.themeColor || '#6366f1',
        })),
        transitionEffect: s.transitionEffect || 'zoom-in',
      }));

      onApplyGeneratedProject({
        appName,
        tagline: generated.tagline || `${appName} - Aplikasi Generasi Baru`,
        themeColor: generated.themeColor || '#6366f1',
        gradientBg: generated.gradientBg || 'aurora',
        musicMood: generated.musicMood || 'upbeat-tech',
        scenes: formattedScenes,
        ctaHeadline: `Unduh ${appName} Sekarang`,
        ctaSubtext: `Tersedia gratis di App Store & Google Play`,
      });

      onClose();
    } catch (err: any) {
      console.error('AI Generation failed:', err);
      setErrorMsg(err.message || 'Terjadi kesalahan saat menghubungi server AI');
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
    }
  };

  const loadingMessages = [
    'Menganalisis proposisi nilai aplikasi & target audiens...',
    'Menyusun formula hook psikologis & storyline 5 adegan...',
    'Mengonfigurasi sudut kamera 3D, mockup devices & efek partikel...',
    'Menyempurnakan naskah voiceover persuasif...',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                AI Promo Video Director
              </h2>
              <p className="text-xs text-slate-400">
                Otomatis susun storyboard promosi viral berkonversi tinggi dengan Gemini 3.8 Flash
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-200 text-xs">
          {/* Quick Idea Presets */}
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300 uppercase tracking-wider mb-2">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Contoh Cepat (Klik untuk mengisi):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {quickIdeas.map((idea) => (
                <button
                  key={idea.name}
                  type="button"
                  onClick={() => handleApplyIdea(idea)}
                  className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-indigo-600/30 hover:border-indigo-500 border border-slate-700 text-slate-300 hover:text-white text-[11px] transition-all"
                >
                  ✨ {idea.name} ({idea.category.split('&')[0]})
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            {/* App Name & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Nama Aplikasi *
                </label>
                <input
                  type="text"
                  required
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  placeholder="cth. FinSmart, MakanCepat"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Kategori
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                >
                  <option value="Fintech">💳 Finansial & Dompet Digital</option>
                  <option value="Kuliner & Food Delivery">🛵 Kuliner & Food Delivery</option>
                  <option value="AI & Productivity">🤖 AI & Produktivitas Kerja</option>
                  <option value="Kesehatan & Olahraga">🏃 Kesehatan & Fitness</option>
                  <option value="E-Commerce & Toko Online">🛍️ E-Commerce & Belanja</option>
                  <option value="Edukasi & Pembelajaran">📚 Edukasi & Belajar</option>
                  <option value="Travel & Transportasi">✈️ Travel & Liburan</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Deskripsi Singkat / Masalah yang Diselesaikan
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="cth. Bantu pengguna mencatat dan menghemat uang tanpa ribet dalam 1 klik..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            {/* Target Audience & Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Target Pengguna
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="cth. Mahasiswa, Pekerja Kantoran, UMKM"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Gaya Video & Suasana
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                >
                  <option value="Energetic">⚡️ Enerjik & Cepat (TikTok/Reels Ads)</option>
                  <option value="Minimalist Cupertino">🍏 Elegan & Minimalis (Apple Style)</option>
                  <option value="Cyberpunk Tech">🔮 Futuristik & High-Tech</option>
                  <option value="Warm & Friendly">🌱 Ramah, Hangat & Terpercaya</option>
                </select>
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Fitur Unggulan (Pisahkan dengan koma)
              </label>
              <input
                type="text"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                placeholder="cth. Transfer gratis 100x, Bayar QRIS, Analitik AI harian"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Language */}
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Bahasa Skrip Narasi & Judul
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="lang"
                    checked={language === 'id'}
                    onChange={() => setLanguage('id')}
                    className="accent-indigo-500"
                  />
                  <span>🇮🇩 Bahasa Indonesia (Persuasif & Alami)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="lang"
                    checked={language === 'en'}
                    onChange={() => setLanguage('en')}
                    className="accent-indigo-500"
                  />
                  <span>🇬🇧 English (Global & Punchy)</span>
                </label>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Loading progress banner */}
            {isLoading && (
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                <div className="flex items-center gap-2.5">
                  <Wand2 className="w-5 h-5 text-indigo-400 animate-spin" />
                  <span className="font-semibold text-white">
                    {loadingMessages[generationStep] || loadingMessages[0]}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${(generationStep + 1) * 25}%` }}
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
              >
                Batal
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{isLoading ? 'Sedang Merancang...' : 'Buat Storyboard Sekarang'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

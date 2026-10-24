import React, { useState } from 'react';
import {
  Type,
  Smartphone,
  Tag,
  Palette,
  Volume2,
  Wand2,
  Play,
  Upload,
  Plus,
  Trash2,
  Sparkles,
  Music,
} from 'lucide-react';
import {
  DeviceAngle,
  DeviceType,
  FloatingBadge,
  MusicMood,
  PromoProject,
  PromoScene,
} from '../types';
import { soundStudio } from '../utils/audioEngine';

interface SceneSidebarProps {
  scene: PromoScene;
  project: PromoProject;
  onUpdateScene: (updates: Partial<PromoScene>) => void;
  onUpdateProject: (updates: Partial<PromoProject>) => void;
}

export const SceneSidebar: React.FC<SceneSidebarProps> = ({
  scene,
  project,
  onUpdateScene,
  onUpdateProject,
}) => {
  const [activeTab, setActiveTab] = useState<'text' | 'device' | 'badges' | 'style'>('text');
  const [isEnhancing, setIsEnhancing] = useState(false);

  // AI scene copy enhancer
  const handleEnhanceWithAI = async () => {
    setIsEnhancing(true);
    try {
      const res = await fetch('/api/enhance-scene', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appName: project.appName,
          headline: scene.headline,
          subtext: scene.subtext,
          goal: 'Tingkatkan daya tarik dan konversi iklan aplikasi',
          language: 'id',
        }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        onUpdateScene({
          headline: data.data.headline,
          subtext: data.data.subtext,
          voiceoverText: data.data.voiceover,
        });
      }
    } catch (err) {
      console.error('Enhance scene error:', err);
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleTestVoice = () => {
    if (scene.voiceoverText) {
      soundStudio.speak(scene.voiceoverText, 'id-ID', project.voiceRate);
    }
  };

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      onUpdateScene({ customScreenshot: result });
    };
    reader.readAsDataURL(file);
  };

  const handleAddBadge = () => {
    const newBadge: FloatingBadge = {
      id: 'badge-' + Date.now(),
      icon: 'spark',
      text: 'Fitur Unggulan',
      position: 'top-right',
      color: project.themeColor,
    };
    onUpdateScene({
      floatingBadges: [...(scene.floatingBadges || []), newBadge],
    });
  };

  const handleUpdateBadge = (id: string, updates: Partial<FloatingBadge>) => {
    const next = (scene.floatingBadges || []).map((b) => (b.id === id ? { ...b, ...updates } : b));
    onUpdateScene({ floatingBadges: next });
  };

  const handleDeleteBadge = (id: string) => {
    const next = (scene.floatingBadges || []).filter((b) => b.id !== id);
    onUpdateScene({ floatingBadges: next });
  };

  return (
    <aside className="w-80 md:w-96 bg-slate-950 border-l border-slate-800 flex flex-col h-full overflow-hidden select-none">
      {/* Tabs Header */}
      <div className="flex border-b border-slate-800 bg-slate-900/40 p-1">
        <button
          onClick={() => setActiveTab('text')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'text'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Teks</span>
        </button>

        <button
          onClick={() => setActiveTab('device')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'device'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Kamera 3D</span>
        </button>

        <button
          onClick={() => setActiveTab('badges')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'badges'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Tag className="w-3.5 h-3.5" />
          <span>Badge</span>
        </button>

        <button
          onClick={() => setActiveTab('style')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'style'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Tema</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs text-slate-300 scrollbar-thin scrollbar-thumb-slate-800">
        {/* TAB 1: TEXT & VOICEOVER */}
        {activeTab === 'text' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
                Naskah & Tipografi
              </label>
              <button
                onClick={handleEnhanceWithAI}
                disabled={isEnhancing}
                className="flex items-center gap-1 px-2 py-1 rounded bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 transition-colors disabled:opacity-50"
              >
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>{isEnhancing ? 'Mengoptimalkan...' : 'Poles AI'}</span>
              </button>
            </div>

            {/* Headline */}
            <div>
              <span className="block text-[11px] font-medium text-slate-400 mb-1">
                Judul Utama (Headline)
              </span>
              <input
                type="text"
                value={scene.headline}
                onChange={(e) => onUpdateScene({ headline: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                placeholder="cth. Kelola Saldo 10x Lebih Cepat"
              />
            </div>

            {/* Subtext */}
            <div>
              <span className="block text-[11px] font-medium text-slate-400 mb-1">
                Subteks / Deskripsi Singkat
              </span>
              <textarea
                rows={2}
                value={scene.subtext}
                onChange={(e) => onUpdateScene({ subtext: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500 resize-none"
                placeholder="Penjelasan singkat penjelas fitur..."
              />
            </div>

            {/* Voiceover Script */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium text-slate-400">
                  Narasi Suara (Voiceover TTS)
                </span>
                <button
                  onClick={handleTestVoice}
                  className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300"
                  title="Dengarkan suara"
                >
                  <Play className="w-3 h-3 fill-indigo-400" />
                  <span>Dengar Suara</span>
                </button>
              </div>
              <textarea
                rows={3}
                value={scene.voiceoverText}
                onChange={(e) => onUpdateScene({ voiceoverText: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500 resize-none"
                placeholder="Teks yang akan dibacakan oleh voiceover otomatis..."
              />
            </div>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-medium text-slate-400">Durasi Adegan</span>
                <span className="font-mono text-indigo-400 font-bold">{scene.duration.toFixed(1)}s</span>
              </div>
              <input
                type="range"
                min={1.5}
                max={7.0}
                step={0.1}
                value={scene.duration}
                onChange={(e) => onUpdateScene({ duration: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>
          </div>
        )}

        {/* TAB 2: DEVICE & 3D CAMERA */}
        {activeTab === 'device' && (
          <div className="space-y-4">
            {/* Device Type */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Jenis Perangkat (Mockup Frame)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'iphone', label: 'iPhone 16 Pro' },
                  { id: 'android', label: 'Pixel / Android' },
                  { id: 'tablet', label: 'iPad / Tablet' },
                  { id: 'macbook', label: 'MacBook Pro' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onUpdateScene({ deviceType: item.id as DeviceType })}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      scene.deviceType === item.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-semibold block">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Device Angle / Perspective */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Sudut Kamera 3D
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'front', label: 'Depan Tegak' },
                  { id: 'tilt-left', label: 'Miring Kiri' },
                  { id: 'tilt-right', label: 'Miring Kanan' },
                  { id: 'floating', label: 'Hover Melayang' },
                  { id: 'isometric', label: 'Isometrik Dinamis' },
                  { id: 'close-up', label: 'Zoom Layar (Hero)' },
                ].map((angle) => (
                  <button
                    key={angle.id}
                    onClick={() => onUpdateScene({ deviceAngle: angle.id as DeviceAngle })}
                    className={`p-2 rounded-lg border text-left text-xs transition-all ${
                      scene.deviceAngle === angle.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {angle.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Screen UI Mockup or Screenshot */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Konten Layar Aplikasi
              </label>

              {/* Upload Screenshot Option */}
              <div className="mb-3">
                <label className="flex items-center justify-center gap-2 p-3 rounded-lg border border-dashed border-slate-700 bg-slate-900/60 hover:bg-slate-900 cursor-pointer text-slate-300 hover:text-white transition-colors">
                  <Upload className="w-4 h-4 text-indigo-400" />
                  <span className="font-medium">
                    {scene.customScreenshot ? 'Ganti Screenshot Anda' : 'Upload Screenshot Asli'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleScreenshotUpload}
                    className="hidden"
                  />
                </label>
                {scene.customScreenshot && (
                  <button
                    onClick={() => onUpdateScene({ customScreenshot: undefined })}
                    className="mt-1 text-[11px] text-rose-400 hover:underline"
                  >
                    Hapus screenshot & gunakan template vektor
                  </button>
                )}
              </div>

              {/* Preset Screen Templates */}
              <span className="block text-[11px] text-slate-400 mb-1.5">
                Atau pilih Template Antarmuka Vektor:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'kids-robot', label: '🤖 Robot Belajar Anak' },
                  { id: 'fintech', label: '💳 Finansial & QRIS' },
                  { id: 'delivery', label: '🛵 Food Delivery' },
                  { id: 'ai-assistant', label: '🤖 Chatbot & AI' },
                  { id: 'fitness', label: '🔥 Tracker Olahraga' },
                  { id: 'welcome', label: '🚀 Layar Sambutan' },
                  { id: 'dashboard', label: '📊 Grafik & Metrik' },
                ].map((tmpl) => (
                  <button
                    key={tmpl.id}
                    onClick={() =>
                      onUpdateScene({
                        mockupScreenType: tmpl.id as any,
                        customScreenshot: undefined,
                      })
                    }
                    className={`p-2 rounded-lg border text-left text-xs transition-all ${
                      !scene.customScreenshot && scene.mockupScreenType === tmpl.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tmpl.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FLOATING BADGES */}
        {activeTab === 'badges' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
                Badge Callout Melayang
              </label>
              <button
                onClick={handleAddBadge}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Tambah</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400">
              Badge callout melayang untuk menonjolkan fitur unik, rating bintang, atau keunggulan aplikasi.
            </p>

            <div className="space-y-3">
              {(scene.floatingBadges || []).map((badge, idx) => (
                <div
                  key={badge.id}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-300">Badge #{idx + 1}</span>
                    <button
                      onClick={() => handleDeleteBadge(badge.id)}
                      className="text-slate-500 hover:text-rose-400 p-1"
                      title="Hapus badge"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <span className="block text-[10px] text-slate-400 mb-0.5">Teks Badge</span>
                    <input
                      type="text"
                      value={badge.text}
                      onChange={(e) => handleUpdateBadge(badge.id, { text: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="block text-[10px] text-slate-400 mb-0.5">Ikon</span>
                      <select
                        value={badge.icon}
                        onChange={(e) => handleUpdateBadge(badge.id, { icon: e.target.value as any })}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1.5 text-slate-200 text-xs outline-none"
                      >
                        <option value="star">⭐️ Bintang</option>
                        <option value="bolt">⚡️ Petir</option>
                        <option value="shield">🔒 Keamanan</option>
                        <option value="spark">✨ Kilau</option>
                        <option value="users">👥 Pengguna</option>
                        <option value="check">✅ Centang</option>
                        <option value="rocket">🚀 Roket</option>
                        <option value="clock">⏱️ Waktu</option>
                      </select>
                    </div>

                    <div>
                      <span className="block text-[10px] text-slate-400 mb-0.5">Posisi</span>
                      <select
                        value={badge.position}
                        onChange={(e) => handleUpdateBadge(badge.id, { position: e.target.value as any })}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1.5 text-slate-200 text-xs outline-none"
                      >
                        <option value="top-left">Kiri Atas</option>
                        <option value="top-right">Kanan Atas</option>
                        <option value="bottom-left">Kiri Bawah</option>
                        <option value="bottom-right">Kanan Bawah</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}

              {(scene.floatingBadges || []).length === 0 && (
                <div className="text-center py-6 border border-dashed border-slate-800 rounded-xl text-slate-500">
                  Belum ada badge di adegan ini.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: THEME, AUDIO & STYLE */}
        {activeTab === 'style' && (
          <div className="space-y-4">
            {/* Primary Theme Color */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Warna Primer Aplikasi
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={project.themeColor}
                  onChange={(e) => onUpdateProject({ themeColor: e.target.value })}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <input
                  type="text"
                  value={project.themeColor}
                  onChange={(e) => onUpdateProject({ themeColor: e.target.value })}
                  className="w-28 bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200 font-mono text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Color Presets */}
              <div className="flex items-center gap-1.5 mt-2">
                {['#6366f1', '#10b981', '#f97316', '#8b5cf6', '#06b6d4', '#f43f5e'].map((col) => (
                  <button
                    key={col}
                    onClick={() => onUpdateProject({ themeColor: col })}
                    className="w-6 h-6 rounded-full border border-white/20 hover:scale-110 transition-transform"
                    style={{ backgroundColor: col }}
                  />
                ))}
              </div>
            </div>

            {/* Background Style */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Latar Animasi Sinematik
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'aurora', label: '🌌 Aurora Indigo' },
                  { id: 'neon-cyber', label: '🔮 Cyberpunk Neon' },
                  { id: 'sunset-glow', label: '🌅 Sunset Twilight' },
                  { id: 'emerald-luxe', label: '💎 Emerald Obsidian' },
                  { id: 'midnight-navy', label: '✨ Midnight Starlight' },
                ].map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => onUpdateProject({ gradientBg: bg.id as any })}
                    className={`p-2 rounded-lg border text-left text-xs transition-all ${
                      project.gradientBg === bg.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {bg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Synthesized Music Mood */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Musik Latar Sintesis (BGM)</span>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'upbeat-tech', label: '⚡️ Upbeat Tech' },
                  { id: 'chill-saas', label: '☕️ Chill Lo-Fi SaaS' },
                  { id: 'energetic-trap', label: '🔥 Energetic Trap' },
                  { id: 'cinematic-rise', label: '🎬 Cinematic Ambient' },
                  { id: 'none', label: '🔇 Tanpa Musik' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      onUpdateProject({ musicMood: m.id as MusicMood });
                      soundStudio.playMusic(m.id as MusicMood);
                    }}
                    className={`p-2 rounded-lg border text-left text-xs transition-all ${
                      project.musicMood === m.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Volume Slider */}
              <div className="mt-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] text-slate-400">Volume Musik</span>
                  <span className="font-mono text-indigo-400">
                    {Math.round(project.musicVolume * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={project.musicVolume}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    onUpdateProject({ musicVolume: v });
                    soundStudio.setVolume(v);
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>

            {/* Outro Call To Action */}
            <div className="pt-2 border-t border-slate-800">
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Penutup & Ajakan Unduh (Outro)
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  value={project.ctaHeadline}
                  onChange={(e) => onUpdateProject({ ctaHeadline: e.target.value })}
                  placeholder="Headline CTA (cth. Unduh Sekarang)"
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="text"
                  value={project.websiteUrl}
                  onChange={(e) => onUpdateProject({ websiteUrl: e.target.value })}
                  placeholder="Website atau Domain (cth. aplikasi.id)"
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

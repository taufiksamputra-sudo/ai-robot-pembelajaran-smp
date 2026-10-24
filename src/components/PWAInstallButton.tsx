import React from 'react';
import { Download, Share2, PlusSquare, X, CheckCircle2, Smartphone, Sparkles, Monitor } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { sfx } from '../utils/sfx';

export const PWAInstallButton: React.FC = () => {
  const {
    canInstall,
    isInstalled,
    isIOS,
    showIOSModal,
    setShowIOSModal,
    triggerInstall,
    hasNativePrompt,
  } = usePWAInstall();

  if (isInstalled) {
    return (
      <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span className="hidden lg:inline">Aplikasi Terpasang</span>
        <span className="lg:hidden">Terpasang</span>
      </div>
    );
  }

  if (!canInstall) return null;

  return (
    <>
      {/* Install Button in Navbar */}
      <button
        onClick={() => {
          sfx.playClick();
          triggerInstall();
        }}
        className="relative group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        title="Instal RoboKids di HP atau Laptop kamu!"
      >
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Instal Aplikasi</span>
        <span className="sm:hidden">Instal</span>
      </button>

      {/* Guide Modal when native prompt is not available or iOS device */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-left">
            <button
              onClick={() => setShowIOSModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-500 p-0.5 shadow-lg shadow-emerald-500/20 flex-shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl">
                  🤖
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base sm:text-lg flex items-center gap-1.5">
                  <span>Instal RoboKids SMP</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </h3>
                <p className="text-xs text-slate-400">
                  Nikmati pengalaman belajar cepat seperti aplikasi asli di HP atau Laptop!
                </p>
              </div>
            </div>

            {/* Instruction Steps */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-3.5 mb-5 text-xs text-slate-300">
              {isIOS ? (
                <>
                  <div className="text-sky-300 font-semibold flex items-center gap-1.5 mb-1">
                    <Smartphone className="w-4 h-4" />
                    <span>Panduan Pengguna iPhone / iPad (Safari):</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      Tekan tombol <strong>Bagikan (Share)</strong> <Share2 className="inline w-3.5 h-3.5 mx-1 text-sky-400" /> di bilah bawah browser Safari.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      Gulir ke bawah dan pilih menu <strong>"Tambahkan ke Layar Utama" (Add to Home Screen)</strong> <PlusSquare className="inline w-3.5 h-3.5 mx-1 text-emerald-400" />.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      Tekan <strong>"Tambah" (Add)</strong> di pojok kanan atas. Ikon RoboKids akan langsung muncul di layar utama gadget kamu!
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sky-300 font-semibold flex items-center gap-1.5 mb-1">
                    <Monitor className="w-4 h-4" />
                    <span>Panduan Pasang di Chrome / Edge / Android:</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      {hasNativePrompt ? (
                        <span>Klik tombol instal di bawah ini untuk memulai pemasangan instan otomatis.</span>
                      ) : (
                        <span>Buka menu browser dengan menekan titik tiga <strong>(⋮)</strong> di pojok atas atau ikon instal di bilah tautan (URL bar).</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      Pilih <strong>"Instal Aplikasi" (Install app)</strong> atau <strong>"Tambahkan ke Layar Utama"</strong>.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      Aplikasi RoboKids akan langsung terpasang dan bisa dibuka kapan saja dengan cepat!
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Features badge list */}
            <div className="grid grid-cols-3 gap-2 mb-5 text-[11px] text-center">
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-2">
                <span className="block text-base mb-0.5">⚡</span>
                <span className="text-slate-300 font-medium">Buka Cepat</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-2">
                <span className="block text-base mb-0.5">🚀</span>
                <span className="text-slate-300 font-medium">Layar Penuh</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-2">
                <span className="block text-base mb-0.5">💾</span>
                <span className="text-slate-300 font-medium">Hemat Kuota</span>
              </div>
            </div>

            {/* Action button */}
            <div className="flex items-center gap-3">
              {hasNativePrompt ? (
                <button
                  onClick={() => {
                    sfx.playVictory();
                    triggerInstall();
                    setShowIOSModal(false);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all text-center"
                >
                  Pasang Sekarang
                </button>
              ) : (
                <button
                  onClick={() => setShowIOSModal(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/25 transition-all text-center"
                >
                  Saya Mengerti
                </button>
              )}
              <button
                onClick={() => setShowIOSModal(false)}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

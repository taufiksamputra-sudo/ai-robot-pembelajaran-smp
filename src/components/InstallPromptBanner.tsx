import React, { useState, useEffect } from 'react';
import { Download, X, Sparkles, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { sfx } from '../utils/sfx';

export const InstallPromptBanner: React.FC = () => {
  const { canInstall, isInstalled, triggerInstall } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    // Only show banner after a few seconds if not dismissed previously in this session
    const dismissed = sessionStorage.getItem('robokids_pwa_banner_dismissed');
    if (!dismissed && canInstall && !isInstalled) {
      const timer = setTimeout(() => {
        setIsDismissed(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [canInstall, isInstalled]);

  if (isInstalled || isDismissed || !canInstall) {
    return null;
  }

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('robokids_pwa_banner_dismissed', 'true');
  };

  const handleInstallClick = () => {
    sfx.playVictory();
    triggerInstall();
  };

  return (
    <aside aria-label="Instal Aplikasi" className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-500/40 rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-indigo-950/60 backdrop-blur-md flex items-center justify-between gap-3 text-left">
        {/* App Icon */}
        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-amber-300 p-0.5 flex-shrink-0 shadow-lg shadow-sky-500/30">
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-xl">
            🤖
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white flex items-center gap-1">
              <span>Pasang RoboKids SMP</span>
              <Sparkles className="w-3 h-3 text-amber-300" />
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-1 rounded border border-emerald-500/30">
              Gratis
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug line-clamp-1">
            Bisa dibuka langsung dari layar utama HP / PC!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={handleInstallClick}
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Pasang</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
            title="Tutup pemberitahuan"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

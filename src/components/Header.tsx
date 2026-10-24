import React from 'react';
import {
  Sparkles,
  Download,
  Volume2,
  VolumeX,
  Smartphone,
  Monitor,
  Square,
  Layers,
  Wand2,
} from 'lucide-react';
import { AspectRatio, PromoProject } from '../types';
import { PRESET_TEMPLATES } from '../utils/sampleData';

interface HeaderProps {
  project: PromoProject;
  onUpdateProject: (updates: Partial<PromoProject>) => void;
  onLoadPreset: (templateIndex: number) => void;
  onOpenAIModal: () => void;
  onOpenExportModal: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  project,
  onUpdateProject,
  onLoadPreset,
  onOpenAIModal,
  onOpenExportModal,
  isMuted,
  onToggleMute,
}) => {
  return (
    <header className="h-16 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 flex items-center justify-between z-30 select-none">
      {/* Brand & Project Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
          <Wand2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300 tracking-tight text-lg">
              PromoCraft AI
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Studio
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={project.appName}
              onChange={(e) => onUpdateProject({ appName: e.target.value })}
              className="text-xs text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/60 focus:bg-slate-800 px-1.5 py-0.5 rounded border border-transparent focus:border-slate-700 outline-none max-w-[140px] truncate transition-colors"
              placeholder="Nama Aplikasi"
            />
            <span className="text-slate-600 text-xs">•</span>
            <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
              {project.scenes.length} Adegan ({project.scenes.reduce((a, s) => a + s.duration, 0).toFixed(1)}s)
            </span>
          </div>
        </div>
      </div>

      {/* Center Controls: Aspect Ratio & Preset Dropdown */}
      <div className="hidden md:flex items-center gap-3">
        {/* Template Quick Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg p-1">
          <Layers className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
          <select
            className="bg-transparent text-xs text-slate-200 outline-none cursor-pointer pr-2 py-0.5"
            onChange={(e) => onLoadPreset(parseInt(e.target.value, 10))}
            defaultValue="0"
          >
            {PRESET_TEMPLATES.map((tmpl, idx) => (
              <option key={idx} value={idx} className="bg-slate-900 text-slate-200">
                Template: {tmpl.name} ({tmpl.category})
              </option>
            ))}
          </select>
        </div>

        {/* Aspect Ratio Switcher */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 gap-1">
          <button
            onClick={() => onUpdateProject({ aspectRatio: '9:16' })}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
              project.aspectRatio === '9:16'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="9:16 (TikTok, Reels, Shorts)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>9:16</span>
          </button>
          <button
            onClick={() => onUpdateProject({ aspectRatio: '16:9' })}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
              project.aspectRatio === '16:9'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="16:9 (YouTube, Landscape Video)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>16:9</span>
          </button>
          <button
            onClick={() => onUpdateProject({ aspectRatio: '1:1' })}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
              project.aspectRatio === '1:1'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="1:1 (Instagram Feed)"
          >
            <Square className="w-3.5 h-3.5" />
            <span>1:1</span>
          </button>
        </div>
      </div>

      {/* Right Actions: AI Creator, Audio Toggle, Export Video */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={onToggleMute}
          className={`p-2 rounded-lg border transition-colors ${
            isMuted
              ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
          }`}
          title={isMuted ? 'Nyalakan Audio' : 'Bisukan Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <button
          onClick={onOpenAIModal}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 ring-1 ring-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
          <span>Buat Video AI</span>
        </button>

        <button
          onClick={onOpenExportModal}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 ring-1 ring-emerald-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Ekspor Video</span>
        </button>
      </div>
    </header>
  );
};

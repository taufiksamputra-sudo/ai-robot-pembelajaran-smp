import React from 'react';
import {
  Map,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Gamepad2,
  Trophy,
  Volume2,
  VolumeX,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { CHARACTERS } from '../data/characters';
import { UserStudyProgress } from '../data/curriculumTypes';
import { sfx } from '../utils/sfx';
import { PWAInstallButton } from './PWAInstallButton';

export type ActiveTab = 'map' | 'learn' | 'quiz' | 'ai' | 'minigame' | 'report';

interface NavbarHUDProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  progress: UserStudyProgress;
  onOpenBuddyPicker: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const NavbarHUD: React.FC<NavbarHUDProps> = ({
  activeTab,
  onSelectTab,
  progress,
  onOpenBuddyPicker,
  soundEnabled,
  onToggleSound,
}) => {
  const buddy = CHARACTERS[progress.selectedBuddy] || CHARACTERS.robo;

  // Calculate total stars
  const totalStars = Object.values(progress.completedSubChapters).reduce(
    (sum, cur) => sum + (cur.stars || 0),
    0
  );

  // Calculate level
  const level = Math.floor(progress.xp / 100) + 1;
  const levelTitle =
    level >= 10
      ? 'Pendekar Sastra'
      : level >= 6
      ? 'Pujangga Muda'
      : level >= 3
      ? 'Penjelajah Bahasa'
      : 'Petualang Pemula';

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 h-16 flex items-center justify-between gap-2">
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-amber-400 p-0.5 shadow-lg shadow-sky-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-xl">
              🤖
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-200 to-amber-300 text-sm sm:text-base tracking-tight">
                RoboKids SMP
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 hidden xs:inline-block">
                Kelas 7
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate max-w-[170px] sm:max-w-xs">
              Bahasa Indonesia • Kurikulum Merdeka
            </p>
          </div>
        </div>

        {/* Center: Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-950/80 border border-slate-800/80 rounded-xl p-1">
          {[
            { id: 'map', label: 'Peta Petualangan', icon: Map },
            { id: 'learn', label: 'Materi Belajar', icon: BookOpen },
            { id: 'quiz', label: 'Kuis 10 Soal', icon: HelpCircle },
            { id: 'ai', label: 'Tanya Robo-AI', icon: MessageSquare, badge: 'AI' },
            { id: 'minigame', label: 'Mini Game', icon: Gamepad2 },
            { id: 'report', label: 'Rapor & Trofi', icon: Trophy },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  sfx.playCoin();
                  onSelectTab(item.id as ActiveTab);
                }}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] px-1 rounded-full bg-amber-400 text-slate-950 font-extrabold animate-pulse">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Buddy Chip, Coins, Stars, Sound */}
        <div className="flex items-center gap-2">
          {/* Active Companion Button */}
          <button
            onClick={onOpenBuddyPicker}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-left transition-all hover:scale-[1.02] shadow-sm"
            title="Ganti Sahabat Belajar"
          >
            <span className="text-lg">{buddy.avatarEmoji}</span>
            <div className="hidden sm:block">
              <span className="block text-[11px] font-bold text-white leading-tight">
                {buddy.name}
              </span>
              <span className="block text-[9px] text-slate-400 leading-tight">
                Sahabat
              </span>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {/* Stats Badges */}
          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2 py-1 rounded-xl">
            {/* Stars */}
            <div className="flex items-center gap-1 text-xs font-bold text-amber-400" title="Total Bintang Misi">
              <span>⭐</span>
              <span>{totalStars}</span>
            </div>

            <span className="text-slate-700 text-xs">|</span>

            {/* Coins */}
            <div className="flex items-center gap-1 text-xs font-bold text-yellow-300" title="Koin Petualang">
              <span>🪙</span>
              <span>{progress.coins}</span>
            </div>

            <span className="text-slate-700 text-xs hidden sm:inline">|</span>

            {/* Level / XP */}
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-sky-300" title={`${levelTitle} (${progress.xp} XP)`}>
              <Sparkles className="w-3 h-3 text-sky-400" />
              <span>Lv.{level}</span>
            </div>
          </div>

          {/* PWA Install Button */}
          <PWAInstallButton />

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-xl border transition-colors ${
              soundEnabled
                ? 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}
            title={soundEnabled ? 'Matikan Suara SFX' : 'Nyalakan Suara SFX'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Tabs Bar below header */}
      <div className="lg:hidden flex items-center justify-around bg-slate-950 px-2 py-1.5 border-t border-slate-800/80 overflow-x-auto scrollbar-none">
        {[
          { id: 'map', label: 'Peta', icon: Map },
          { id: 'learn', label: 'Materi', icon: BookOpen },
          { id: 'quiz', label: 'Kuis 10', icon: HelpCircle },
          { id: 'ai', label: 'Tanya AI', icon: MessageSquare },
          { id: 'minigame', label: 'Game', icon: Gamepad2 },
          { id: 'report', label: 'Rapor', icon: Trophy },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                sfx.playCoin();
                onSelectTab(item.id as ActiveTab);
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};

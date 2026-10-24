import React, { useState } from 'react';
import {
  Compass,
  Star,
  CheckCircle2,
  Lock,
  ArrowRight,
  BookOpen,
  Sparkles,
  Award,
} from 'lucide-react';
import { ALL_CHAPTERS } from '../data/chapters';
import { Chapter, SubChapter, UserStudyProgress } from '../data/curriculumTypes';
import { CHARACTERS, ROBO_ADVENTURE_IMAGE_PATH } from '../data/characters';
import { sfx } from '../utils/sfx';

interface AdventureMapProps {
  progress: UserStudyProgress;
  onOpenSubChapter: (chapterId: string, subChapterId: string, mode: 'learn' | 'quiz') => void;
  onOpenBuddyPicker: () => void;
}

export const AdventureMap: React.FC<AdventureMapProps> = ({
  progress,
  onOpenSubChapter,
  onOpenBuddyPicker,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('bab-1');
  const activeBuddy = CHARACTERS[progress.selectedBuddy] || CHARACTERS.robo;

  const currentChapter =
    ALL_CHAPTERS.find((c) => c.id === selectedChapterId) || ALL_CHAPTERS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 select-none">
      {/* Hero Welcome Banner with Robo Adventure Art */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <img
            src={ROBO_ADVENTURE_IMAGE_PATH}
            alt="RoboKids"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold">
              <Compass className="w-3.5 h-3.5 animate-spin" />
              <span>Petualangan Bahasa Indonesia Kelas 7 SMP</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Jelajahi 6 Pulau Bab & 280 Soal Interaktif!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Kuasai materi teks deskripsi, puisi rakyat, teks prosedur, teks berita, bedah buku, dan surat resmi bersama 5 sahabat petualang RoboKids!
            </p>
          </div>

          {/* Active Companion Card */}
          <div
            onClick={onOpenBuddyPicker}
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 shadow-lg cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] group flex-shrink-0"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform">
              {activeBuddy.avatarEmoji}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-white">
                  {activeBuddy.name}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold">
                  {activeBuddy.badge}
                </span>
              </div>
              <p className="text-xs text-amber-300 italic font-medium">
                "{activeBuddy.quote}"
              </p>
              <span className="text-[10px] text-slate-400 group-hover:text-sky-300 transition-colors">
                Klik untuk ganti sahabat →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Island Selector Cards */}
      <div>
        <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Pilih Pulau Bab Pembelajaran:</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {ALL_CHAPTERS.map((chap, idx) => {
            const isSelected = chap.id === selectedChapterId;

            // Calculate stars earned in this chapter
            const chapSubIds = chap.subChapters.map((s) => s.id);
            const starsEarned = chapSubIds.reduce((sum, id) => {
              return sum + (progress.completedSubChapters[id]?.stars || 0);
            }, 0);
            const maxStars = chap.subChapters.length * 3;

            return (
              <button
                key={chap.id}
                onClick={() => {
                  sfx.playCoin();
                  setSelectedChapterId(chap.id);
                }}
                className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800 border-sky-500 ring-2 ring-sky-500/40 shadow-lg shadow-sky-500/10'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-2xl">{chap.icon}</span>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      #{idx + 1}
                    </span>
                  </div>
                  <span className="block text-[11px] font-bold text-sky-400">
                    {chap.number}
                  </span>
                  <h3 className="font-extrabold text-xs text-white line-clamp-1">
                    {chap.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400 font-medium">
                    {chap.subChapters.length} Sub-bab
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{starsEarned}/{maxStars}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Chapter Detail & Sub-Chapters List */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">{currentChapter.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {currentChapter.number}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-white">
                    {currentChapter.title}
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentChapter.description}
                </p>
              </div>
            </div>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300">
            Total Soal Bab Ini: <span className="text-sky-400 font-bold">{currentChapter.subChapters.length * 10} Soal</span>
          </div>
        </div>

        {/* Sub-Chapters Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {currentChapter.subChapters.map((sub, idx) => {
            const subProgress = progress.completedSubChapters[sub.id];
            const isCompleted = !!subProgress;
            const stars = subProgress?.stars || 0;
            const guideChar = CHARACTERS[sub.buddyGuideId] || CHARACTERS.robo;

            return (
              <div
                key={sub.id}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Top Bar: Code & Stars */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-black text-xs">
                        {sub.code}
                      </span>
                      <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                        Sub-bab {sub.code}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((sIndex) => (
                        <Star
                          key={sIndex}
                          className={`w-3.5 h-3.5 ${
                            sIndex <= stars
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-bold text-sm text-slate-100 mb-1 leading-snug">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {sub.summary}
                  </p>

                  {/* Buddy helper pill */}
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-4">
                    <span>{guideChar.avatarEmoji}</span>
                    <span>Panduan dari <strong className="text-slate-300">{guideChar.name}</strong> ({sub.questions.length} Soal Interaktif)</span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => {
                      sfx.playCoin();
                      onOpenSubChapter(currentChapter.id, sub.id, 'learn');
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 transition-all hover:scale-[1.02]"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                    <span>Baca Materi</span>
                  </button>

                  <button
                    onClick={() => {
                      sfx.playCoin();
                      onOpenSubChapter(currentChapter.id, sub.id, 'quiz');
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Kuis 10 Soal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

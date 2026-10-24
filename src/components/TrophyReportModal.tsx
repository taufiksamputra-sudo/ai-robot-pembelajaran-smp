import React from 'react';
import {
  Trophy,
  Star,
  Award,
  CheckCircle2,
  Sparkles,
  BookCheck,
  Flame,
  ShieldCheck,
} from 'lucide-react';
import { ALL_CHAPTERS, TOTAL_QUESTIONS_COUNT, TOTAL_SUBCHAPTERS_COUNT } from '../data/chapters';
import { UserStudyProgress } from '../data/curriculumTypes';
import { CHARACTERS } from '../data/characters';

interface TrophyReportModalProps {
  progress: UserStudyProgress;
  onResetProgress?: () => void;
}

export const TrophyReportModal: React.FC<TrophyReportModalProps> = ({
  progress,
}) => {
  const activeBuddy = CHARACTERS[progress.selectedBuddy] || CHARACTERS.robo;

  // Calculate statistics
  const totalCompletedSub = Object.keys(progress.completedSubChapters).length;
  const totalStars = Object.values(progress.completedSubChapters).reduce(
    (sum, cur) => sum + (cur.stars || 0),
    0
  );
  const maxPossibleStars = TOTAL_SUBCHAPTERS_COUNT * 3;

  const totalCorrectQuestions = Object.values(progress.completedSubChapters).reduce(
    (sum, cur) => sum + (cur.correctCount || 0),
    0
  );

  const level = Math.floor(progress.xp / 100) + 1;
  const levelTitle =
    level >= 10
      ? 'Pendekar Sastra Nusantara'
      : level >= 6
      ? 'Pujangga Muda Berbakat'
      : level >= 3
      ? 'Penjelajah Bahasa Kritis'
      : 'Petualang Bahasa Pemula';

  // Trophy definitions
  const trophies = [
    {
      id: 't-bab1',
      title: 'Pena Jelajah Nusantara',
      desc: 'Selesaikan minimal 3 sub-bab di Bab I (Teks Deskripsi)',
      icon: '🌴',
      isUnlocked: ['bab1-a', 'bab1-b', 'bab1-c'].every((id) => !!progress.completedSubChapters[id]),
    },
    {
      id: 't-bab2',
      title: 'Pujangga Dunia Imajinasi',
      desc: 'Kuasai seluruh puisi rakyat & teks naratif di Bab II',
      icon: '🏰',
      isUnlocked: ['bab2-a', 'bab2-b', 'bab2-c'].every((id) => !!progress.completedSubChapters[id]),
    },
    {
      id: 't-bab3',
      title: 'Duta Hidup Sehat & Bugar',
      desc: 'Selesaikan seluruh teks prosedur di Bab III',
      icon: '🍎',
      isUnlocked: ['bab3-a', 'bab3-b', 'bab3-c', 'bab3-d'].every((id) => !!progress.completedSubChapters[id]),
    },
    {
      id: 't-bab4',
      title: 'Jurnalis Pelindung Bumi',
      desc: 'Kuasai ADIKSIMBA & kalahkan hoaks di Bab IV',
      icon: '🌍',
      isUnlocked: ['bab4-a', 'bab4-b', 'bab4-e'].every((id) => !!progress.completedSubChapters[id]),
    },
    {
      id: 't-bab5',
      title: 'Pembuka Gerbang Dunia',
      desc: 'Bedah buku dan kuasai teks tanggapan di Bab V',
      icon: '📖',
      isUnlocked: ['bab5-a', 'bab5-b', 'bab5-d'].every((id) => !!progress.completedSubChapters[id]),
    },
    {
      id: 't-bab6',
      title: 'Diplomat Surat Santun',
      desc: 'Kuasai surat pribadi & surat dinas di Bab VI',
      icon: '✉️',
      isUnlocked: ['bab6-a', 'bab6-b', 'bab6-c'].every((id) => !!progress.completedSubChapters[id]),
    },
    {
      id: 't-grandmaster',
      title: 'Master Bahasa Indonesia SMP',
      desc: 'Selesaikan seluruh 28 sub-bab kuis kurikulum merdeka!',
      icon: '👑',
      isUnlocked: totalCompletedSub >= TOTAL_SUBCHAPTERS_COUNT,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 select-none">
      {/* Student Rank Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-sky-500 p-0.5 shadow-xl shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-3xl">
                {activeBuddy.avatarEmoji}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                  Level {level}
                </span>
                <span className="text-xs text-sky-400 font-mono font-bold">
                  {progress.xp} XP
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
                {levelTitle}
              </h1>
              <p className="text-xs text-slate-400">
                Didampingi oleh <strong>{activeBuddy.name}</strong> • Siswa Kelas 7 SMP
              </p>
            </div>
          </div>

          {/* Quick numbers */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center min-w-[85px]">
              <span className="block text-2xl font-black text-amber-400">⭐ {totalStars}</span>
              <span className="text-[10px] text-slate-400">/ {maxPossibleStars} Bintang</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center min-w-[85px]">
              <span className="block text-2xl font-black text-yellow-300">🪙 {progress.coins}</span>
              <span className="text-[10px] text-slate-400">Koin Belajar</span>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>Kemajuan Belajar Keseluruhan ({totalCompletedSub}/{TOTAL_SUBCHAPTERS_COUNT} Sub-bab)</span>
            <span className="text-sky-400">{Math.round((totalCompletedSub / TOTAL_SUBCHAPTERS_COUNT) * 100)}%</span>
          </div>
          <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-amber-400 transition-all duration-500"
              style={{ width: `${(totalCompletedSub / TOTAL_SUBCHAPTERS_COUNT) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chapter-by-Chapter Mastery Breakdown */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <h2 className="text-base font-extrabold text-white flex items-center gap-2">
          <BookCheck className="w-5 h-5 text-sky-400" />
          <span>Rapor Bab Bahasa Indonesia Kelas 7:</span>
        </h2>

        <div className="space-y-3">
          {ALL_CHAPTERS.map((chap) => {
            const chapSubIds = chap.subChapters.map((s) => s.id);
            const finishedCount = chapSubIds.filter((id) => !!progress.completedSubChapters[id]).length;
            const starsInChap = chapSubIds.reduce((sum, id) => {
              return sum + (progress.completedSubChapters[id]?.stars || 0);
            }, 0);
            const maxStars = chap.subChapters.length * 3;
            const percent = Math.round((finishedCount / chap.subChapters.length) * 100);

            return (
              <div
                key={chap.id}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{chap.icon}</span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">
                        {chap.number}
                      </span>
                      <h3 className="font-bold text-sm text-white">{chap.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400">
                      {finishedCount} dari {chap.subChapters.length} sub-bab tuntas ({chap.subChapters.length * 10} soal)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{starsInChap}/{maxStars}</span>
                  </div>

                  <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-400 transition-all duration-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-300 w-10 text-right">
                    {percent}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Unlocked Trophies Showcase */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <h2 className="text-base font-extrabold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <span>Koleksi Trofi Petualang RoboKids:</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {trophies.map((trophy) => (
            <div
              key={trophy.id}
              className={`p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                trophy.isUnlocked
                  ? 'bg-slate-950 border-amber-500/40 shadow-md shadow-amber-500/10'
                  : 'bg-slate-950/40 border-slate-800 opacity-40 grayscale'
              }`}
            >
              <div className="text-3xl flex-shrink-0">{trophy.icon}</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-xs text-white">
                    {trophy.title}
                  </h3>
                  {trophy.isUnlocked && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {trophy.desc}
                </p>
                <span
                  className={`text-[9px] font-bold mt-2 inline-block px-1.5 py-0.5 rounded ${
                    trophy.isUnlocked
                      ? 'bg-amber-400/20 text-amber-300'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {trophy.isUnlocked ? 'Tercapai 🏆' : 'Terkunci 🔒'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

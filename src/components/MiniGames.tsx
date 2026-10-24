import React, { useState } from 'react';
import {
  Gamepad2,
  CheckCircle,
  XCircle,
  Sparkles,
  Flame,
  RotateCcw,
  ShieldCheck,
  Feather,
} from 'lucide-react';
import { sfx } from '../utils/sfx';

interface MiniGamesProps {
  onEarnReward: (coins: number, xp: number) => void;
}

export const MiniGames: React.FC<MiniGamesProps> = ({ onEarnReward }) => {
  const [activeGame, setActiveGame] = useState<'hoax' | 'pantun'>('hoax');

  // Game 1: Detektif Fakta vs Hoaks
  const hoaxCases = [
    {
      headline: 'Badan Meteorologi dan Geofisika (BMKG) merilis peringatan potensi hujan lebat di wilayah pesisir Jawa pada akhir pekan.',
      isFact: true,
      reason: 'Fakta: Menyebutkan institusi resmi negara (BMKG) dan data berbasis pantauan meteorologi.',
    },
    {
      headline: 'VIRALKAN! Makan mi instan campur cokelat bisa bikin usus berubah jadi batu dalam 5 menit!',
      isFact: false,
      reason: 'Hoaks: Judul provokatif, memicu kepanikan tanpa bukti klinis kedokteran.',
    },
    {
      headline: 'Kementerian Lingkungan Hidup meluncurkan program daur ulang sampah plastik nasional bertajuk Indonesia Bersih 2026.',
      isFact: true,
      reason: 'Fakta: Program resmi kementerian dengan tujuan jelas dan dapat diverifikasi.',
    },
    {
      headline: 'SEBARKAN KE 10 GRUP! Nomor rekening ini membagikan uang 50 juta rupiah cuma-cuma dari pemerintah!',
      isFact: false,
      reason: 'Hoaks: Modus penipuan klasik yang memaksa pesan disebarluaskan.',
    },
    {
      headline: 'Taman Nasional Komodo membatasi kuota kunjungan harian demi menjaga konservasi habitat asli komodo.',
      isFact: true,
      reason: 'Fakta: Kebijakan konservasi nyata dari balai taman nasional.',
    },
    {
      headline: 'Beredar kabar bahwa bulan depan matahari akan terbit dari barat selama 3 hari berturut-turut.',
      isFact: false,
      reason: 'Hoaks: Berita palsu yang memanipulasi kepanikan tanpa dasar ilmu astronomi.',
    },
  ];

  const [hoaxIdx, setHoaxIdx] = useState(0);
  const [hoaxScore, setHoaxScore] = useState(0);
  const [hoaxFinished, setHoaxFinished] = useState(false);
  const [hoaxAnswered, setHoaxAnswered] = useState<boolean | null>(null);

  const handleHoaxAnswer = (userChoseFact: boolean) => {
    if (hoaxAnswered !== null) return;

    const currentCase = hoaxCases[hoaxIdx];
    const isCorrect = userChoseFact === currentCase.isFact;
    setHoaxAnswered(isCorrect);

    if (isCorrect) {
      sfx.playCorrect();
      setHoaxScore((prev) => prev + 1);
    } else {
      sfx.playWrong();
    }
  };

  const handleNextHoax = () => {
    if (hoaxIdx < hoaxCases.length - 1) {
      setHoaxIdx((prev) => prev + 1);
      setHoaxAnswered(null);
    } else {
      setHoaxFinished(true);
      sfx.playFanfare();
      onEarnReward(hoaxScore * 15, hoaxScore * 20);
    }
  };

  // Game 2: Tebak Majas & Pantun Kilat
  const pantunPuzzles = [
    {
      question: 'Manakah majas dari kalimat: "Angin malam bernyanyi merdu menyapa dedaunan cemara."',
      options: ['Majas Personifikasi', 'Majas Metafora', 'Majas Hiperbola', 'Majas Litotes'],
      answer: 0,
      tip: 'Angin seolah bernyanyi seperti manusia (personifikasi)!',
    },
    {
      question: 'Lengkapi bait pantun ini:\n"Pohon jati berdaun lebat,\nTumbuh rindang di dekat kolam.\n..."',
      options: [
        'Rajin belajar jadilah hebat,\nBudi pekerti teguh mendalam.',
        'Makan nasi goreng pedas,\nPerut kenyang hati senang.',
        'Ayo tidur sampai siang,\nSupaya tidak lelah.',
        'Kucing lari mengejar tikus,\nTikus bersembunyi di kardus.'
      ],
      answer: 0,
      tip: 'Sajak akhir -bat dan -lam berima serasi dengan le-bat dan ko-lam!',
    },
    {
      question: 'Kalimat: "Senyum gadis itu laksana embun pagi yang menyejukkan hati." menggunakan majas...',
      options: ['Simile / Asosiasi', 'Ironi sindiran', 'Sinisme', 'Sinekdoke'],
      answer: 0,
      tip: 'Ada kata pembanding "laksana" yang menandai simile!',
    },
    {
      question: 'Kalimat: "Suara sorak penonton di stadion itu membelah angkasa raya." menggunakan majas...',
      options: ['Majas Hiperbola', 'Majas Litotes', 'Majas Personifikasi', 'Majas Eufemisme'],
      answer: 0,
      tip: 'Membelah angkasa raya adalah pernyataan berlebih-lebihan (hiperbola)!',
    },
  ];

  const [pantunIdx, setPantunIdx] = useState(0);
  const [pantunScore, setPantunScore] = useState(0);
  const [pantunAnswered, setPantunAnswered] = useState<number | null>(null);
  const [pantunFinished, setPantunFinished] = useState(false);

  const handlePantunAnswer = (optIdx: number) => {
    if (pantunAnswered !== null) return;
    setPantunAnswered(optIdx);

    const isCorrect = optIdx === pantunPuzzles[pantunIdx].answer;
    if (isCorrect) {
      sfx.playCorrect();
      setPantunScore((prev) => prev + 1);
    } else {
      sfx.playWrong();
    }
  };

  const handleNextPantun = () => {
    if (pantunIdx < pantunPuzzles.length - 1) {
      setPantunIdx((prev) => prev + 1);
      setPantunAnswered(null);
    } else {
      setPantunFinished(true);
      sfx.playFanfare();
      onEarnReward(pantunScore * 20, pantunScore * 25);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 select-none">
      {/* Header Tabs */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-amber-400" />
            <span>Mini Game Petualangan Bahasa</span>
          </h1>
          <p className="text-xs text-slate-400">
            Latih ketajaman nalar dan insting bahasa lewat game interaktif seru!
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1 rounded-2xl">
          <button
            onClick={() => setActiveGame('hoax')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeGame === 'hoax'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Detektif Berita</span>
          </button>

          <button
            onClick={() => setActiveGame('pantun')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeGame === 'pantun'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Tebak Majas & Pantun</span>
          </button>
        </div>
      </div>

      {/* GAME 1: DETEKTIF BERITA */}
      {activeGame === 'hoax' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          {!hoaxFinished ? (
            <>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-3">
                <span className="flex items-center gap-1 text-sky-400">
                  <span>🕵️‍♂️ Kasus {hoaxIdx + 1} dari {hoaxCases.length}</span>
                </span>
                <span className="text-amber-400">Skor Benar: {hoaxScore}</span>
              </div>

              {/* Headline Card */}
              <div className="p-6 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-800 text-center space-y-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 inline-block">
                  Periksa Judul Berita Ini:
                </span>
                <p className="text-base sm:text-lg font-extrabold text-white leading-relaxed">
                  "{hoaxCases[hoaxIdx].headline}"
                </p>
              </div>

              {/* Action Buttons: FAKTA vs HOAKS */}
              {hoaxAnswered === null ? (
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button
                    onClick={() => handleHoaxAnswer(true)}
                    className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>FAKTA RESMI ✅</span>
                  </button>

                  <button
                    onClick={() => handleHoaxAnswer(false)}
                    className="p-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <XCircle className="w-5 h-5" />
                    <span>HOAKS PALSU ❌</span>
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{hoaxAnswered ? '🎉' : '❌'}</span>
                    <span className={`font-black text-sm ${hoaxAnswered ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {hoaxAnswered ? 'Analisis Detektif Tepat!' : 'Kurang Tepat!'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {hoaxCases[hoaxIdx].reason}
                  </p>
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleNextHoax}
                      className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all"
                    >
                      Kasus Berikutnya →
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <span className="text-5xl">🏆</span>
              <h2 className="text-2xl font-black text-white">Misi Detektif Selesai!</h2>
              <p className="text-xs text-slate-300">
                Kamu berhasil mengungkap <strong className="text-emerald-400">{hoaxScore} dari {hoaxCases.length}</strong> kasus berita!
              </p>
              <button
                onClick={() => {
                  setHoaxIdx(0);
                  setHoaxScore(0);
                  setHoaxAnswered(null);
                  setHoaxFinished(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
              >
                Main Lagi
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 2: TEBAK MAJAS & PANTUN */}
      {activeGame === 'pantun' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          {!pantunFinished ? (
            <>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-3">
                <span className="text-sky-400">Tantangan {pantunIdx + 1} dari {pantunPuzzles.length}</span>
                <span className="text-amber-400">Skor: {pantunScore}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-extrabold text-white whitespace-pre-line">
                  {pantunPuzzles[pantunIdx].question}
                </h3>
              </div>

              <div className="space-y-2.5">
                {pantunPuzzles[pantunIdx].options.map((opt, oIdx) => {
                  const isSelected = pantunAnswered === oIdx;
                  const isCorrect = oIdx === pantunPuzzles[pantunIdx].answer;

                  let style = 'bg-slate-950 border-slate-800 hover:bg-slate-800 text-slate-200';
                  if (pantunAnswered !== null) {
                    if (isCorrect) style = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
                    else if (isSelected) style = 'bg-rose-950 border-rose-500 text-rose-200';
                    else style = 'opacity-30 bg-slate-950 text-slate-500';
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={pantunAnswered !== null}
                      onClick={() => handlePantunAnswer(oIdx)}
                      className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm whitespace-pre-line transition-all ${style}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {pantunAnswered !== null && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 animate-in fade-in">
                  <p className="text-xs text-amber-300">
                    💡 <strong>Kunci Jawaban:</strong> {pantunPuzzles[pantunIdx].tip}
                  </p>
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={handleNextPantun}
                      className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
                    >
                      Tantangan Berikutnya →
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <span className="text-5xl">🎉</span>
              <h2 className="text-2xl font-black text-white">Tantangan Pantun Selesai!</h2>
              <p className="text-xs text-slate-300">
                Skor akhir: <strong className="text-sky-400">{pantunScore} dari {pantunPuzzles.length}</strong>!
              </p>
              <button
                onClick={() => {
                  setPantunIdx(0);
                  setPantunScore(0);
                  setPantunAnswered(null);
                  setPantunFinished(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
              >
                Main Lagi
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

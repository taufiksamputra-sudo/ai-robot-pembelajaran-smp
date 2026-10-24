import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Sparkles,
  Trophy,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Flame,
  Award,
} from 'lucide-react';
import { Chapter, QuizQuestion, SubChapter } from '../data/curriculumTypes';
import { CHARACTERS } from '../data/characters';
import { sfx } from '../utils/sfx';

interface QuizArenaProps {
  chapter: Chapter;
  subChapter: SubChapter;
  selectedBuddyId: string;
  onFinishQuiz: (subChapterId: string, score: number, correctCount: number, stars: number) => void;
  onBackToMaterial: () => void;
  onBackToMap: () => void;
}

export const QuizArena: React.FC<QuizArenaProps> = ({
  chapter,
  subChapter,
  selectedBuddyId,
  onFinishQuiz,
  onBackToMaterial,
  onBackToMap,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [highestStreak, setHighestStreak] = useState<number>(0);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [timerEnabled, setTimerEnabled] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(35);

  const buddy = CHARACTERS[selectedBuddyId] || CHARACTERS.robo;
  const questions = subChapter.questions;
  const currentQ = questions[currentIdx];

  // Timer countdown
  useEffect(() => {
    if (!timerEnabled || isAnswered || isQuizFinished) return;

    if (timeLeft <= 0) {
      // Time is up, auto submit wrong
      handleSelectOption(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timerEnabled, timeLeft, isAnswered, isQuizFinished]);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctAnswer;
    if (isCorrect) {
      sfx.playCorrect();
      setCorrectAnswersCount((prev) => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) setHighestStreak(newStreak);
    } else {
      sfx.playWrong();
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(35);
    } else {
      // Finished all 10 questions!
      const totalCorrect = correctAnswersCount + (selectedOption === currentQ.correctAnswer ? 0 : 0);
      const finalScore = Math.round((totalCorrect / questions.length) * 100);
      const starsEarned = finalScore >= 90 ? 3 : finalScore >= 70 ? 2 : 1;

      setIsQuizFinished(true);
      sfx.playFanfare();
      onFinishQuiz(subChapter.id, finalScore, totalCorrect, starsEarned);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectAnswersCount(0);
    setStreak(0);
    setIsQuizFinished(false);
    setTimeLeft(35);
  };

  // Final Results Screen
  if (isQuizFinished) {
    const finalScore = Math.round((correctAnswersCount / questions.length) * 100);
    const starsEarned = finalScore >= 90 ? 3 : finalScore >= 70 ? 2 : 1;
    const coinsEarned = finalScore >= 90 ? 100 : finalScore >= 70 ? 60 : 30;

    return (
      <div className="max-w-xl mx-auto px-4 py-8 select-none">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-300">
          {/* Trophy Header */}
          <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-amber-500/20 to-sky-500/20 border border-amber-500/30 text-5xl sm:text-6xl animate-bounce">
            🏆
          </div>

          <div>
            <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Misi 10 Soal Selesai!
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              {finalScore >= 90
                ? 'Luar Biasa, Jawara Bahasa! 🌟'
                : finalScore >= 70
                ? 'Hebat, Hasil yang Bagus! 👏'
                : 'Bagus, Terus Semangat Berlatih! 💪'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Sub-bab {subChapter.code}: {subChapter.title}
            </p>
          </div>

          {/* Stars display */}
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3].map((sIndex) => (
              <span
                key={sIndex}
                className={`text-4xl sm:text-5xl transition-transform ${
                  sIndex <= starsEarned ? 'scale-110 drop-shadow-md' : 'opacity-20 grayscale'
                }`}
              >
                ⭐
              </span>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div>
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Nilai Skor</span>
              <span className="text-2xl font-black text-white">{finalScore}</span>
              <span className="block text-[10px] text-slate-400">/ 100</span>
            </div>

            <div>
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Jawaban Benar</span>
              <span className="text-2xl font-black text-emerald-400">{correctAnswersCount}</span>
              <span className="block text-[10px] text-slate-400">/ 10 Soal</span>
            </div>

            <div>
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Hadiah Koin</span>
              <span className="text-2xl font-black text-amber-400">+{coinsEarned}</span>
              <span className="block text-[10px] text-slate-400">🪙 Koin</span>
            </div>
          </div>

          {/* Buddy Comment */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-left">
            <span className="text-4xl">{buddy.avatarEmoji}</span>
            <div>
              <span className="font-bold text-xs text-white block">
                Komentar {buddy.name}:
              </span>
              <p className="text-xs text-slate-300 italic">
                {finalScore >= 90
                  ? `"${buddy.quote} Kamu membuktikan pemahamanmu luar biasa! Ayo kita taklukkan sub-bab berikutnya!"`
                  : `"${buddy.quote} Setiap kesalahan adalah jalan menuju kepintaran. Coba pelajari lagi bagian yang belum dipahami ya!"`}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
            <button
              onClick={handleRestartQuiz}
              className="w-full sm:flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis</span>
            </button>

            <button
              onClick={onBackToMaterial}
              className="w-full sm:flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Buka Materi</span>
            </button>

            <button
              onClick={onBackToMap}
              className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-xs font-bold text-white shadow-lg shadow-sky-600/20 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02]"
            >
              <span>Lanjut ke Peta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz Playing Screen
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-5 select-none">
      {/* Top Header: Sub-bab info & Transport */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onBackToMaterial}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold transition-colors"
        >
          <span>← Materi Sub-bab {subChapter.code}</span>
        </button>

        <div className="flex items-center gap-3">
          {/* Streak indicator */}
          {streak > 1 && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-extrabold animate-bounce">
              <Flame className="w-3.5 h-3.5 fill-orange-400" />
              <span>Combo x{streak}!</span>
            </div>
          )}

          {/* Timer toggle & display */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
            <Clock className={`w-3.5 h-3.5 ${timeLeft <= 10 ? 'text-rose-400 animate-spin' : 'text-slate-400'}`} />
            <span className={timeLeft <= 10 ? 'text-rose-400 font-bold' : 'text-slate-300'}>
              {timeLeft}s
            </span>
            <button
              onClick={() => setTimerEnabled(!timerEnabled)}
              className="text-[10px] text-slate-500 hover:text-slate-300 ml-1 underline"
            >
              {timerEnabled ? 'Santai' : 'Aktifkan'}
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar & Question Counter */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
          <span>
            Soal <strong className="text-white">{currentIdx + 1}</strong> dari {questions.length}
          </span>
          <span className="text-sky-400">
            Benar: {correctAnswersCount}
          </span>
        </div>
        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-amber-400 transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Box Card */}
      <div className="p-5 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5">
        {/* Question Text */}
        <div className="space-y-3">
          <h2 className="text-base sm:text-lg font-extrabold text-white leading-snug">
            {currentQ.questionText}
          </h2>

          {/* Optional Passage Snippet */}
          {currentQ.passageSnippet && (
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-amber-200/90 italic font-medium leading-relaxed">
              "{currentQ.passageSnippet}"
            </div>
          )}
        </div>

        {/* Options List */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt, oIndex) => {
            const letter = ['A', 'B', 'C', 'D'][oIndex];
            const isSelected = selectedOption === oIndex;
            const isCorrectAnswer = oIndex === currentQ.correctAnswer;

            let btnStyle = 'bg-slate-950/80 hover:bg-slate-800/80 border-slate-800 text-slate-200';
            if (isAnswered) {
              if (isCorrectAnswer) {
                btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40 font-bold';
              } else if (isSelected && !isCorrectAnswer) {
                btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 ring-2 ring-rose-500/40';
              } else {
                btnStyle = 'opacity-40 bg-slate-950 border-slate-800 text-slate-500';
              }
            }

            return (
              <button
                key={oIndex}
                disabled={isAnswered}
                onClick={() => handleSelectOption(oIndex)}
                className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm flex items-start gap-3 transition-all ${btnStyle}`}
              >
                <span
                  className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                    isAnswered && isCorrectAnswer
                      ? 'bg-emerald-500 text-white'
                      : isAnswered && isSelected
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {letter}
                </span>

                <span className="flex-1 leading-relaxed">{opt}</span>

                {isAnswered && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrectAnswer && (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Post-Answer Explanation Box */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <span className="text-xl">
                {selectedOption === currentQ.correctAnswer ? '🎉' : '💡'}
              </span>
              <span
                className={`font-black text-xs uppercase tracking-wider ${
                  selectedOption === currentQ.correctAnswer
                    ? 'text-emerald-400'
                    : 'text-amber-400'
                }`}
              >
                {selectedOption === currentQ.correctAnswer ? 'Jawaban Benar!' : 'Pembahasan Jawaban:'}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {currentQ.explanation}
            </p>

            {currentQ.characterTip && (
              <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 text-[11px] text-amber-300 italic">
                <span>{CHARACTERS[currentQ.characterTip.characterId]?.avatarEmoji || buddy.avatarEmoji}</span>
                <span>
                  <strong>Tip dari {CHARACTERS[currentQ.characterTip.characterId]?.name || buddy.name}:</strong> "{currentQ.characterTip.tipText}"
                </span>
              </div>
            )}
          </div>
        )}

        {/* Next Question Button */}
        {isAnswered && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-sky-600/25 flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{currentIdx < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

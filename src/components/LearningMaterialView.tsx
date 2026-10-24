import React, { useState } from 'react';
import {
  Volume2,
  VolumeX,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';
import { Chapter, SubChapter } from '../data/curriculumTypes';
import { CHARACTERS } from '../data/characters';
import { sfx } from '../utils/sfx';

interface LearningMaterialViewProps {
  chapter: Chapter;
  subChapter: SubChapter;
  onStartQuiz: () => void;
  onBackToMap: () => void;
  onNavigateSubChapter: (direction: 'prev' | 'next') => void;
}

export const LearningMaterialView: React.FC<LearningMaterialViewProps> = ({
  chapter,
  subChapter,
  onStartQuiz,
  onBackToMap,
  onNavigateSubChapter,
}) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const guideChar = CHARACTERS[subChapter.buddyGuideId] || CHARACTERS.robo;

  const handleToggleSpeak = () => {
    if (isSpeaking) {
      sfx.stopSpeaking();
      setIsSpeaking(false);
    } else {
      const fullSpeech = `${chapter.number}. ${chapter.title}. Sub-bab ${subChapter.code}: ${subChapter.title}. ${subChapter.summary}. ${subChapter.materialSections.map(s => `${s.heading}. ${s.body}`).join('. ')}`;
      setIsSpeaking(true);
      sfx.speakText(fullSpeech, () => setIsSpeaking(false));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 select-none">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => {
            sfx.stopSpeaking();
            onBackToMap();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Peta</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleSpeak}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
              isSpeaking
                ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-pulse'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-sky-400" />}
            <span>{isSpeaking ? 'Hentikan Audio' : 'Dengarkan Materi (TTS)'}</span>
          </button>

          <button
            onClick={() => {
              sfx.stopSpeaking();
              onStartQuiz();
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Kuis 10 Soal</span>
          </button>
        </div>
      </div>

      {/* Main Material Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        {/* Header Title */}
        <div className="border-b border-slate-800 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 mb-1.5">
            <span>{chapter.icon}</span>
            <span>{chapter.number}: {chapter.title}</span>
            <span>•</span>
            <span className="text-amber-400">Sub-bab {subChapter.code}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {subChapter.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            {subChapter.summary}
          </p>
        </div>

        {/* Companion Tip Callout */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 to-indigo-950/40 border border-slate-800 flex items-start gap-3.5">
          <div className="text-3xl flex-shrink-0 mt-0.5">{guideChar.avatarEmoji}</div>
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-extrabold text-xs text-white">
                Tips Petualang dari {guideChar.name}
              </span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 font-bold">
                {guideChar.badge}
              </span>
            </div>
            <p className="text-xs text-slate-300 italic">
              "{guideChar.quote} Pahami konsep inti berikut sebelum menguji kemampuanmu di kuis 10 soal ya!"
            </p>
          </div>
        </div>

        {/* Material Content Sections */}
        <div className="space-y-6 text-slate-200">
          {subChapter.materialSections.map((sec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3"
            >
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
                <span>{sec.heading}</span>
              </h3>

              <div className="text-xs sm:text-sm leading-relaxed text-slate-300 whitespace-pre-line">
                {sec.body}
              </div>

              {sec.example && (
                <div className="p-3.5 rounded-xl bg-slate-900 border-l-4 border-amber-400 border-slate-800 text-xs">
                  <span className="font-bold text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Contoh Nyata:</span>
                  </span>
                  <p className="italic text-slate-300">{sec.example}</p>
                </div>
              )}

              {sec.keyRule && (
                <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30 text-xs text-sky-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span><strong>Kaidah Kunci:</strong> {sec.keyRule}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Big Start Quiz CTA */}
        <div className="pt-4 border-t border-slate-800 text-center space-y-3">
          <p className="text-xs text-slate-400">
            Sudah siap menguji pemahaman materi ini? Ada <strong>10 soal pilihan ganda interaktif</strong> menantimu!
          </p>

          <button
            onClick={() => {
              sfx.stopSpeaking();
              onStartQuiz();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-indigo-600 to-sky-600 hover:from-amber-400 hover:to-sky-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>Mulai Kuis 10 Soal Sekarang! 🚀</span>
          </button>
        </div>

        {/* Previous & Next Sub-chapter Navigation */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
          <button
            onClick={() => onNavigateSubChapter('prev')}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Sub-bab Sebelumnya</span>
          </button>

          <button
            onClick={() => onNavigateSubChapter('next')}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Sub-bab Berikutnya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

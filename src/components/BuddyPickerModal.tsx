import React from 'react';
import { X, Check, Volume2, Sparkles } from 'lucide-react';
import { CHARACTERS, ROBO_ADVENTURE_IMAGE_PATH } from '../data/characters';
import { sfx } from '../utils/sfx';

interface BuddyPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBuddyId: string;
  onSelectBuddy: (id: string) => void;
}

export const BuddyPickerModal: React.FC<BuddyPickerModalProps> = ({
  isOpen,
  onClose,
  selectedBuddyId,
  onSelectBuddy,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Banner with Official Robo Adventure Image */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-slate-800">
          <img
            src={ROBO_ADVENTURE_IMAGE_PATH}
            alt="RoboKids Adventure"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 inline-block mb-1">
              RoboKids 5 Sahabat
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
              Pilih Sahabat Belajar Petualanganmu!
            </h2>
            <p className="text-xs text-slate-300 drop-shadow">
              Pilih karakter favoritmu yang akan menemanimu belajar materi dan kuis 10 soal!
            </p>
          </div>
        </div>

        {/* Character Grid */}
        <div className="p-4 sm:p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {Object.values(CHARACTERS).map((char) => {
            const isSelected = char.id === selectedBuddyId;
            return (
              <div
                key={char.id}
                onClick={() => {
                  onSelectBuddy(char.id);
                  sfx.playCoin();
                  sfx.speakText(char.greetingVoice);
                }}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-sky-500 ring-2 ring-sky-500/50 shadow-lg shadow-sky-500/10'
                    : 'bg-slate-950/60 hover:bg-slate-800/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{char.avatarEmoji}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-extrabold text-sm text-white">
                            {char.name}
                          </h3>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${char.bgGradient} text-white`}>
                            {char.badge}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-medium">
                          {char.title}
                        </p>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="p-1 rounded-full bg-sky-500 text-white shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          sfx.speakText(char.greetingVoice);
                        }}
                        className="p-1 text-slate-500 hover:text-white rounded hover:bg-slate-800"
                        title="Dengar Suara Sapaan"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Character Quote */}
                  <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800/80 mb-2.5">
                    <p className="italic text-[11px] font-semibold text-amber-300">
                      "{char.quote}"
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">
                    {char.personality}
                  </p>
                </div>

                {/* Traits tags */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800/80">
                  {char.traits.map((tr) => (
                    <span
                      key={tr}
                      className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      • {tr}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Karakter akan bersuara saat menjawab kuis dan belajar!</span>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-sky-600/30 transition-all hover:scale-[1.02]"
          >
            Selesai Memilih
          </button>
        </div>
      </div>
    </div>
  );
};

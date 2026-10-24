import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  Bot,
  User,
  Volume2,
  VolumeX,
  Lightbulb,
  RotateCcw,
  MessageSquare,
} from 'lucide-react';
import { CHARACTERS } from '../data/characters';
import { sfx } from '../utils/sfx';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  characterId?: string;
  time: string;
}

interface AITutorChatProps {
  currentBuddyId: string;
  onSelectBuddy: (id: string) => void;
}

export const AITutorChat: React.FC<AITutorChatProps> = ({
  currentBuddyId,
  onSelectBuddy,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-init',
      sender: 'bot',
      characterId: currentBuddyId,
      text: `Beep boop! Halo Petualang Muda! Aku siap membantumu belajar Bahasa Indonesia Kelas 7 SMP! 🌟\n\nKamu bisa bertanya materi apa saja: teks deskripsi, puisi rakyat pantun & gurindam, teks prosedur, teks berita, bedah buku, atau tata cara menulis surat resmi. Mau bahas topik apa hari ini?`,
      time: 'Baru saja',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const activeBuddy = CHARACTERS[currentBuddyId] || CHARACTERS.robo;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickPrompts = [
    'Buatkan contoh pantun nasihat rajin belajar (sajak a-b-a-b)',
    'Apa bedanya majas personifikasi dan metafora dengan contohnya?',
    'Jelaskan cara mencari unsur ADIKSIMBA dalam teks berita',
    'Bagaimana cara membedakan kata depan "di" dan awalan "di-"?',
    'Bantu cek contoh surat izin sekolah yang santun dan baku',
    'Berikan trik cepat membedakan berita fakta dan hoaks',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: 'u-' + Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsLoading(true);
    sfx.playCoin();

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          character: currentBuddyId,
          topic: 'Bahasa Indonesia Kelas 7 SMP Kurikulum Merdeka',
        }),
      });

      const data = await res.json();
      if (data.success && data.reply) {
        const botMsg: Message = {
          id: 'b-' + Date.now(),
          sender: 'bot',
          characterId: currentBuddyId,
          text: data.reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botMsg]);
        sfx.playCorrect();
      } else {
        throw new Error(data.error || 'Gagal merespons');
      }
    } catch (err: any) {
      console.error('AI Tutor error:', err);
      const errMsg: Message = {
        id: 'b-err-' + Date.now(),
        sender: 'bot',
        characterId: currentBuddyId,
        text: `Wah, sinyal ke Robo Valley agak tersendat. Tapi Tyro dan Robo tetap di sini! Coba tanyakan lagi ya, sahabat!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeakMessage = (msgId: string, text: string) => {
    if (activeSpeechId === msgId) {
      sfx.stopSpeaking();
      setActiveSpeechId(null);
    } else {
      setActiveSpeechId(msgId);
      sfx.speakText(text, () => setActiveSpeechId(null));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-4 select-none">
      {/* Header with Character Companion Selector */}
      <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-md shadow-sky-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl">
              {activeBuddy.avatarEmoji}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-black text-white">
                Tanya Robo-Tutor AI ({activeBuddy.name})
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                Gemini AI
              </span>
            </div>
            <p className="text-xs text-slate-400">
              "{activeBuddy.quote}" • Sahabat Belajar Bahasa Indonesia Kelas 7
            </p>
          </div>
        </div>

        {/* Quick Buddy switch buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {Object.values(CHARACTERS).map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onSelectBuddy(c.id);
                sfx.playCoin();
              }}
              className={`p-1.5 rounded-xl border text-base transition-all ${
                c.id === currentBuddyId
                  ? 'bg-sky-500/20 border-sky-500 ring-2 ring-sky-500/30 scale-110'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700 opacity-60 hover:opacity-100'
              }`}
              title={`Pilih ${c.name} (${c.title})`}
            >
              {c.avatarEmoji}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="h-[460px] rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 overflow-y-auto space-y-4 shadow-inner">
        {messages.map((m) => {
          const isBot = m.sender === 'bot';
          const char = CHARACTERS[m.characterId || currentBuddyId] || activeBuddy;

          return (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${isBot ? '' : 'flex-row-reverse'}`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 shadow-md ${
                  isBot
                    ? 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white'
                    : 'bg-indigo-600 text-white'
                }`}
              >
                {isBot ? char.avatarEmoji : <User className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] sm:max-w-xl p-4 rounded-2xl text-xs sm:text-sm space-y-2 ${
                  isBot
                    ? 'bg-slate-950 border border-slate-800 text-slate-200'
                    : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                }`}
              >
                <div className="flex items-center justify-between gap-3 text-[10px] text-slate-400">
                  <span className="font-bold text-sky-400">
                    {isBot ? char.name : 'Kamu'}
                  </span>
                  <span>{m.time}</span>
                </div>

                <div className="leading-relaxed whitespace-pre-line">
                  {m.text}
                </div>

                {isBot && (
                  <div className="pt-2 border-t border-slate-800/80 flex justify-end">
                    <button
                      onClick={() => handleSpeakMessage(m.id, m.text)}
                      className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded transition-colors ${
                        activeSpeechId === m.id
                          ? 'text-rose-400 bg-rose-500/10'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      title="Dengarkan Suara (TTS)"
                    >
                      {activeSpeechId === m.id ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-sky-400" />
                      )}
                      <span>{activeSpeechId === m.id ? 'Stop Suara' : 'Dengarkan'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2.5 text-xs text-sky-400 font-semibold p-2">
            <span className="animate-spin text-lg">🤖</span>
            <span>{activeBuddy.name} sedang berpikir dan menyusun penjelasan seru...</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Suggested Quick Question Chips */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>Saran Pertanyaan Cepat (Klik untuk bertanya):</span>
        </span>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(qp)}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-[11px] whitespace-nowrap transition-all shadow-sm flex-shrink-0 disabled:opacity-50"
            >
              ✨ {qp}
            </button>
          ))}
        </div>
      </div>

      {/* Input Message Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={`Tanyakan materi Bahasa Indonesia ke ${activeBuddy.name}...`}
          disabled={isLoading}
          className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 shadow-inner"
        />

        <button
          type="submit"
          disabled={!inputVal.trim() || isLoading}
          className="p-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-600/25 transition-all disabled:opacity-40 disabled:hover:scale-100 hover:scale-[1.03] active:scale-[0.97]"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

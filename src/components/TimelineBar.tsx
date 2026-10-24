import React from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Plus,
  Trash2,
  Copy,
  ChevronLeft,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { PromoProject, PromoScene } from '../types';

interface TimelineBarProps {
  project: PromoProject;
  isPlaying: boolean;
  currentTime: number;
  totalDuration: number;
  currentSceneIndex: number;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onSelectScene: (index: number) => void;
  onAddScene: () => void;
  onDuplicateScene: (index: number) => void;
  onDeleteScene: (index: number) => void;
  onMoveScene: (index: number, direction: 'left' | 'right') => void;
  isLooping: boolean;
  onToggleLoop: () => void;
}

export const TimelineBar: React.FC<TimelineBarProps> = ({
  project,
  isPlaying,
  currentTime,
  totalDuration,
  currentSceneIndex,
  onTogglePlay,
  onSeek,
  onSelectScene,
  onAddScene,
  onDuplicateScene,
  onDeleteScene,
  onMoveScene,
  isLooping,
  onToggleLoop,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 10);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms}`;
  };

  // Calculate start times for each scene
  let sceneStartTimes: number[] = [];
  let accum = 0;
  for (let s of project.scenes) {
    sceneStartTimes.push(accum);
    accum += s.duration;
  }

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    onSeek(newTime);
  };

  const handlePrevScene = () => {
    if (currentSceneIndex > 0) {
      onSeek(sceneStartTimes[currentSceneIndex - 1]);
    } else {
      onSeek(0);
    }
  };

  const handleNextScene = () => {
    if (currentSceneIndex < project.scenes.length - 1) {
      onSeek(sceneStartTimes[currentSceneIndex + 1]);
    }
  };

  return (
    <div className="bg-slate-950/95 border-t border-slate-800 px-4 py-3 select-none z-20 flex flex-col gap-2">
      {/* Top Scrubber & Controls Row */}
      <div className="flex items-center justify-between gap-4">
        {/* Playback Transport Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrevScene}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            title="Adegan Sebelumnya"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={onTogglePlay}
            className="w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-600/30 transition-transform active:scale-95"
            title={isPlaying ? 'Jeda' : 'Putar'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>

          <button
            onClick={handleNextScene}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            title="Adegan Berikutnya"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleLoop}
            className={`p-1.5 rounded transition-colors ${
              isLooping ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-500 hover:text-slate-300'
            }`}
            title={isLooping ? 'Ulangi Otomatis (Aktif)' : 'Ulangi Otomatis'}
          >
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        {/* Scrubber slider bar */}
        <div className="flex-1 flex items-center gap-3">
          <span className="text-xs font-mono font-medium text-slate-400 min-w-[50px] text-right">
            {formatTime(currentTime)}
          </span>
          <div className="relative flex-1 flex items-center">
            <input
              type="range"
              min={0}
              max={totalDuration || 1}
              step={0.05}
              value={currentTime}
              onChange={handleSeekChange}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400"
            />
          </div>
          <span className="text-xs font-mono font-medium text-slate-500 min-w-[50px]">
            {formatTime(totalDuration)}
          </span>
        </div>

        {/* Scene Management Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onAddScene}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 transition-all hover:scale-[1.02]"
            title="Tambah Adegan Baru"
          >
            <Plus className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Tambah Adegan</span>
          </button>
        </div>
      </div>

      {/* Scene Blocks Track */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin scrollbar-thumb-slate-800">
        {project.scenes.map((scene, idx) => {
          const isActive = idx === currentSceneIndex;
          const startTime = sceneStartTimes[idx];

          return (
            <div
              key={scene.id}
              onClick={() => onSeek(startTime)}
              className={`group relative flex-shrink-0 flex flex-col justify-between p-2 rounded-xl cursor-pointer transition-all border ${
                isActive
                  ? 'bg-slate-800/90 border-indigo-500 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/40 w-44'
                  : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700 w-40'
              }`}
            >
              {/* Scene Header */}
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span
                  className={`font-bold ${
                    isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-300'
                  }`}
                >
                  #{idx + 1} {scene.deviceAngle}
                </span>

                <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                  <Clock className="w-3 h-3" />
                  <span>{scene.duration.toFixed(1)}s</span>
                </div>
              </div>

              {/* Headline summary */}
              <p
                className={`text-xs font-medium truncate ${
                  isActive ? 'text-white' : 'text-slate-300'
                }`}
              >
                {scene.headline || 'Adegan Tanpa Judul'}
              </p>

              {/* Subtext info */}
              <p className="text-[10px] text-slate-500 truncate mt-0.5">
                {scene.subtext || scene.mockupScreenType}
              </p>

              {/* Quick mini actions on hover */}
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800/80">
                <div className="flex items-center gap-1">
                  <button
                    disabled={idx === 0}
                    onClick={(e) => {
                      e.stopPropagation();
                      onMoveScene(idx, 'left');
                    }}
                    className="p-1 text-slate-500 hover:text-white disabled:opacity-30 disabled:hover:text-slate-500 rounded"
                    title="Geser ke kiri"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    disabled={idx === project.scenes.length - 1}
                    onClick={(e) => {
                      e.stopPropagation();
                      onMoveScene(idx, 'right');
                    }}
                    className="p-1 text-slate-500 hover:text-white disabled:opacity-30 disabled:hover:text-slate-500 rounded"
                    title="Geser ke kanan"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDuplicateScene(idx);
                    }}
                    className="p-1 text-slate-500 hover:text-indigo-400 rounded"
                    title="Duplikasi Adegan"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                  {project.scenes.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteScene(idx);
                      }}
                      className="p-1 text-slate-500 hover:text-rose-400 rounded"
                      title="Hapus Adegan"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Active indicator bar */}
              {isActive && (
                <div
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                  style={{ backgroundColor: project.themeColor }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

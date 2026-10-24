import React, { useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Sparkles,
} from 'lucide-react';
import { AspectRatio, PromoProject } from '../types';

interface VideoPlayerViewProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  project: PromoProject;
  isPlaying: boolean;
  currentTime: number;
  totalDuration: number;
  currentSceneIndex: number;
  onTogglePlay: () => void;
  onResetTime: () => void;
}

export const VideoPlayerView: React.FC<VideoPlayerViewProps> = ({
  canvasRef,
  project,
  isPlaying,
  currentTime,
  totalDuration,
  currentSceneIndex,
  onTogglePlay,
  onResetTime,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Compute container dimensions based on aspect ratio
  const getAspectRatioClasses = (ratio: AspectRatio) => {
    switch (ratio) {
      case '9:16':
        return 'aspect-[9/16] max-h-[calc(100vh-220px)] w-auto';
      case '16:9':
        return 'aspect-[16/9] max-w-[850px] w-full max-h-[calc(100vh-240px)]';
      case '1:1':
        return 'aspect-square max-h-[calc(100vh-230px)] max-w-[540px] w-full';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 10);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms}`;
  };

  return (
    <div
      ref={containerRef}
      className="flex-1 bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.themeColor}33 0%, transparent 70%)`,
        }}
      />

      {/* Main Video Screen Container */}
      <div
        className={`relative flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group ${getAspectRatioClasses(
          project.aspectRatio
        )}`}
        style={{
          boxShadow: `0 25px 60px -15px ${project.themeColor}30, 0 10px 30px -10px rgba(0,0,0,0.8)`,
        }}
      >
        {/* HTML5 Canvas Element */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain cursor-pointer"
          onClick={onTogglePlay}
        />

        {/* Top Floating Scene Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white shadow-lg">
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: project.themeColor }}
            />
            <span>
              Adegan {currentSceneIndex + 1}/{project.scenes.length}
            </span>
          </div>

          <div className="px-2 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
            {formatTime(currentTime)} / {formatTime(totalDuration)}
          </div>
        </div>

        {/* Top Right Aspect Indicator */}
        <div className="absolute top-3 right-3 pointer-events-none">
          <div className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] uppercase font-bold text-slate-300">
            {project.aspectRatio}
          </div>
        </div>

        {/* Big Center Play Button Overlay on Hover/Pause */}
        {!isPlaying && (
          <div
            onClick={onTogglePlay}
            className="absolute inset-0 bg-black/35 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-xl shadow-indigo-600/40 ring-4 ring-white/20 hover:scale-110 active:scale-95 transition-all">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
          </div>
        )}

        {/* Bottom Quick Controls bar */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 shadow-lg">
            <button
              onClick={onTogglePlay}
              className="p-1.5 text-white hover:text-indigo-400 transition-colors"
              title={isPlaying ? 'Jeda' : 'Putar'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
            </button>
            <button
              onClick={onResetTime}
              className="p-1.5 text-slate-300 hover:text-white transition-colors"
              title="Mulai dari awal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 shadow-lg">
            <button
              onClick={toggleFullscreen}
              className="p-1.5 text-slate-300 hover:text-white transition-colors"
              title="Layar Penuh"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

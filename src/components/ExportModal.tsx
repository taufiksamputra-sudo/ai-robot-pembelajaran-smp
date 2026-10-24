import React, { useState } from 'react';
import {
  Download,
  X,
  Film,
  Sparkles,
  CheckCircle2,
  Share2,
  Video,
  Clock,
  Smartphone,
} from 'lucide-react';
import { PromoProject } from '../types';
import { PromoCanvasRenderer } from '../utils/canvasRenderer';
import { exportPromoVideo, ExportProgress } from '../utils/videoExporter';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: PromoProject;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  renderer: PromoCanvasRenderer;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  project,
  canvasRef,
  renderer,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState<ExportProgress | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalDuration = project.scenes.reduce((acc, s) => acc + s.duration, 0);

  const handleStartExport = async () => {
    if (!canvasRef.current) return;

    setIsExporting(true);
    setExportError(null);
    setDownloadUrl(null);
    setVideoBlob(null);

    try {
      const blob = await exportPromoVideo(
        project,
        canvasRef.current,
        renderer,
        (info) => {
          setProgress(info);
        }
      );

      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setVideoBlob(blob);
    } catch (err: any) {
      console.error('Export error:', err);
      setExportError(err?.message || 'Gagal mengekspor video. Pastikan browser mendukung MediaRecorder.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const a = document.createElement('a');
    a.href = downloadUrl;
    const safeName = (project.appName || 'promo_video').toLowerCase().replace(/\s+/g, '_');
    a.download = `${safeName}_promocraft.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Ekspor Video Promosi</h2>
              <p className="text-xs text-slate-400">
                Render video resolusi tinggi dengan animasi 60 FPS dan audio sinkron
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isExporting}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-xs text-slate-300">
          {/* Video Specs Summary Card */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 grid grid-cols-3 gap-3 text-center">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                Rasio Video
              </span>
              <span className="font-bold text-white text-sm">{project.aspectRatio}</span>
              <span className="block text-[10px] text-slate-400">
                {project.aspectRatio === '9:16'
                  ? 'Vertikal Story'
                  : project.aspectRatio === '16:9'
                  ? 'Landscape'
                  : 'Square 1:1'}
              </span>
            </div>

            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                Durasi Total
              </span>
              <span className="font-bold text-indigo-400 text-sm">
                {totalDuration.toFixed(1)} Detik
              </span>
              <span className="block text-[10px] text-slate-400">
                {project.scenes.length} Adegan
              </span>
            </div>

            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                Audio BGM
              </span>
              <span className="font-bold text-emerald-400 text-sm truncate block">
                {project.musicMood === 'none' ? 'Mute' : project.musicMood.replace('-', ' ')}
              </span>
              <span className="block text-[10px] text-slate-400">Web Audio Synth</span>
            </div>
          </div>

          {/* Export in progress */}
          {isExporting && progress && (
            <div className="p-5 rounded-xl bg-indigo-950/30 border border-indigo-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white flex items-center gap-2">
                  <Film className="w-4 h-4 text-indigo-400 animate-spin" />
                  <span>Sedang Merender Video...</span>
                </span>
                <span className="font-mono font-bold text-indigo-400 text-sm">
                  {progress.progress}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-400 transition-all duration-200"
                  style={{ width: `${progress.progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400">
                <span>{progress.status}</span>
                {progress.timeRemaining > 0 && (
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>~{progress.timeRemaining}s lagi</span>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Success Download Banner */}
          {downloadUrl && (
            <div className="p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm">Video Berhasil Dirender!</h3>
                  <p className="text-[11px] text-emerald-300/80">
                    Format WebM/MP4 resolusi tinggi siap diunggah ke TikTok, Reels, YouTube, dan iklan.
                  </p>
                </div>
              </div>

              {/* Video Preview */}
              <div className="rounded-lg overflow-hidden bg-black/60 border border-slate-800 flex justify-center max-h-48">
                <video
                  src={downloadUrl}
                  controls
                  autoPlay
                  loop
                  className="h-44 object-contain rounded"
                />
              </div>

              <button
                onClick={handleDownload}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Download className="w-4 h-4" />
                <span>Unduh File Video Sekarang ({videoBlob ? (videoBlob.size / 1024 / 1024).toFixed(1) : '0'} MB)</span>
              </button>
            </div>
          )}

          {/* Error Message */}
          {exportError && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
              {exportError}
            </div>
          )}

          {/* Social Platform Tips */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
            <span className="font-semibold text-slate-200 block text-[11px]">
              💡 Tips Publikasi Video Promosi:
            </span>
            <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
              <li><strong className="text-slate-300">TikTok & IG Reels:</strong> Gunakan rasio 9:16 untuk jangkauan algoritma organik maksimal.</li>
              <li><strong className="text-slate-300">YouTube Ads / Hero Web:</strong> Gunakan rasio 16:9 untuk dipasang di landing page website aplikasi Anda.</li>
              <li><strong className="text-slate-300">3 Detik Pertama:</strong> Hook di adegan pertama sangat menentukan penonton tetap menyaksikan sampai selesai!</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-end gap-3 bg-slate-950/60">
          <button
            type="button"
            onClick={onClose}
            disabled={isExporting}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
          >
            {downloadUrl ? 'Tutup' : 'Batal'}
          </button>

          {!downloadUrl && (
            <button
              type="button"
              onClick={handleStartExport}
              disabled={isExporting}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              <Film className="w-4 h-4" />
              <span>{isExporting ? 'Merender...' : 'Mulai Rekam Video'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

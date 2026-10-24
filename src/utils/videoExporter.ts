import { PromoProject } from '../types';
import { PromoCanvasRenderer } from './canvasRenderer';
import { soundStudio } from './audioEngine';

export interface ExportProgress {
  progress: number; // 0 to 100
  currentSceneIndex: number;
  totalScenes: number;
  timeRemaining: number;
  status: string;
}

export async function exportPromoVideo(
  project: PromoProject,
  canvas: HTMLCanvasElement,
  renderer: PromoCanvasRenderer,
  onProgress: (info: ExportProgress) => void
): Promise<Blob> {
  return new Promise(async (resolve, reject) => {
    try {
      const totalDuration = project.scenes.reduce((acc, s) => acc + s.duration, 0);
      const fps = 30;
      const totalFrames = Math.ceil(totalDuration * fps);

      // Start audio playback for recording
      if (project.musicMood !== 'none') {
        soundStudio.playMusic(project.musicMood);
      }

      const canvasStream = canvas.captureStream(fps);
      const audioStream = soundStudio.getAudioStream();

      const tracks: MediaStreamTrack[] = [...canvasStream.getVideoTracks()];
      if (audioStream && audioStream.getAudioTracks().length > 0) {
        tracks.push(...audioStream.getAudioTracks());
      }

      const combinedStream = new MediaStream(tracks);

      // Pick best supported MIME type
      let mimeType = 'video/webm;codecs=vp9,opus';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm;codecs=vp8,opus';
      }
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
      }

      const recorder = new MediaRecorder(combinedStream, {
        mimeType,
        videoBitsPerSecond: 6000000, // 6 Mbps high quality
      });

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      recorder.onstop = () => {
        soundStudio.stopAll();
        const videoBlob = new Blob(chunks, { type: mimeType });
        resolve(videoBlob);
      };

      recorder.onerror = (e) => {
        soundStudio.stopAll();
        reject(e);
      };

      recorder.start(100); // collect in 100ms chunks

      // Step frame by frame with precise timing
      let currentFrame = 0;
      const startTime = Date.now();

      function getSceneAtTime(time: number): { sceneIndex: number; sceneProgress: number } {
        let accumulated = 0;
        for (let i = 0; i < project.scenes.length; i++) {
          const sc = project.scenes[i];
          if (time >= accumulated && time < accumulated + sc.duration) {
            const sceneTime = time - accumulated;
            return {
              sceneIndex: i,
              sceneProgress: sceneTime / sc.duration,
            };
          }
          accumulated += sc.duration;
        }
        return {
          sceneIndex: project.scenes.length - 1,
          sceneProgress: 1,
        };
      }

      const intervalMs = 1000 / fps;

      const timer = setInterval(() => {
        currentFrame++;
        const currentTime = (currentFrame / totalFrames) * totalDuration;
        const { sceneIndex, sceneProgress } = getSceneAtTime(currentTime);

        const currentScene = project.scenes[sceneIndex];

        // Render to canvas
        renderer.render(canvas, {
          project,
          currentScene,
          sceneProgress,
          totalTime: currentTime,
          aspectRatio: project.aspectRatio,
        });

        // Calculate progress
        const percent = Math.min(99, Math.round((currentFrame / totalFrames) * 100));
        const elapsedSec = (Date.now() - startTime) / 1000;
        const estTotalSec = (elapsedSec / currentFrame) * totalFrames;
        const timeRemaining = Math.max(0, Math.round(estTotalSec - elapsedSec));

        onProgress({
          progress: percent,
          currentSceneIndex: sceneIndex + 1,
          totalScenes: project.scenes.length,
          timeRemaining,
          status: `Rendering frame ${currentFrame}/${totalFrames} (Adegan ${sceneIndex + 1}/${project.scenes.length})...`,
        });

        if (currentFrame >= totalFrames) {
          clearInterval(timer);
          onProgress({
            progress: 100,
            currentSceneIndex: project.scenes.length,
            totalScenes: project.scenes.length,
            timeRemaining: 0,
            status: 'Finishing encoding video file...',
          });

          setTimeout(() => {
            recorder.stop();
          }, 300);
        }
      }, intervalMs);
    } catch (err) {
      soundStudio.stopAll();
      reject(err);
    }
  });
}

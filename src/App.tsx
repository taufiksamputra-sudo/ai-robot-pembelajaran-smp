import React, { useState, useEffect } from 'react';
import { ALL_CHAPTERS } from './data/chapters';
import { UserStudyProgress } from './data/curriculumTypes';
import { NavbarHUD, ActiveTab } from './components/NavbarHUD';
import { AdventureMap } from './components/AdventureMap';
import { LearningMaterialView } from './components/LearningMaterialView';
import { QuizArena } from './components/QuizArena';
import { AITutorChat } from './components/AITutorChat';
import { MiniGames } from './components/MiniGames';
import { TrophyReportModal } from './components/TrophyReportModal';
import { BuddyPickerModal } from './components/BuddyPickerModal';
import { InstallPromptBanner } from './components/InstallPromptBanner';
import { sfx } from './utils/sfx';

const STORAGE_KEY = 'robokids_smp_progress_v1';

const DEFAULT_PROGRESS: UserStudyProgress = {
  selectedBuddy: 'tyro',
  coins: 60,
  xp: 120,
  completedSubChapters: {
    'bab1-a': {
      score: 100,
      correctCount: 10,
      stars: 3,
      lastAttemptDate: new Date().toISOString(),
    },
  },
  unlockedTrophies: ['t-bab1'],
};

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('map');
  const [currentChapterId, setCurrentChapterId] = useState<string>('bab-1');
  const [currentSubChapterId, setCurrentSubChapterId] = useState<string>('bab1-a');
  const [isBuddyPickerOpen, setIsBuddyPickerOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Load progress from localStorage
  const [progress, setProgress] = useState<UserStudyProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading progress:', e);
    }
    return DEFAULT_PROGRESS;
  });

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  }, [progress]);

  // Current active chapter and sub-chapter
  const activeChapter =
    ALL_CHAPTERS.find((c) => c.id === currentChapterId) || ALL_CHAPTERS[0];
  const activeSubChapter =
    activeChapter.subChapters.find((s) => s.id === currentSubChapterId) ||
    activeChapter.subChapters[0];

  // Handler to open sub-chapter from AdventureMap
  const handleOpenSubChapter = (
    chapId: string,
    subId: string,
    mode: 'learn' | 'quiz'
  ) => {
    setCurrentChapterId(chapId);
    setCurrentSubChapterId(subId);
    setActiveTab(mode);
  };

  // Handler when quiz is finished
  const handleFinishQuiz = (
    subId: string,
    score: number,
    correctCount: number,
    stars: number
  ) => {
    const coinsEarned = score >= 90 ? 100 : score >= 70 ? 60 : 30;
    const xpEarned = score >= 90 ? 150 : score >= 70 ? 90 : 40;

    setProgress((prev) => {
      const existing = prev.completedSubChapters[subId];
      const bestScore = existing ? Math.max(existing.score, score) : score;
      const bestStars = existing ? Math.max(existing.stars, stars) : stars;

      return {
        ...prev,
        coins: prev.coins + coinsEarned,
        xp: prev.xp + xpEarned,
        completedSubChapters: {
          ...prev.completedSubChapters,
          [subId]: {
            score: bestScore,
            correctCount: Math.max(existing?.correctCount || 0, correctCount),
            stars: bestStars,
            lastAttemptDate: new Date().toISOString(),
          },
        },
      };
    });
  };

  // Handler to navigate between sub-chapters
  const handleNavigateSubChapter = (direction: 'prev' | 'next') => {
    const currentSubIdx = activeChapter.subChapters.findIndex(
      (s) => s.id === currentSubChapterId
    );
    if (direction === 'prev') {
      if (currentSubIdx > 0) {
        setCurrentSubChapterId(activeChapter.subChapters[currentSubIdx - 1].id);
      } else {
        const chapIdx = ALL_CHAPTERS.findIndex((c) => c.id === currentChapterId);
        if (chapIdx > 0) {
          const prevChap = ALL_CHAPTERS[chapIdx - 1];
          setCurrentChapterId(prevChap.id);
          setCurrentSubChapterId(prevChap.subChapters[prevChap.subChapters.length - 1].id);
        }
      }
    } else {
      if (currentSubIdx < activeChapter.subChapters.length - 1) {
        setCurrentSubChapterId(activeChapter.subChapters[currentSubIdx + 1].id);
      } else {
        const chapIdx = ALL_CHAPTERS.findIndex((c) => c.id === currentChapterId);
        if (chapIdx < ALL_CHAPTERS.length - 1) {
          const nextChap = ALL_CHAPTERS[chapIdx + 1];
          setCurrentChapterId(nextChap.id);
          setCurrentSubChapterId(nextChap.subChapters[0].id);
        }
      }
    }
  };

  const handleEarnMiniGameReward = (coins: number, xp: number) => {
    setProgress((prev) => ({
      ...prev,
      coins: prev.coins + coins,
      xp: prev.xp + xp,
    }));
  };

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    sfx.setSoundEnabled(nextVal);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Top Navigation HUD */}
      <NavbarHUD
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        progress={progress}
        onOpenBuddyPicker={() => setIsBuddyPickerOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-1 pb-16">
        {activeTab === 'map' && (
          <AdventureMap
            progress={progress}
            onOpenSubChapter={handleOpenSubChapter}
            onOpenBuddyPicker={() => setIsBuddyPickerOpen(true)}
          />
        )}

        {activeTab === 'learn' && (
          <LearningMaterialView
            chapter={activeChapter}
            subChapter={activeSubChapter}
            onStartQuiz={() => setActiveTab('quiz')}
            onBackToMap={() => setActiveTab('map')}
            onNavigateSubChapter={handleNavigateSubChapter}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizArena
            chapter={activeChapter}
            subChapter={activeSubChapter}
            selectedBuddyId={progress.selectedBuddy}
            onFinishQuiz={handleFinishQuiz}
            onBackToMaterial={() => setActiveTab('learn')}
            onBackToMap={() => setActiveTab('map')}
          />
        )}

        {activeTab === 'ai' && (
          <AITutorChat
            currentBuddyId={progress.selectedBuddy}
            onSelectBuddy={(id) =>
              setProgress((prev) => ({ ...prev, selectedBuddy: id }))
            }
          />
        )}

        {activeTab === 'minigame' && (
          <MiniGames onEarnReward={handleEarnMiniGameReward} />
        )}

        {activeTab === 'report' && (
          <TrophyReportModal progress={progress} />
        )}
      </main>

      {/* Character Companion Selector Modal */}
      <BuddyPickerModal
        isOpen={isBuddyPickerOpen}
        onClose={() => setIsBuddyPickerOpen(false)}
        selectedBuddyId={progress.selectedBuddy}
        onSelectBuddy={(id) =>
          setProgress((prev) => ({ ...prev, selectedBuddy: id }))
        }
      />

      {/* Floating PWA Install Banner */}
      <InstallPromptBanner />
    </div>
  );
}


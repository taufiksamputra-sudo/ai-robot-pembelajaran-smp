export interface QuizQuestion {
  id: string;
  questionText: string;
  passageSnippet?: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  explanation: string;
  characterTip?: {
    characterId: string;
    tipText: string;
  };
}

export interface SubChapterMaterialSection {
  heading: string;
  body: string;
  example?: string;
  keyRule?: string;
}

export interface SubChapter {
  id: string;
  code: string; // e.g. "A", "B", "C"
  title: string;
  summary: string;
  buddyGuideId: string;
  materialSections: SubChapterMaterialSection[];
  questions: QuizQuestion[]; // Exactly 10 questions per sub-chapter
}

export interface Chapter {
  id: string;
  number: string; // e.g. "Bab I", "Bab II"
  title: string;
  islandName: string;
  themeColor: string;
  badgeGradient: string;
  icon: string;
  description: string;
  subChapters: SubChapter[];
}

export interface UserStudyProgress {
  selectedBuddy: string;
  coins: number;
  xp: number;
  completedSubChapters: Record<
    string,
    {
      score: number; // e.g. 90/100
      correctCount: number; // e.g. 9/10
      stars: number; // 1, 2, or 3
      lastAttemptDate: string;
    }
  >;
  unlockedTrophies: string[];
}

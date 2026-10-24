import { Chapter } from '../curriculumTypes';
import { BAB_1 } from './bab1';
import { BAB_2 } from './bab2';
import { BAB_3 } from './bab3';
import { BAB_4 } from './bab4';
import { BAB_5 } from './bab5';
import { BAB_6 } from './bab6';

export const ALL_CHAPTERS: Chapter[] = [
  BAB_1,
  BAB_2,
  BAB_3,
  BAB_4,
  BAB_5,
  BAB_6,
];

export const TOTAL_QUESTIONS_COUNT = ALL_CHAPTERS.reduce(
  (total, chap) =>
    total + chap.subChapters.reduce((subTotal, sub) => subTotal + sub.questions.length, 0),
  0
);

export const TOTAL_SUBCHAPTERS_COUNT = ALL_CHAPTERS.reduce(
  (total, chap) => total + chap.subChapters.length,
  0
);

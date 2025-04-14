export interface Question {
  id: number;
  sentence: string;
  options: string[];
  correctAnswers: string[];
}

export interface GameState {
  currentQuestion: number;
  answers: Record<number, string[]>;
  timeRemaining: number;
  isComplete: boolean;
  score: number;
}

export interface ResultsProps {
  questions: Question[];
  answers: Record<number, string[]>;
  score: number;
}

export interface WordOptionProps {
  word: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface SentenceDisplayProps {
  sentence: string;
  selectedWords: string[];
  onWordClick: (index: number) => void;
}

export interface ProgressBarProps {
  current: number;
  total: number;
}

export interface TimerProps {
  initialTime: number;
  onComplete: () => void;
}

export interface FeedbackScreenProps {
  questions: Question[];
  answers: Record<number, string[]>;
  score: number;
  onRestart: () => void;
}

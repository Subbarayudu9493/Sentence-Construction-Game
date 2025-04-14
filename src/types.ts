export interface Word {
  id: number;
  text: string;
  isSelected?: boolean;
}

export interface Question {
  id: number;
  sentence: string;
  options: string[];
  correctAnswers: string[];
}

export interface GameState {
  currentQuestion: number;
  answers: { [key: number]: string[] };
  timeRemaining: number;
  isComplete: boolean;
  score: number;
} 
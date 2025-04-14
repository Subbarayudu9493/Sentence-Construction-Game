import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';
import WordOption from '../components/WordOption';
import SentenceDisplay from '../components/SentenceDisplay';
import ProgressBar from '../components/ProgressBar';
import { Question, GameState } from '../types/types';

interface ApiResponse {
  questions: Question[];
}

const Game = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    answers: {},
    timeRemaining: 30,
    isComplete: false,
    score: 0,
  });

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/questions`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json() as ApiResponse;
      
      if (!data.questions || !Array.isArray(data.questions)) {
        throw new Error('Invalid data format received from server');
      }
      
      setQuestions(data.questions);
      setLoading(false);
      setError(null);
    } catch (err: unknown) {
      console.error('Error fetching questions:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(`Failed to load questions: ${errorMessage}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchQuestions();
  };

  const handleWordSelect = (word: string) => {
    const currentQuestion = questions[gameState.currentQuestion];
    if (!currentQuestion) return;

    const currentAnswers = gameState.answers[gameState.currentQuestion] || [];
    const blankCount = currentQuestion.sentence.split('{blank}').length - 1;
    
    if (currentAnswers.length < blankCount) {
      setGameState((prev: GameState) => ({
        ...prev,
        answers: {
          ...prev.answers,
          [prev.currentQuestion]: [...currentAnswers, word],
        },
      }));
    }
  };

  const handleWordDeselect = (index: number) => {
    const currentAnswers = [...(gameState.answers[gameState.currentQuestion] || [])];
    currentAnswers.splice(index, 1);
    
    setGameState((prev: GameState) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [prev.currentQuestion]: currentAnswers,
      },
    }));
  };

  const handleNextQuestion = async () => {
    setIsTransitioning(true);
    
    try {
      if (gameState.currentQuestion < questions.length - 1) {
        setGameState((prev: GameState) => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          timeRemaining: 30,
        }));
      } else {
        const score = questions.reduce((acc: number, question: Question, index: number) => {
          const userAnswer = gameState.answers[index] || [];
          const isCorrect = JSON.stringify(userAnswer.sort()) === 
                          JSON.stringify(question.correctAnswers.sort());
          return acc + (isCorrect ? 1 : 0);
        }, 0);

        setGameState((prev: GameState) => ({
          ...prev,
          isComplete: true,
          score,
        }));
        
        navigate('/results', { 
          state: { 
            questions, 
            answers: gameState.answers,
            score 
          } 
        });
      }
    } catch (err) {
      console.error('Error during question transition:', err);
      setError('An error occurred while moving to the next question');
    } finally {
      setIsTransitioning(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mx-auto mb-4"></div>
          <div className="text-2xl font-bold text-primary mb-2">Loading...</div>
          <div className="text-gray-600">Please wait while we load the questions</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-4">Error</div>
          <div className="text-gray-600 mb-4">{error}</div>
          <button
            onClick={handleRetry}
            className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[gameState.currentQuestion];
  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-4">Error</div>
          <div className="text-gray-600 mb-4">No question found</div>
          <button
            onClick={handleRetry}
            className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentAnswers = gameState.answers[gameState.currentQuestion] || [];
  const blankCount = currentQuestion.sentence.split('{blank}').length - 1;
  const isComplete = currentAnswers.length === blankCount;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <ProgressBar
            current={gameState.currentQuestion + 1}
            total={questions.length}
          />
        </div>

        <div className="mb-8">
          <Timer
            initialTime={30}
            onComplete={() => handleNextQuestion()}
          />
        </div>

        <div className="mb-8">
          <SentenceDisplay
            sentence={currentQuestion.sentence}
            selectedWords={currentAnswers}
            onWordClick={(index) => handleWordDeselect(index)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {currentQuestion.options.map((word: string) => (
            <WordOption
              key={word}
              word={word}
              isSelected={currentAnswers.includes(word)}
              onClick={() => handleWordSelect(word)}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => handleNextQuestion()}
            disabled={!isComplete || isTransitioning}
            className={`
              px-8 py-3 text-lg font-medium rounded-full shadow-lg
              transition-all duration-300 transform
              ${isComplete && !isTransitioning
                ? 'bg-primary text-white hover:bg-primary-dark hover:scale-105' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {isTransitioning ? 'Loading...' : gameState.currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;

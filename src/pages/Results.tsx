import { useLocation, useNavigate } from 'react-router-dom';
import FeedbackScreen from '../components/FeedbackScreen';
import { Question } from '../types/types';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, answers, score } = location.state as {
    questions: Question[];
    answers: Record<number, string[]>;
    score: number;
  };

  const handleRestart = () => {
    navigate('/game');
  };

  return (
    <div className="min-h-screen bg-background">
      <FeedbackScreen
        questions={questions}
        answers={answers}
        score={score}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default Results;

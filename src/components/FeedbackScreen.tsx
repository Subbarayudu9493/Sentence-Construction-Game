import { FeedbackScreenProps } from '../types/types';

const FeedbackScreen = ({ questions, answers, score, onRestart }: FeedbackScreenProps) => {
  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Quiz Complete!</h2>
          
          <div className="flex flex-col items-center mb-8">
            <div className="text-6xl font-bold text-primary mb-2">{score}/{totalQuestions}</div>
            <div className="text-2xl font-medium text-gray-600">
              {percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good job!' : 'Keep practicing!'}
            </div>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = answers[index] || [];
              const isCorrect = JSON.stringify(userAnswer.sort()) === 
                              JSON.stringify(question.correctAnswers.sort());

              return (
                <div
                  key={question.id}
                  className={`p-4 rounded-lg border-2 ${
                    isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                  }`}
                >
                  <div className="text-lg font-medium mb-2">
                    {question.sentence.split('{blank}').map((part, i) => (
                      <span key={i}>
                        {part}
                        {i < question.sentence.split('{blank}').length - 1 && (
                          <span className={`font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {userAnswer[i] || '______'}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                  {!isCorrect && (
                    <div className="text-sm text-gray-600">
                      Correct answer: {question.correctAnswers.join(', ')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onRestart}
              className="btn btn-primary px-8 py-3 text-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackScreen;

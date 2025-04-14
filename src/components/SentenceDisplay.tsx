interface SentenceDisplayProps {
  sentence: string;
  answers: string[];
  onWordDeselect: (index: number) => void;
}

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({ sentence, answers, onWordDeselect }) => {
  const parts = sentence.split('{blank}');
  
  return (
    <div className="text-2xl font-medium text-gray-800 mb-8">
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <button
              onClick={() => onWordDeselect(index)}
              className="inline-block mx-2 px-4 py-2 bg-blue-100 rounded-lg text-blue-800 hover:bg-blue-200 transition-colors"
            >
              {answers[index] || '{blank}'}
            </button>
          )}
        </span>
      ))}
    </div>
  );
};

export default SentenceDisplay;

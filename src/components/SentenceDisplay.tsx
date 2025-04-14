import { SentenceDisplayProps } from '../types/types';

const SentenceDisplay = ({ sentence, selectedWords, onWordClick }: SentenceDisplayProps) => {
  const parts = sentence.split('{blank}');
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-xl text-gray-700 leading-relaxed">
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <button
                onClick={() => onWordClick(index)}
                className={`
                  mx-2 px-3 py-1 rounded-md text-lg font-medium
                  ${selectedWords[index]
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-400'
                  }
                `}
              >
                {selectedWords[index] || '___'}
              </button>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SentenceDisplay;

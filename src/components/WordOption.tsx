import React from 'react';

interface WordOptionProps {
  word: string;
  onClick: () => void;
}

const WordOption: React.FC<WordOptionProps> = ({ word, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-800 font-medium"
    >
      {word}
    </button>
  );
};

export default WordOption;

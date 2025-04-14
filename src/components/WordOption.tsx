import { useState } from 'react';
import { WordOptionProps } from '../types/types';

const WordOption = ({ word, isSelected, onClick }: WordOptionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`
        p-4 rounded-lg text-lg font-medium transition-all duration-300
        ${isSelected
          ? 'bg-primary text-white shadow-md transform scale-105'
          : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {word}
    </button>
  );
};

export default WordOption;

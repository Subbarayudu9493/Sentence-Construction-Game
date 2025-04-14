import React from 'react';
import { Word } from '../types';

interface WordOptionProps {
  word: Word;
  isSelected: boolean;
  onClick: () => void;
}

const WordOption: React.FC<WordOptionProps> = ({ word, isSelected, onClick }) => {
  return (
    <button
      className={`word-option ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {word.text}
    </button>
  );
};

export default WordOption;

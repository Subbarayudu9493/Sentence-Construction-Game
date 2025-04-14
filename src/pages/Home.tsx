import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/game');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Sentence Construction Game
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How to Play
          </h2>
          <ul className="text-left space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              You will be shown a sentence with blank spaces
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Select words from the options to fill in the blanks
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              You have 30 seconds for each question
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Click on a filled blank to remove the word
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              The "Next" button will be enabled when all blanks are filled
            </li>
          </ul>
        </div>

        <button
          onClick={handleStart}
          className="btn btn-primary px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sentence Construction Game</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
        Test your language skills by constructing sentences from given words.
        Arrange the words in the correct order to form meaningful sentences.
      </p>
      <Link
        to="/game"
        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Start Game
      </Link>
    </div>
  );
};

export default Home;

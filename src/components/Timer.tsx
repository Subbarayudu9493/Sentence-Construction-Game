import { useState, useEffect } from 'react';
import { TimerProps } from '../types/types';

const Timer = ({ initialTime, onComplete }: TimerProps) => {
  const [time, setTime] = useState(initialTime);
  const [isLowTime, setIsLowTime] = useState(false);

  useEffect(() => {
    if (time <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 6) {
          setIsLowTime(true);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time, onComplete]);

  const progress = (time / initialTime) * 100;

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xl font-medium ${isLowTime ? 'text-red-500' : 'text-gray-700'}`}>
          Time Remaining
        </span>
        <span className={`text-3xl font-bold ${isLowTime ? 'text-red-500 animate-pulse' : 'text-gray-800'}`}>
          {time}s
        </span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`
            h-full transition-all duration-1000 ease-linear
            ${isLowTime ? 'bg-red-500' : 'bg-primary'}
          `}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const TypewriterEffect = ({ text, speed = 80, onComplete }: TypewriterEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  }, []);

  useEffect(() => {
    if (!hasStarted || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete && !isComplete) {
        setIsComplete(true);
        onComplete();
      }
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, hasStarted, onComplete, isComplete]);

  const renderColoredText = () => {
    if (!isComplete) {
      return displayedText;
    }

    const parts = displayedText.split(' - ');
    if (parts.length !== 2) {
      return displayedText;
    }

    return (
      <>
        <span className="transition-colors duration-1000" style={{ color: '#FF9933' }}>
          {parts[0]}
        </span>
        <span className="text-gray-100"> - </span>
        <span className="transition-colors duration-1000" style={{ color: '#138808' }}>
          {parts[1]}
        </span>
      </>
    );
  };

  return (
    <p className="text-lg lg:text-xl text-gray-100 font-light tracking-[0.15em] min-h-[2rem]">
      {renderColoredText()}
      {!isComplete && <span className="animate-pulse ml-1">|</span>}
    </p>
  );
};

export default TypewriterEffect;

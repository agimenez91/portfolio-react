import './TypographicEffect.scss';
import React, { useState, useEffect } from 'react';
import WavyLine from '/src/components/Atoms/WavyLine/WavyLine'

const TypographicEffect = () => {
  const [displaySentence, setDisplaySentence] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplaySentence(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const resetSentence = () => {
    setDisplaySentence(true);
  };

  return (
    <div>
      <h1 className="display">Hi!<br /></h1>
      {displaySentence ? (
        <h1 className="display">
            My name is <span className="relative">Andrea<WavyLine/></span>
        </h1>
      ) : (
        <h1 className="display" onClick={resetSentence}>
            I'm <span className="relative">frontend<WavyLine/></span> developer
        </h1>
      )}
    </div>
  );
};

export default TypographicEffect;

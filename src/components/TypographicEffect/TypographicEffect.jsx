import React, { useState, useEffect } from 'react';

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
      {displaySentence ? (
        <h1 className="display">
            Hi!
            <br />
            My name is <span className="wavyline">Andrea</span>
        </h1>
      ) : (
        <h1 className="display" onClick={resetSentence}>
            Hi!
            <br />
            I'm <span className="wavyline">frontend</span> developer
        </h1>
      )}
    </div>
  );
};

export default TypographicEffect;

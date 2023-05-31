import React, { useRef, useEffect } from 'react';
import './Ball.scss'; // Import the CSS file for styling the ball

const Ball = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const ball = ballRef.current;
      ball.style.left = `${event.pageX}px`; // Set the left position of the ball
      ball.style.top = `${event.pageY}px`; // Set the top position of the ball
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={ballRef} className="ball"></div>;
};

export default Ball;

import React, { useRef, useEffect } from 'react';
import './Ball.scss';
import { useMediaQuery } from 'react-responsive';

function generateRandom(maxLimit = 100) {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
}

const Ball = () => {
  const ballRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 50rem)' });
  const screenHeight = window.innerHeight;

  const handleMouseMove = (event) => {
    const ball = ballRef.current;
    ball.style.left = `${event.pageX}px`;
    ball.style.top = `${event.pageY}px`;
  };

  const handleMobile = () => {
    const ball = ballRef.current;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;
    const maxX = screenWidth - ballWidth;
    const maxY = screenHeight - ballHeight;
    const x = generateRandom(maxX);
    const y = generateRandom(maxY);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
  };

  let interval;

  useEffect(() => {
    if (isTabletOrMobile) {
      handleMobile();
      interval = setInterval(handleMobile, 4000);
    } else {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [isTabletOrMobile]);

  return <div ref={ballRef} className="ball"></div>;
};

export default Ball;

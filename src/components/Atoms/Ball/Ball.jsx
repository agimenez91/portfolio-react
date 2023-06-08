import React, { useRef, useEffect } from 'react';
import './Ball.scss'; // Import the CSS file for styling the ball
import { useMediaQuery } from 'react-responsive';

function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;
  console.log(rand); // say 99.81321410836433

  rand = Math.floor(rand); // 99

  return rand;
}

const Ball = () => {
  const ballRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 50rem)' });
  const handleMouseMove = (event) => {
    const ball = ballRef.current;
    ball.style.left = `${event.pageX}px`; // Set the left position of the ball
    ball.style.top = `${event.pageY}px`; // Set the top position of the ball
  };

  const handleMobile = () => {
    const ball = ballRef.current;
    const x = generateRandom();
    const y = generateRandom();
    ball.style.left = `${x}%`; // Set the left position of the ball
    ball.style.top = `${y}%`; // Set the top position of the ball
  }
  let interval;

  useEffect(() => {
    
    if (isTabletOrMobile) {
      handleMobile();
      interval = setInterval(handleMobile, 5000);
    } else {
      document.addEventListener('mousemove', handleMouseMove);
    }
      
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval)
    };
  }, []);

  return <div ref={ballRef} className="ball"></div>;
};

export default Ball;

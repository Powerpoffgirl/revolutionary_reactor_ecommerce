import React from 'react';

const GradientCircle = ({ color1, color2 }) => {
  const circleStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: `conic-gradient(from 90deg at 50% 50%, ${color1} 180deg, ${color2} 0deg)`,
    margin: '5px', // Add some margin to space out the circles
  };

  return <div style={circleStyle}></div>;
};

export default GradientCircle;


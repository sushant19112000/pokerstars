
// src/components/Circle.js
import React from 'react';
import './Circle.css';

const Circle = ({ number }) => {
  return (
    <div className="circle " style={{backgroundColor:'transparent',border:'1px solid silver'}}>
      {number}
    </div>
  );
};

export default Circle;
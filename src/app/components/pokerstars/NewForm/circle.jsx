
// src/components/Circle.js
import React from 'react';
import './Circle.css';

const Circle = ({ number,checked }) => {
  return (
    <div className="circle " style={{backgroundColor:checked?"#d70022":"transparent",border:'1px solid silver' ,}}>
      {number}
    </div>
  );
};

export default Circle;
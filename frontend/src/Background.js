// Background.js
import React from 'react';
import image from './background.gif';
import './Background.css';

function Background() {
  return (
    <div className="background">
      <img src= {image} alt="background image" className="background_image" />
    </div>
  )
};

export default Background;
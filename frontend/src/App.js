import React from 'react';
import './App.css';
import Header from './Header';
import image from './background.gif';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <img src={image} className='bgimg'/>
      </div>
    </div>
  );
}

export default App;

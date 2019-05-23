import React from 'react';
import logo from '../logo.svg';
// import mind from '../images/the_psyche.jpg';
import mind from '../images/ai.jpg';
import '../App.css';

const Header = () => {
  return (

      <header className="App-header">
        
        <h1>
          Mapping the Subjective Self
          <img src={logo} className="App-logo" alt="logo" />
          <img src={mind} className="mind-map" alt="the mind" />
        </h1>
      </header>

  );
}

export default Header;
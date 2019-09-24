import React from 'react';
import logo from '../logo.svg';
// import mind from '../images/the_psyche.jpg';
import mind from '../images/persona.jpg';
import '../App.css';
// import 'materialize-css/dist/css/materialize.min.css';

const Header = () => {
  return (

    <header className="App-header">

      <h1 className="Persona">
      Projective Personality Tests

      <img src={logo} className="App-logo" alt="logo" />
      <img src={mind} className="mind-map" alt="the mind" />
      </h1>

    </header>

  );
}

export default Header;
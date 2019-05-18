import React from "react";
import '../App.css';

const Footer = () => {
  return (
    <div className="footer row">
      <div className="left-caption col-6lg">
        <p>© T.M. Sulik Promotions, LLC 2019</p>
      </div>
      <div className="right-caption">
        <a
          className="App-link"
          href="https://github.com/TMSulik/clinical-psychometrics"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Repository
        </a>
      </div>
    </div>
  );
};

export default Footer;
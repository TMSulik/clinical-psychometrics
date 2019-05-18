import React from 'react';
import { Link } from 'react-router-dom';
// import NavLink from "./NavLink";
import '../App.css';

const Navbar = () => {

  // https://stackoverflow.com/questions/35053161/how-to-set-activeclassname-for-wrapper-element-of-link-or-indexlink-in-react-rou
  // Second answer
  return (
    <div className="topnav">

      <a className="active" href="#home">HOME</a>
      
      <Link to="/acl">ACL</Link>
      <Link to="/tat">TAT</Link>
      <Link to="/demographic">DEMOGRAPHIC</Link>
      <Link to="/profiles">PROFILES</Link>

    </div>
  );
}

export default Navbar;


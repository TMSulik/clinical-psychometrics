import React from 'react';
// import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom';
// import NavLink from "./NavLink";
// import NavItem from "./NavLink";
import '../App.css';
 
const Navbar = () => {
 
  // https://stackoverflow.com/questions/35053161/how-to-set-activeclassname-for-wrapper-element-of-link-or-indexlink-in-react-rou
  // Second answer
 
//   export default function NavItem({children, to, exact}) {
//     return (
//         <Route path={to} exact={exact} children={({match}) => (
//             <li className={match ? styles.activeRoute : null}>
//                 <Link to={to}>{children}</Link>
//             </li>
//         )}/>
//     )
// }
  return (
    <div className="topnav">
      {/* <NavItem to='/' index={true} >HOME</NavItem> */}
      <Link to="/home">HOME</Link>
      <Link to="/acl">ACL</Link>
      <Link to="/tat">TAT</Link>
      <Link to="/demographic">DEMOGRAPHIC</Link>
      <Link to="/profiles">PROFILES</Link>
    </div>
  );
}
 
export default Navbar;


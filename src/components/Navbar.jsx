import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Centered Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/request">Request</Link></li>
        <li><Link to="/blood-stock">Blood Stock</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Sign In Button */}
      <div className="navbar-button">
        <Link to="/login">Sign In</Link>
        <Link to="/admin-login">Admin</Link>
      </div>

      {/* <button onClick={() => navigate("/admin-login")} className="admin-btn">
            Admin
          </button> */}
    </nav>
  );
};

export default Navbar;




// // 📌 Navbar.js - Navigation Bar Component
// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css"; // Navbar styling

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1>Blood Bank</h1>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/donate">Donate</Link></li>
//         <li><Link to="/request">Request</Link></li>
//         <li><Link to="/contact">Contact Us</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

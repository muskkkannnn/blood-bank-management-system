// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "@/pages/Home";
// import Login from "@/pages/Login";
// import Donate from "@/pages/Donate";
// import Request from "@/pages/Request";  

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/donate" element={<Donate />} />
//         <Route path="/request" element={<Request />} />  
//       </Routes>
//     </Router>
//   );
// }

// export default App;


//New Style Page ---->

//Different Backgrounds for Different Routes

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Request from "./pages/Request";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import DonorDashboard from "./pages/DonorDashboard";
import ReceiverDashboard from "./pages/ReceiverDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import BloodStock from "./pages/BloodStock";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/request" element={<Request />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/receiver-dashboard" element={<ReceiverDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/blood-stock" element={<BloodStock />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;





// // 📌 App.js - Main Application Component
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Donate from "./pages/Donate";
// import Request from "./pages/Request";
// import Contact from "./pages/Contact";
// import "./App.css"; // Main styling file

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/donate" element={<Donate />} />
//         <Route path="/request" element={<Request />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

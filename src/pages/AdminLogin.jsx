import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/Login.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (adminID === "admin" && password === "admin123") {
      alert("Login Successful!");
      navigate("/admin-panel"); // Redirect to Admin Panel
    } else {
      alert("Invalid Admin Credentials!");
    }
  };

  return (
    <div className="login-container">
      <h2>🔴 Admin Login</h2>
      <form onSubmit={handleAdminLogin}>
        <input
          type="text"
          placeholder="Admin ID"
          value={adminID}
          onChange={(e) => setAdminID(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;

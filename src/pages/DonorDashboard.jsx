import React from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/Dashboard.css"; 

const DonorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome, Donor!</h1>
      <p>Thank you for being a life saver. Here’s your donation history:</p>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Blood Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15 March 2025</td>
            <td>O+</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>20 Feb 2025</td>
            <td>A-</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>

      {/* Button to Schedule a New Donation */}
      <button className="donate-btn" onClick={() => navigate("/donate")}>
        Schedule New Donation
      </button>
    </div>
  );
};

export default DonorDashboard;

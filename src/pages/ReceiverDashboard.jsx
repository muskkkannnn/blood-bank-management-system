import React from "react";
import "@/styles/Dashboard.css"; 

const ReceiverDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome, Receiver!</h1>
      <p>Track your blood requests here:</p>

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
            <td>10 March 2025</td>
            <td>A+</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td>25 Feb 2025</td>
            <td>B-</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>

      <button className="dashboard-btn">Request Blood</button>
    </div>
  );
};

export default ReceiverDashboard;

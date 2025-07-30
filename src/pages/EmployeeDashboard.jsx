import React from "react";
import "@/styles/Dashboard.css"; 

const EmployeeDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome, Employee!</h1>
      <p>Manage all blood requests here:</p>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Blood Type</th>
            <th>Receiver Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1245</td>
            <td>O-</td>
            <td>Rahul Sharma</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>#1288</td>
            <td>B+</td>
            <td>Priya Mehta</td>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>

      <button className="dashboard-btn">Manage Requests</button>
    </div>
  );
};

export default EmployeeDashboard;

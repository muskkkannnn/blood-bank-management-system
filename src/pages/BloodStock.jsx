import React, { useState, useEffect } from "react";
import "@/styles/BloodStock.css"; 

const BloodStock = () => {
  const [bloodStock, setBloodStock] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blood stock from backend
  useEffect(() => {
    fetch("http://localhost:5173/api/blood-stock") // Backend route
      .then((res) => res.json())
      .then((data) => setBloodStock(data))
      .catch((err) => console.error("Error fetching blood stock:", err));
  }, []);

  return (
    <div className="stock-container">
      <h2>🩸 Blood Stock Availability</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Blood Type</th>
            <th>Units Available</th>
          </tr>
        </thead>
        <tbody>
          {bloodStock.map((blood, index) => (
            <tr key={index}>
              <td>{blood.bloodType}</td>
              <td>{blood.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodStock;

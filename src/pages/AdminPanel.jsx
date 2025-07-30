import React, { useState, useEffect } from "react";
import "@/styles/AdminPanel.css";

const AdminPanel = () => {
  const [bloodStock, setBloodStock] = useState([]);
  const [newBloodType, setNewBloodType] = useState("");
  const [newUnits, setNewUnits] = useState("");

  // Fetch blood stock
  useEffect(() => {
    fetch("http://localhost:5173/api/blood-stock")
      .then((res) => res.json())
      .then((data) => setBloodStock(data))
      .catch((err) => console.error("Error fetching blood stock:", err));
  }, []);

  // Add new blood stock
  const addBloodStock = () => {
    fetch("http://localhost:5173/api/blood-stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bloodType: newBloodType, units: newUnits }),
    })
      .then(() => {
        alert("Blood stock added successfully!");
        window.location.reload(); // Refresh page
      })
      .catch((err) => console.error("Error adding stock:", err));
  };

  // Delete blood stock
  const deleteBloodStock = (id) => {
    fetch(`http://localhost:5173/api/blood-stock/${id}`, { method: "DELETE" })
      .then(() => {
        alert("Blood stock deleted!");
        window.location.reload(); // Refresh page
      })
      .catch((err) => console.error("Error deleting stock:", err));
  };

  return (
    <div className="admin-container">
      <h2>🔴 Admin Panel - Blood Stock Management</h2>

      <div className="add-stock">
        <input
          type="text"
          placeholder="Blood Type (e.g., A+)"
          value={newBloodType}
          onChange={(e) => setNewBloodType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Units Available"
          value={newUnits}
          onChange={(e) => setNewUnits(e.target.value)}
        />
        <button onClick={addBloodStock}>Add Blood Stock</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Blood Type</th>
            <th>Units</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bloodStock.map((blood, index) => (
            <tr key={index}>
              <td>{blood.bloodType}</td>
              <td>{blood.units}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteBloodStock(blood.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;

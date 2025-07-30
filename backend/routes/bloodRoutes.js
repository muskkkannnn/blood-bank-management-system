const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Fetch blood stock
router.get("/blood-stock", (req, res) => {
  db.query("SELECT * FROM blood_stock", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add blood stock
router.post("/blood-stock", (req, res) => {
  const { bloodType, units } = req.body;
  db.query("INSERT INTO blood_stock (bloodType, units) VALUES (?, ?)", [bloodType, units], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Blood stock added!" });
  });
});

// Delete blood stock
router.delete("/blood-stock/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM blood_stock WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Blood stock deleted!" });
  });
});

module.exports = router;

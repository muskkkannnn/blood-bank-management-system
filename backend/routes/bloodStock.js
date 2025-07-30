const express = require("express");
const router = express.Router();
const db = require("../config/db"); 

// GET request to fetch blood stock data
router.get("/stock", (req, res) => {
  const sqlQuery = "SELECT blood_type, units_available FROM blood_stock";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.error("Error fetching blood stock:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(result); 
  });
});

module.exports = router;

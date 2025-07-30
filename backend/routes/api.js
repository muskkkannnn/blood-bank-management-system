const express = require("express");
const db = require("../config/db"); // Import database connection
const router = express.Router();

// 👉 Test Route
router.get("/", (req, res) => {
  res.send("Welcome to Blood Bank API!");
});

// 👉 1. Get all blood donations
router.get("/donations", async (req, res) => {
    try {
      const [rows] = await db.execute("SELECT * FROM donations");
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: "Error fetching donations", error });
    }
  });

// 👉 2. Add a blood donation
router.post("/donate", (req, res) => {
  const { donor_id, blood_group, units } = req.body;
  db.query(
    "INSERT INTO blood_donations (donor_id, blood_group, units) VALUES (?, ?, ?)",
    [donor_id, blood_group, units],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Blood donation recorded successfully!");
    }
  );
});

// 👉 3. Get blood inventory
router.get("/inventory", (req, res) => {
  db.query("SELECT * FROM blood_inventory", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 👉 4. Request blood
router.post("/request-blood", (req, res) => {
  const { receiver_id, blood_group, units } = req.body;
  db.query(
    "INSERT INTO blood_requests (receiver_id, blood_group, units) VALUES (?, ?, ?)",
    [receiver_id, blood_group, units],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Blood request submitted!");
    }
  );
});

// 👉 5. Approve/Reject blood request
router.put("/update-request/:id", (req, res) => {
  const { status } = req.body;
  const requestId = req.params.id;
  db.query(
    "UPDATE blood_requests SET status = ? WHERE id = ?",
    [status, requestId],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Blood request status updated!");
    }
  );
});

module.exports = router;

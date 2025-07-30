const db = require('./db'); 
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const apiRoutes = require("./routes/api");
const bloodRoutes = require("./routes/bloodRoutes");
const bloodStockRoutes = require("./routes/bloodStock");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests
app.use("/api", bloodRoutes);
app.use("/api/blood", bloodStockRoutes);


app.get("/", (req, res) => {
    res.send("Blood Bank Management System API is Running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

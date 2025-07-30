const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Muskanmysql13*", // Use the password you set
  database: "blood_bank_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ MySQL Database connected successfully!");
  }
});

module.exports = db;

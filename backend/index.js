const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// ✅ MYSQL POOL + CHARSET
const db = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "studentdb",
  charset: "utf8mb4",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// TEST DB
app.get("/health", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ status: "db error", err });
    }
    res.json({ status: "ok" });
  });
});

// API
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

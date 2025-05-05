const express = require("express");
const router = express.Router();

const { pool } = require("../config/database").default;

//Get all jobs
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM jobs ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching jobs" });
  }
});

//GET job by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM jobs where id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching job" });
  }
});

//Create a new job

router.post("/", async (req, res) => {
  try {
    const { title, company, decription, location, application_method } =
      req.body;

    const result = await pool.query(
      "INSERT INTO jobs (title, company, description, location, application_method) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, company, decription, location, application_method]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating job" });
  }
});

module.exports = router;

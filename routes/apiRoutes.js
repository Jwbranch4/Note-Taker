const router = require("express").Router();
const { db } = require("../db/db.json");

// get route
router.get("/notes", (req, res) => {
  res.json(db);
});

// post route
router.post("/notes", (req, res) => {});
